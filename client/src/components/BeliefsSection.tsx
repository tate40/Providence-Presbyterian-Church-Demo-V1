/**
 * BeliefsSection — Luminous Stone Design
 * Communion image + beliefs content.
 * Warm ivory background, editorial layout.
 */

import { useEffect, useRef } from "react";
import { Cross, BookOpen, Shield, Users } from "lucide-react";

const COMMUNION_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/i57gPYVsQg2XbcpmvRU3Wq/church_communion-TgTcucx8itoXL3vJ7esRie.webp";

const beliefs = [
  {
    icon: Cross,
    title: "The Gospel",
    description:
      "We confess faith in the Lord Jesus Christ who entered history for us, took upon Himself our nature, and voluntarily offered Himself as our substitute on the Cross, conquering sin and death by His resurrection.",
  },
  {
    icon: BookOpen,
    title: "Scripture",
    description:
      "We hold to the authority and sufficiency of Holy Scripture as the Word of God, the only infallible rule for faith and practice in the life of the church and the believer.",
  },
  {
    icon: Shield,
    title: "Historic Creeds",
    description:
      "We are committed to the historic Christian Faith as confessed in the Apostles', Nicene, and Chalcedonian Creeds, and the Westminster Confession of Faith.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe the Christian faith transforms us and extends into every area of our lives. It is our purpose to worship the Lord, grow in faith, and serve Him and each other.",
  },
];

export default function BeliefsSection() {
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
      { threshold: 0.1 }
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
      id="beliefs"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: image */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{ borderRadius: "4px", aspectRatio: "3/4", minHeight: "400px" }}
              >
                <img
                  src={COMMUNION_IMAGE}
                  alt="Communion table with chalice and bread"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 -z-10"
                style={{
                  border: "2px solid var(--church-amber)",
                  borderRadius: "4px",
                  opacity: 0.25,
                }}
              />

              {/* Scripture quote */}
              <div
                className="mt-6 p-6"
                style={{
                  backgroundColor: "oklch(0.96 0.008 85)",
                  borderLeft: "3px solid var(--church-amber)",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <p
                  className="text-lg italic leading-relaxed mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.30 0.015 255)",
                  }}
                >
                  "The Gospel is the Good News that Christ has accomplished
                  salvation for us. We are set free from sin and death through
                  faith in Him."
                </p>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--church-amber)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Providence Presbyterian Church
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <div className="reveal mb-10">
              <div className="section-label mb-4">Our Beliefs</div>
              <h2
                className="font-display mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.12,
                  color: "oklch(0.22 0.015 255)",
                }}
              >
                Rooted in the
                <br />
                <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                  Historic Faith
                </em>
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  color: "oklch(0.42 0.015 255)",
                  lineHeight: 1.75,
                }}
              >
                Providence is a congregation of the Presbyterian Church in
                America, committed to the Westminster Standards and the
                historic confessions of the Christian church.
              </p>
            </div>

            {/* Belief cards */}
            <div className="flex flex-col gap-5 stagger">
              {beliefs.map((belief, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 group transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.99 0.005 85)",
                    border: "1px solid oklch(0.92 0.008 85)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--church-amber)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 2px 12px oklch(0.62 0.12 55 / 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "oklch(0.92 0.008 85)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{
                      backgroundColor: "oklch(0.94 0.012 85)",
                      borderRadius: "4px",
                    }}
                  >
                    <belief.icon size={18} style={{ color: "var(--church-amber)" }} />
                  </div>
                  <div>
                    <h3
                      className="font-display text-base mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.22 0.015 255)",
                      }}
                    >
                      {belief.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "oklch(0.48 0.015 255)",
                        lineHeight: 1.65,
                      }}
                    >
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Confessional documents */}
            <div
              className="mt-8 p-5 reveal"
              style={{
                backgroundColor: "oklch(0.96 0.008 85)",
                border: "1px solid oklch(0.90 0.010 85)",
                borderRadius: "4px",
              }}
            >
              <div
                className="section-label mb-3"
                style={{ color: "var(--church-amber)" }}
              >
                Confessional Standards
              </div>
              <div
                className="flex flex-wrap gap-3"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {[
                  "Apostles' Creed",
                  "Nicene Creed",
                  "Chalcedonian Definition",
                  "Westminster Confession",
                  "Westminster Shorter Catechism",
                ].map((doc) => (
                  <span
                    key={doc}
                    className="text-xs px-3 py-1.5"
                    style={{
                      backgroundColor: "oklch(0.99 0.005 85)",
                      color: "oklch(0.38 0.015 255)",
                      border: "1px solid oklch(0.88 0.010 85)",
                      borderRadius: "2px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
