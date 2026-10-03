import { useCallback, useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { DURATION, EASE } from '../../animation/variants'
import { navLinks, site } from '../../data/schoolData'
import Button from '../ui/Button'
import MobileDrawer from './MobileDrawer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const close = useCallback(() => setOpen(false), [])

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  // Height stays fixed (layout isn't animated), so "shrinking" is a scale on the bar and logo.
  const shrink = scrolled && !reduced
  const transition = { duration: DURATION.fast, ease: EASE }

  return (
    <header className="sticky top-0 z-40">
      <motion.div
        aria-hidden="true"
        animate={{ scaleY: shrink ? 0.85 : 1, opacity: scrolled ? 1 : 0 }}
        transition={transition}
        className="absolute inset-0 origin-top bg-mist/95 backdrop-blur-md shadow-sm"
      />
      <nav aria-label="Primary" className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" aria-label={`${site.name}, back to top`}>
          <motion.span animate={{ scale: shrink ? 0.9 : 1 }} transition={transition} className="inline-flex origin-left items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-forest">TIS</span>
            <span className="hidden text-sm text-muted sm:inline">{site.name}</span>
          </motion.span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-medium underline-offset-8 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href={site.applyUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
          Apply Now
        </Button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="rounded-pill p-3 text-2xl md:hidden"
        >
          <FiMenu />
        </button>
      </nav>
      <MobileDrawer open={open} onClose={close} />
    </header>
  )
}
