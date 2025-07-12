import Link from "next/link";
import { Scale, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              Danielle Havens
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Committed to serving our community with integrity, fairness, and
              dedication. Together, we can build a more just and accessible
              judicial system.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/endorsements"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Endorsements
                </Link>
              </li>
              <li>
                <Link
                  href="/endorse"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Endorse Danielle Havens
                </Link>
              </li>
              <li>
                <a
                  href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="text-gray-300 space-y-3">
            <p className="font-semibold text-base">
              Paid for by Danielle Havens for Judge
              <br />
              Federal Way Municipal Court, Position No. 2
            </p>
            <p className="text-gray-300">
              31811 Pacific Highway South, Suite B-302
              <br />
              Federal Way, Washington 98003
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mt-4">
              <a
                href="mailto:danielle@havensforjudge.com"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                danielle@havensforjudge.com
              </a>
              <a
                href="tel:206.771.9638"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                206.771.9638
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
