'use client'
export default function About() {
  const awards = [
    ["🏆 Dean's Honour List", "Algonquin College · Sep–Dec 2025"],
    ["🥈 2nd Place Hackathon", "Ada Sisterhood · MediFeel"],
    ["⭐ Rising Star Award", "Sufalam Technologies · 2023"],
  ]

  const stats = [
    { val: '4+', label: 'Years Exp' },
    { val: '4.0', label: 'GPA' },
    { val: '5+', label: 'Projects' },
    { val: '3', label: 'Certs' },
  ]

  return (
    <section id="about" style={{ borderTop: '1px solid var(--divider)', background: 'var(--bg2)', width: '100%' }}>
      <div className="section-wrap">
        <div className="section-label">
          <span>01 — About</span>
          <div className="section-rule" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-grid">
          {/* Left */}
          <div>
            <h2 className="section-title">
              Building the web,<br /><em>one commit</em> at a time.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {[
                "Full-stack developer with 4+ years of professional experience, currently in Year 2 of the Web Development and Internet Applications program at Algonquin College — Dean's Honour List, 4.0 GPA, and Class Representative.",
                "I specialize in AI-integrated, cloud-connected applications using React, Node.js, and AWS. From improving app performance to building AI-powered tools in a single project.",
                "Seeking Fall 2026 co-op in Ottawa. Open to frontend, full-stack, and cloud-focused roles.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text2)', lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>

            {/* Awards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--divider)', border: '1px solid var(--divider)', borderRadius: '8px', overflow: 'hidden' }}>
              {awards.map(([name, sub]) => (
                <div key={name} style={{
                  background: 'var(--bg)', padding: '16px 20px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  transition: 'background 0.2s, padding-left 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.paddingLeft = '28px' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.paddingLeft = '20px' }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>{name}</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text3)' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--card)', backdropFilter: 'blur(10px)', marginBottom: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-border), var(--gold), var(--gold-border), transparent)' }} />
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: '32px 24px', transition: 'background 0.2s', borderRight: i % 2 === 0 ? '1px solid var(--divider)' : 'none', borderBottom: i < 2 ? '1px solid var(--divider)' : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-bg)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--gold)', fontStyle: 'italic', lineHeight: 1, marginBottom: '6px' }}>{s.val}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</div>
                </div>
              ))}
            </div> */}

            <div style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '24px', backdropFilter: 'blur(10px)', marginBottom: '20px' }}>
              <p style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>Current Location</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Ottawa, Ontario 🍁</p>
              <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text3)', marginTop: '4px' }}>Permanent Resident of Canada</p>
            </div>

            {/* Code block */}
            <div className="code-block">
              <div className="code-comment">{'// dhruvi.config.js'}</div>
              <div><span className="code-key">const</span> <span className="code-val">developer</span> = {'{'}</div>
              <div>&nbsp;&nbsp;<span className="code-str">"name"</span>: <span className="code-val">"Dhruvi Madlani"</span>,</div>
              <div>&nbsp;&nbsp;<span className="code-str">"stack"</span>: [<span className="code-val">"React"</span>, <span className="code-val">"Node"</span>, <span className="code-val">"AWS"</span>],</div>
              <div>&nbsp;&nbsp;<span className="code-str">"status"</span>: <span className="code-val">"open_to_coop"</span>,</div>
              <div>&nbsp;&nbsp;<span className="code-str">"gpa"</span>: <span className="code-val">4.0</span><span className="code-cursor" /></div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}