import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Landscaping Design & Build in Setia Alam | Garden Makeovers',
  description:
    'Transform your outdoor space with landscaping design and build in Setia Alam — garden redesign, planting, hardscaping, and water features tailored to your home.',
  alternates: { canonical: '/landscaping-design' },
}

export default function LandscapingDesignPage() {
  return (
    <ServicePage
      slug="landscaping-design"
      h1="Landscaping Design & Build in Setia Alam"
      image="/images/landscaping-design.png"
      intro={[
        'Whether you\u2019re starting with a bare plot or reimagining a tired garden, our landscaping design and build service turns your outdoor space into somewhere you\u2019ll actually want to spend time. We handle everything from the first sketch to the final planted bed.',
        'We begin by understanding how you want to use your garden — entertaining, a low-maintenance green view, a play area for the kids, or a bit of everything. From there we plan the layout, choose plants suited to the local climate, and bring in hardscaping like paving, decking, and retaining features to tie it all together.',
        'As a local team, we know which plants thrive in Setia Alam\u2019s heat and rainfall, and we design with the long-term upkeep in mind so your garden stays beautiful without becoming a burden. Once the project is complete, we can keep it looking its best with our ongoing maintenance packages.',
      ]}
      includedTitle="What we cover"
      included={[
        'On-site consultation and garden design',
        'Planting plans with climate-suited species',
        'Hardscaping: paths, patios, decking, and walls',
        'Water features and decorative elements',
        'Soil preparation and turfing',
        'Optional ongoing maintenance after handover',
      ]}
      faqs={[
        {
          q: 'How much does a garden redesign cost?',
          a: 'Landscaping projects vary widely depending on size, materials, and complexity. As a placeholder guide, smaller refresh projects can start from a few thousand ringgit, while full redesigns with hardscaping and water features cost more. We\u2019ll provide a detailed quote after an on-site visit.',
        },
        {
          q: 'How long does a landscaping project take?',
          a: 'A simple planting refresh may take a few days, while a full design-and-build with hardscaping can take a couple of weeks. We\u2019ll give you a clear timeline before we begin.',
        },
        {
          q: 'Can you work with my existing garden features?',
          a: 'Absolutely. We\u2019re happy to keep and build around mature trees, existing structures, or features you love, and refresh the rest to create a cohesive look.',
        },
        {
          q: 'Do you provide maintenance after the project?',
          a: 'Yes. Many customers move onto one of our recurring maintenance plans once their new garden is complete, so all that hard work stays looking great year-round.',
        },
      ]}
    />
  )
}
