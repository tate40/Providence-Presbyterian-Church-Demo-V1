/**
 * ContactSection — Luminous Stone Design
 * Plan a Visit section with map, contact info, and social links.
 */

import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Youtube, Facebook } from "lucide-react";

export default function ContactSection() {
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
      id="contact"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className="reveal">
            <div
              className="section-label mb-5"
              style={{ color: "var(--church-amber)" }}
            >
              Plan a Visit
            </div>
            <h2
              className="font-display mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.12,
                color: "oklch(0.22 0.015 255)",
              }}
            >
              We'd Love to
              <br />
              <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
                Welcome You
              </em>
            </h2>

            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "oklch(0.42 0.015 255)",
                lineHeight: 1.75,
              }}
            >
              Whether you're new to the area, searching for a church home, or
              simply curious about the Christian faith, we warmly invite you to
              join us for worship. Come as you are.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10 stagger">
              <a
                href="https://maps.google.com/?q=3510+Austin+Parkway+Sugar+Land+TX+77479"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    borderRadius: "4px",
                  }}
                >
                  <MapPin size={16} style={{ color: "var(--church-amber)" }} />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--church-amber)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Address
                  </div>
                  <div
                    className="group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "oklch(0.30 0.015 255)",
                    }}
                  >
                    3510 Austin Parkway
                    <br />
                    Sugar Land, TX 77479
                  </div>
                </div>
              </a>

              <a
                href="tel:+12819802522"
                className="flex items-start gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    borderRadius: "4px",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--church-amber)" }} />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--church-amber)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Phone
                  </div>
                  <div
                    className="group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "oklch(0.30 0.015 255)",
                    }}
                  >
                    (281) 980-2522
                  </div>
                </div>
              </a>

              <a
                href="mailto:office@providencepresbyterian.org"
                className="flex items-start gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    borderRadius: "4px",
                  }}
                >
                  <Mail size={16} style={{ color: "var(--church-amber)" }} />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--church-amber)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Email
                  </div>
                  <div
                    className="group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "oklch(0.30 0.015 255)",
                    }}
                  >
                    office@providencepresbyterian.org
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    borderRadius: "4px",
                  }}
                >
                  <Clock size={16} style={{ color: "var(--church-amber)" }} />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--church-amber)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Office Hours
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "oklch(0.30 0.015 255)",
                    }}
                  >
                    Monday – Friday
                    <br />
                    9:00 a.m. – 5:00 p.m.
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              className="pt-8 border-t"
              style={{ borderColor: "oklch(0.88 0.010 85)" }}
            >
              <div
                className="section-label mb-4"
                style={{ color: "var(--church-amber)" }}
              >
                Follow Us
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/@providencepresbyterianchur1377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.96 0.008 85)",
                    border: "1px solid oklch(0.88 0.010 85)",
                    borderRadius: "4px",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.8rem",
                    color: "oklch(0.38 0.015 255)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--church-amber)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.88 0.010 85)";
                  }}
                >
                  <Youtube size={15} style={{ color: "#FF0000" }} />
                  YouTube
                </a>
                <a
                  href="https://www.facebook.com/pages/Providence-Presbyterian-Church/113284612038587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.96 0.008 85)",
                    border: "1px solid oklch(0.88 0.010 85)",
                    borderRadius: "4px",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.8rem",
                    color: "oklch(0.38 0.015 255)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--church-amber)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.88 0.010 85)";
                  }}
                >
                  <Facebook size={15} style={{ color: "#1877F2" }} />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right: map + service times */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            {/* Google Maps embed */}
            <div
              className="overflow-hidden mb-6"
              style={{
                borderRadius: "4px",
                aspectRatio: "4/3",
                border: "1px solid oklch(0.88 0.010 85)",
              }}
            >
              <iframe
                title="Providence Presbyterian Church location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8!2d-95.6!3d29.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e4d1a3c5e5c5%3A0x1234567890abcdef!2s3510+Austin+Pkwy%2C+Sugar+Land%2C+TX+77479!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Service times card */}
            <div
              className="p-6"
              style={{
                backgroundColor: "oklch(0.96 0.008 85)",
                border: "1px solid oklch(0.90 0.010 85)",
                borderRadius: "4px",
              }}
            >
              <div
                className="section-label mb-5"
                style={{ color: "var(--church-amber)" }}
              >
                Service Schedule
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    day: "Sunday",
                    services: ["9:00 a.m. Morning Worship", "11:00 a.m. Morning Worship"],
                  },
                  {
                    day: "Monday",
                    services: ["8:00 p.m. Evensong"],
                  },
                  {
                    day: "Tuesday",
                    services: ["8:30 a.m. Morning Prayer"],
                  },
                  {
                    day: "Wednesday",
                    services: ["8:30 a.m. Morning Prayer"],
                  },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex gap-4 pb-3"
                    style={{ borderBottom: "1px solid oklch(0.88 0.010 85)" }}
                  >
                    <div
                      className="flex-shrink-0 w-24 text-sm font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--church-amber)",
                      }}
                    >
                      {item.day}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {item.services.map((s) => (
                        <div
                          key={s}
                          className="text-sm"
                          style={{
                            fontFamily: "var(--font-ui)",
                            color: "oklch(0.38 0.015 255)",
                          }}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
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
