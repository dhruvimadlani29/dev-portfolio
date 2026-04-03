"use client";

const TECHS = [
  { name: "JavaScript", cls: "devicon-javascript-plain colored" },
  { name: "TypeScript", cls: "devicon-typescript-plain colored" },
  { name: "Python", cls: "devicon-python-plain colored" },
  { name: "HTML5", cls: "devicon-html5-plain colored" },
  { name: "CSS3", cls: "devicon-css3-plain colored" },
  { name: "React", cls: "devicon-react-original colored" },
  { name: "Next.js", cls: "devicon-nextjs-plain" },
  { name: "Redux", cls: "devicon-redux-original colored" },
  { name: "Tailwind CSS", cls: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", cls: "devicon-nodejs-plain colored" },
  { name: "Express.js", cls: "devicon-express-original" },
  { name: "MongoDB", cls: "devicon-mongodb-plain colored" },
  { name: "MySQL", cls: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", cls: "devicon-postgresql-plain colored" },
  { name: "AWS", cls: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Firebase", cls: "devicon-firebase-plain colored" },
  { name: "Google Cloud", cls: "devicon-googlecloud-plain colored" },
  { name: "Git", cls: "devicon-git-plain colored" },
  { name: "GitHub", cls: "devicon-github-original" },
  { name: "Figma", cls: "devicon-figma-plain colored" },
];

function TechTile({ tech }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px 20px",
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--gold-border)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,125,46,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--card-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <i className={tech.cls} style={{ fontSize: "1.75rem", flexShrink: 0 }} />
      <span
        style={{
          fontSize: "0.92rem",
          fontWeight: 600,
          color: "var(--text2)",
          whiteSpace: "nowrap",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        borderTop: "1px solid var(--divider)",
        background: "var(--bg2)",
        width: "100%",
      }}
    >
      <div className="section-wrap">
        <div className="section-label">
          <span>02 — Skills</span>
          <div className="section-rule" />
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 className="section-title">
            Technologies <em>and </em> Tools
          </h2>
          {/* <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text3)', maxWidth: '580px', lineHeight: 1.7 }}>
            Using a combination of modern technologies and reliable open-source tools, I build AI-integrated, cloud-connected apps for web and mobile.
          </p> */}
        </div>

        <div
          className="skills-bottom-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {TECHS.map((tech) => (
            <TechTile key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
