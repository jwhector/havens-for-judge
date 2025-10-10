import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  comment: string;
  date: string;
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      name: "William (Bill) Schrader",
      location: "Puyallup, WA",
      comment:
        "I am an attorney at King County DPD, endorsing in my personal capacity. I appeared in front of Judge Havens throughout my law school career, and was so excited to the signs today when I took a trip to Federal Way. Judge Haven's experience is necessary, and vital on the bench.",
      date: "September 22, 2025",
    },
    {
      name: "Nathan J Orth",
      location: "Federal Way, WA",
      comment:
        "I believe that we need more judges who understand root causes. We can not police away poverty. Danielle Haven's approach to justice will ensure accountability while also looking to long term outcomes that improve our community for all residents.",
      date: "September 5, 2025",
    },
    {
      name: "Janet Baker",
      location: "Marysville, WA",
      comment:
        "Anybody who votes in Federal Way needs to know about this opportunity to vote for a truly amazing judge and person!! I have known my dear friend, Danielle, for at least 25 years. I am an artist and a registered nurse. As an artist, I am inspired by her presence. As a nurse, I value her integrity. She married my husband and me in 2022. We are forever grateful that she honored our intentions, values, and our family and friends. In my personal experience as her friend, I can tell you she is direct and clear and communicates with a type of unique compassion. She's passionate about life and full of hope for each person she encounters. She speaks with a kind of effortless courage. She lifts people up. Danielle listens; she guides those around her with wisdom, experience, and care. Federal Way is so lucky to have Danielle as a force for justice and goodness!",
      date: "August 25, 2025",
    },
    {
      name: "Emily M. Gause",
      location: "Federal Way, WA",
      comment:
        "I've had the privilege of working alongside Danielle and seeing firsthand the qualities that make her exceptional — deep legal knowledge, unwavering integrity, compassion for the people she serves, and a genuine commitment to fairness and justice. In every case, Danielle approaches the law with both a sharp mind and a generous heart, ensuring that everyone is heard and treated with dignity. I can't think of anyone more qualified to bring these values to the bench. Our community would be lucky to have Danielle as a judge, and I'm proud to support her campaign!",
      date: "August 10, 2025",
    },
    {
      name: "Karen McNamara",
      location: "Newton, MA",
      comment:
        "Danielle is an experienced and respected leader who is worthy of this position.",
      date: "August 10, 2025",
    },
    {
      name: "Megan Dunn",
      location: "North Bend, WA",
      comment:
        "I could not think of a better candidate. Compassionate, always acting with integrity and holds lawyers to a standard that is necessary for justice.",
      date: "August 10, 2025",
    },
    {
      name: "Chuck Lysen",
      location: "Tukwila, WA",
      comment:
        "Danielle is one of the wisest, kindest, most compassionate people I've ever met who has been put on this earth to assist and guide others when they need it most.",
      date: "July 22, 2025",
    },
    {
      name: "Neal Smead",
      location: "Naples, FL",
      comment:
        "I believe Danielle's guidance is exactly what this country needs to start helping people think about actual change for equality so might as well start somewhere so we can get her into the white house",
      date: "September 10, 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="w-full px-6 sm:px-8 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-primary-custom-mid">
                Testimonials
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from members of our community about their experiences with
                Danielle Havens and why they support her campaign for judge.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex gap-4">
                      <Quote className="w-8 h-8 text-primary-custom-mid/30 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
                          "{testimonial.comment}"
                        </p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-4 border-t border-gray-100">
                          <div>
                            <p className="font-semibold text-primary-custom-mid">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="font-serif text-2xl font-bold text-primary-custom-mid mb-4">
                Add Your Voice
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the growing number of community members supporting Danielle
                Havens for Judge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-custom-mid hover:bg-primary-custom text-lg px-8 py-6"
                >
                  <Link href="/endorse">Endorse Danielle Havens</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <a
                    href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
