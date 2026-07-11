import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { Testimonials } from '@/components/testimonials'
import { services, site, trustStats } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Garden Maintenance & Landscaping in Setia Alam, Shah Alam',
  description:
    'Setia Alam Garden Services offers reliable garden maintenance, landscaping, artificial grass, and tree trimming for homes in Setia Alam, Alam Impian, Bukit Raja, and Eco Ardence.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hi, I\u2019d like a quote for garden services.',
  )}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://setiaalamgardenservices.example/#business',
    name: site.name,
    image: 'https://setiaalamgardenservices.example/images/hero-garden.png',
    description:
      'Landscaping and garden maintenance company serving Setia Alam and surrounding areas in Shah Alam, Selangor, Malaysia.',
    telephone: site.phoneTel,
    email: site.email,
    url: 'https://setiaalamgardenservices.example',
    priceRange: 'RM',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceAreas.map((a) => ({ '@type': 'Place', name: a })),
    openingHours: 'Mo-Sa 08:00-18:00',
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-garden.png"
            alt="A lush, well-maintained tropical garden — placeholder image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-24 sm:px-6 lg:py-32">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-background/15 px-3 py-1 text-sm font-medium text-background backdrop-blur">
            <MapPin className="size-3.5" />
            Setia Alam &middot; Alam Impian &middot; Bukit Raja &middot; Eco
            Ardence
          </span>
          <h1 className="mt-5 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-background sm:text-5xl lg:text-6xl">
            Beautiful gardens, cared for by your local Setia Alam team
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            From weekly lawn upkeep to full garden makeovers, we help homeowners
            across Setia Alam keep their outdoor spaces green, healthy, and
            effortless.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Free Quote
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Everything your garden needs, in one place
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Whether it&apos;s regular upkeep or a one-off transformation, our
            local team has you covered.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={s.image || '/placeholder.svg'}
                  alt={`${s.title} — placeholder image`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center justify-between font-serif text-xl font-semibold text-foreground">
                  {s.title}
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <MapPin className="mx-auto size-8 text-primary" />
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground">
            Proudly local to Setia Alam &amp; nearby townships
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            We know the local soil, climate, and the gated and guarded
            communities in the area. If you&apos;re nearby, we can help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              ...site.serviceAreas,
              'Setia Eco Park',
              'Kota Kemuning',
              'Shah Alam',
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaSection />
    </>
  )
}
