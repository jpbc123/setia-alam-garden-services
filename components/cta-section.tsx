import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaSection({
  title = 'Ready for a tidier, greener garden?',
  description = 'Get a free, no-obligation quote today. Tell us what your garden needs and we\u2019ll get back to you fast.',
}: {
  title?: string
  description?: string
}) {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hi, I\u2019d like a quote for garden services.',
  )}`

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/85">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Request a Free Quote
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <MessageCircle className="size-5" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
          >
            <Phone className="size-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
