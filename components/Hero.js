"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ROLES = [
  "Full-Stack Developer",
  "React Specialist",
  "AWS Cloud Practitioner",
  "AI Integration Engineer",
  "Next.js Developer",
];

const STATS = [
  { val: "4+", label: "Years Experience" },
  { val: "4.0", label: "GPA" },
  { val: "5+", label: "Projects Built" },
  { val: "3", label: "Certifications" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;
    if (!deleting) {
      if (text.length < role.length) {
        timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "70px 6vw 44px",
        position: "relative",
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      {/* TOP ROW — Name + Photo */}
      <div
        className="hero-section"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4vw",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
              width: "fit-content",
              padding: "8px 18px",
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              borderRadius: "100px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#1D9E75",
                boxShadow: "0 0 10px rgba(29,158,117,.8)",
                display: "inline-block",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--text2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Open to Fall 2026 Co-op · Ottawa, ON
            </span>
          </div>

          {/* ✅ CHANGE 1 — Larger name + gold gradient on Madlani */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5.2vw, 4.1rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "22px",
              whiteSpace: "nowrap",
            }}
          >
            Dhruvi{" "}
            <em
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, var(--gold) 0%, #E8A84C 50%, #C17D2E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Madlani
            </em>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "var(--gold)",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: "0.98rem",
                fontWeight: 500,
                color: "var(--text2)",
                minWidth: "0",
                maxWidth: "100%",
              }}
            >
              {text}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  background: "var(--gold)",
                  marginLeft: "3px",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.98rem",
              fontWeight: 500,
              color: "var(--text2)",
              lineHeight: 1.68,
              maxWidth: "560px",
              marginBottom: "26px",
            }}
          >
            Web Development student and Full-stack developer with 4+ years
            building AI-integrated, cloud-connected web apps.<br /> Algonquin College
            · 4.0 GPA · AWS Certified · Dean's Honour List.
          </p>

          {/* ✅ CHANGE 3 — Bigger CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                padding: "18px 48px",
                background: "var(--gold)",
                color: "white",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "all 0.3s",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(193,125,46,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(193,125,46,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(193,125,46,0.3)";
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: "18px 48px",
                background: "transparent",
                border: "1.5px solid var(--gold-border)",
                color: "var(--text)",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "var(--gold-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gold-border)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* ✅ CHANGE 5 — Medium icon green, all brand colors */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              {
                label: "GitHub",
                href: "https://github.com/dhruvimadlani29",
                color: "#ffffff",
                bg: "#24292e",
                border: "#24292e",
                svg: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/dhruvi-madlani",
                color: "#ffffff",
                bg: "#0A66C2",
                border: "#0A66C2",
                svg: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:dhruvimadlani2902@gmail.com",
                color: "#ffffff",
                bg: "#EA4335",
                border: "#EA4335",
                svg: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                ),
              },
              {
                label: "Medium",
                href: "https://medium.com",
                color: "#ffffff",
                bg: "#00AB6C",
                border: "#00AB6C",
                svg: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: s.bg,
                  border: `2px solid ${s.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: `0 4px 14px ${s.bg}55`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.1)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${s.bg}88`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 4px 14px ${s.bg}55`;
                }}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div
          className="hero-photo-col"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(260px, 28vw, 400px)",
              height: "clamp(320px, 55vh, 500px)",
              flexShrink: 0,
            }}
          >
            {/* ✅ CHANGE 2 — Gold glow behind photo */}
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "28px",
                background:
                  "radial-gradient(ellipse at center, var(--gold) 0%, transparent 70%)",
                opacity: 0.18,
                zIndex: 0,
                filter: "blur(16px)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, var(--gold-border) 0%, transparent 50%, var(--gold-border) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-14px",
                right: "-14px",
                width: "72px",
                height: "72px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, var(--gold-bg), transparent)",
                border: "1px solid var(--gold-border)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "-14px",
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                background:
                  "linear-gradient(315deg, var(--gold-bg), transparent)",
                border: "1px solid var(--gold-border)",
                zIndex: 0,
                opacity: 0.7,
              }}
            />

            <Image
              src="/images/dhruvi.jpeg"
              alt="Dhruvi Madlani"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 15%",
                borderRadius: "16px",
                zIndex: 1,
              }}
              priority
            />

            {/* GPA badge */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "-16px",
                zIndex: 2,
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "10px",
                padding: "10px 14px",
                backdropFilter: "blur(20px)",
                animation: "floatY 4s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                }}
              >
                GPA
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                4.0
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text2)",
                }}
              >
                Dean's Honour List
              </div>
            </div>

            {/* Experience badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "-16px",
                zIndex: 2,
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "10px",
                padding: "10px 14px",
                backdropFilter: "blur(20px)",
                animation: "floatY 4s ease-in-out infinite",
                animationDelay: "2s",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                }}
              >
                Experience
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                4+ yrs
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text2)",
                }}
              >
                Full-stack dev
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CHANGE 4 — Stats with gold top border */}
      <div
        className="stats-row-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "var(--divider)",
          border: "1px solid var(--divider)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              background: "var(--card)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              backdropFilter: "blur(10px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--card)")
            }
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--gold)",
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--text3)",
                letterSpacing: "0.06em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.55,
          marginTop: "24px",
          cursor: "pointer",
          transition: "opacity 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.55";
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--text3)",
          }}
        >
          Scroll
        </span>
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          style={{ animation: "arrowBounce 2s ease-in-out infinite" }}
        >
          <path
            d="M7 0V16M7 16L1 10M7 16L13 10"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
