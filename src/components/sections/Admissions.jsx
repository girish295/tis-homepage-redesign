import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { admissions, site } from '../../data/schoolData'
import Button from '../ui/Button'
import { Item, Stagger } from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

const link = 'underline underline-offset-4 hover:text-saffron transition-colors'

function ContactRow({ Icon, term, children }) {
  return (
    <Item className="flex gap-4">
      <Icon aria-hidden="true" className="mt-1 shrink-0 text-xl text-saffron" />
      <div>
        <dt className="text-sm text-sage">{term}</dt>
        <dd className="mt-1 text-lg">{children}</dd>
      </div>
    </Item>
  )
}

export default function Admissions() {
  return (
    <section id="admissions" className="py-section">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading title={admissions.title} text={admissions.text} />
          <Stagger className="mt-12">
            <Item as="ul" className="flex flex-wrap gap-2">
              {admissions.classes.map((name) => (
                <li key={name} className="rounded-pill bg-sage px-4 py-1.5 text-sm font-semibold text-forest">
                  {name}
                </li>
              ))}
            </Item>
            <Item className="mt-8 flex flex-wrap gap-4">
              <Button href={site.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </Button>
              <Button href={site.helpline.href} variant="outline">
                Call Helpline
              </Button>
            </Item>
            <Item as="figure" className="mt-16 max-w-xl">
              <blockquote className="font-display text-2xl font-semibold leading-snug text-forest">
                “{admissions.quote.text}”
              </blockquote>
              <figcaption className="mt-4 text-muted">{admissions.quote.by}</figcaption>
            </Item>
          </Stagger>
        </div>

        <Stagger as="dl" className="dark-surface space-y-8 rounded-card bg-forest p-10 text-mist lg:col-span-5 lg:mt-24 shadow-elevated">
          <ContactRow Icon={FiPhone} term="Admission Helpline No.">
            <a href={site.helpline.href} className={link}>{site.helpline.label}</a>
          </ContactRow>
          <ContactRow Icon={FiPhone} term="Landline No.">
            {site.landlines.map((line, i) => (
              <span key={line.href}>
                {i > 0 && ', '}
                <a href={line.href} className={link}>{line.label}</a>
              </span>
            ))}
          </ContactRow>
          <ContactRow Icon={FiMail} term="Email">
            <a href={`mailto:${site.email}`} className={link}>{site.email}</a>
          </ContactRow>
          <ContactRow Icon={FiMapPin} term="Address">
            <a href={site.address.href} target="_blank" rel="noopener noreferrer" className={link}>
              {site.name}, {site.address.label}
            </a>
          </ContactRow>
        </Stagger>
      </div>
    </section>
  )
}
