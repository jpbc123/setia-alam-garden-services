import { MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

// Persistent click-to-chat button, visible on every page (see layout.tsx).
// The pre-filled message follows the brief's template: the visitor just
// replaces the bracketed service/precinct and hits send.
const prefill = `Hi ${site.name}, I need a quote for [Grass Cutting / Tree Care / Landscaping] at my home in Precinct [e.g., ${site.precincts.slice(0, 3).join(' / ')}]. Here are the details:`

export function WhatsAppFloat() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(prefill)}`

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25d366] p-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:py-3 sm:pl-4 sm:pr-5"
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden />
      <span className="hidden sm:inline">
        Get a Free Garden &amp; Landscaping Quote in Setia Alam
      </span>
      <span className="sr-only sm:hidden">
        Get a Free Garden &amp; Landscaping Quote in Setia Alam
      </span>
    </a>
  )
}
