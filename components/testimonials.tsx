import { Star } from 'lucide-react'
import { testimonials } from '@/lib/site'

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Testimonials
        </span>
        <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          What our neighbours say
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Placeholder reviews — replace with real customer feedback once you
          have it.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
