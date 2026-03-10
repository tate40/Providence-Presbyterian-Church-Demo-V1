/**
 * WelcomeSection — Luminous Stone Design
 * Asymmetric layout: large pull quote left, image right.
 * Warm ivory background with amber accents.
 */

import { useEffect, useRef } from "react";

const REAL_CHURCH_EXTERIOR = "/images/welcome-congregation.jpg";

export default function WelcomeSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal, .stagger").forEach((child) => {
        observer.observe(child);
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="welcome"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div className="reveal">
            <div className="section-label mb-5">Welcome</div>
            <h2
              className="font-display mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.12,
                color: "oklch(0.22 0.015 255)",
              }}
            >
              A Home for the
              <br />
              <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                Historic Christian Faith
              </em>
            </h2>

            <hr className="gold-rule mb-6 w-16" />

            <p
              className="mb-5 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "oklch(0.38 0.015 255)",
                lineHeight: 1.75,
              }}
            >
              Providence Presbyterian Church has been serving the Sugar Land
              community since 1979. We are a congregation of the{" "}
              <strong style={{ color: "oklch(0.22 0.015 255)" }}>
                Presbyterian Church in America
              </strong>
              , committed to the historic Christian faith as confessed in the
              Apostles', Nicene, and Chalcedonian Creeds.
            </p>

            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "oklch(0.38 0.015 255)",
                lineHeight: 1.75,
              }}
            >
              We believe the Gospel — the finished work of Jesus Christ — lies
              at the heart of all we celebrate each Sunday. Our worship is
              liturgical, our teaching is biblical, and our community is
              multi-generational, welcoming families of all ages.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById("beliefs");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-amber"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Our Beliefs
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("worship");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-dark"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Our Worship
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { number: "45+", label: "Years of Ministry" },
                { number: "1979", label: "Year Founded" },
                { number: "PCA", label: "Denomination" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className="font-display text-3xl mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--church-amber)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "oklch(0.52 0.015 255)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="relative">
              {/* Main image */}
              <div
                className="overflow-hidden"
                style={{ borderRadius: "4px", aspectRatio: "4/5" }}
              >
                <img
                  src={REAL_CHURCH_EXTERIOR}
                  alt="Providence Presbyterian Church congregation in worship"
                  className="w-full h-full object-cover"
                  style={{
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                />
              </div>

              {/* Decorative amber border offset */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full -z-10"
                style={{
                  border: "2px solid var(--church-amber)",
                  borderRadius: "4px",
                  opacity: 0.3,
                }}
              />

              {/* Quote overlay card */}
              <div
                className="absolute -bottom-8 -left-8 p-6 max-w-xs shadow-xl"
                style={{
                  backgroundColor: "oklch(0.22 0.015 255)",
                  borderRadius: "4px",
                }}
              >
                <p
                  className="text-sm italic leading-relaxed mb-3"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  "Join us at Providence for biblical teaching, liturgical
                  worship, and weekly communion."
                </p>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--church-amber)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Est. 1979 · Sugar Land, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
