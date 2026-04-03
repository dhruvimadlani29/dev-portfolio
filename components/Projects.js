"use client";
import { useState } from "react";

const TAG_STYLES = {
  Personal: {
    color: "#1D9E75",
    bg: "rgba(29,158,117,0.08)",
    border: "rgba(29,158,117,0.3)",
  },
  Academic: {
    color: "#3178C6",
    bg: "rgba(49,120,198,0.08)",
    border: "rgba(49,120,198,0.3)",
  },
  Hackathon: {
    color: "#C17D2E",
    bg: "rgba(193,125,46,0.08)",
    border: "rgba(193,125,46,0.3)",
  },
  Company: {
    color: "#7B3FA0",
    bg: "rgba(123,63,160,0.08)",
    border: "rgba(123,63,160,0.3)",
  },
};

const PROJECTS = [
  {
    title: "Portfolio",
    tags: ["Personal"],
    desc: "Built with Next.js 14, custom CSS design tokens, dark/light theme toggle, Devicon tech logos, filterable project grid, timeline experience section, Calendly booking, and Gmail pre-fill contact form.",
    tech: ["Next.js", "React", "CSS Variables", "Devicons", "Vercel"],
    live: "https://dhruvi-madlani.vercel.app/",
    github: "https://github.com/dhruvimadlani29/dev-portfolio",
    accent: "#1D9E75",
    icon: "🌐",
  },
  {
    title: "Job Application Tracker",
    tags: ["Personal"],
    desc: "AI-powered web app with 5 Groq AI tools, AWS Cognito auth, push notifications, PDF export and dark mode.",
    tech: ["React", "AWS Cognito", "Groq API", "Tailwind", "Vercel"],
    live: "https://job-application-tracker-nu-eight.vercel.app/login",
    github: "https://github.com/dhruvimadlani29/job-application-tracker",
    accent: "#1D9E75",
    icon: "🎯",
  },
  {
    title: "MediFeel — Health Tracker",
    tags: ["Hackathon"],
    desc: "Ada Sisterhood Hackathon · 🥈 2nd Place · Prototype only. AI health tracking with symptom logging, body map and doctor portal.",
    tech: ["React", "AI Integration", "Healthcare APIs"],
    live: null,
    github: "https://github.com/dhruvimadlani29/medifeel",
    accent: "#C17D2E",
    icon: "🏥",
  },
  {
    title: "Pokédex App",
    tags: ["Academic"],
    desc: "Vanilla JS Pokémon discovery app using PokéAPI with localStorage catch system and responsive UI.",
    tech: ["JavaScript", "HTML5", "CSS3", "PokéAPI"],
    live: "https://dhruvi-pokemon.netlify.app",
    github: "https://github.com/dhruvimadlani29/pokemon-app",
    accent: "#3178C6",
    icon: "⚡",
  },
  {
    title: "Responsive Landing Page",
    tags: ["Academic"],
    desc: "Multi-section landing page built with zero frameworks — pure CSS Grid & Flexbox, fully cross-browser.",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    live: null,
    github: "https://github.com/dhruvimadlani29",
    accent: "#3178C6",
    icon: "🖥",
  },
  {
    title: "Real Estate Scheduling Platform",
    tags: ["Company"],
    desc: "Web-based scheduling platform for real estate transactions, connecting customers, agents, and vendors. US-based client.",
    tech: ["React.js", "Node.js", "TypeScript", "MySQL"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "🏢",
  },
  {
    title: "Payment Gateway Solution",
    tags: ["Company"],
    desc: "Payment gateway integration for seamless online transactions with real-time notifications and secure processing.",
    tech: ["React.js", "Node.js", "REST APIs", "MySQL"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "💳",
  },
  {
    title: "B2B E-Commerce Platform",
    tags: ["Company"],
    desc: "B2B e-commerce platform for seamless business transactions with integrated payment gateways and inventory management.",
    tech: ["React.js", "TypeScript", "Node.js", "MySQL"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "🛒",
  },
  {
    title: "Asset Tracking System",
    tags: ["Company"],
    desc: "System to track company assets using barcode scanning and real-time monitoring with dashboard analytics.",
    tech: ["React.js", "Node.js", "MongoDB"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "📦",
  },
  {
    title: "Mobile Tracking & Identity Verification",
    tags: ["Company"],
    desc: "Mobile tracking and identity verification platform for retrieving detailed user information with secure authentication.",
    tech: ["React.js", "Node.js", "TypeScript", "Firebase"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "🔐",
  },
  {
    title: "File Conversion Utility",
    tags: ["Company"],
    desc: "Utility to convert files between multiple formats with batch processing support and progress tracking.",
    tech: ["React.js", "Node.js", "Express.js"],
    live: null,
    github: null,
    accent: "#7B3FA0",
    icon: "🔄",
  },
];

function TagBadge({ tag }) {
  const s = TAG_STYLES[tag] || TAG_STYLES["Personal"];
  return (
    <span
      style={{
        padding: "2px 9px",
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: "100px",
        fontSize: "0.7rem",
        fontWeight: 700,
        color: s.color,
        whiteSpace: "nowrap",
      }}
    >
      {tag}
    </span>
  );
}

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? p.accent + "55" : "var(--card-border)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 48px ${p.accent}22` : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Coloured top bar */}
      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${p.accent}, ${p.accent}44)`,
          transition: "height 0.3s",
        }}
      />

      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {/* Icon + title row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              flexShrink: 0,
              background: p.accent + "15",
              border: `1px solid ${p.accent}33`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
            }}
          >
            {p.icon}
          </div>

          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.3,
                marginBottom: "6px",
              }}
            >
              {p.title}
            </h3>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {p.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "32px",
                  height: "32px",
                  background: p.accent,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                title="Live"
              >
                ↗
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid var(--divider)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text2)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.accent;
                  e.currentTarget.style.color = p.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--divider)";
                  e.currentTarget.style.color = "var(--text2)";
                }}
                title="GitHub"
              >
                ⌥
              </a>
            )}
            {!p.live && !p.github && (
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "var(--text3)",
                  fontStyle: "italic",
                  padding: "6px 4px",
                }}
              >
                Private
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--divider)" }} />

        {/* Description */}
        <p
          style={{
            fontSize: "0.88rem",
            fontWeight: 500,
            color: "var(--text2)",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {p.desc}
        </p>

        {/* Tech pills */}
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            marginTop: "auto",
          }}
        >
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 9px",
                border: "1px solid var(--tag-border)",
                borderRadius: "100px",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--tag)",
                background: "var(--bg)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const filters = ["All", "Personal", "Academic", "Hackathon", "Company"];
  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <section
      id="projects"
      style={{
        borderTop: "1px solid var(--divider)",
        background: "var(--bg2)",
        width: "100%",
      }}
    >
      <div className="section-wrap">
        <div className="section-label">
          <span>04 — Projects</span>
          <div className="section-rule" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <h2 className="section-title" style={{ margin: 0 }}>
            Selected <em>Work</em>
          </h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {filters.map((f) => {
              const isActive = active === f;
              const s = f !== "All" ? TAG_STYLES[f] : null;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: "8px 18px",
                    background: isActive
                      ? s
                        ? s.bg
                        : "var(--gold-bg)"
                      : "transparent",
                    border: `1.5px solid ${isActive ? (s ? s.border : "var(--gold-border)") : "var(--divider)"}`,
                    borderRadius: "100px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: isActive
                      ? s
                        ? s.color
                        : "var(--gold)"
                      : "var(--text3)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--gold-border)";
                      e.currentTarget.style.color = "var(--gold)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--divider)";
                      e.currentTarget.style.color = "var(--text3)";
                    }
                  }}
                >
                  {f}
                  {f !== "All" && (
                    <span
                      style={{
                        opacity: 0.55,
                        fontSize: "0.72rem",
                        marginLeft: "4px",
                      }}
                    >
                      ({PROJECTS.filter((p) => p.tags.includes(f)).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-column grid */}
        <div  
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
