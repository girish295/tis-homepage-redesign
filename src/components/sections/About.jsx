import { about } from '../../data/schoolData'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-section">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading title={about.title} />
        </div>
        <Stagger className="space-y-10 lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Item as="p" className="font-display text-3xl font-semibold leading-tight text-forest">
            {about.lead}
          </Item>
          {about.paragraphs.map((text) => (
            <Item as="p" key={text} className="max-w-xl text-lg text-muted">
              {text}
            </Item>
          ))}
          <Item as="p" className="max-w-xl border-l-4 border-saffron pl-6 text-xl">
            {about.founded}
          </Item>
        </Stagger>
      </div>
    </section>
  )
}
