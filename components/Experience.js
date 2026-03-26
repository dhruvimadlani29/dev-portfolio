'use client'

const EXPERIENCES = [
  {
    role: 'Senior Frontend Developer',
    company: 'Dvij Infotech',
    location: 'Ahmedabad, India',
    period: 'Apr 2024 – Oct 2024',
    type: 'Full-time',
    initials: 'DI',
    logoImg: '/images/dvij.png',
    logoColor: '#C17D2E',
    logoBg: '#FFF8F0',
    bullets: [
      'Led frontend development using React.js, TypeScript, Redux — turning mockups into polished browser-compatible pages',
      'Improved web application performance from 7% to 85% by identifying bottlenecks and restructuring key components',
      'Built reusable component library cutting UI development time by ~20% across multiple projects',
      'Mentored interns and junior developers, supporting on-time project delivery',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Sufalam Technologies',
    location: 'Ahmedabad, India',
    period: 'Jan 2021 – Mar 2024',
    type: 'Full-time',
    initials: 'ST',
    logoImg: '/images/sufalam.png',
    logoColor: '#1565C0',
    logoBg: '#E3F2FD',
    bullets: [
      'Designed and maintained 5+ client projects using React.js, Node.js, TypeScript, and MySQL',
      'Contributed to a US-based real estate platform managing closing documents and stakeholders',
      'Worked on payment gateways, B2B e-commerce platforms, and asset tracking systems',
    ],
  },
  {
    role: 'Class Representative',
    company: 'Algonquin College',
    location: 'Ottawa, ON',
    period: 'Sep 2025 – Present',
    type: 'Volunteer',
    initials: 'AC',
    logoImg: '/images/algonquin.jpg',
    logoColor: '#006838',
    logoBg: '#E8F5E9',
    bullets: [
      'Main liaison between faculty and 30+ students — communicating academic updates and deadlines',
      'Advocated for student concerns with faculty and administration, ensuring timely resolution',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ borderTop: '1px solid var(--divider)', background: 'var(--bg2)', width: '100%' }}>
      <div className="section-wrap">
        <div className="section-label">
          <span>03 — Experience</span>
          <div className="section-rule" />
        </div>
        <h2 className="section-title">Work <em>History</em></h2>

        {/* Timeline */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '42px', top: '0', bottom: '0',
            width: '2px', background: 'var(--divider)', zIndex: 0,
          }} />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '86px 1fr',
              gap: '24px',
              marginBottom: i < EXPERIENCES.length - 1 ? '32px' : '0',
              position: 'relative',
              zIndex: 1,
            }}>

              {/* Logo + dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                {/* Company logo circle */}
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'white',
                  border: `2px solid ${exp.logoColor}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  flexShrink: 0, zIndex: 2, position: 'relative',
                  overflow: 'hidden', padding: '10px',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}>
                  <img
                    src={exp.logoImg}
                    alt={exp.company}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  <span style={{
                    display: 'none', width: '100%', height: '100%',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', fontWeight: 900,
                    color: exp.logoColor, letterSpacing: '-0.02em',
                    fontFamily: 'Georgia, serif', fontStyle: 'italic',
                  }}>{exp.initials}</span>
                </div>

                {/* Dot on the line */}
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: exp.logoColor,
                  border: '2px solid var(--bg2)',
                  marginTop: '8px',
                  boxShadow: `0 0 0 3px ${exp.logoColor}33`,
                  flexShrink: 0,
                }} />
              </div>

              {/* Card */}
              <div style={{
                background: 'var(--card)', border: '1px solid var(--card-border)',
                borderRadius: '14px', padding: '28px 32px',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(6px)'
                  e.currentTarget.style.borderColor = 'var(--gold-border)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.borderColor = 'var(--card-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: '4px' }}>{exp.role}</h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gold)' }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text3)', marginBottom: '6px' }}>{exp.period}</p>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                      <span style={{
                        padding: '3px 10px',
                        border: `1px solid ${exp.type === 'Volunteer' ? 'var(--gold-border)' : 'var(--card-border)'}`,
                        color: exp.type === 'Volunteer' ? 'var(--gold)' : 'var(--text3)',
                        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                        textTransform: 'uppercase', borderRadius: '4px',
                      }}>{exp.type}</span>
                      <span style={{
                        padding: '3px 10px', border: '1px solid var(--card-border)',
                        color: 'var(--text3)', fontSize: '0.75rem', fontWeight: 600,
                        borderRadius: '4px',
                      }}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'var(--divider)', margin: '16px 0' }} />

                {/* Bullets */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: '0.95rem', fontWeight: 500, color: 'var(--text2)',
                      lineHeight: 1.7, paddingLeft: '20px', position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--gold)', fontSize: '0.65rem', top: '5px' }}>✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}