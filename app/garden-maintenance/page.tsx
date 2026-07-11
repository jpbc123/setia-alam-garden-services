import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Garden Maintenance in Setia Alam | Lawn Mowing & Upkeep',
  description:
    'Reliable weekly, biweekly, and monthly garden maintenance in Setia Alam — lawn mowing, hedge trimming, weeding, and fertilizing for a garden that always looks its best.',
  alternates: { canonical: '/garden-maintenance' },
}

export default function GardenMaintenancePage() {
  return (
    <ServicePage
      slug="garden-maintenance"
      h1="Garden Maintenance in Setia Alam"
      image="/images/garden-maintenance.png"
      intro={[
        'Keeping a garden looking its best in the Malaysian climate takes regular attention — grass grows fast, weeds appear overnight, and hedges quickly lose their shape. Our recurring garden maintenance service takes all of that off your hands so your outdoor space always looks cared for.',
        'We offer flexible packages to suit how your garden grows and how hands-on you want to be. Choose weekly visits for a manicured look, biweekly for the best balance of cost and tidiness, or monthly for lighter upkeep. Every visit includes mowing, edging, and a general tidy-up so you come home to a neat garden every time.',
        'Our team is familiar with the plants, soil, and weather patterns around Setia Alam and the surrounding townships. We treat every garden like our own, clean up thoroughly after each visit, and are happy to work around gated and guarded community access requirements.',
      ]}
      includedTitle="What's included"
      included={[
        'Lawn mowing and neat edge trimming',
        'Hedge and shrub trimming to shape',
        'Weeding of beds, paths, and borders',
        'Fertilizing and basic plant health checks',
        'Green waste collection and clean-up',
        'Flexible weekly, biweekly, or monthly plans',
      ]}
      faqs={[
        {
          q: 'How much does regular garden maintenance cost?',
          a: 'Pricing depends on your garden size and how often you\u2019d like us to visit. As a rough placeholder guide, recurring maintenance for a typical landed home starts from around RM120–RM250 per visit. Contact us for an exact quote based on your property.',
        },
        {
          q: 'How often should I schedule maintenance?',
          a: 'For most Setia Alam gardens we recommend biweekly visits, as grass and weeds grow quickly in the tropical climate. Weekly visits keep things looking pristine, while monthly works for lower-maintenance or smaller gardens.',
        },
        {
          q: 'Do you service gated and guarded communities?',
          a: 'Yes. We regularly work in gated and guarded neighbourhoods across Setia Alam and nearby areas. Just let us know your community\u2019s access process and we\u2019ll make the necessary arrangements.',
        },
        {
          q: 'Do I need to be home during each visit?',
          a: 'Not at all. Once we understand your garden and preferences, most customers are happy for us to visit while they\u2019re out. We\u2019ll always leave the area tidy and can send a quick update after each visit.',
        },
      ]}
    />
  )
}
