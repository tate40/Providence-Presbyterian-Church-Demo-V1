/**
 * HeroSection — Luminous Stone Design
 * Full-viewport hero with generated church exterior image.
 * Dark overlay gradient, large display type, amber CTA.
 */

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/i57gPYVsQg2XbcpmvRU3Wq/hero_church_exterior-XCaACqRztWcR3wyZrPqxVg.webp";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)";
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("welcome");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: "scale(1.02)",
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.01 255 / 0.55) 0%, oklch(0.10 0.01 255 / 0.30) 40%, oklch(0.10 0.01 255 / 0.65) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to top, oklch(0.985 0.008 85) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col items-start justify-center container"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          paddingTop: "80px",
        }}
      >
        <div className="max-w-3xl">
          <div
            className="section-label mb-6"
            style={{ color: "oklch(0.78 0.09 75)" }}
          >
            Sugar Land, Texas · Est. 1979
          </div>

          <h1
            className="font-display text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Where the Gospel
            <br />
            <em
              style={{
                color: "oklch(0.78 0.09 75)",
                fontStyle: "italic",
              }}
            >
              shapes every Sunday
            </em>
          </h1>

          <p
            className="text-white/80 mb-10 max-w-xl"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            Biblical teaching, liturgical worship, and weekly communion in the
            heart of Sugar Land. A congregation of the Presbyterian Church in
            America, rooted in the historic Christian faith.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-amber"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Plan a Visit
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("worship");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: "1.5px solid rgba(255,255,255,0.7)",
                color: "white",
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "2px",
                transition: "all 0.2s ease",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
              }}
            >
              Learn About Us
            </button>
          </div>

          {/* Service times */}
          <div
            className="mt-12 flex flex-wrap gap-6"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {[
              { day: "Sunday", time: "9:00 a.m.", label: "Morning Worship" },
              { day: "Sunday", time: "11:00 a.m.", label: "Morning Worship" },
              { day: "Wednesday", time: "8:00 p.m.", label: "Evening Prayer" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-px h-8"
                  style={{ backgroundColor: "oklch(0.78 0.09 75 / 0.6)" }}
                />
                <div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "oklch(0.78 0.09 75)", letterSpacing: "0.08em" }}
                  >
                    {s.day} · {s.time}
                  </div>
                  <div className="text-white/70 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ChevronDown
          size={28}
          className="animate-bounce"
          style={{ color: "white" }}
        />
      </button>
    </section>
  );
}
