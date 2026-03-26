'use client'

const LINKS = [
  { label: 'Email', value: 'dhruvimadlani2902@gmail.com', href: 'mailto:dhruvimadlani2902@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/dhruvi-madlani', href: 'https://linkedin.com/in/dhruvi-madlani' },
  { label: 'GitHub', value: 'github.com/dhruvimadlani29', href: 'https://github.com/dhruvimadlani29' },
]

const HIGHLIGHTS = [
  { icon: '⚡', text: 'Available Fall 2026' },
  { icon: '📍', text: 'Ottawa, ON' },
  { icon: '💬', text: 'Reply within 24hrs' },
  { icon: '🎓', text: '4.0 GPA · AWS Certified' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--divider)', background: 'var(--bg2)', width: '100%' }}>
      <div className="section-wrap">
        <div className="section-label">
          <span>06 — Contact</span>
          <div className="section-rule" />
        </div>

        <div style={{
          background: 'var(--card)', border: '1px solid var(--card-border)',
          borderRadius: '20px', padding: '64px', backdropFilter: 'blur(20px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            {/* Title — 2 lines */}
            <h2 style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 800, color: 'var(--text)',
              lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '28px',
            }}>
              Let's <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>work</em> together<em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>.</em>
            </h2>

            {/* Subtext — bigger and bolder */}
            <p style={{
              fontSize: '1.1rem', fontWeight: 500,
              color: 'var(--text2)', lineHeight: 1.8,
              maxWidth: '400px', marginBottom: '36px',
            }}>
              Open to frontend, full-stack and cloud roles in Ottawa — Fall 2026. Reply within 24 hours.
            </p>

            {/* Highlight pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {HIGHLIGHTS.map(h => (
                <div key={h.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '8px 16px', background: 'var(--gold-bg)',
                  border: '1px solid var(--gold-border)', borderRadius: '100px',
                }}>
                  <span style={{ fontSize: '0.9rem' }}>{h.icon}</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {LINKS.map((l, i) => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '14px'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
              >
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '5px' }}>{l.label}</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text2)' }}>{l.value}</p>
                </div>
                <span style={{ color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 700 }}>↗</span>
              </a>
            ))}

            <a
              href="/Dhruvi_Madlani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block', marginTop: '28px', padding: '16px 0',
                textAlign: 'center', background: 'var(--gold)', color: 'white',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '6px', transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Download Résumé ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}