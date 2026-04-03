"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--divider)",
        padding: "24px 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      {/* <div
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text)",
          fontStyle: "italic",
        }}
      >
        Dhruvi{" "}
        <span style={{ color: "var(--gold)", fontStyle: "normal" }}>✦</span>
      </div> */}
      <p
        style={{
          fontSize: "0.82rem",
          fontWeight: 600,
          color: "var(--text3)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Designed & built by Dhruvi Madlani · 2026
      </p>
      <a
        href="https://github.com/dhruvimadlani29/dev-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.65rem",
          fontWeight: 600,
          color: "var(--text3)",
          textDecoration: "none",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "var(--gold)";
          e.target.style.borderBottomColor = "var(--gold)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "var(--text2)";
          e.target.style.borderBottomColor = "transparent";
        }}
      >
        Source ↗
      </a>
    </footer>
  );
}
