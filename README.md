# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo

- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** https://github.com/girish295/tis-homepage-redesign

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite (JavaScript / JSX)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion 11
- **Icons:** React Icons
- **Deployment:** Vercel / Netlify

## ✨ Standout Features Implemented

1. **Custom Cursor (Feature A):** A spring-damped interactive ring that smoothly tracks pointer coordinates and scales up over links and interactive elements. Automatically disabled on touch/coarse devices via the `useFinePointer` hook to preserve mobile UX.
2. **Scroll-Triggered Reveals (Feature B):** Coordinated staggered entrance animations using viewport intersection detection (`whileInView`) with snappy durations (0.3s–0.5s) to avoid delaying user scroll.
3. **Scroll Progress Bar (Feature D):** Fixed reading progress indicator mapped to viewport scroll depth using `useScroll()` and `useSpring()` for smooth, jitter-free interpolation.
4. **Accessibility & Reduced Motion:** Full `prefers-reduced-motion` compliance that gracefully replaces spatial translations with clean opacity fades. Includes keyboard skip links and accessible ARIA attributes across all interactive components.

## 📦 Getting Started Locally

1. **Clone the repository:**
```bash
git clone https://github.com/girish295/tis-homepage-redesign.git
cd tis-homepage-redesign
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
```bash
npm run build
npm run preview
```

## 🏗️ Component Architecture Overview

```text
src/
├── components/
│   ├── ui/          # Reusable UI primitives (Button, Card, SectionHeading)
│   ├── layout/      # Navbar, MobileDrawer, Footer
│   ├── sections/    # Hero, About, Highlights, Campus, Gallery, Admissions
│   └── animation/   # ScrollProgress, CustomCursor, Reveal
├── animation/       # Shared animation timing, spring config, and variants (variants.js)
├── hooks/           # Custom React hooks (useFinePointer.js)
├── data/            # Static content and school info (schoolData.js)
├── App.jsx          # Semantic document structure and layout assembly
└── index.css        # Core design tokens and global styles
```

## 🎨 Brand Identity Retained

- **Color Palette:** Authentic colors reflecting TIS's legacy (Deep Forest Green, Saffron Amber, Sage Neutral, Mist Surface).
- **Typography:** Serif display headings paired with clean sans-serif body copy for readability.
- **Accurate School Data:** Real metrics (22-acre campus, 6:1 student-faculty ratio, 16+ Olympic sports), contact details, and admissions pathways from [tis.edu.in](https://tis.edu.in).
