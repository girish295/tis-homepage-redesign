import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { SPRING } from '../../animation/variants'

export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, SPRING)

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduced ? scrollYProgress : smooth }}
      className="fixed inset-x-0 top-0 z-top h-1 origin-left bg-saffron"
    />
  )
}
