/**
 * WorshipSection — Luminous Stone Design
 * Full-bleed image background with worship content overlay.
 * Dark charcoal background with amber accents.
 */

import { useEffect, useRef } from "react";

const SANCTUARY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/i57gPYVsQg2XbcpmvRU3Wq/church_sanctuary_worship-ZxVeT2wFaMLixWEftSoqRz.webp";

const worshipSteps = [
  {
    number: "01",
    title: "Call to Worship & Confession",
    description:
      "We begin by responding to God's call, entering His presence with joyous singing. As a sinful people, we confess our sin and receive His words of absolution.",
  },
  {
    number: "02",
    title: "Hearing God's Word",
    description:
      "We listen as God speaks through two or three Scripture readings. One lesson serves as the topic for the sermon — instruction, encouragement, and help for the Christian life.",
  },
  {
    number: "03",
    title: "Responding to His Word",
    description:
      "We renew our commitment by confessing the Nicene Creed and presenting our tithes and offerings as an expression of faith and obedience.",
  },
  {
    number: "04",
    title: "Eucharist & Benediction",
    description:
      "The Lord's Supper is the climax of our worship — we feast with Christ in His presence. He then sends us back into the world with His peace and blessing.",
  },
];

export default function WorshipSection() {
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
    <section id="worship" ref={ref} className="relative">
      {/* Full-bleed image with overlay */}
      <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SANCTUARY_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.12 0.01 255 / 0.92) 0%, oklch(0.12 0.01 255 / 0.75) 60%, oklch(0.12 0.01 255 / 0.40) 100%)",
          }}
        />

        <div className="relative z-10 container py-24 md:py-32">
          <div className="max-w-2xl reveal">
            <div
              className="section-label mb-5"
              style={{ color: "oklch(0.78 0.09 75)" }}
            >
              Our Worship
            </div>
            <h2
              className="font-display text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              Let Us Worship
              <br />
              <em style={{ color: "oklch(0.78 0.09 75)", fontStyle: "italic" }}>
                and Bow Down
              </em>
            </h2>
            <p
              className="text-white/75 mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
              }}
            >
              Our order of worship follows the basic outline of the Gospel and
              the historic liturgy of the Western Church. Children of all ages
              are welcome to worship with us.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@providencepresbyterianchur1377/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Watch a Service
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("sermons");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  border: "1.5px solid rgba(255,255,255,0.5)",
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
                    "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "transparent";
                }}
              >
                Recent Sermons
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Worship steps */}
      <div
        style={{ backgroundColor: "oklch(0.975 0.008 85)" }}
        className="py-16 md:py-20"
      >
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {worshipSteps.map((step) => (
              <div key={step.number} className="group">
                <div
                  className="font-display text-5xl mb-4 opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--church-amber)",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-display text-lg mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.22 0.015 255)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "oklch(0.48 0.015 255)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Service times bar */}
          <div
            className="mt-16 pt-10 border-t flex flex-wrap justify-between items-center gap-6"
            style={{ borderColor: "oklch(0.88 0.010 85)" }}
          >
            <div>
              <div
                className="section-label mb-2"
                style={{ color: "var(--church-amber)" }}
              >
                Service Times
              </div>
              <div
                className="text-sm"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "oklch(0.42 0.015 255)",
                }}
              >
                3510 Austin Parkway, Sugar Land, TX 77479
              </div>
            </div>
            <div
              className="flex flex-wrap gap-8"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {[
                { label: "Sunday Morning", time: "9:00 a.m." },
                { label: "Sunday Morning", time: "11:00 a.m." },
                { label: "Monday Evensong", time: "8:00 p.m." },
                { label: "Tuesday Morning Prayer", time: "8:30 a.m." },
                { label: "Wednesday Morning Prayer", time: "8:30 a.m." },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-lg font-medium"
                    style={{ color: "var(--church-amber)" }}
                  >
                    {s.time}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.015 255)", letterSpacing: "0.06em" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
