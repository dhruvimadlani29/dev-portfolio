'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ROLES = [
  'Full-Stack Developer',
  'React Specialist',
  'AWS Cloud Practitioner',
  'AI Integration Engineer',
  'Next.js Developer',
]

const STATS = [
  { val: '4+', label: 'Years Experience' },
  { val: '4.0', label: 'GPA' },
  { val: '5+', label: 'Projects Built' },
  { val: '3', label: 'Certifications' },
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout
    if (!deleting) {
      if (text.length < role.length) {
        timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 38)
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 6vw 60px',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      {/* TOP ROW — Name + Photo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4vw',
        alignItems: 'center',
        marginBottom: '48px',
      }}>

        {/* Left — Name + role + desc */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            marginBottom: '28px', width: 'fit-content', padding: '8px 18px',
            background: 'var(--card)', border: '1px solid var(--card-border)',
            borderRadius: '100px', backdropFilter: 'blur(10px)',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1D9E75', boxShadow: '0 0 10px rgba(29,158,117,.8)', display: 'inline-block', animation: 'pulse 2s infinite', flexShrink: 0 }} />
            {/* badge text: 0.8 → 0.92 */}
            <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Open to Fall 2026 Co-op · Ottawa, ON</span>
          </div>

          {/* Name — unchanged */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '24px', whiteSpace: 'nowrap' }}>
            Dhruvi <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Madlani</em>
          </h1>

          {/* Typewriter — unchanged */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', flexShrink: 0 }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text2)', minWidth: '300px' }}>
              {text}
              <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: 'var(--gold)', marginLeft: '3px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </p>
          </div>

          {/* Description — unchanged */}
          <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text2)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '32px' }}>
            Full-stack developer with 4+ years building AI-integrated, cloud-connected web apps. Algonquin College · 4.0 GPA · AWS Certified · Dean's Honour List.
          </p>

          {/* CTAs — unchanged */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '36px', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '14px 36px', background: 'var(--gold)', color: 'white', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
              View Projects
            </a>
            <a href="#contact" style={{ padding: '14px 36px', background: 'transparent', border: '1.5px solid var(--divider)', color: 'var(--text)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--divider)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Get in Touch
            </a>
          </div>

          {/* Socials: 0.82 → 0.92 */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/dhruvimadlani29' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dhruvi-madlani' },
              { label: 'Email', href: 'mailto:dhruvimadlani2902@gmail.com' },
              { label: 'Medium', href: 'https://medium.com' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text3)')}>
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 'clamp(260px, 28vw, 400px)', height: 'clamp(320px, 55vh, 500px)', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: '-6px', borderRadius: '20px', border: '2px solid var(--gold-border)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '80px', height: '80px', borderRadius: '12px', background: 'var(--gold-bg)', border: '1px solid var(--gold-border)', zIndex: 0 }} />
            <Image src="/images/dhruvi.jpeg" alt="Dhruvi Madlani" fill style={{ objectFit: 'cover', objectPosition: 'top center', borderRadius: '16px' }} priority />

            {/* GPA badge: 0.6 → 0.75, 0.68 → 0.82 */}
            <div style={{ position: 'absolute', bottom: '20px', left: '-16px', zIndex: 2, background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '10px 14px', backdropFilter: 'blur(20px)', animation: 'floatY 4s ease-in-out infinite' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>GPA</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>4.0</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text2)' }}>Dean's Honour List</div>
            </div>

            {/* Experience badge: 0.6 → 0.75, 0.68 → 0.82 */}
            <div style={{ position: 'absolute', top: '20px', right: '-16px', zIndex: 2, background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '10px 14px', backdropFilter: 'blur(20px)', animation: 'floatY 4s ease-in-out infinite', animationDelay: '2s' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Experience</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>4+ yrs</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text2)' }}>Full-stack dev</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW — Stats: label 0.78 → 0.92 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'var(--divider)',
        border: '1px solid var(--divider)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            background: 'var(--card)',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--card)')}>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold)', fontStyle: 'italic', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text3)', letterSpacing: '0.06em' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}