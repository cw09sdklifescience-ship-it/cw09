"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Menu, X, Phone, Mail, ShieldCheck } from "lucide-react";

const LOGO = "/images/logosdk.png";

const topBar = {
  phone: "+91 8805131888",
  email: "info@sdklifescience.com",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 15);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl"
            : "bg-white"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-[#0C4A6E] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

            <div className="flex items-center gap-6">

              <a
                href={`tel:${topBar.phone}`}
                className="flex items-center gap-2 hover:text-[#7DD3FC] transition"
              >
                <Phone size={15} />
                {topBar.phone}
              </a>

              <a
                href={`mailto:${topBar.email}`}
                className="flex items-center gap-2 hover:text-[#7DD3FC] transition"
              >
                <Mail size={15} />
                {topBar.email}
              </a>

            </div>

            <div className="flex items-center gap-2 text-[#7DD3FC]">
              <ShieldCheck size={15} />
              WHO-GMP Certified Pharmaceutical Company
            </div>

          </div>
        </div>

        {/* Main Navbar */}

        <div className="border-b bg-white">
          <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <Image
                src={LOGO}
                alt="SDK Life Science"
                width={90}
                height={90}
                priority
              />

              <div>

                <h1 className="text-2xl font-bold tracking-tight text-[#0C4A6E]">
                  SDK LIFE SCIENCE
                </h1>

                <div className="mt-1 flex items-center gap-3">

                  <div className="h-px w-8 bg-[#38BDF8]" />

                  <span className="text-xs font-semibold uppercase tracking-[3px] text-[#38BDF8]">
                    Private Limited
                  </span>

                  <div className="h-px w-8 bg-[#38BDF8]" />

                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Creating Healthier Smiles, Stronger Future
                </p>

              </div>

            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-3 lg:flex">

              {navLinks.map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-md px-4 py-2 font-semibold transition

                  ${
                    isActive(item.href)
                      ? "text-[#38BDF8]"
                      : "text-gray-700 hover:text-[#38BDF8]"
                  }`}
                >
                  {item.label}
                </Link>

              ))}

            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-4">

              <Link
                href="/enquiry"
                className="hidden rounded-lg bg-[#0C4A6E] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#38BDF8] lg:flex"
              >
                Enquiry Today
              </Link>

              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="lg:hidden"
              >
                {mobileOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>

            </div>

          </div>
        </div>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl">

            <div className="flex flex-col py-4">

              {navLinks.map((item) => (

                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setMobileOpen(false)}
                  className={`block border-b border-gray-100 px-6 py-4 font-semibold transition

                  ${
                    isActive(item.href)
                      ? "text-[#38BDF8]"
                      : "text-[#0C4A6E] hover:text-[#38BDF8]"
                  }`}
                >
                  {item.label}
                </Link>

              ))}

              {/* Mobile CTA */}

              <div className="px-6 pt-6">

                <Link
                  href="/enquiry"
                  onClick={() => setMobileOpen(false)}
                  className="flex justify-center rounded-lg bg-[#0C4A6E] py-3 font-semibold text-white transition hover:bg-[#38BDF8]"
                >
                  Enquiry Now
                </Link>

              </div>

              {/* Contact */}

              <div className="mt-6 border-t bg-gray-50 px-6 py-5">

                <a
                  href={`tel:${topBar.phone}`}
                  className="mb-4 flex items-center gap-3 text-sm text-gray-600"
                >
                  <Phone size={16} />
                  {topBar.phone}
                </a>

                <a
                  href={`mailto:${topBar.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <Mail size={16} />
                  {topBar.email}
                </a>

              </div>

            </div>

          </div>
        )}

      </header>
    </>
  );
}