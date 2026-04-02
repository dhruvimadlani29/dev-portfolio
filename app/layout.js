'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
    else setDark(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Dhruvi Madlani — Full-Stack Developer</title>
        <meta name="description" content="Full-stack developer with 4+ years of experience. React, Node.js, AWS. Based in Ottawa, ON. Open to Fall 2026 co-op." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
      </head>
      <body>
        {/* Background orbs */}
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="grain" />

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          style={{
            position: 'fixed', bottom: '32px', right: '32px', zIndex: 200,
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--card)', border: '1px solid var(--gold-border)',
            backdropFilter: 'blur(20px)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        <Navbar dark={dark} setDark={setDark} />
        <main style={{ position: 'relative', zIndex: 10 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}