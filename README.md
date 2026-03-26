# Dhruvi Madlani — Portfolio

Personal portfolio built with Next.js 14, custom CSS design tokens, dark/light theme toggle, and Devicon tech logos.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dhruvi-portfolio/
├── app/
│   ├── globals.css       # Design tokens, CSS variables, animations
│   ├── layout.js         # Root layout, theme toggle, orbs
│   └── page.js           # Main page assembling all sections
├── components/
│   ├── Navbar.js         # Fixed nav with mobile menu
│   ├── Hero.js           # Hero with photo, typewriter, floating badges
│   ├── About.js          # Bio, stats, awards, code block
│   ├── Skills.js         # Devicon logos + progress bars per category
│   ├── Experience.js     # Work history timeline
│   ├── Projects.js       # Project cards with live/GitHub links
│   ├── Education.js      # Education + certifications
│   ├── Contact.js        # Contact links + resume download
│   └── Footer.js         # Footer
└── public/
    ├── images/
    │   └── dhruvi.jpeg   # Your professional photo
    └── Dhruvi_Madlani_Resume.pdf  ← Add your resume here
```

## 🎨 Design System

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F2EDE4` | `#080810` |
| `--gold` | `#C17D2E` | `#E8922A` |
| `--text` | `#18181A` | `#F0EDE8` |

## 📦 Deploy on Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Click Deploy — done!

## ⚠️ Before Deploying

- Add your resume PDF to `public/Dhruvi_Madlani_Resume.pdf`
- Update social links in `Hero.js` and `Contact.js`
- Devicons require internet connection to load
