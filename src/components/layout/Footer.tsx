"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Our Products",    href: "/products" },
  { label: "Quality",         href: "/quality" },
  { label: "Franchise / PCD", href: "/franchise" },
  { label: "Contact Us",      href: "/contact" },
];

const productLinks = [
  { label: "Tablets",        href: "/products?category=tablets" },
  { label: "Injections",     href: "/products?category=injections" },
  { label: "Syrups",         href: "/products?category=syrups" },
  { label: "Sachets",        href: "/products?category=sachets" },
  { label: "Capsules",       href: "/products?category=capsules" },
  { label: "Other Products", href: "/products?category=other" },
];

const socials = [
  { Icon: Facebook,  href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin,  href: "#", label: "LinkedIn" },
  { Icon: Youtube,   href: "#", label: "YouTube" },
];

// ── Sky-blue accent color used sparingly (matches site-wide palette) ──
const GOLD = "#7DD3FC";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0C4A6E",
        color: "#fff",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
      }}
    >
      {/* ── Sky-blue top rule ── */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, transparent, ${GOLD} 30%, ${GOLD} 70%, transparent)`,
          opacity: 0.5,
        }}
      />

      {/* ── Main footer body ── */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "52px 40px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
        }}
        className="footer-grid"
      >
        {/* ── Brand column ── */}
        <div>
          {/* Logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
           <div
  style={{
    width: 58,
    height: 58,
    position: "relative",
    flexShrink: 0,
  }}
>
  <Image
    src="/images/logosdk.png"
    alt="SDK Life Science Logo"
    fill
    style={{
      objectFit: "contain",
    }}
    priority
  />
</div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.2px",
                  margin: 0,
                }}
              >
                SDK LIFE SCIENCE<br />
                <span style={{ color: GOLD }}>PRIVATE LIMITED</span>
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 10,
              color: "rgba(186,230,253,0.5)",
              letterSpacing: "0.4px",
              marginBottom: 14,
            }}
          >
            Creating Healthier Smiles, Stronger Future
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: 12.5,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              marginBottom: 20,
              maxWidth: 240,
            }}
          >
            A trusted name in the pharmaceutical industry delivering WHO-GMP certified
            medicines across India since 2005.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            {[
              {
                Icon: MapPin,
                text: "SCO 61, 1st Floor, Sector-38, Chandigarh - 160036",
                multiline: true,
              },
              { Icon: Phone, text: "+91 8805131888" },
              { Icon: Mail,  text: "info@sdklifescience.com" },
            ].map(({ Icon, text, multiline }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: multiline ? "flex-start" : "center",
                  gap: 8,
                }}
              >
                <Icon
                  size={13}
                  style={{ color: GOLD, flexShrink: 0, marginTop: multiline ? 2 : 0 }}
                />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.55)",
                  transition: "background 0.2s, border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = GOLD + "22";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = GOLD + "55";
                  (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div>
          <h3
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: GOLD,
              textTransform: "uppercase",
              letterSpacing: "1.3px",
              marginBottom: 18,
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")
                  }
                >
                  <span style={{ color: GOLD, fontSize: 10 }}>›</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Our Products ── */}
        <div>
          <h3
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: GOLD,
              textTransform: "uppercase",
              letterSpacing: "1.3px",
              marginBottom: 18,
            }}
          >
            Our Products
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {productLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")
                  }
                >
                  <span style={{ color: GOLD, fontSize: 10 }}>›</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Us ── */}
        <div>
          <h3
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: GOLD,
              textTransform: "uppercase",
              letterSpacing: "1.3px",
              marginBottom: 18,
            }}
          >
            Contact Us
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <MapPin size={13} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                SCO 61, 1st Floor, Sector-38,<br />Chandigarh - 160036
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Phone size={13} style={{ color: GOLD, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>+91 8805131888</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Mail size={13} style={{ color: GOLD, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                info@sdklifescience.com
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13, color: GOLD, flexShrink: 0 }}>🌐</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                www.sdklifescience.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
        className="footer-bottom-bar"
      >
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0 }}>
          © {new Date().getFullYear()} SDK Life Science Private Limited. All Rights Reserved.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms & Conditions"].map(item => (
              <Link
                key={item}
                href="#"
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = GOLD)}
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")
                }
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ── Developed by Codewinx IT Solutions ── */}
          <a
            href="https://codewinxit.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              paddingLeft: 20,
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
              Designed &amp; Developed by
            </span>
            <span style={{ width: 16, height: 16, position: "relative", flexShrink: 0 }}>
              <Image
                src="/images/codewinx.jpeg"
                alt="Codewinx IT Solutions"
                fill
                style={{ objectFit: "contain" }}
              />
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD }}>
              Codewinx IT Solutions
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}