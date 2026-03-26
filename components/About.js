'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ROLES = ['Full-Stack Developer', 'React Specialist', 'AWS Cloud Practitioner', 'AI Integration Engineer', 'Next.js Developer']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout
    if (!deleting) {
      if (text.length < role.length) timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 75)
      else timeout = setTimeout(() => setDeleting(true), 2200)
    } else {
      if (text.length > 0) timeout = setTimeout(() => setText(text.slice(0, -1)), 38)
      else { setDeleting(false); setRoleIndex(i => (i + 1) % ROLES.length) }
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" style={{ minHeight: '100vh', width: '100%', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column' }}>

      {/* MAIN CONTENT — fills viewport */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>

        {/* LEFT — dark panel */}
        <div style={{ background: 'var(--text)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 6vw 60px 6vw', position: 'relative', overflow: 'hidden' }}>

          {/* Decorative circle */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '36px', width: 'fit-content', padding: '8px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#1D9E75', boxShadow: '0 0 8px rgba(29,158,117,.9)', display: 'inline-block', animation: 'pulse 2s infinite', flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Open to Fall 2026 Co-op</span>
          </div>

          {/* Name */}
          <h1 style={{ fontWeight: 800, lineHeight: 0.88, letterSpacing: '-0.04em', marginBottom: '32px' }}>
            <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 6.5vw, 6rem)', color: 'rgba(255,255,255,0.95)' }}>Dhruvi</span>
            <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 6.5vw, 6rem)', color: 'var(--gold)', fontStyle: 'italic' }}>Madlani</span>
          </h1>

          {/* Typewriter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--gold)', borderRadius: '2px', flexShrink: 0 }} />
            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', minWidth: '260px' }}>
              {text}<span style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--gold)', marginLeft: '3px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </p>
          </div>

          {/* Description */}
          <p style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, maxWidth: '420px', marginBottom: '36px' }}>
            Full-stack developer with 4+ years building AI-integrated, cloud-connected web apps. Algonquin College · 4.0 GPA · AWS Certified.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '13px 32px', background: 'var(--gold)', color: 'white', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>View Projects</a>
            <a href="#contact" style={{ padding: '13px 32px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.transform = 'translateY(0)' }}>Get in Touch</a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/dhruvimadlani29' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dhruvi-madlani' },
              { label: 'Email', href: 'mailto:dhruvimadlani2902@gmail.com' },
              { label: 'Medium', href: 'https://medium.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — cream/light panel with photo */}
        <div style={{ background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '120px 5vw 60px', position: 'relative', gap: '28px' }}>

          {/* Photo */}
          <div style={{ position: 'relative', width: 'clamp(220px, 26vw, 380px)', height: 'clamp(280px, 50vh, 480px)', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: '-5px', borderRadius: '20px', border: '2px solid var(--gold-border)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '70px', height: '70px', borderRadius: '10px', background: 'var(--gold-bg)', border: '1px solid var(--gold-border)', zIndex: 0 }} />
            <Image src="/images/dhruvi.jpeg" alt="Dhruvi Madlani" fill style={{ objectFit: 'cover', objectPosition: 'top center', borderRadius: '16px' }} priority />

            {/* GPA badge */}
            <div style={{ position: 'absolute', bottom: '20px', left: '-18px', zIndex: 2, background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '10px 14px', backdropFilter: 'blur(20px)', animation: 'floatY 4s ease-in-out infinite' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>GPA</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>4.0</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text2)' }}>Dean's Honour List</div>
            </div>

            {/* Exp badge */}
            <div style={{ position: 'absolute', top: '20px', right: '-18px', zIndex: 2, background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '10px 14px', backdropFilter: 'blur(20px)', animation: 'floatY 4s ease-in-out infinite', animationDelay: '2s' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Experience</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>4+ yrs</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text2)' }}>Full-stack dev</div>
            </div>
          </div>

          {/* Mini stats row below photo */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', width: '100%', maxWidth: '380px' }}>
            {[
              { val: '5+', label: 'Projects' },
              { val: '3', label: 'Certifications' },
              { val: '10+', label: 'Clients' },
            ].map(s => (
              <div key={s.label} style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '14px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold)', fontStyle: 'italic', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text3)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Ottawa tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '100px' }}>
            <span>🍁</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text2)' }}>Ottawa, ON · Permanent Resident</span>
          </div>
        </div>
      </div>
    </section>
  )
}