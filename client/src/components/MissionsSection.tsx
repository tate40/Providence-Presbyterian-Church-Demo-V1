/**
 * MissionsSection — Luminous Stone Design
 * Missions & Ministries in a bento-style grid.
 */

import { useEffect, useRef } from "react";
import { Globe, Heart, BookOpen, Music, Users, Baby } from "lucide-react";

const ministries = [
  {
    icon: Globe,
    title: "World Missions",
    description:
      "We support missionaries and church planting efforts around the world through the PCA's Mission to the World.",
    color: "oklch(0.62 0.12 55)",
  },
  {
    icon: BookOpen,
    title: "Sunday School",
    description:
      "Classes for all ages — from nursery through adult — meeting before the 11 a.m. service each Sunday.",
    color: "oklch(0.50 0.10 270)",
  },
  {
    icon: Heart,
    title: "Deacons' Ministry",
    description:
      "Our deacons serve the practical and mercy needs of the congregation and the wider community.",
    color: "oklch(0.55 0.15 30)",
  },
  {
    icon: Music,
    title: "Music Ministry",
    description:
      "Our choir and musicians lead the congregation in historic hymns and psalms each Sunday.",
    color: "oklch(0.55 0.06 145)",
  },
  {
    icon: Users,
    title: "Men's & Women's Ministry",
    description:
      "Regular Bible studies, fellowship gatherings, and service opportunities for men and women.",
    color: "oklch(0.52 0.08 200)",
  },
  {
    icon: Baby,
    title: "Children & Youth",
    description:
      "Nurturing the faith of the next generation through age-appropriate teaching and fellowship.",
    color: "oklch(0.60 0.12 85)",
  },
];

export default function MissionsSection() {
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
      id="missions"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end reveal">
          <div>
            <div className="section-label mb-4">Missions &amp; Ministries</div>
            <h2
              className="font-display"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.12,
                color: "oklch(0.22 0.015 255)",
              }}
            >
              Serving God
              <br />
              <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                &amp; Neighbor
              </em>
            </h2>
          </div>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "oklch(0.42 0.015 255)",
              lineHeight: 1.75,
            }}
          >
            Providence is committed to the Great Commission — making disciples
            locally and globally. Our ministries serve every stage of life and
            extend the love of Christ into our community.
          </p>
        </div>

        {/* Ministry grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {ministries.map((ministry, i) => (
            <div
              key={i}
              className="p-6 transition-all duration-200 group"
              style={{
                backgroundColor: "oklch(0.99 0.005 85)",
                border: "1px solid oklch(0.92 0.008 85)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  ministry.color;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 20px ${ministry.color}22`;
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.92 0.008 85)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${ministry.color}18`,
                  borderRadius: "4px",
                }}
              >
                <ministry.icon size={20} style={{ color: ministry.color }} />
              </div>
              <h3
                className="font-display text-lg mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.22 0.015 255)",
                }}
              >
                {ministry.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.48 0.015 255)",
                  lineHeight: 1.65,
                }}
              >
                {ministry.description}
              </p>
            </div>
          ))}
        </div>

        {/* PCA affiliation banner */}
        <div
          className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 reveal"
          style={{
            backgroundColor: "oklch(0.96 0.008 85)",
            border: "1px solid oklch(0.88 0.015 75)",
            borderRadius: "4px",
          }}
        >
          <div>
            <div className="section-label mb-2">Denominational Affiliation</div>
            <p
              className="font-display text-lg"
              style={{
                fontFamily: "var(--font-display)",
                color: "oklch(0.22 0.015 255)",
              }}
            >
              Presbyterian Church in America (PCA)
            </p>
            <p
              className="text-sm mt-1"
              style={{
                fontFamily: "var(--font-body)",
                color: "oklch(0.52 0.015 255)",
              }}
            >
              Gulf Coast Presbytery · Mission to the World
            </p>
          </div>
          <a
            href="https://www.pcanet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Learn About PCA
          </a>
        </div>
      </div>
    </section>
  );
}
