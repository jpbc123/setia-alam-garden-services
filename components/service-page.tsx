import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { Faq, type FaqItem } from '@/components/faq'
import { services, site } from '@/lib/site'

export function ServicePage({
  slug,
  h1,
  image,
  intro,
  included,
  includedTitle = 'What\u2019s included',
  faqs,
}: {
  slug: string
  h1: string
  image: string
  intro: string[]
  included: string[]
  includedTitle?: string
  faqs: FaqItem[]
}) {
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <MapPin className="size-3.5" />
              Serving {site.serviceAreas.join(', ')}
            </span>
            <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {intro[0]}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src={image || '/placeholder.svg'}
              alt={`${h1} — placeholder image`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {intro.slice(1).map((p, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {includedTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
          <h2 className="text-balance text-center font-serif text-3xl font-semibold text-foreground">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Placeholder answers below — refine these with your real pricing and
            policies.
          </p>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Other services
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.short}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
