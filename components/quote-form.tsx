'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { services, site } from '@/lib/site'

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const area = String(data.get('area') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')

    // Compose a WhatsApp message so the enquiry reaches the business directly.
    // Replace the wa.me number in lib/site.ts with the real one before launch.
    const text = [
      'New quote request:',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Area: ${area}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ].join('\n')

    const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(waHref, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    form.reset()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Thank you!
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Your request has been prepared in WhatsApp — just hit send to reach
          us. Prefer another way? Call us anytime at{' '}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-medium text-primary hover:underline"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 012-345 6789"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="area"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Address / Area
        </label>
        <input
          id="area"
          name="area"
          type="text"
          required
          placeholder="e.g. Setia Alam, Alam Impian, Bukit Raja"
          className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure / other">Not sure / other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your garden and what you need..."
          className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send className="size-4" />
        Send Quote Request
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Submitting opens WhatsApp with your details pre-filled so you can send
        it to us in one tap.
      </p>
    </form>
  )
}
