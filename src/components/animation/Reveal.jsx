import { motion, useReducedMotion } from 'framer-motion'
import { itemVariants, stagger } from '../../animation/variants'

const viewport = { once: true, amount: 0.2 }

// Parent: starts the stagger when it scrolls into view.
export function Stagger({ as = 'div', ...props }) {
  const Tag = motion[as]
  return <Tag variants={stagger} initial="hidden" whileInView="show" viewport={viewport} {...props} />
}

// Child: picks up hidden/show from the nearest Stagger.
export function Item({ as = 'div', ...props }) {
  const Tag = motion[as]
  const reduced = useReducedMotion()
  return <Tag variants={itemVariants(reduced)} {...props} />
}
