/**
 * Navigation Component — Luminous Stone Design
 * Transparent over hero, gains ivory background on scroll.
 * DM Sans for nav labels, amber accent on hover.
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Our Worship", href: "#worship" },
  { label: "Our Beliefs", href: "#beliefs" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Our Officers", href: "#officers" },
  { label: "Missions", href: "#missions" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div
        className="hidden md:block w-full py-2 text-xs font-ui transition-all duration-300"
        style={{
          backgroundColor: "oklch(0.22 0.015 255)",
          color: "oklch(0.78 0.09 75)",
          fontFamily: "var(--font-ui)",
        }}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+12819802522"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.78 0.09 75)" }}
            >
              <Phone size={11} />
              (281) 980-2522
            </a>
            <a
              href="https://maps.google.com/?q=3510+Austin+Parkway+Sugar+Land+TX+77479"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.78 0.09 75)" }}
            >
              <MapPin size={11} />
              3510 Austin Parkway, Sugar Land, TX 77479
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span style={{ color: "oklch(0.60 0.06 75)" }}>
              Sunday Worship: 9:00 a.m. &amp; 11:00 a.m.
            </span>
            <a
              href="https://www.youtube.com/@providencepresbyterianchur1377"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.78 0.09 75)" }}
            >
              Watch Live
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="fixed w-full z-50 transition-all duration-400"
        style={{
          top: 0,
          backgroundColor: scrolled
            ? "oklch(0.985 0.008 85 / 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 24px oklch(0.22 0.015 255 / 0.08)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.015 75)" : "none",
        }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            {/* Cross icon */}
            <div
              className="w-9 h-9 flex items-center justify-center flex-shrink-0"
              style={{
                border: `1.5px solid ${scrolled ? "oklch(0.22 0.015 255)" : "white"}`,
                borderRadius: "2px",
                transition: "border-color 0.3s ease",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7.5"
                  y="1"
                  width="3"
                  height="16"
                  rx="0.5"
                  fill={scrolled ? "oklch(0.22 0.015 255)" : "white"}
                  style={{ transition: "fill 0.3s ease" }}
                />
                <rect
                  x="1"
                  y="5.5"
                  width="16"
                  height="3"
                  rx="0.5"
                  fill={scrolled ? "oklch(0.22 0.015 255)" : "white"}
                  style={{ transition: "fill 0.3s ease" }}
                />
              </svg>
            </div>
            <div className="text-left">
              <div
                className="font-display text-lg leading-tight"
                style={{
                  color: scrolled ? "oklch(0.22 0.015 255)" : "white",
                  fontFamily: "var(--font-display)",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.01em",
                }}
              >
                Providence
              </div>
              <div
                className="font-ui text-xs tracking-widest uppercase"
                style={{
                  color: scrolled ? "oklch(0.52 0.015 255)" : "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-ui)",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.12em",
                }}
              >
                Presbyterian Church
              </div>
            </div>
          </button>

          {/* Desktop nav links */}
          <div
            className="hidden lg:flex items-center gap-7"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{
                  color: scrolled ? "oklch(0.35 0.015 255)" : "rgba(255,255,255,0.9)",
                  letterSpacing: "0.02em",
                  background: "none",
                  border: "none",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--church-amber)" }}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-amber ml-2"
              style={{
                fontSize: "0.72rem",
                padding: "0.6rem 1.4rem",
                fontFamily: "var(--font-ui)",
              }}
            >
              Plan a Visit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X
                size={22}
                style={{ color: scrolled ? "oklch(0.22 0.015 255)" : "white" }}
              />
            ) : (
              <Menu
                size={22}
                style={{ color: scrolled ? "oklch(0.22 0.015 255)" : "white" }}
              />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              backgroundColor: "oklch(0.985 0.008 85)",
              borderTop: "1px solid oklch(0.88 0.015 75)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-2 text-sm font-medium border-b transition-colors hover:text-amber-600"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "oklch(0.35 0.015 255)",
                    borderColor: "oklch(0.92 0.008 85)",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid oklch(0.92 0.008 85)",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-amber w-full text-center"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Plan a Visit
                </button>
              </div>
              <div
                className="pt-3 text-xs"
                style={{ fontFamily: "var(--font-ui)", color: "oklch(0.52 0.015 255)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={11} />
                  (281) 980-2522
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={11} />
                  3510 Austin Pkwy, Sugar Land, TX
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
