import { campus, site } from '../../data/schoolData'
import Button from '../ui/Button'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Campus() {
  const [main, inset] = campus.images
  return (
    <section id="campus" className="dark-surface bg-forest py-section text-mist">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading title={campus.title} text={campus.text} tone="dark" />
          <Stagger as="ul" className="mt-12 flex flex-wrap gap-3">
            {campus.sports.map((sport) => (
              <Item as="li" key={sport} className="rounded-pill border border-sage/40 px-5 py-2 hover:bg-mist/10 transition-colors">
                {sport}
              </Item>
            ))}
          </Stagger>
          <Button href={site.virtualTourUrl} variant="accent" target="_blank" rel="noopener noreferrer" className="mt-12">
            Virtual Tour
          </Button>
        </div>

        <Stagger className="relative pb-24 lg:col-span-5">
          <Item as="img" src={main.src} alt={main.alt} className="ml-auto aspect-portrait w-4/5 rounded-frame bg-ink object-cover shadow-elevated" />
          <Item
            as="img"
            src={inset.src}
            alt={inset.alt}
            className="absolute bottom-0 left-0 aspect-square w-3/5 rounded-frame border-8 border-forest bg-ink object-cover shadow-elevated"
          />
        </Stagger>
      </div>
    </section>
  )
}
