import Image from 'next/image'
import type { Metadata } from 'next'
import { HeartHandshake, Leaf, MapPin, ShieldCheck } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | Local Garden & Landscaping Team in Setia Alam',
  description:
    'Setia Alam Garden Services is a local landscaping and garden maintenance team familiar with the homes, plants, and climate of Setia Alam, Shah Alam.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: MapPin,
    title: 'Truly local',
    text: 'We work in and around Setia Alam, so we know the neighbourhoods, the gated communities, and the plants that thrive in our climate.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal service',
    text: 'Every garden gets personal attention — not a rushed, one-size-fits-all service.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & tidy',
    text: 'We show up when we say we will, do the job properly, and always leave your garden clean before we go.',
  },
  {
    icon: Leaf,
    title: 'Healthy gardens',
    text: 'We care about long-term plant health, not just a quick tidy — so your garden keeps getting better over time.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Leaf className="size-3.5" />
              About us
            </span>
            <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Your friendly neighbourhood garden team
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Setia Alam Garden Services is a local garden and landscaping
              service built on a simple idea: homeowners deserve a garden team
              they can actually trust and rely on.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/about-team.png"
              alt="Garden services team at work on a residential lawn in Setia Alam"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            We focus on one thing: keeping the gardens of Setia Alam, Alam
            Impian, Bukit Raja, and Eco Ardence looking their best — from
            simple recurring maintenance to full garden makeovers, artificial
            grass, and tree work.
          </p>
          <p>
            Because we work locally, we understand the little things that make
            a difference here: the fast-growing tropical grass, the heavy
            afternoon rains, the plants that love our climate, and the access
            procedures for gated and guarded communities. That local knowledge
            means less hassle for you and better results for your garden.
          </p>
          <p>
            Above all, we treat every garden as if it were our own. Whether
            you&apos;re booking a one-off tidy-up or an ongoing maintenance
            plan, you&apos;ll get honest advice, fair pricing, and a team that
            genuinely cares about the result.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <h2 className="text-balance text-center font-serif text-3xl font-semibold text-foreground">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's take care of your garden"
        description={`Serving ${site.serviceAreas.join(', ')} and nearby areas. Get in touch for a free, no-obligation quote.`}
      />
    </>
  )
}
