// Single source of truth for business details.
// Anything marked PLACEHOLDER must be replaced before launch — see LAUNCH-CHECKLIST.md.
export const site = {
  name: 'Setia Alam Garden Services',
  shortName: 'SA Garden Services',
  // FINAL — do not suggest alternatives. Matches the business name for
  // NAP/entity consistency. Used for metadataBase, JSON-LD, sitemap, robots.txt.
  url: 'https://setiaalamgardenservices.com',
  phoneDisplay: '+60 12-294 7847',
  phoneTel: '+60122947847',
  // wa.me expects international format WITHOUT the leading + or spaces.
  whatsapp: '60122947847',
  // PLACEHOLDER email — set up this mailbox (or change it) before launch.
  email: 'hello@setiaalamgardenservices.com',
  // PLACEHOLDER address — replace with the real registered address.
  // Kept out of visible page copy; only used in LocalBusiness JSON-LD.
  address: {
    locality: 'Setia Alam, Shah Alam',
    region: 'Selangor',
    postalCode: '40170',
    country: 'MY',
  },
  serviceAreas: ['Setia Alam', 'Alam Impian', 'Bukit Raja', 'Eco Ardence'],
  // Setia Alam precincts — how locals describe where they live. Sourced from
  // the project brief; double-check against actual precinct names before launch.
  precincts: ['Setia Indah', 'Setia Impian', 'Setia Eco Park', 'Setia Perdana'],
  // GUESSED hours — confirm with whoever ends up servicing these leads.
  hours: 'Mon–Sat, 8:00am – 6:00pm',
  hoursSchema: 'Mo-Sa 08:00-18:00',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Garden Maintenance', href: '/garden-maintenance' },
  { label: 'Landscaping', href: '/landscaping-design' },
  { label: 'Artificial Grass', href: '/artificial-grass' },
  { label: 'Tree Care', href: '/tree-care' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export type Service = {
  slug: string
  href: string
  title: string
  short: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'garden-maintenance',
    href: '/garden-maintenance',
    title: 'Garden Maintenance',
    short:
      'Regular lawn mowing, hedge trimming, weeding and fertilizing to keep your garden looking its best all year round.',
    image: '/images/garden-maintenance.png',
    imageAlt:
      'Freshly mowed lawn and trimmed hedges at a landed home garden in Setia Alam',
  },
  {
    slug: 'landscaping-design',
    href: '/landscaping-design',
    title: 'Landscaping Design & Build',
    short:
      'Garden redesigns, planting, hardscaping and water features that transform your outdoor space.',
    image: '/images/landscaping-design.png',
    imageAlt:
      'Landscaped tropical garden with planting beds and paved hardscaping in Setia Alam, Shah Alam',
  },
  {
    slug: 'artificial-grass',
    href: '/artificial-grass',
    title: 'Artificial Grass Installation',
    short:
      'Low-maintenance, evergreen synthetic turf that stays lush through the Malaysian heat and rain.',
    image: '/images/artificial-grass.png',
    imageAlt:
      'Neatly installed artificial grass lawn at a residential home in Setia Alam',
  },
  {
    slug: 'tree-care',
    href: '/tree-care',
    title: 'Tree Care',
    short:
      'Trimming, pruning, safe tree cutting and removal, and new tree planting to keep your property healthy and protected.',
    image: '/images/tree-care.png',
    imageAlt:
      'Garden tree being trimmed and pruned at a landed property in Setia Alam',
  },
]

// Honest trust signals — no invented years, review counts, or project numbers.
export const trustPoints = [
  { title: 'Local to Setia Alam', text: 'A team that knows the area, climate, and gated communities.' },
  { title: 'Free, no-obligation quotes', text: 'Clear pricing before any work begins — no surprises.' },
  { title: 'Easy to reach', text: 'Call, WhatsApp, or message us — whichever suits you.' },
  { title: 'Recurring or one-off', text: 'From weekly upkeep to full garden makeovers.' },
]
