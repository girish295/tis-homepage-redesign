import { hero, site } from '../../data/schoolData'
import Button from '../ui/Button'
import { Item, Stagger } from '../animation/Reveal'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-hero max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-12">
      <Stagger className="lg:col-span-7">
        <h1 className="text-display text-ink">
          {hero.lines.map((line) => (
            <span key={line} className="block overflow-hidden pb-2">
              <Item as="span" className="block">
                {line}
              </Item>
            </span>
          ))}
        </h1>
        <Item as="p" className="mt-10 max-w-md text-xl text-muted">
          {hero.text}
        </Item>
        <Item className="mt-10 flex flex-wrap gap-4">
          <Button href={site.applyUrl} target="_blank" rel="noopener noreferrer">
            Apply Now
          </Button>
          <Button href="#admissions" variant="outline">
            Enquire Now
          </Button>
        </Item>
      </Stagger>

      <Stagger className="relative lg:col-span-5">
        <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-frame bg-saffron" />
        <Item as="img" src={hero.image.src} alt={hero.image.alt} className="relative aspect-portrait w-full rounded-frame bg-sage object-cover shadow-elevated" />
      </Stagger>
    </section>
  )
}
