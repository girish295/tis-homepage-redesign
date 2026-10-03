import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { DURATION, EASE, SPRING } from '../../animation/variants'
import useFinePointer from '../../hooks/useFinePointer'

export default function CustomCursor() {
  const fine = useFinePointer()
  const reduced = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, SPRING)
  const smoothY = useSpring(y, SPRING)
  const [grow, setGrow] = useState(false)

  useEffect(() => {
    if (!fine) return undefined
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => setGrow(Boolean(e.target.closest?.('a, button, input, select, [role="button"]')))
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
    }
  }, [fine, x, y])

  if (!fine) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: reduced ? x : smoothX, y: reduced ? y : smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-top -ml-5 -mt-5 h-10 w-10 mix-blend-difference"
    >
      <motion.div
        animate={{ scale: grow && !reduced ? 1.8 : 1 }}
        transition={{ duration: DURATION.fast, ease: EASE }}
        className="h-full w-full rounded-pill border-2 border-mist"
      />
    </motion.div>
  )
}
