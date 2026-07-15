import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Tree Care in Setia Alam | Trimming, Tree Cutting & Removal',
  description:
    'Tree trimming, pruning, safe tree cutting and removal, and tree planting in Setia Alam — keep your trees healthy and your property protected. Servis potong, cantas dan tebang pokok Setia Alam.',
  alternates: { canonical: '/tree-care' },
}

export default function TreeCarePage() {
  return (
    <ServicePage
      slug="tree-care"
      h1="Tree Care in Setia Alam"
      image="/images/tree-care.png"
      imageAlt="Overgrown garden tree being trimmed and pruned at a landed home in Setia Alam"
      intro={[
        'Trees add shade, privacy, and character to a home, but they need regular attention to stay healthy and safe. Overgrown branches can block light, damage fences and roofs, or become a hazard during the heavy storms we get in the region. Our tree care service covers everything from routine trimming to full tree removal and new planting.',
        'We handle light shaping and crown thinning, removal of dead or dangerous limbs, and — where a tree has outgrown its spot or become unsafe — complete tree cutting and removal. Careful, well-timed pruning encourages healthy growth, improves the look of your garden, and reduces the risk of falling branches during bad weather.',
        'If you’re adding rather than removing, we also plant new trees and replace old ones, helping you choose species that suit Malaysian weather and the space you have. Our team works safely and tidily, using the right equipment for the job and clearing away all the cuttings when we’re done. For larger or tricky trees near buildings and power lines, we’ll assess the situation carefully and advise the safest approach.',
      ]}
      includedTitle="What's included"
      included={[
        'Branch trimming and crown shaping',
        'Crown thinning for light and airflow',
        'Removal of dead, damaged, or unsafe limbs',
        'Tree cutting and removal, assessed on-site',
        'New tree planting and replacement',
        'Height and overhang reduction',
        'Careful work near fences, roofs, and walls',
        'Full clean-up and green waste removal',
      ]}
      faqs={[
        {
          q: 'How much does tree trimming cost?',
          a: 'It depends on the size, height, and number of trees, plus how accessible they are. As a rough guide, trimming a single medium tree often starts from around RM150–RM400. We’ll assess on-site and quote accurately.',
        },
        {
          q: 'Can you cut down and remove a whole tree?',
          a: 'Yes. We handle full tree cutting and removal for most garden trees, including hauling away the trunk and branches. Removal costs more than trimming and depends on the tree’s size and access, so we’ll always assess on-site first and confirm the price before any work starts.',
        },
        {
          q: 'How often should trees be trimmed?',
          a: 'Most garden trees benefit from trimming once or twice a year, though fast-growing species may need more frequent attention. We can recommend a schedule based on the trees in your garden.',
        },
        {
          q: 'Can you plant new trees in my garden?',
          a: 'Yes. We plant new trees and replace removed ones, and can suggest species that suit the Malaysian climate, your soil, and the space available — including shade trees and smaller ornamental options for compact gardens in gated communities.',
        },
        {
          q: 'Can you remove branches near my roof or fence?',
          a: 'Yes. We regularly trim branches overhanging roofs, fences, and driveways. For anything close to power lines or structurally risky, we’ll advise the safest method before starting.',
        },
        {
          q: 'Do you clean up afterwards?',
          a: 'Always. We clear away all branches, leaves, and cuttings and leave your garden tidy before we go. Green waste disposal is included in your quote.',
        },
      ]}
    />
  )
}
