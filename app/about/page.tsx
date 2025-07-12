import { Button } from "@/components/ui/button";
import Image from "next/image";

// Simple DonateButton component
function DonateButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      className={`bg-primary-custom-mid hover:bg-primary-custom text-white text-lg ${className}`}
    >
      <a
        href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    </Button>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="w-full px-6 sm:px-8 py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-primary-custom-mid">
              About Danielle Havens
            </h1>

            <div className="grid gap-8 md:grid-cols-[2fr_1fr] items-start">
              <div className="space-y-6 order-2 md:order-1">
                <p className="text-lg">
                  Danielle Havens has served our community for over 20 years
                  with distinction and honor. Her commitment to justice and
                  fairness has made her one of the most respected judicial
                  officers in our court system.
                </p>

                <h2 className="font-serif text-2xl font-bold mt-8 text-primary-custom-mid">
                  Experience
                </h2>
                <ul className="space-y-4">
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">
                      Judge Pro-Tem, Federal Way Municipal Court
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      2021 - Current
                    </p>
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">
                      Judge Pro-Tem, Kent Municipal Court
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      2021 - Current
                    </p>
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">Judge Pro-Tem</h3>
                    <p className="text-sm text-muted-foreground">
                      Ten other Municipal Courts in King & Pierce Counties
                    </p>
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">Trial Attorney</h3>
                    <p className="text-sm text-muted-foreground">
                      23 years in Private Practice
                    </p>
                  </li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mt-8 text-primary-custom-mid">
                  Education
                </h2>
                <ul className="space-y-4">
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">
                      Seattle University School of Law
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Juris Doctorate
                    </p>
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-medium">University of Washington</h3>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Arts
                    </p>
                  </li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mt-8 text-primary-custom-mid">
                  Community Service
                </h2>
                <ul className="space-y-2">
                  <li className="border-l-2 border-slate-200 pl-4">
                    Federal Way Community Care Giving Network
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    WestSide Baby Hub, basics for children in need
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    West Seattle Food Bank
                  </li>
                  <li className="border-l-2 border-slate-200 pl-4">
                    YWCA of King County
                  </li>
                </ul>
              </div>

              <div className="md:sticky md:top-20 order-1 md:order-2">
                <div className="relative h-[450px] md:h-[350px] w-full overflow-hidden rounded-lg shadow-md mb-6">
                  <Image
                    src="/about-portrait.jpg"
                    alt="Danielle Havens in her office"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-serif text-lg font-medium mb-2 text-primary-custom-mid">
                    Campaign Platform
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Ensure equal access to justice for all citizens</li>
                    <li>• Maintain efficient court operations</li>
                    <li>• Uphold the highest ethical standards</li>
                    <li>• Focus on accountability and objectivity</li>
                    <li>• Promote transparency in judicial proceedings</li>
                  </ul>
                  <div className="mt-4">
                    <DonateButton className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
