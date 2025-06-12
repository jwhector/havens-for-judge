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
      <section className="container xl:max-w-[1280px] mx-auto px-8 py-12 lg:pb-0 md:pt-5 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Hero Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative z-10">
            {/* <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2024 Judicial Election
            </div> */}
            <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4 leading-tight">
              Danielle
              <span className="text-primary-custom-mid ml-2 relative">
                HAVENS
              </span>
            </h1>
            <p className="text-xl justify-end text-gray-600 mb-8 leading-relaxed">
              Federal Way Municipal Court Position No. 2
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  Donate Today
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

          {/* Headshot */}
          <div className="order-1 lg:order-2 relative lg:absolute lg:left-[530px] xl:left-[720px] lg:top-0 lg:bottom-0 lg:w-[60%] lg:max-w-[500px]">
            <div className="relative h-full">
              <Image
                src="/portrait.png"
                alt="Danielle Havens - Judicial Candidate"
                width={500}
                height={600}
                className="w-full h-full object-cover object-center rounded-lg lg:rounded-none shadow-lg lg:shadow-none lg:object-right max-w-md mx-auto lg:max-w-none"
                priority
              />
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
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
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

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
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

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col items-center text-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
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
      <section className="bg-primary-custom-mid py-16">
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
                Donate Now
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-lg px-8 py-6"
            >
              <Link href="/endorse">Endorse Danielle Havens</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
