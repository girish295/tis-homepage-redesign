import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { footer, site } from '../../data/schoolData'
import { Item, Stagger } from '../animation/Reveal'

const icons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
}

export default function Footer() {
  return (
    <footer className="dark-surface bg-ink py-16 text-mist border-t border-mist/10">
      <Stagger className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
        <Item className="md:col-span-5">
          <p className="font-display text-3xl font-bold">{site.name}</p>
          <p className="mt-4 max-w-sm text-sage">{site.address.label}</p>
          <ul className="mt-8 flex gap-3">
            {footer.socials.map(({ id, label, href }) => {
              const Icon = icons[id]
              return (
                <li key={id}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-pill border border-sage/40 p-3 hover:bg-forest hover:border-forest transition-colors"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </Item>
        <Item as="ul" className="grid gap-3 sm:grid-cols-2 md:col-span-7">
          {footer.links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline text-mist/90 hover:text-mist"
              >
                {item.label}
              </a>
            </li>
          ))}
        </Item>
      </Stagger>
      <div className="mx-auto mt-16 max-w-7xl space-y-1 px-6 text-sm text-sage">
        <p>{footer.legal}</p>
        <p>Redesign concept developed for Tulas International School. Official site: tis.edu.in</p>
      </div>
    </footer>
  )
}
