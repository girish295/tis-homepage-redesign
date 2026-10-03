import { highlights, rankings, stats } from '../../data/schoolData'
import Card from '../ui/Card'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Highlights() {
  return (
    <section id="highlights" className="py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={highlights.title} text={highlights.text} />

        <Stagger as="dl" className="mt-20 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {stats.map((stat, i) => (
            <Item key={stat.label} className={`flex flex-col-reverse ${i % 2 ? 'lg:mt-16' : ''}`}>
              <dt className="mt-3 max-w-[12rem] text-lg text-muted">{stat.label}</dt>
              <dd className="font-display text-stat font-bold text-forest">{stat.value}</dd>
            </Item>
          ))}
        </Stagger>

        <Stagger className="mt-24 grid gap-6 md:grid-cols-6">
          {rankings.map((rank) => (
            <Card key={rank.id} {...rank} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
