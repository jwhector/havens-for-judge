"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  zipCode: z.string().min(5, {
    message: "Zip code must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  comments: z.string().optional(),
});

export default function EndorsePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      comments: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/endorsements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit endorsement");
      }

      toast({
        title: "Thank you for your endorsement!",
        description: "Your endorsement has been submitted successfully.",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting endorsement:", error);
      toast({
        title: "Error",
        description: "Failed to submit endorsement. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="container py-12">
            <div className="mx-auto max-w-2xl">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Thank You for Your Endorsement!
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Your support means the world to our campaign. Together, we
                    can bring experienced and dedicated leadership to the
                    Federal Way Municipal Court.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We'll be in touch soon with campaign updates and ways you
                      can continue to support Danielle Havens.
                    </p>
                    <Button
                      asChild
                      className="bg-primary-custom-mid hover:bg-primary-custom"
                    >
                      <a
                        href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Make a Donation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Endorse Danielle Havens
              </h1>
              <p className="text-lg text-muted-foreground">
                Join fellow community members in supporting experienced and
                dedicated leadership for Federal Way Municipal Court Position
                No. 2.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Endorsement Information</CardTitle>
                <CardDescription>
                  Please fill out the form below to add your endorsement. All
                  fields are required except comments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your street address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Comments (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share why you're endorsing Danielle Havens or any additional comments..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-primary-custom-mid hover:bg-primary-custom text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Endorsement"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to support the campaign in other ways?
              </p>
              <Button
                asChild
                variant="outline"
                className="text-primary-custom-mid border-primary-custom-mid hover:bg-primary-custom-mid hover:text-white"
              >
                <a
                  href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make a Donation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
