import { gallery } from '../../data/schoolData'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" className="py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={gallery.title} />
        <Stagger className="mt-16 grid grid-cols-2 items-start gap-4 md:grid-cols-6 md:gap-6">
          {gallery.items.map((img) => (
            <Item as="figure" key={img.src} className={`overflow-hidden rounded-frame bg-sage shadow-md transition-transform duration-300 hover:scale-[1.02] ${img.className}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
