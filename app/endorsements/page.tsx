import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EndorsementsPage() {
  const endorsements = [
    {
      category: "Superior Court Judges",
      endorsers: [
        { name: "Anna Alexander", title: "Snohomish County Superior Court" },
        { name: "Andrea Robertson", title: "King County Superior Court" },
        { name: "James Rogers", title: "King County Superior Court" },
      ],
    },
    {
      category: "District Court Judges",
      endorsers: [
        { name: "Elizabeth Padula", title: "Pierce County District Court" },
        { name: "Duane Christopher", title: "Pierce County District Court" },
        {
          name: "Rebecca Robertson, Presiding",
          title: "King County District Court",
        },
        { name: "Michelle Gehlsen", title: "King County District Court" },
        { name: "Lisa O'Toole", title: "King County District Court" },
        { name: "Matthew York", title: "King County District Court" },
      ],
    },
    {
      category: "Municipal Court Judges",
      endorsers: [
        {
          name: "Sandra Allen",
          title: "Ruston and Gig Harbor Municipal Courts",
        },
        { name: "Andrea Beall", title: "Puyallup Municipal Court" },
        { name: "Faye Chess", title: "Seattle Municipal Court" },
        { name: "Anita Crawford-Willis", title: "Seattle Municipal Court" },
        { name: "Michael Frans", title: "Kent Municipal Court" },
        { name: "Jessica Giner", title: "Renton Municipal Court" },
        { name: "Anthony Gipe", title: "Kent Municipal Court" },
        { name: "Timothy Lewis", title: "Lakewood Municipal Court" },
        { name: "Catherine McDowell", title: "Seattle Municipal Court" },
        { name: "Kara Murphy", title: "Renton Municipal Court" },
        { name: "N. Scott Stewart", title: "Issaquah Municipal Court" },
        {
          name: "Krista Swain",
          title: "Sumner and Black Diamond Municipal Courts",
        },
        { name: "Kim Walden", title: "Tukwila Municipal Court" },
      ],
    },
    {
      category: "Magistrate Judges",
      endorsers: [
        { name: "Mary Lynch", title: "Seattle Municipal Court" },
        { name: "Noah Weil", title: "Seattle Municipal Court" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="w-full px-6 sm:px-8 py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center text-primary-custom-mid">
              Endorsements
            </h1>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Danielle Havens has earned the trust and support of leaders across
              our community, all united in their belief in her qualifications
              and integrity.
            </p>

            <div className="space-y-12">
              {endorsements.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-serif text-2xl font-bold text-primary-custom-mid">
                      {category.category}
                    </h2>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.endorsers.map((endorser, endorserIndex) => (
                        <div
                          key={endorserIndex}
                          className="border-l-2 border-slate-200 pl-4 py-2"
                        >
                          <h3 className="font-medium text-gray-900">
                            {endorser.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {endorser.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-8 mt-16 rounded-lg shadow-sm border border-gray-200">
              <h2 className="font-serif text-2xl font-bold text-primary-custom-mid mb-4">
                Join These Leaders in Supporting Danielle Havens
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Add your voice to the growing coalition supporting experienced,
                fair, and dedicated judicial leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-custom-mid hover:bg-primary-custom text-lg px-8 py-6"
                >
                  <a
                    href="https://secure.anedot.com/danielle-havens-for-judge/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Link href="/endorse">Endorse Danielle Havens</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
