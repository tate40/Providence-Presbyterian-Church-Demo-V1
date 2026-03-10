/**
 * Footer — Luminous Stone Design
 * Deep charcoal footer with amber accents and cross logo.
 */

import { Youtube, Facebook, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "oklch(0.14 0.01 255)",
        borderTop: "1px solid oklch(0.22 0.015 255)",
      }}
    >
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{
                  border: "1.5px solid oklch(0.78 0.09 75)",
                  borderRadius: "2px",
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
                    fill="oklch(0.78 0.09 75)"
                  />
                  <rect
                    x="1"
                    y="5.5"
                    width="16"
                    height="3"
                    rx="0.5"
                    fill="oklch(0.78 0.09 75)"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="font-display text-white text-lg"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
                >
                  Providence
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "oklch(0.52 0.015 255)",
                    letterSpacing: "0.12em",
                  }}
                >
                  Presbyterian Church
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
              }}
            >
              A congregation of the Presbyterian Church in America, committed
              to biblical teaching, liturgical worship, and weekly communion
              since 1979.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@providencepresbyterianchur1377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "oklch(0.22 0.015 255)",
                  borderRadius: "4px",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.30 0.015 255)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.22 0.015 255)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.facebook.com/pages/Providence-Presbyterian-Church/113284612038587"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "oklch(0.22 0.015 255)",
                  borderRadius: "4px",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.30 0.015 255)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.22 0.015 255)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-5"
              style={{
                fontFamily: "var(--font-ui)",
                color: "oklch(0.78 0.09 75)",
                letterSpacing: "0.12em",
              }}
            >
              Quick Links
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Our Worship", id: "worship" },
                { label: "Our Beliefs", id: "beliefs" },
                { label: "Sermons", id: "sermons" },
                { label: "Events", id: "events" },
                { label: "Our Officers", id: "officers" },
                { label: "Plan a Visit", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "rgba(255,255,255,0.5)",
                    background: "none",
                    border: "none",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* External links */}
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-5"
              style={{
                fontFamily: "var(--font-ui)",
                color: "oklch(0.78 0.09 75)",
                letterSpacing: "0.12em",
              }}
            >
              Resources
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                {
                  label: "Sermons Archive",
                  href: "https://www.providencepresbyterian.org/sermons/",
                },
                {
                  label: "Watch Live (YouTube)",
                  href: "https://www.youtube.com/@providencepresbyterianchur1377",
                },
                {
                  label: "PCA Website",
                  href: "https://www.pcanet.org",
                },
                {
                  label: "Westminster Confession",
                  href: "https://www.pcaac.org/bco/westminster-confession/",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(0.22 0.015 255)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-ui)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {currentYear} Providence Presbyterian Church · Sugar Land, TX ·
            Presbyterian Church in America
          </p>
          <a
            href="https://www.providencepresbyterian.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 transition-opacity hover:opacity-60"
            style={{
              fontFamily: "var(--font-ui)",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}
          >
            providencepresbyterian.org
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
