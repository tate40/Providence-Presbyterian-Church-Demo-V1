/**
 * CommunitySection — Luminous Stone Design
 * Events, community image, and upcoming gatherings.
 */

import { useEffect, useRef } from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const COMMUNITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/i57gPYVsQg2XbcpmvRU3Wq/church_community-2HY3CKw9ZGQ2HNAPTo7sF8.webp";

const upcomingEvents = [
  {
    title: "Monday Evensong",
    date: "Mar 9, 2026",
    time: "8:00 p.m. – 8:30 p.m.",
    type: "Worship",
  },
  {
    title: "Tuesday Morning Prayer",
    date: "Mar 10, 2026",
    time: "8:30 a.m. – 9:00 a.m.",
    type: "Prayer",
  },
  {
    title: "Wednesday Morning Prayer",
    date: "Mar 11, 2026",
    time: "8:30 a.m. – 9:00 a.m.",
    type: "Prayer",
  },
  {
    title: "Ladies' Bible Study",
    date: "Mar 11, 2026",
    time: "11:00 a.m. – 12:30 p.m.",
    type: "Study",
  },
  {
    title: "Lenten Supper and Evensong",
    date: "Mar 12, 2026",
    time: "8:00 p.m. – 9:30 p.m.",
    type: "Special",
  },
];

const typeColors: Record<string, string> = {
  Worship: "oklch(0.62 0.12 55)",
  Prayer: "oklch(0.55 0.06 145)",
  Study: "oklch(0.50 0.10 270)",
  Special: "oklch(0.55 0.15 30)",
};

export default function CommunitySection() {
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
      id="events"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.96 0.008 85)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end reveal">
          <div>
            <div className="section-label mb-4">Community Life</div>
            <h2
              className="font-display"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.12,
                color: "oklch(0.22 0.015 255)",
              }}
            >
              Life Together
              <br />
              <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                in Christ
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
            Beyond Sunday worship, we gather throughout the week for prayer,
            Bible study, fellowship, and service. All are welcome to join us.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Community image */}
          <div
            className="lg:col-span-2 overflow-hidden reveal"
            style={{ borderRadius: "4px", aspectRatio: "3/4" }}
          >
            <img
              src={COMMUNITY_IMAGE}
              alt="Church community gathering after Sunday service"
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
          </div>

          {/* Events list */}
          <div className="lg:col-span-3">
            <div
              className="flex items-center justify-between mb-6 reveal"
            >
              <div
                className="flex items-center gap-2"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                <Calendar size={16} style={{ color: "var(--church-amber)" }} />
                <span
                  className="font-medium text-sm"
                  style={{ color: "oklch(0.22 0.015 255)" }}
                >
                  Upcoming Services & Events
                </span>
              </div>
              <a
                href="https://www.providencepresbyterian.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "var(--church-amber)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                View All
                <ChevronRight size={12} />
              </a>
            </div>

            <div className="flex flex-col gap-3 stagger">
              {upcomingEvents.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.99 0.005 85)",
                    border: "1px solid oklch(0.92 0.008 85)",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--church-amber)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "oklch(0.92 0.008 85)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateX(0)";
                  }}
                >
                  {/* Date block */}
                  <div
                    className="flex-shrink-0 w-12 h-12 flex flex-col items-center justify-center"
                    style={{
                      backgroundColor: "oklch(0.94 0.012 85)",
                      borderRadius: "4px",
                    }}
                  >
                    <span
                      className="text-xs font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--church-amber)",
                        lineHeight: 1,
                      }}
                    >
                      {event.date.split(",")[0].split(" ")[0]}
                    </span>
                    <span
                      className="text-lg font-display leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.22 0.015 255)",
                      }}
                    >
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                  </div>

                  {/* Event info */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="font-display text-base leading-snug"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.22 0.015 255)",
                      }}
                    >
                      {event.title}
                    </h4>
                    <div
                      className="flex items-center gap-1.5 mt-1"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "oklch(0.52 0.015 255)",
                        fontSize: "0.8rem",
                      }}
                    >
                      <Clock size={11} />
                      {event.time}
                    </div>
                  </div>

                  {/* Type badge */}
                  <span
                    className="flex-shrink-0 text-xs px-2.5 py-1"
                    style={{
                      backgroundColor: `${typeColors[event.type]}22`,
                      color: typeColors[event.type],
                      borderRadius: "2px",
                      fontFamily: "var(--font-ui)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {event.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Ministries */}
            <div
              className="mt-8 p-6 reveal"
              style={{
                backgroundColor: "oklch(0.22 0.015 255)",
                borderRadius: "4px",
              }}
            >
              <div
                className="section-label mb-4"
                style={{ color: "oklch(0.78 0.09 75)" }}
              >
                Missions & Ministries
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Sunday School",
                  "Ladies' Bible Study",
                  "Youth Ministry",
                  "Men's Fellowship",
                  "Missions Support",
                  "Listening Aid Devices",
                ].map((ministry) => (
                  <div
                    key={ministry}
                    className="flex items-center gap-2 text-sm"
                    style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.7)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--church-amber)" }}
                    />
                    {ministry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
