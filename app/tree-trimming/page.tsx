import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Tree Trimming & Pruning in Setia Alam | Safe Tree Care',
  description:
    'Safe, tidy tree trimming and pruning in Setia Alam — keep your trees healthy, well-shaped, and your property protected from overgrown or hazardous branches.',
  alternates: { canonical: '/tree-trimming' },
}

export default function TreeTrimmingPage() {
  return (
    <ServicePage
      slug="tree-trimming"
      h1="Tree Trimming & Pruning in Setia Alam"
      image="/images/tree-trimming.png"
      intro={[
        'Trees add shade, privacy, and character to a home, but they need regular attention to stay healthy and safe. Overgrown branches can block light, damage fences and roofs, or become a hazard during the heavy storms we get in the region. Our tree trimming and pruning service keeps your trees in great shape and your property protected.',
        'We handle everything from light shaping and crown thinning to removing dead or dangerous limbs. Careful, well-timed pruning encourages healthy growth, improves the look of your garden, and reduces the risk of falling branches during bad weather.',
        'Our team works safely and tidily, using the right equipment for the job and clearing away all the cuttings when we\u2019re done. For larger or tricky trees near buildings and power lines, we\u2019ll assess the situation carefully and advise the safest approach.',
      ]}
      includedTitle="What's included"
      included={[
        'Branch trimming and crown shaping',
        'Crown thinning for light and airflow',
        'Removal of dead, damaged, or unsafe limbs',
        'Height and overhang reduction',
        'Careful work near fences, roofs, and walls',
        'Full clean-up and green waste removal',
      ]}
      faqs={[
        {
          q: 'How much does tree trimming cost?',
          a: 'It depends on the size, height, and number of trees, plus how accessible they are. As a placeholder guide, trimming a single medium tree often starts from around RM150–RM400. We\u2019ll assess on-site and quote accurately.',
        },
        {
          q: 'How often should trees be trimmed?',
          a: 'Most garden trees benefit from trimming once or twice a year, though fast-growing species may need more frequent attention. We can recommend a schedule based on the trees in your garden.',
        },
        {
          q: 'Can you remove branches near my roof or fence?',
          a: 'Yes. We regularly trim branches overhanging roofs, fences, and driveways. For anything close to power lines or structurally risky, we\u2019ll advise the safest method before starting.',
        },
        {
          q: 'Do you clean up afterwards?',
          a: 'Always. We clear away all branches, leaves, and cuttings and leave your garden tidy before we go. Green waste disposal is included in your quote.',
        },
      ]}
    />
  )
}
