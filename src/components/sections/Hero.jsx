import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { hero, site } from '../../data/schoolData'
import Button from '../ui/Button'
import { Item, Stagger } from '../animation/Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Content */}
        <Stagger className="lg:col-span-7">
          {hero.kicker && (
            <Item className="mb-6 inline-flex items-center gap-2 rounded-pill bg-sage/60 px-4 py-1.5 text-xs sm:text-sm font-semibold text-forest">
              {hero.kicker}
            </Item>
          )}

          <h1 className="text-display text-ink">
            {hero.lines.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <Item as="span" className="block">
                  {line}
                </Item>
              </span>
            ))}
          </h1>

          <Item as="p" className="mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
            {hero.text}
          </Item>

          <Item className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={site.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply for Admission
              <FiArrowRight className="text-lg" />
            </Button>
            <Button href="#admissions" variant="outline">
              Enquire Now
            </Button>
            <Button href="#campus" variant="accent" className="bg-sage/70 hover:bg-forest hover:text-mist">
              Explore Campus
            </Button>
          </Item>

          {/* Highlights Row */}
          {hero.highlights && (
            <Item className="mt-10 grid grid-cols-3 gap-4 border-t border-sage/60 pt-6 max-w-lg">
              {hero.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display text-xl sm:text-2xl font-bold text-forest">{h.value}</p>
                  <p className="text-xs sm:text-sm text-muted">{h.label}</p>
                </div>
              ))}
            </Item>
          )}
        </Stagger>

        {/* Right Column: Hero Image with Frame and Badges */}
        <Stagger className="relative lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -right-4 top-4 rounded-card bg-saffron/80 -rotate-1 transform transition-transform"
          />
          <div className="relative overflow-hidden rounded-card bg-forest shadow-elevated">
            <Item
              as="img"
              src={hero.image.src}
              alt={hero.image.alt}
              className="aspect-[4/3] sm:aspect-[4/3.2] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
            {/* Floating pill badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-frame bg-mist/95 p-3.5 backdrop-blur-md shadow-md flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-forest text-saffron font-bold text-base">
                TIS
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-forest uppercase tracking-wider">Dehradun Campus</p>
                <p className="text-xs text-muted truncate">CBSE Affiliated • Day & Boarding Excellence</p>
              </div>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  )
}
