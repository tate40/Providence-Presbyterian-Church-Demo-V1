/**
 * OfficersSection — Luminous Stone Design
 * Church leadership displayed in editorial card grid.
 */

import { useEffect, useRef } from "react";

const officers = {
  pastors: [
    { name: "Seth Skogen", role: "Pastor" },
    { name: "Nathan Eleweanya", role: "Deacon" },
  ],
  elders: [
    { name: "Paul Baughman", role: "Ruling Elder" },
    { name: "Wally Becker", role: "Ruling Elder" },
    { name: "Tom Bomar", role: "Ruling Elder" },
    { name: "Jim Boone", role: "Ruling Elder" },
    { name: "Curt Bowers", role: "Ruling Elder" },
    { name: "Jim Bowers", role: "Ruling Elder" },
    { name: "Bob Brewer", role: "Ruling Elder" },
    { name: "John Cain", role: "Ruling Elder" },
    { name: "Mike Carpenter", role: "Ruling Elder" },
    { name: "Hank Cobb", role: "Ruling Elder" },
    { name: "Gerry Cotten", role: "Ruling Elder" },
    { name: "Dave Cramer", role: "Ruling Elder" },
  ],
  deacons: [
    { name: "Brent Bowers", role: "Deacon" },
    { name: "Curt Bowers Jr.", role: "Deacon" },
    { name: "Leland Cain", role: "Deacon" },
    { name: "Brent Carpenter", role: "Deacon" },
    { name: "Chip Cobb", role: "Deacon" },
    { name: "David Cotten", role: "Deacon" },
  ],
};

export default function OfficersSection() {
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
      id="officers"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="section-label mb-4">Leadership</div>
          <h2
            className="font-display mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.12,
              color: "oklch(0.22 0.015 255)",
            }}
          >
            Our Officers
            <br />
            <em style={{ color: "var(--church-amber)", fontStyle: "italic" }}>
              &amp; Leadership
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
            Providence is governed by a Session of ruling elders and served by
            a Board of Deacons. Our officers are ordained to lead, teach, and
            care for the congregation.
          </p>
        </div>

        {/* Pastors */}
        <div className="mb-14">
          <div
            className="section-label mb-6"
            style={{ color: "oklch(0.52 0.015 255)" }}
          >
            Pastors
          </div>
          <div className="grid sm:grid-cols-2 gap-4 stagger">
            {officers.pastors.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 p-5"
                style={{
                  backgroundColor: "oklch(0.22 0.015 255)",
                  borderRadius: "4px",
                }}
              >
                {/* Initials avatar */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-display text-lg"
                  style={{
                    backgroundColor: "var(--church-amber)",
                    color: "white",
                    borderRadius: "4px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div
                    className="font-display text-white text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {person.name}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider mt-0.5"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "oklch(0.78 0.09 75)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elders */}
        <div className="mb-14">
          <div
            className="section-label mb-6"
            style={{ color: "oklch(0.52 0.015 255)" }}
          >
            Ruling Elders
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {officers.elders.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-3 p-4 transition-all duration-200"
                style={{
                  backgroundColor: "oklch(0.99 0.005 85)",
                  border: "1px solid oklch(0.92 0.008 85)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--church-amber)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(0.92 0.008 85)";
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-display"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    color: "var(--church-amber)",
                    borderRadius: "4px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "oklch(0.22 0.015 255)",
                    }}
                  >
                    {person.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deacons */}
        <div>
          <div
            className="section-label mb-6"
            style={{ color: "oklch(0.52 0.015 255)" }}
          >
            Deacons
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {officers.deacons.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-3 p-4 transition-all duration-200"
                style={{
                  backgroundColor: "oklch(0.99 0.005 85)",
                  border: "1px solid oklch(0.92 0.008 85)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--church-amber)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(0.92 0.008 85)";
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-display"
                  style={{
                    backgroundColor: "oklch(0.94 0.012 85)",
                    color: "oklch(0.55 0.06 145)",
                    borderRadius: "4px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "oklch(0.22 0.015 255)",
                    }}
                  >
                    {person.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
