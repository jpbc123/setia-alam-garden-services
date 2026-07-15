import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

// Structure for real customer reviews. Deliberately empty until there are
// genuine testimonials — do not add invented quotes here. When real reviews
// come in, replace the placeholder card below with a grid of <figure> cards
// (quote, name, area) like the service cards on the homepage.
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
      </div>
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <MessageCircle className="mx-auto size-8 text-primary" />
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          We&apos;re a growing local service and we&apos;d rather show you real
          reviews than filler — customer testimonials will appear here as they
          come in. In the meantime, the best way to judge us is to{' '}
          <Link
            href="/contact"
            className="font-medium text-primary hover:underline"
          >
            ask for a quote
          </Link>{' '}
          and see how we treat you from the first message.
        </p>
      </div>
    </section>
  )
}
