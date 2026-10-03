import { Item } from '../animation/Reveal'

export default function Card({ kicker, title, body, className = '' }) {
  return (
    <Item as="article" className={`rounded-card bg-sage p-8 md:p-10 ${className}`}>
      <p className="font-display text-title font-bold text-forest">{kicker}</p>
      <h3 className="mt-6 text-2xl text-ink font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-muted">{body}</p>
    </Item>
  )
}
