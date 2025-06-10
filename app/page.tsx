import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Heart, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Headshot */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Judge Sarah Martinez - Judicial Candidate"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <Scale className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2024 Judicial Election
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Judge Sarah
              <span className="text-blue-600 block">Martinez</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bringing 15 years of legal experience, unwavering integrity, and a commitment to justice for all to the
              bench.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Judge Martinez?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience, integrity, and dedication to serving our community with fairness and justice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">15+ Years Experience</h3>
                <p className="text-gray-600">
                  Extensive background in civil and criminal law, with a proven track record of fair and thoughtful
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Focused</h3>
                <p className="text-gray-600">
                  Deep roots in our community with a commitment to accessible justice and supporting local families.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Integrity</h3>
                <p className="text-gray-600">
                  Unwavering commitment to ethical standards and impartial justice for all members of our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Movement for Justice</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Your support helps ensure fair, experienced, and dedicated leadership on the bench.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Donate Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/endorsements">View Endorsements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
