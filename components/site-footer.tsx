import Link from 'next/link'
import { Clock, Leaf, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { nav, services, site } from '@/lib/site'

export function SiteFooter() {
  const waHref = `https://wa.me/${site.whatsapp}`

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="font-serif text-lg font-semibold text-foreground">
              {site.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Your local, family-run garden and landscaping team serving Setia
            Alam and the surrounding townships in Shah Alam, Selangor.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-sm font-semibold text-foreground">
            Our Services
          </h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-sm font-semibold text-foreground">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {nav
              .filter((n) => ['/', '/about', '/contact'].includes(n.href))
              .map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-sm font-semibold text-foreground">
            Get in Touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.address.street}, {site.address.locality},{' '}
                {site.address.region}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4 shrink-0 text-primary" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-primary" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Placeholder content — details to be updated before launch.</p>
        </div>
      </div>
    </footer>
  )
}
