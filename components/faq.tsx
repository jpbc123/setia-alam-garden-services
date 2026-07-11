import { Plus } from 'lucide-react'

export type FaqItem = { q: string; a: string }

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-foreground marker:hidden">
            <span className="text-pretty">{item.q}</span>
            <Plus className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  )
}
