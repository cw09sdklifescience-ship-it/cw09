// src/constants/navbar.ts
// NOTE: This file is currently unused by the live Navbar component
// (see src/components/layout/Navbar.tsx). Kept minimal to avoid
// broken imports / build errors.

export const BRAND = {
  navyDark: "#202822",
  navy: "#161C18",
  sky: "#1F8A55",
  coral: "#1B1F1C",
  topBg: "#F7FBF9",
  white: "#FFFFFF",
  slate: "#6B7280",
  lightBg: "#F7FBF9",
  border: "#D8EDE0",
};

export const LOGO_SRC = "/images/logosdk.png";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Contact Us", href: "/contact" },
];
