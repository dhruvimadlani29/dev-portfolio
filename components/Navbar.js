"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBase = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: scrolled ? "14px 56px" : "20px 56px",
    backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
    backdropFilter: scrolled ? "blur(24px)" : "none",
    borderBottom: scrolled
      ? "1px solid var(--nav-border)"
      : "1px solid transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.4s ease",
  };

  return (
    <nav className="navbar-root" style={navBase}>
      <a
        href="#home"
        style={{
          fontFamily: "inherit",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text)",
          textDecoration: "none",
          fontStyle: "italic",
        }}
      >
        Dhruvi{" "}
        <span style={{ color: "var(--gold)", fontStyle: "normal" }}>✦</span>
      </a>

      {/* Desktop */}
      <div
        className="desktop-nav"
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
      >
        {NAV.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--text2)",
              textDecoration: "none",
              letterSpacing: "0.12em",
              transition: "color 0.2s, border-color 0.2s",
              position: "relative",
              textTransform: "uppercase",
              paddingBottom: "3px",
              borderBottom: "1.5px solid transparent",
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
            {link.label}
          </a>
        ))}

        <a
          href="https://mail.google.com/mail/?view=cm&to=dhruvimadlani2902@gmail.com&su=Resume%20Request&body=Hi%20Dhruvi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20receive%20a%20copy%20of%20your%20resume.%0A%0AThanks!"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 22px",
            border: "1.5px solid var(--gold)",
            color: "var(--gold)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          Request Resume ↗
        </a>
        <a
          href="https://calendly.com/dhruvimadlani2902/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 22px",
            background: "var(--gold)",
            color: "white",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "4px 0 0 4px",
            transition: "all 0.25s",
            border: "1.5px solid var(--gold)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          📅 Book a Call
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenu(!menu)}
        className="mobile-hamburger"
        aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--gold)",
          fontSize: "1.6rem",
          lineHeight: 1,
          textShadow: "0 0 8px rgba(0,0,0,0.25)",
        }}
      >
        {menu ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menu && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--nav-bg)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--nav-border)",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenu(false)}
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                fontStyle: "normal",
                color: "var(--text)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&to=dhruvimadlani2902@gmail.com&su=Resume%20Request&body=Hi%20Dhruvi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20receive%20a%20copy%20of%20your%20resume.%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenu(false)}
            style={{
              padding: "10px 0",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            Request Resume ↗
          </a>
          <a
            href="https://calendly.com/dhruvimadlani2902/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenu(false)}
            style={{
              padding: "10px 0",
              border: "1px solid var(--gold)",
              backgroundColor: "var(--gold)",
              color: "white",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            📅 Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
