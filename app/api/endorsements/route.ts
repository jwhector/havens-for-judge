import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

const endorsementSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  address: z.string().min(5).max(200).trim(),
  city: z.string().min(2).max(100).trim(),
  state: z.string().min(2).max(50).trim(),
  zipCode: z.string().min(5).max(10).trim(),
  phone: z.string().min(10).max(20).trim(),
  email: z.string().email().max(100).trim(),
  comments: z.string().max(1000).trim().optional(),
});

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per 15 minutes

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = endorsementSchema.parse(body);

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const emailContent = `
New Endorsement Received

Name: ${validatedData.name}
Address: ${validatedData.address}
City: ${validatedData.city}
State: ${validatedData.state}
Zip Code: ${validatedData.zipCode}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
${validatedData.comments ? `Comments: ${validatedData.comments}` : ""}

Submitted at: ${new Date().toLocaleString()}
    `;

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "jared.hector@gmail.com",
        subject: "New Endorsement for Danielle Havens",
        text: emailContent,
        html: `
          <h2>New Endorsement Received</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Address:</strong> ${validatedData.address}</p>
          <p><strong>City:</strong> ${validatedData.city}</p>
          <p><strong>State:</strong> ${validatedData.state}</p>
          <p><strong>Zip Code:</strong> ${validatedData.zipCode}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${
            validatedData.comments
              ? `<p><strong>Comments:</strong> ${validatedData.comments}</p>`
              : ""
          }
          <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
        `,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email notification" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Endorsement submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing endorsement:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data provided", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit endorsement" },
      { status: 500 }
    );
  }
}
