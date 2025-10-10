import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EndorsementsPage() {
  const majorEndorsements = [
    { name: "King County Democrats", title: "County Party Organization" },
    {
      name: "30th Legislative District Democrats",
      title: "Legislative District Organization",
    },
    { name: "Mayor Jim Ferrell", title: "City of Federal Way" },
    {
      name: "State Representative Kristine Reeves",
      title: "30th Legislative District",
    },
    {
      name: "State Representative Jamila Taylor",
      title: "30th Legislative District",
    },
    {
      name: "State Senator Claire Wilson",
      title: "30th Legislative District",
    },
  ];

  const endorsements = [
    {
      category: "State Legislators",
      endorsers: [
        { name: "Claire Wilson", title: "30th LD State Senator" },
        { name: "Kristine Reeves", title: "30th LD State Representative" },
        { name: "Jamila Taylor", title: "30th LD State Representative" },
      ],
    },
    {
      category: "Local Government Leaders",
      endorsers: [{ name: "Jim Ferrell", title: "Mayor of Federal Way" }],
    },
    {
      category: "Democratic Organizations",
      endorsers: [
        { name: "King County Democrats" },
        { name: "30th Legislative District Democrats" },
      ],
    },
    {
      category: "Superior Court Judges",
      endorsers: [
        { name: "Anna Alexander", title: "Snohomish County Superior Court" },
        { name: "Andrea Robertson", title: "King County Superior Court" },
        { name: "James Rogers", title: "King County Superior Court" },
        { name: "Patricia Fulton", title: "Walla Walla Superior Court" },
      ],
    },
    {
      category: "District Court Judges",
      endorsers: [
        { name: "Elizabeth Padula", title: "Pierce County District Court" },
        { name: "Dwayne Christopher", title: "Pierce County District Court" },
        {
          name: "Rebecca Robertson, Presiding",
          title:
            "King County District Court, former Judge in Federal Way Municipal Court",
        },
        { name: "Michelle Gehlsen", title: "King County District Court" },
        { name: "Lisa O'Toole", title: "King County District Court" },
        { name: "Matthew York", title: "King County District Court" },
      ],
    },
    {
      category: "Superior Court Commissioners",
      endorsers: [
        {
          name: "Commissioner Liese Schumacher",
          title: "Pierce County Superior Court",
        },
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
        { name: "Andrea Chin", title: "Seattle Municipal Court" },
        { name: "Willie Gregory", title: "Seattle Municipal Court" },
        { name: "Anita Crawford-Willis", title: "Seattle Municipal Court" },
        { name: "Adam Eisenberg", title: "Tulalip Tribal Court" },
        { name: "Damon Shadid", title: "Seattle Municipal Court" },
        { name: "Michael Frans", title: "Kent Municipal Court" },
        { name: "Jessica Giner", title: "Renton Municipal Court" },
        { name: "Anthony Gipe", title: "Kent Municipal Court" },
        { name: "Timothy Lewis", title: "Lakewood Municipal Court" },
        { name: "Catherine McDowell", title: "Seattle Municipal Court" },
        { name: "Kara Murphy", title: "Renton Municipal Court" },
        { name: "Mara Rozzano", title: "Bothell Municipal Court" },
        { name: "N. Scott Stewart", title: "Issaquah Municipal Court" },
        {
          name: "Krista Swain",
          title: "Sumner and Black Diamond Municipal Courts",
        },
        { name: "Pooja Vaddadi", title: "Seattle Municipal Court" },
        { name: "Kim Walden", title: "Tukwila Municipal Court" },
      ],
    },
    {
      category: "Magistrate Judges",
      endorsers: [
        { name: "Mary Lynch", title: "Seattle Municipal Court" },
        { name: "Lisa Mansfield", title: "Seattle Municipal Court" },
        { name: "Seth Niesen", title: "Seattle Municipal Court" },
        { name: "Noah Weil", title: "Seattle Municipal Court" },
      ],
    },
    {
      category: "Attorney Endorsements",
      endorsers: [
        { name: "Tim Milios" },
        { name: "Ann Molitor" },
        { name: "Matthew Tilghman-Havens" },
        { name: "Rashelle Tanner" },
        { name: "Katina Thornock" },
        { name: "Patricia Buchanan" },
        { name: "Sheley Secrest Davis" },
        { name: "Ted Barr" },
        { name: "Diego Vargas" },
        { name: "Jason Lantz" },
        { name: "Pat Franke" },
        { name: "Phil Su" },
        { name: "Cory Wood" },
        { name: "Chris Sims" },
        { name: "Kevin Trombold" },
        { name: "Lauren Wegener" },
        { name: "Bradley Johnson" },
        { name: "Austin Ansingh" },
        { name: "Dougal Neralich" },
        { name: "Nathan Trudeau" },
        { name: "Alister Dabreo" },
        { name: "Amanda Breslaw" },
        { name: "Denice Gagner" },
        { name: "Quita St. John" },
        { name: "Deb Alexander" },
        { name: "Mark Garka" },
        { name: "Michelle Dellino" },
        { name: "Abigail Pence" },
        { name: "Karen Lentz" },
        { name: "Cynthia Chen Weller" },
        { name: "Lynn Moberly" },
        { name: "Alexa McBarron" },
        { name: "Joey Lenzmeier" },
        { name: "Karlee Dorn" },
        { name: "Grace Zangerly" },
        { name: "Melanie Dane" },
        { name: "Lisa Brodoff" },
        { name: "Chris Kattenhorn" },
        { name: "Shawn McCully" },
        { name: "Whitney Gardner" },
        { name: "Jamie O'Brien" },
        { name: "Rob Ault" },
        { name: "Fatima Dilek" },
        { name: "Claire Kinntenar" },
        { name: "Albert Guadagno" },
        { name: "Ross Brittain" },
        { name: "David Mason" },
        { name: "Matt Knauss" },
        { name: "Jesse Harris" },
        { name: "Jennifer Kohout" },
        { name: "Greg Schwesinger" },
        { name: "Saad Qadri" },
        { name: "Kate Gugutova" },
        { name: "Melinda Cutter" },
        { name: "Martha Ridgeway" },
        { name: "Luke Baumgarten" },
        { name: "Leah Alteras" },
        { name: "Chloe Allyn" },
        { name: "Shariza Ali" },
        { name: "Amylia Brown" },
        { name: "Megan Dunn" },
        { name: "William (Bill) Schrader" },
        { name: "Hannah Purcell" },
        { name: "Mikk Lukk" },
      ],
    },
    {
      category: "Community Leaders and Supporters",
      endorsers: [
        { name: "Eliza Anderson" },
        { name: "Kai Anderson" },
        { name: "Gayle Behrend" },
        { name: "Denny Behrend" },
        { name: "Carrie Booker" },
        { name: "Bethany Brown" },
        { name: "Damon Brown" },
        { name: "Darienne Brown" },
        { name: "Derrick Brown" },
        { name: "Dennis Brown" },
        { name: "Erica Brown" },
        { name: "Angela Cirulli" },
        { name: "Macie and Jake Crocker" },
        { name: "Malori and Ben Dahukey" },
        { name: "Dominique Davis" },
        { name: "Sarra Shariff Doyle" },
        { name: "Sally and Kurt Feldman" },
        { name: "Kelly Hallissey" },
        { name: "Kathleen and Walt Havens" },
        { name: "Ayden Hector" },
        { name: "Jared Hector" },
        { name: "Zuri Hector" },
        { name: "Sam Howes" },
        { name: "Kailynn and Jason Hull" },
        { name: "Traci Jackson" },
        { name: "Kim Kawasaki" },
        { name: "Maddie Landreth" },
        { name: "Kimberly Layton" },
        { name: "Pamela Leatherman" },
        { name: "Alicia Molitor" },
        { name: "Andrea Molitor" },
        { name: "Shawna and Frank Molitor" },
        { name: "Linda Myhrvold" },
        { name: "Margaret Obenza" },
        { name: "Markdavin Obenza" },
        { name: "Rita Ryder" },
        { name: "Andrea Pollock Wood" },
        { name: "Marni Sawabini" },
        { name: "Eric Shimizu" },
        { name: "Jennifer and Clint Simon" },
        { name: "Jen Tilghman-Havens" },
        { name: "Julie Tilghman" },
        { name: "Aare Valvas" },
        { name: "Craig Walker" },
        { name: "Sean Walsh" },
        { name: "Joanne Wegner" },
        { name: "Linda Reichenbach" },
        { name: "Chuck Lysen" },
        { name: "Diane Meyers" },
        { name: "Teri Holden" },
        { name: "Megan Dunn" },
        { name: "Karen McNamara" },
        { name: "Dawn Farina" },
        { name: "Emily M. Gause" },
        { name: "Zana Molina" },
        { name: "Janet Baker" },
        { name: "Nathan J Orth" },
        { name: "Neal Smead" },
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

            <div className="mb-12">
              <div className="bg-white border border-primary-custom-mid/30 shadow-md rounded-xl px-6 py-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <Badge className="bg-primary-custom-mid text-white px-3 py-1 uppercase tracking-wider">
                    Major Endorsements
                  </Badge>
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {majorEndorsements.map((endorsement, index) => (
                      <div
                        key={`${endorsement.name}-${index}`}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-5"
                      >
                        <h3 className="font-serif text-xl font-semibold text-primary-custom-mid">
                          {endorsement.name}
                        </h3>
                        {endorsement.title ? (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {endorsement.title}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
                          {endorser.title ? (
                            <p className="text-sm text-muted-foreground">
                              {endorser.title}
                            </p>
                          ) : null}
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
                    href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
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
