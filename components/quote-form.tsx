'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { services, site } from '@/lib/site'

// Form submissions go to Web3Forms (free tier, no backend needed).
// SETUP: get a free access key at https://web3forms.com (enter the email
// that should receive leads), then put it in .env.local as
// NEXT_PUBLIC_WEB3FORMS_KEY. See .env.local.example.
// Until a key is set, the form falls back to opening WhatsApp with the
// enquiry pre-filled, so it still works end-to-end.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

type FormStatus = 'idle' | 'sending' | 'sent' | 'sent-whatsapp'

function readForm(form: HTMLFormElement) {
  const data = new FormData(form)
  return {
    name: String(data.get('name') || ''),
    phone: String(data.get('phone') || ''),
    area: String(data.get('area') || ''),
    service: String(data.get('service') || ''),
    message: String(data.get('message') || ''),
  }
}

function openWhatsApp(fields: ReturnType<typeof readForm>) {
  const text = [
    'New quote request:',
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Area: ${fields.area}`,
    `Service: ${fields.service}`,
    `Message: ${fields.message}`,
  ].join('\n')
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
  window.open(waHref, '_blank', 'noopener,noreferrer')
}

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fields = readForm(form)

    if (!WEB3FORMS_KEY) {
      openWhatsApp(fields)
      setStatus('sent-whatsapp')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New quote request from ${fields.name} (${fields.area})`,
          from_name: site.name,
          ...fields,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error('Web3Forms rejected the submission')
      setStatus('sent')
      form.reset()
    } catch {
      // If the form service is down or misconfigured, don't lose the lead —
      // hand the enquiry to WhatsApp instead.
      openWhatsApp(fields)
      setStatus('sent-whatsapp')
      form.reset()
    }
  }

  if (status === 'sent' || status === 'sent-whatsapp') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Thank you!
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          {status === 'sent'
            ? 'Your request has been sent — we’ll get back to you shortly.'
            : 'Your request has been prepared in WhatsApp — just hit send to reach us.'}{' '}
          Prefer another way? Call us anytime at{' '}
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
          onClick={() => setStatus('idle')}
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
          placeholder="e.g. Setia Indah, Setia Eco Park, Alam Impian"
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
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        <Send className="size-4" />
        {status === 'sending' ? 'Sending…' : 'Send Quote Request'}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  )
}
