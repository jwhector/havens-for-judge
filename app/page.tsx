import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Users,
  Heart,
  ArrowRight,
  DollarSign,
  Gavel,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300/50 to-primary-custom/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:pb-20 md:pt-5">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headshot */}
          <div>
            <div className="relative">
              <Image
                src="/portrait.png"
                alt="Danielle Havens - Judicial Candidate"
                width={500}
                height={600}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div>
            {/* <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2024 Judicial Election
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Danielle
              <span className="text-blue-600 ml-2">Havens</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bringing 15 years of legal experience, unwavering integrity, and a
              commitment to justice for all to the bench.
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
                  <DollarSign className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6"
              >
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHY DANIELLE HAVENS?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-primary-custom/10 to-primary-custom/20 p-6 rounded-xl border border-primary-custom/20 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary-custom/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-primary-custom" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Experience & Commitment
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Danielle Havens is the clear choice for Judge because of her
                    diverse legal experience and commitment to the law. As an
                    experienced Pro-Tem Judge and longtime attorney, Danielle
                    Havens will make an immediate and positive impact for us on
                    the Bench.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-custom-light/10 to-primary-custom-light/20 p-6 rounded-xl border border-primary-custom-light/20 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary-custom-light/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-custom-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Accountability & Objectivity
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Accountability has long been Danielle Havens' guiding
                    principle as an attorney and judicial officer. As a
                    Municipal Court Judge in Federal Way, we can count on
                    Danielle Havens to hold offenders accountable while ensuring
                    each case is considered objectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-custom/10 to-primary-custom/20 p-6 rounded-xl border border-primary-custom/20 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary-custom/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gavel className="h-6 w-6 text-primary-custom" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Right Choice
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Danielle Havens has the experience and commitment we need on
                    the Federal Way Municipal Court Bench. Thank you for your
                    consideration of Danielle for this important judicial
                    position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement for Justice
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Your support helps ensure fair, experienced, and dedicated
            leadership on the bench.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <a
                href="https://secure.anedot.com/danielle-havens-for-judge/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Today
              </a>
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
  );
}
