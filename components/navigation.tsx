"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/endorsements", label: "ENDORSEMENTS" },
    { href: "/testimonials", label: "TESTIMONIALS" },
  ];

  return (
    <>
      {/* Fixed Position Poster */}
      <div className="fixed top-0 left-2 sm:left-4 z-[60] pointer-events-none">
        <div className="relative">
          <Image
            src="/poster.png"
            alt="Danielle Havens for Judge - Federal Way Municipal Court Position #2"
            width={250}
            height={350}
            className="shadow-2xl w-32 md:w-40 lg:w-56 xl:w-72 rounded-b-lg"
            priority
          />
        </div>
      </div>

      <nav className="bg-primary-custom shadow-sm border-b sticky top-0 z-50 text-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Spacer for poster area */}
            <div className="w-24 sm:w-36 md:w-44 lg:w-52 xl:w-56"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary-custom-light ${
                    pathname === item.href
                      ? "text-primary-custom-light"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary-custom-light hover:bg-primary-custom-mid text-xl "
              >
                <a
                  href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DONATE
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 pt-8 border-t">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors hover:text-primary-custom-light ${
                      pathname === item.href
                        ? "text-primary-custom-light"
                        : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-primary-custom-light hover:bg-primary-custom-mid w-fit"
                >
                  <a
                    href="https://secure.anedot.com/danielle-havens-for-judge/15a1624a-9044-43fb-a5ad-c37a2618d170"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DONATE
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
