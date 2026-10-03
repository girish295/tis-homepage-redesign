import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { drawerVariants, fade, itemVariants } from '../../animation/variants'
import { navLinks, site } from '../../data/schoolData'
import Button from '../ui/Button'

export default function MobileDrawer({ open, onClose }) {
  const reduced = useReducedMotion()

  // Escape closes the drawer, and the page behind it shouldn't scroll while it's open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial="hidden" animate="show" exit="hidden" className="fixed inset-0 z-50">
          <motion.button
            type="button"
            variants={fade}
            onClick={onClose}
            aria-label="Close menu"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full bg-ink/60 backdrop-blur-sm"
          />
          <motion.aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            variants={drawerVariants(reduced)}
            className="dark-surface absolute inset-y-0 right-0 flex w-4/5 max-w-sm flex-col bg-forest p-8 text-mist shadow-2xl"
          >
            <button type="button" onClick={onClose} autoFocus aria-label="Close menu" className="self-end rounded-pill p-3 text-2xl">
              <FiX />
            </button>
            <ul className="mt-8 space-y-6">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants(reduced)}>
                  <a href={link.href} onClick={onClose} className="font-display text-3xl font-bold">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={itemVariants(reduced)} className="mt-auto">
              <Button href={site.applyUrl} variant="accent" target="_blank" rel="noopener noreferrer">
                Apply Now
              </Button>
            </motion.div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
