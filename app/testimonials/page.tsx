import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  comment: string;
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      name: "Judge Kara Murphy Richards",
      location: "Presiding Judge, Renton Municipal Court",
      comment:
        "It is without reservation that I endorse Danielle Havens for Federal Way Municipal Court.\n\n I have known Danielle for many years and can attest to her character and her professional skills. We live in difficult times and balancing the needs of our court users and the safety of our community has become more complicated than ever. Danielle has consistently demonstrated compassionate accountability from the bench. She clearly sees the needs of the most vulnerable, but never loses sight of community safety. She understands that these two things can go hand in hand and need not be mutually exclusive.\n\nThe majority of Danielle's judicial experience has been in our local Municipal Courts. Municipal courts are very unique courts of limited jurisdiction. They are driven by the needs of those who live within the boundaries of a specific city. Through community engagement, municipal judges are able see the needs of those they serve up close and personal.\n\nThe community of Federal Way will be well served with Judge Danielle Havens on the bench.",
    },
    {
      name: "Lizanne Padula",
      location: "Pierce County District Court Judge",
      comment:
        "I endorse Danielle Havens for Federal Way Municipal Court Judge. She will not only be an exceptional Federal Way Municipal Court Judge, she will also be an active and contributing member of the Federal Way community. She understands that Municipal Court Judges are unique in their need to be connected to their community. She believes that a successful Municipal Court Judge should be engaged with their community and be familiar with the community priorities.\n\nFor the last four years, Danielle has been the person I trust the most to sit as a Pro Tem Judge when I am unavailable to preside over my assigned cases. She is compassionate, firm, knowledgeable and effective. To put it another way, if I was a victim of a crime or a defendant, charged with a crime, Danielle Havens is who I would want presiding over the case. Judges must balance accountability and therapeutic efforts in a way that enforces responsibility and recovery. This is a difficult task and Danielle Havens is able to achieve this balance perfectly.\n\nFederal Way will be well served by having Danielle Havens as their next Municipal Court Judge.",
    },
    {
      name: "Anthony David Gipe",
      location: "Judge, Kent Municipal Court",
      comment:
        "I have been a judge for six years and was a part time judge for eight years before that. I have worked directly with Danielle as she supports and works as a pro tem judge in my DUI Therapeutic Court over the last two and a half years.\n\nDanielle has all the qualities that I would wish to have in a judge: Knowledge, Empathy, and Commitment to finding solutions to the problems facing our justice system and our communities. She will make an excellent judge for Federal Way.",
    },
    {
      name: "Ted C. Barr",
      location: "Kirkland, WA",
      comment:
        "Danielle is smart, caring, articulate and when necessary can be firm. She is fair but holds people accountable while striving to help them and avoid recitivism. She will be a great judge. I wholeheartedly support her.",
    },
    {
      name: "I A",
      location: "Former Client",
      comment:
        "Before meeting Danielle, I felt hopeless and overwhelmed, but her guidance restored my faith in the possibility of recovery. She set me up for success in the legal system. After violating a deferred prosecution agreement set up by a previous attorney, Danielle recognized that my mental health diagnosis was a factor in my case and had it referred to King County District Court Mental Health Court. She worked tirelessly to create the support and structure I needed to learn from my mistakes, exit the legal system, and move forward with my life. Her compassion and commitment to justice, demonstrated throughout my case, will make her an exceptional judge who truly strives for fairness and understanding.",
    },
    {
      name: "I K",
      location: "Family Member of Former Client",
      comment:
        "When I think of Danielle, I think of a human being so compassionate and so true to her calling: helping people. Her dedication is hard to find in the world we live in. Having an adult child become part of the legal system due to mental health issues is not something I could have ever dreamt of. Without her exceptional knowledge, compassion, and unending support, I could not imagine seeing a day where my child is out of legal trouble and moving on with his life. My family and I have the mental peace that we have today because of Danielle and her above and beyond commitment to service.",
    },
    {
      name: "McKenzie Eader",
      location: "Everett, WA",
      comment:
        "I have had the privilege of working with Danielle Havens in the King County and Pierce County court system. She provides ethical and quality care. Danielle supports clients not only professionally, but also personally. Danielle has helped me take accountability for my actions, and has supported my personal growth. I am in a much better place in my life after working with Danielle. Danielle cares for and advocates for her clients. I would not trust anyone else.",
    },
    {
      name: "Melinda Cutter",
      location: "Administrative Law Judge, Attorney, Judge Pro Tem",
      comment:
        "I am Danielle's biggest supporter. I cannot imagine anyone more fit to serve as a judge than Danielle Havens. I have known her my entire career to be one of the fiercest advocates for her clients, articulate in a way I have attempted to copy, and one of the best Moms that I have ever known. She was always a Mom first and a lawyer second when her children were growing up. And I learned all about that from her whether she realized it or not. Danielle is an amazing role model to the people around her and I am honored to support her campaign. I think she is brilliant, funny, compassionate, and deeply empathetic. she is and will be the best Judge.",
    },
    {
      name: "Laura Hansen",
      location: "Pierce County District Court",
      comment:
        "Danielle Havens is one of our best pro tems at Pierce County District Court. We love working with her!!",
    },
    {
      name: "Kathleen Buckley",
      location: "Milwaukie, OR",
      comment:
        "I've known Danielle for her entire life, and I've watched her use both her heart and mind to advocate for fairness, justice and kindness. She has always been a unique problem solver. Her passion and intellect led her into law, and her wisdom has made her an outstanding pro-tempore judge. Federal Way will be well-served to have her in the Municipal Court, Position 2.",
    },
    {
      name: "William (Bill) Schrader",
      location: "Puyallup, WA",
      comment:
        "I am an attorney at King County DPD, endorsing in my personal capacity. I appeared in front of Judge Havens throughout my law school career, and was so excited to the signs today when I took a trip to Federal Way. Judge Haven's experience is necessary, and vital on the bench.",
    },
    {
      name: "Nathan J Orth",
      location: "Federal Way, WA",
      comment:
        "I believe that we need more judges who understand root causes. We can not police away poverty. Danielle Haven's approach to justice will ensure accountability while also looking to long term outcomes that improve our community for all residents.",
    },
    {
      name: "Janet Baker",
      location: "Marysville, WA",
      comment:
        "Anybody who votes in Federal Way needs to know about this opportunity to vote for a truly amazing judge and person!! I have known my dear friend, Danielle, for at least 25 years. I am an artist and a registered nurse. As an artist, I am inspired by her presence. As a nurse, I value her integrity. She married my husband and me in 2022. We are forever grateful that she honored our intentions, values, and our family and friends. In my personal experience as her friend, I can tell you she is direct and clear and communicates with a type of unique compassion. She's passionate about life and full of hope for each person she encounters. She speaks with a kind of effortless courage. She lifts people up. Danielle listens; she guides those around her with wisdom, experience, and care. Federal Way is so lucky to have Danielle as a force for justice and goodness!",
    },
    {
      name: "Emily M. Gause",
      location: "Federal Way, WA",
      comment:
        "I've had the privilege of working alongside Danielle and seeing firsthand the qualities that make her exceptional — deep legal knowledge, unwavering integrity, compassion for the people she serves, and a genuine commitment to fairness and justice. In every case, Danielle approaches the law with both a sharp mind and a generous heart, ensuring that everyone is heard and treated with dignity. I can't think of anyone more qualified to bring these values to the bench. Our community would be lucky to have Danielle as a judge, and I'm proud to support her campaign!",
    },
    {
      name: "Karen McNamara",
      location: "Newton, MA",
      comment:
        "Danielle is an experienced and respected leader who is worthy of this position.",
    },
    {
      name: "Megan Dunn",
      location: "North Bend, WA",
      comment:
        "I could not think of a better candidate. Compassionate, always acting with integrity and holds lawyers to a standard that is necessary for justice.",
    },
    {
      name: "Chuck Lysen",
      location: "Tukwila, WA",
      comment:
        "Danielle is one of the wisest, kindest, most compassionate people I've ever met who has been put on this earth to assist and guide others when they need it most.",
    },
    {
      name: "Neal Smead",
      location: "Naples, FL",
      comment:
        "I believe Danielle's guidance is exactly what this country needs to start helping people think about actual change for equality so might as well start somewhere so we can get her into the white house",
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
                        <div className="text-gray-700 text-base leading-relaxed mb-4 italic">
                          {testimonial.comment
                            .split("\n\n")
                            .map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className={pIndex > 0 ? "mt-4" : ""}
                              >
                                {pIndex === 0 ? `"${paragraph}` : paragraph}
                                {pIndex ===
                                testimonial.comment.split("\n\n").length - 1
                                  ? '"'
                                  : ""}
                              </p>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="font-semibold text-primary-custom-mid">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
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
