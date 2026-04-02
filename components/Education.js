'use client'

const EDUCATION = [
  {
    school: 'Algonquin College',
    degree: 'Web Development & Internet Applications',
    type: 'Diploma',
    period: '2025 – 2027',
    location: 'Ottawa, ON',
    gpa: '4.0 / 4.0',
    note: "Dean's Honour List · Class Representative",
    description: 'Learning full-stack web development including HTML, CSS, JavaScript, React.js, Node.js, and integrating AI and cloud technologies.',
    website: 'https://www.algonquincollege.com',
    initials: 'AC',
    logoColor: '#006838',
    logoBg: '#E8F5E9',
    logoText: 'A',
    logoImg: '/images/algonquin.jpg',
    icons: ['devicon-html5-plain colored', 'devicon-javascript-plain colored', 'devicon-react-original colored', 'devicon-nodejs-plain colored', 'devicon-amazonwebservices-plain-wordmark colored'],
  },
  {
    school: 'Marwadi University',
    degree: 'Bachelor of Engineering — Computer Engineering',
    type: 'B.E.',
    period: 'Sep 2018 – Aug 2021',
    location: 'Gujarat, India',
    gpa: '3.69 / 4.0',
    note: null,
    description: 'Relevant coursework: Advanced Java, Software Engineering, Data Mining & Business Intelligence, Data Structures, and Algorithms.',
    website: 'https://www.marwadiuniversity.ac.in',
    initials: 'MU',
    logoColor: '#1565C0',
    logoBg: '#E3F2FD',
    logoText: 'M',
    logoImg: '/images/marwadi.png',
    icons: ['devicon-java-plain colored', 'devicon-mysql-plain colored', 'devicon-cplusplus-plain colored'],
  },
  {
    school: 'Government Polytechnic Porbandar',
    degree: 'Diploma in Engineering — Computer Engineering',
    type: 'Diploma',
    period: 'Aug 2015 – May 2018',
    location: 'Gujarat, India',
    gpa: null,
    note: null,
    description: 'Relevant coursework: Dynamic Web Page Development, Advanced DBMS, .Net Programming, Mobile Computing, and Application Development.',
    website: 'https://sites.google.com/view/gppr-cteguj',
    initials: 'GP',
    logoColor: '#4A235A',
    logoBg: '#F3E5F5',
    logoText: 'GP',
    logoImg: '/images/gpp.jpg',
    icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-dot-net-plain colored'],
  },
]

const CERTS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Aug 2025', icon: '☁', color: '#FF9900', bg: 'rgba(255,153,0,0.12)' },
  { name: 'GitHub Professional Certificate', issuer: 'GitHub', date: 'Mar 2026', icon: '⬡', color: 'var(--text)', bg: 'var(--card)' },
  { name: 'MERN Stack Certification', issuer: 'Online', date: 'Jun 2025', icon: '⚛', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
]

function LogoBadge({ edu }) {
  return (
    <div style={{
      width: '84px', height: '84px', borderRadius: '50%',
      background: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
      border: `2px solid ${edu.logoColor}33`,
      overflow: 'hidden', padding: '8px', flexShrink: 0,
    }}>
      <img
        src={edu.logoImg}
        alt={edu.school}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={e => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />
      <span style={{
        display: 'none', width: '100%', height: '100%',
        alignItems: 'center', justifyContent: 'center',
        fontSize: edu.logoText.length > 1 ? '1.2rem' : '2rem',
        fontWeight: 900, color: edu.logoColor,
        fontFamily: 'Georgia, serif', fontStyle: 'italic',
      }}>{edu.logoText}</span>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" style={{ borderTop: '1px solid var(--divider)', width: '100%' }}>
      <div className="section-wrap">
        <div className="section-label">
          <span>05 — Education</span>
          <div className="section-rule" />
        </div>
        <h2 className="section-title">Education<em>.</em></h2>

        {/* Degrees — latest first */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr',
              border: '1px solid var(--card-border)', borderRadius: '14px',
              overflow: 'hidden', transition: 'transform 0.25s, border-color 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--gold-border)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--card-border)' }}
            >
              {/* Logo column */}
              <div style={{
                background: edu.logoBg,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', padding: '32px 16px',
              }}>
                <LogoBadge edu={edu} />
              </div>

              {/* Content column */}
              <div style={{ background: 'var(--card)', padding: '28px 32px', backdropFilter: 'blur(10px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{edu.school}</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '4px' }}>{edu.degree}</p>
                    <p style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text3)' }}>
                      {edu.location}{edu.gpa ? ` · GPA: ${edu.gpa}` : ''}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text3)' }}>{edu.period}</span>
                    {edu.note && (
                      <div style={{ marginTop: '8px' }}>
                        <span style={{ padding: '4px 12px', background: 'var(--gold-bg)', border: '1px solid var(--gold-border)', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)' }}>{edu.note}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ height: '1px', background: 'var(--divider)', margin: '16px 0' }} />

                <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text2)', lineHeight: 1.7, marginBottom: '16px' }}>
                  <span style={{ color: 'var(--gold)', marginRight: '8px' }}>✦</span>{edu.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {edu.icons.map((cls, j) => (
                      <i key={j} className={cls} style={{ fontSize: '1.6rem' }} />
                    ))}
                  </div>
                  <a href={edu.website} target="_blank" rel="noopener noreferrer" style={{
                    padding: '8px 20px', border: '1px solid var(--card-border)',
                    borderRadius: '6px', fontSize: '0.88rem', fontWeight: 600,
                    color: 'var(--text2)', textDecoration: 'none',
                    transition: 'all 0.2s', background: 'transparent',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text2)' }}
                  >Visit Website ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>Certifications</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          {CERTS.map(c => (
            <div key={c.name} style={{
              background: 'var(--card)', border: '1px solid var(--card-border)',
              borderRadius: '10px', padding: '22px', display: 'flex', gap: '14px', alignItems: 'center',
              transition: 'transform 0.25s, border-color 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--gold-border)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--card-border)' }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: c.color, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginBottom: '4px' }}>{c.name}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text3)' }}>{c.issuer} · {c.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}