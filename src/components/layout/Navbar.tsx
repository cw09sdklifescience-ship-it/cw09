"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Home,
  Info,
  Package,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";

const LOGO = "/images/logosdk.png";

const topBar = {
  phone: "+91 8805131888",
  email: "info@sdklifescience.com",
};

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Products", href: "/products", icon: Package },
  { label: "Quality", href: "/quality", icon: BadgeCheck },
  { label: "Contact", href: "/contact", icon: PhoneCall },
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

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-xl" : "bg-white"}`}
      >
        {/* Top Bar (desktop only) */}
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

        {/* Mini contact strip (mobile only) */}
        <div className="flex items-center justify-center gap-2 bg-[#0C4A6E] px-4 py-1.5 text-center text-[11px] font-medium text-[#BAE6FD] lg:hidden">
          <ShieldCheck size={12} className="flex-shrink-0 text-[#7DD3FC]" />
          <span className="truncate">WHO-GMP Certified Pharmaceutical Company</span>
        </div>

        {/* Main Navbar */}
        <div className="border-b bg-white">
          <div className="mx-auto flex h-16 sm:h-20 lg:h-24 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 sm:gap-4"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src={LOGO}
                alt="SDK Life Science"
                width={90}
                height={90}
                priority
                className="h-10 w-10 sm:h-14 sm:w-14 lg:h-[90px] lg:w-[90px] flex-shrink-0 object-contain"
              />

              <div className="min-w-0">
                <h1 className="truncate text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-[#0C4A6E]">
                  SDK LIFE SCIENCE
                </h1>

                <div className="mt-1 hidden items-center gap-3 sm:flex">
                  <div className="h-px w-8 bg-[#38BDF8]" />
                  <span className="text-xs font-semibold uppercase tracking-[3px] text-[#38BDF8]">
                    Private Limited
                  </span>
                  <div className="h-px w-8 bg-[#38BDF8]" />
                </div>

                <p className="mt-0.5 hidden text-xs text-gray-500 lg:block">
                  Creating Healthier Smiles, Stronger Future
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#38BDF8] sm:hidden">
                  Private Limited
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
            <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4">
              <Link
                href="/enquiry"
                className="hidden rounded-lg bg-[#0C4A6E] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#38BDF8] lg:flex"
              >
                Enquiry Now
              </Link>

              {/* Animated hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 transition active:scale-95 lg:hidden"
              >
                <span className="relative flex h-4 w-5 flex-col justify-between">
                  <span
                    className={`block h-[2px] w-full rounded-full bg-[#0C4A6E] transition-all duration-300 ${
                      mobileOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full rounded-full bg-[#0C4A6E] transition-all duration-300 ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full rounded-full bg-[#0C4A6E] transition-all duration-300 ${
                      mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
        ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm transform overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between bg-[#0C4A6E] px-5 py-5">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO}
              alt="SDK Life Science"
              width={38}
              height={38}
              className="h-9 w-9 flex-shrink-0 rounded-full bg-white object-contain p-1"
            />
            <div>
              <p className="text-sm font-bold text-white">SDK LIFE SCIENCE</p>
              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#7DD3FC]">
                Private Limited
              </p>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-3 py-4">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
                className={`group mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold transition
                ${
                  active
                    ? "bg-[#0C4A6E] text-white shadow-md"
                    : "text-gray-700 hover:bg-sky-50 hover:text-[#0C4A6E]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={active ? "text-[#7DD3FC]" : "text-[#38BDF8]"}
                  />
                  {item.label}
                </span>
                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    active ? "text-[#7DD3FC]" : "text-gray-300 group-hover:translate-x-0.5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-5 pt-2">
          <Link
            href="/enquiry"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0C4A6E] to-[#38BDF8] py-3.5 font-semibold text-white shadow-lg transition active:scale-[0.98]"
          >
            Enquiry Now
          </Link>
        </div>

        {/* Certification badge */}
        <div className="mx-5 mt-5 flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-xs font-semibold text-[#0C4A6E]">
          <ShieldCheck size={18} className="flex-shrink-0 text-[#38BDF8]" />
          WHO-GMP Certified Pharmaceutical Company
        </div>

        {/* Contact */}
        <div className="mx-5 mb-8 mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Get in touch
          </p>
          <a
            href={`tel:${topBar.phone}`}
            className="mb-3 flex items-center gap-3 text-sm font-medium text-gray-700"
          >
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0C4A6E]/10 text-[#0C4A6E]">
              <Phone size={14} />
            </span>
            {topBar.phone}
          </a>

          <a
            href={`mailto:${topBar.email}`}
            className="flex items-center gap-3 text-sm font-medium text-gray-700"
          >
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0C4A6E]/10 text-[#0C4A6E]">
              <Mail size={14} />
            </span>
            {topBar.email}
          </a>
        </div>
      </div>

      {/* Spacer so page content isn't hidden behind the fixed header */}
      <div className="h-[52px] sm:h-20 lg:h-[136px]" />
    </>
  );
}