import type { Metadata } from 'next'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Free Quote | Garden Services in Setia Alam',
  description:
    'Get a free quote from Setia Alam Garden Services. Call, WhatsApp, or fill in our quick form for garden maintenance, landscaping, artificial grass, and tree trimming.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hi, I\u2019d like a quote for garden services.',
  )}`

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <h1 className="text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Get your free quote
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Tell us what your garden needs and we&apos;ll get back to you
            quickly. Prefer to talk? Call or WhatsApp us directly — we&apos;re
            happy to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact methods */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Call us
                  </span>
                  <span className="block font-semibold text-foreground">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <MessageCircle className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="block font-semibold text-foreground">
                    Chat with us instantly
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Email
                  </span>
                  <span className="block font-semibold text-foreground">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Service area</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {site.serviceAreas.join(', ')} and surrounding areas in
                    Shah Alam, Selangor.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-border pt-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Opening hours</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
