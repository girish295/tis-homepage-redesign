import { Item, Stagger } from '../animation/Reveal'

export default function SectionHeading({ title, text, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <Stagger className="max-w-3xl">
      <Item as="h2" className={`text-title ${dark ? 'text-mist' : 'text-ink'}`}>
        {title}
      </Item>
      {text && (
        <Item as="p" className={`mt-6 max-w-xl text-lg ${dark ? 'text-sage' : 'text-muted'}`}>
          {text}
        </Item>
      )}
    </Stagger>
  )
}
