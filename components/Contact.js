"use client";
import { InlineWidget } from "react-calendly";

const LINKS = [
  {
    label: "Email",
    value: "dhruvimadlani2902@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=dhruvimadlani2902@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: "#EA4335" }}
      >
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhruvi-madlani",
    href: "https://linkedin.com/in/dhruvi-madlani",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: "#0A66C2" }}
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/dhruvimadlani29",
    href: "https://github.com/dhruvimadlani29",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: "#24292e" }}
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=dhruvimadlani2902@gmail.com&su=${encodeURIComponent(subject || `Portfolio Inquiry from ${name}`)}&body=Hi%20Dhruvi%2C%0A%0AMy%20name%20is%20${encodeURIComponent(name)}%20and%20my%20email%20is%20${encodeURIComponent(email)}.%0A%0A${encodeURIComponent(message)}%0A%0ABest%20regards%2C%0A${encodeURIComponent(name)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--divider)",
        background: "var(--bg2)",
        width: "100%",
      }}
    >
      <div className="section-wrap">
        <div className="section-label">
          <span>06 — Contact</span>
          <div className="section-rule" />
        </div>

        {/* Heading */}
        <h2 className="section-title" style={{ marginBottom: "56px" }}>
          Let's <em>work</em> together
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>.</em>
        </h2>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT — links + form */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Contact links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1px",
                background: "var(--divider)",
                border: "1px solid var(--divider)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--bg)",
                    padding: "18px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "background 0.2s, padding-left 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--card)";
                    e.currentTarget.style.paddingLeft = "32px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg)";
                    e.currentTarget.style.paddingLeft = "24px";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--bg2)",
                      border: "1px solid var(--divider)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {l.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--gold)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      {l.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--text2)",
                      }}
                    >
                      {l.value}
                    </p>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "var(--gold)",
                      fontSize: "1.1rem",
                    }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Message form */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "12px",
                padding: "20px",
                backdropFilter: "blur(10px)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Send a Message
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  flex: 1,
                }}
              >
                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "email", placeholder: "Your Email", type: "email" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      style={{
                        padding: "12px 16px",
                        background: "var(--bg)",
                        border: "1px solid var(--divider)",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        fontFamily: "inherit",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--gold)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--divider)")
                      }
                    />
                  ))}
                </div>

                {/* Subject */}
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  style={{
                    padding: "12px 16px",
                    background: "var(--bg)",
                    border: "1px solid var(--divider)",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    fontFamily: "inherit",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--gold)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--divider)")
                  }
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={4}
                  style={{
                    padding: "12px 16px",
                    background: "var(--bg)",
                    border: "1px solid var(--divider)",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    fontFamily: "inherit",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    flex: 1,
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--gold)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--divider)")
                  }
                />

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    padding: "14px",
                    background: "var(--gold)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                    boxShadow: "0 4px 20px rgba(193,125,46,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(193,125,46,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(193,125,46,0.3)";
                  }}
                >
                  Send Message ✉
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — Calendly */}
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid var(--divider)",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Book a Call
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text3)",
                }}
              >
                Pick a time that works for you — 30 min Google Meet
              </p>
            </div>
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                overflowY: "hidden",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                maxHeight: "640px",
              }}
            >
              <style>{`
                .calendly-inline-widget::-webkit-scrollbar { display: none !important; }
                .calendly-inline-widget { scrollbar-width: none !important; -ms-overflow-style: none !important; }
                .calendly-inline-widget iframe { scrollbar-width: none !important; }
              `}</style>
              <InlineWidget
                url="https://calendly.com/dhruvimadlani2902/30min"
                styles={{
                  height: "100%",
                  minHeight: "640px",
                  marginTop: "-60px",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: "C17D2E",
                  textColor: "18181A",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
