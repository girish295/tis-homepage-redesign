// One easing, one set of durations, one set of variants. Everything animates transform or opacity only.
export const EASE = [0.22, 1, 0.36, 1]
export const DURATION = { fast: 0.25, base: 0.7 }
export const SPRING = { stiffness: 140, damping: 28, mass: 0.3 }

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// With reduced motion we keep the fade but drop the movement.
export const itemVariants = (reduced) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 32 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
})

export const fade = {
  hidden: { opacity: 0, transition: { duration: DURATION.fast, ease: EASE } },
  show: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE } },
}

export const drawerVariants = (reduced) => ({
  hidden: reduced ? { opacity: 0 } : { x: '100%' },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE, when: 'beforeChildren', staggerChildren: 0.06 },
  },
})
