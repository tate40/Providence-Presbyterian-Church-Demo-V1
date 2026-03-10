/**
 * SermonsSection — Luminous Stone Design
 * Editorial card grid for recent sermons.
 * Warm ivory background, amber accents.
 */

import { useEffect, useRef } from "react";
import { Play, BookOpen, ExternalLink } from "lucide-react";

const SERMON_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/i57gPYVsQg2XbcpmvRU3Wq/church_sermon_pastor-3HY3kK3Ffprq5MavUQbdrd.webp";

const recentSermons = [
  {
    title: "Love Your Enemies",
    preacher: "Seth Skogen",
    scripture: "Matthew 5:38-48",
    date: "Feb 22, 2026",
    series: "Sermon on the Mount",
  },
  {
    title: "The Vapor of External Prosperity",
    preacher: "Nathan Eleweanya",
    scripture: "Ecclesiastes 6:1-12",
    date: "Feb 22, 2026",
    series: "Ecclesiastes",
  },
  {
    title: "Jesus Buried",
    preacher: "Seth Skogen",
    scripture: "Matthew 27:45-66",
    date: "Feb 15, 2026",
    series: "The Gospel of Matthew",
  },
  {
    title: "Jesus Crucified",
    preacher: "Seth Skogen",
    scripture: "Matthew 27:1-44",
    date: "Feb 8, 2026",
    series: "The Gospel of Matthew",
  },
  {
    title: "Solomon's Wisdom",
    preacher: "Seth Skogen",
    scripture: "I Kings 3:1-28",
    date: "Feb 8, 2026",
    series: "Kings",
  },
  {
    title: "Jesus is Tried",
    preacher: "Seth Skogen",
    scripture: "Matthew 26:57-75",
    date: "Feb 1, 2026",
    series: "The Gospel of Matthew",
  },
];

export default function SermonsSection() {
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
      id="sermons"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.96 0.008 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end reveal">
          <div>
            <div className="section-label mb-4">Recent Sermons</div>
            <h2
              className="font-display"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.12,
                color: "oklch(0.22 0.015 255)",
              }}
            >
              Feeding on
              <br />
              <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                God's Word
              </em>
            </h2>
          </div>
          <div>
            <p
              className="leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "oklch(0.42 0.015 255)",
                lineHeight: 1.75,
              }}
            >
              Our sermons are rooted in expository preaching through books of
              the Bible. Listen to recent messages from Pastor Seth Skogen and
              Deacon Nathan Eleweanya.
            </p>
            <a
              href="https://www.providencepresbyterian.org/sermons/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              All Sermons
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Featured + grid layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured sermon - large */}
          <div
            className="lg:col-span-2 relative overflow-hidden group reveal"
            style={{ borderRadius: "4px", minHeight: "380px" }}
          >
            <img
              src={SERMON_IMAGE}
              alt="Pastor preaching"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.12 0.01 255 / 0.95) 0%, oklch(0.12 0.01 255 / 0.40) 60%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="section-label mb-2"
                style={{ color: "oklch(0.78 0.09 75)" }}
              >
                Latest Sermon
              </div>
              <h3
                className="font-display text-white text-xl mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {recentSermons[0].title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {recentSermons[0].preacher} · {recentSermons[0].scripture}
              </p>
              <a
                href="https://www.providencepresbyterian.org/sermons/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "var(--church-amber)",
                  textDecoration: "none",
                }}
              >
                <Play size={14} fill="currentColor" />
                Listen Now
              </a>
            </div>
          </div>

          {/* Sermon list */}
          <div className="lg:col-span-3 flex flex-col gap-3 stagger">
            {recentSermons.slice(1).map((sermon, i) => (
              <a
                key={i}
                href="https://www.providencepresbyterian.org/sermons/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 transition-all duration-200"
                style={{
                  backgroundColor: "oklch(0.99 0.005 85)",
                  borderRadius: "4px",
                  border: "1px solid oklch(0.92 0.008 85)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "var(--church-amber)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 2px 12px oklch(0.62 0.12 55 / 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.92 0.008 85)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                {/* Play button */}
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                  }}
                >
                  <Play
                    size={14}
                    style={{ color: "var(--church-amber)" }}
                    fill="currentColor"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className="font-display text-base leading-snug truncate"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.22 0.015 255)",
                      }}
                    >
                      {sermon.title}
                    </h4>
                    <span
                      className="text-xs flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "oklch(0.62 0.015 255)",
                      }}
                    >
                      {sermon.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <BookOpen size={11} style={{ color: "var(--church-amber)" }} />
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "oklch(0.52 0.015 255)",
                      }}
                    >
                      {sermon.preacher} · {sermon.scripture}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube CTA */}
        <div
          className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 reveal"
          style={{
            backgroundColor: "oklch(0.22 0.015 255)",
            borderRadius: "4px",
          }}
        >
          <div>
            <div
              className="section-label mb-2"
              style={{ color: "oklch(0.78 0.09 75)" }}
            >
              Watch Online
            </div>
            <p
              className="text-white text-lg font-display"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Join us live on YouTube every Sunday
            </p>
          </div>
          <a
            href="https://www.youtube.com/@providencepresbyterianchur1377/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber flex-shrink-0 inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            <Play size={14} fill="currentColor" />
            Watch Live
          </a>
        </div>
      </div>
    </section>
  );
}
