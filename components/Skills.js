'use client'

const SKILL_CATEGORIES = [
  {
    label: 'Languages', headBg: 'rgba(247,223,30,0.12)', labelColor: '#854F0B',
    icons: [
      { cls: 'devicon-javascript-plain', color: '#F7B731' },
      { cls: 'devicon-typescript-plain', color: '#3178C6' },
      { cls: 'devicon-python-plain', color: '#3572A5' },
      { cls: 'devicon-html5-plain', color: '#E34F26' },
      { cls: 'devicon-css3-plain', color: '#1572B6' },
    ],
    bars: [
      { name: 'JavaScript ES6+', pct: 95, color: '#F7B731' },
      { name: 'TypeScript', pct: 88, color: '#3178C6' },
      { name: 'HTML5 / CSS3', pct: 95, color: '#E34F26' },
      { name: 'Python', pct: 70, color: '#3572A5' },
    ],
  },
  {
    label: 'Frontend', headBg: 'rgba(97,218,251,0.12)', labelColor: '#085041',
    icons: [
      { cls: 'devicon-react-original', color: '#61DAFB' },
      { cls: 'devicon-nextjs-plain', color: 'var(--text)' },
      { cls: 'devicon-redux-original', color: '#764ABC' },
      { cls: 'devicon-tailwindcss-plain', color: '#38BDF8' },
    ],
    bars: [
      { name: 'React.js', pct: 95, color: '#61DAFB' },
      { name: 'Next.js', pct: 82, color: '#888' },
      { name: 'Redux', pct: 85, color: '#764ABC' },
      { name: 'Tailwind CSS', pct: 90, color: '#38BDF8' },
    ],
  },
  {
    label: 'Backend', headBg: 'rgba(51,153,51,0.12)', labelColor: '#27500A',
    icons: [
      { cls: 'devicon-nodejs-plain', color: '#339933' },
      { cls: 'devicon-express-original', color: 'var(--text)' },
    ],
    bars: [
      { name: 'Node.js', pct: 88, color: '#339933' },
      { name: 'Express.js', pct: 85, color: '#555' },
      { name: 'REST APIs', pct: 92, color: '#1D9E75' },
    ],
  },
  {
    label: 'Cloud & Auth', headBg: 'rgba(255,153,0,0.12)', labelColor: '#633806',
    icons: [
      { cls: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900' },
      { cls: 'devicon-firebase-plain', color: '#FFCA28' },
      { cls: 'devicon-googlecloud-plain', color: '#4285F4' },
    ],
    bars: [
      { name: 'AWS Cognito', pct: 82, color: '#FF9900' },
      { name: 'Firebase', pct: 78, color: '#FFCA28' },
      { name: 'Google OAuth', pct: 85, color: '#4285F4' },
    ],
  },
  {
    label: 'Database', headBg: 'rgba(71,162,72,0.12)', labelColor: '#27500A',
    icons: [
      { cls: 'devicon-mongodb-plain', color: '#47A248' },
      { cls: 'devicon-mysql-plain', color: '#4479A1' },
      { cls: 'devicon-postgresql-plain', color: '#336791' },
    ],
    bars: [
      { name: 'MongoDB', pct: 88, color: '#47A248' },
      { name: 'MySQL', pct: 85, color: '#4479A1' },
      { name: 'PostgreSQL', pct: 80, color: '#336791' },
    ],
  },
  {
    label: 'AI & Tools', headBg: 'rgba(127,119,221,0.12)', labelColor: '#3C3489',
    icons: [
      { cls: 'devicon-github-original', color: 'var(--text)' },
      { cls: 'devicon-figma-plain', color: '#F24E1E' },
      { cls: 'devicon-git-plain', color: '#F05032' },
    ],
    bars: [
      { name: 'Groq / OpenAI', pct: 85, color: '#7F77DD' },
      { name: 'Git / GitHub', pct: 92, color: '#F05032' },
      { name: 'Figma', pct: 75, color: '#F24E1E' },
    ],
  },
]

function SkillCard({ cat }) {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--card-border)', transition: 'transform .25s, border-color .25s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--gold-border)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--card-border)' }}
    >
      {/* Header */}
      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', background: cat.headBg }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {cat.icons.map((ic, i) => (
            <i key={i} className={ic.cls} style={{ color: ic.color, fontSize: '1.5rem' }} />
          ))}
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: cat.labelColor, marginLeft: 'auto' }}>{cat.label}</span>
      </div>
      {/* Bars */}
      <div style={{ background: 'var(--bg)', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {cat.bars.map(bar => (
          <div key={bar.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text2)', width: '130px', flexShrink: 0 }}>{bar.name}</span>
            <div style={{ flex: 1, height: '5px', background: 'var(--divider)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${bar.pct}%`, height: '100%', background: bar.color, borderRadius: '3px' }} />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text3)', width: '36px', textAlign: 'right', flexShrink: 0 }}>{bar.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--divider)', background: 'var(--bg2)', width: '100%' }}>
      <div className="section-wrap">
        <div className="section-label">
          <span>02 — Skills</span>
          <div className="section-rule" />
        </div>
        <h2 className="section-title">Tech <em>Stack</em></h2>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {SKILL_CATEGORIES.map(cat => <SkillCard key={cat.label} cat={cat} />)}
        </div>
      </div>
    </section>
  )
}