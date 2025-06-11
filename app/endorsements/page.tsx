import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building, Shield, Heart } from "lucide-react";

export default function EndorsementsPage() {
  const endorsements = [
    {
      category: "Law Enforcement",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
      endorsers: [
        {
          name: "Police Officers Association",
          title: "Local Chapter 247",
          quote:
            "Judge Martinez has shown unwavering support for law enforcement while maintaining the highest standards of justice and fairness.",
        },
        {
          name: "Sheriff Robert Johnson",
          title: "County Sheriff",
          quote:
            "Sarah Martinez understands the complexities of law enforcement and will bring balanced judgment to the bench.",
        },
        {
          name: "Firefighters Union Local 892",
          title: "Professional Firefighters",
          quote:
            "We trust Judge Martinez to make fair decisions that protect our community and support public safety.",
        },
      ],
    },
    {
      category: "Legal Community",
      icon: Building,
      color: "bg-green-100 text-green-600",
      endorsers: [
        {
          name: "State Bar Association",
          title: "District Chapter",
          quote:
            "Judge Martinez exemplifies the highest standards of legal professionalism and judicial temperament.",
        },
        {
          name: "Women Lawyers Association",
          title: "Regional Chapter",
          quote:
            "Sarah Martinez is a trailblazer who will bring much-needed perspective and experience to the judiciary.",
        },
        {
          name: "Criminal Defense Attorneys Guild",
          title: "Local Chapter",
          quote:
            "Having worked with Judge Martinez, we know she will ensure fair trials and protect constitutional rights.",
        },
        {
          name: "Former Judge William Thompson",
          title: "Retired Superior Court Judge",
          quote:
            "Sarah Martinez has the judicial temperament, legal knowledge, and integrity needed for this important role.",
        },
      ],
    },
    {
      category: "Community Leaders",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      endorsers: [
        {
          name: "Mayor Patricia Williams",
          title: "City Mayor",
          quote:
            "Judge Martinez has been a strong advocate for our community and will bring that same dedication to the bench.",
        },
        {
          name: "Chamber of Commerce",
          title: "Business Community",
          quote:
            "Sarah Martinez understands the importance of a fair and efficient judicial system for economic growth.",
        },
        {
          name: "Teachers Union Local 456",
          title: "Education Professionals",
          quote:
            "Judge Martinez has consistently supported education and will protect the rights of students and families.",
        },
        {
          name: "Hispanic Community Council",
          title: "Community Organization",
          quote:
            "Sarah Martinez represents the diversity and values of our community and will serve all residents fairly.",
        },
      ],
    },
    {
      category: "Advocacy Groups",
      icon: Heart,
      color: "bg-orange-100 text-orange-600",
      endorsers: [
        {
          name: "Domestic Violence Prevention Coalition",
          title: "Victim Advocacy",
          quote:
            "Judge Martinez has shown deep commitment to protecting victims and ensuring their voices are heard.",
        },
        {
          name: "Civil Rights Alliance",
          title: "Rights Organization",
          quote:
            "Sarah Martinez will protect civil liberties and ensure equal justice under the law for all citizens.",
        },
        {
          name: "Senior Citizens Advocacy Group",
          title: "Elder Rights",
          quote:
            "Judge Martinez understands the unique challenges facing seniors and will protect their interests.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Endorsements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Judge Martinez has earned the trust and support of leaders across
            our community, from law enforcement to advocacy groups, all united
            in their belief in her qualifications and integrity.
          </p>
        </div>

        {/* Endorsement Categories */}
        <div className="space-y-12">
          {endorsements.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color}`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h2>
                <Badge variant="secondary" className="ml-auto">
                  {category.endorsers.length} Endorsements
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.endorsers.map((endorser, endorserIndex) => (
                  <Card
                    key={endorserIndex}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{endorser.name}</CardTitle>
                      <p className="text-sm text-gray-600">{endorser.title}</p>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-gray-700 italic">
                        "{endorser.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Broad Community Support
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <p className="text-gray-600">Key Sectors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <p className="text-gray-600">Bar Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join These Leaders in Supporting Judge Martinez
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Add your voice to the growing coalition supporting experienced,
            fair, and dedicated judicial leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              <a
                href="https://secure.anedot.com/danielle-havens-for-judge/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
