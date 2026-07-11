import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Artificial Grass Installation in Setia Alam | Synthetic Turf',
  description:
    'Professional artificial grass installation in Setia Alam — low-maintenance, evergreen synthetic turf for lawns, patios, and rooftops that stays lush in any weather.',
  alternates: { canonical: '/artificial-grass' },
}

export default function ArtificialGrassPage() {
  return (
    <ServicePage
      slug="artificial-grass"
      h1="Artificial Grass Installation in Setia Alam"
      image="/images/artificial-grass.png"
      intro={[
        'Artificial grass is one of the most popular ways to enjoy a green, tidy lawn without the constant upkeep. It stays lush through the dry spells and drains well during the heavy rains — no mowing, no muddy patches, and no brown spots to worry about.',
        'We supply and install high-quality synthetic turf for front lawns, backyards, patios, balconies, rooftops, and play areas. Our team prepares the base properly for good drainage, lays the turf neatly with clean edges, and secures everything so it looks natural and lasts for years.',
        'Artificial grass is especially popular with busy families and homeowners in Setia Alam who want a beautiful lawn without the maintenance. It\u2019s pet-friendly, child-safe, and ideal for areas where natural grass struggles to grow, like shaded corners or heavily used spaces.',
      ]}
      includedTitle="What's included"
      included={[
        'Site assessment and accurate measuring',
        'Ground preparation and drainage base',
        'Supply of quality synthetic turf options',
        'Precise cutting, laying, and securing',
        'Clean, natural-looking finished edges',
        'Site clean-up and disposal of old turf',
      ]}
      faqs={[
        {
          q: 'How much does artificial grass cost per square foot?',
          a: 'Cost depends on the turf grade and how much ground preparation is needed. As a placeholder guide, supply and installation typically ranges from around RM12–RM25 per square foot. We\u2019ll measure your space and give an exact quote.',
        },
        {
          q: 'How long does artificial grass last?',
          a: 'Good-quality synthetic turf can last many years with minimal care. The lifespan depends on the product grade and how heavily the area is used — we\u2019ll recommend the right option for your space.',
        },
        {
          q: 'Does it get too hot in the Malaysian sun?',
          a: 'Modern turf is designed to handle direct sun, and shaded or occasionally rinsed areas stay comfortable. We can advise on turf types and placement to keep things cool underfoot.',
        },
        {
          q: 'Is it suitable for pets and children?',
          a: 'Yes. Artificial grass is a popular, safe choice for homes with pets and kids. It drains well, is easy to rinse clean, and provides a soft, even surface to play on.',
        },
      ]}
    />
  )
}
