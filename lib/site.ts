// NOTE: Placeholder business details — replace with real values before launch.
export const site = {
  name: 'Setia Alam Garden Services',
  shortName: 'SA Garden Services',
  // Placeholder phone — replace with the real number.
  phoneDisplay: '+60 12-345 6789',
  phoneTel: '+60123456789',
  // wa.me expects the number in international format WITHOUT the leading + or spaces.
  whatsapp: '60123456789',
  email: 'hello@setiaalamgardens.example',
  // Placeholder address — replace with the real business address.
  address: {
    street: 'No. 1, Jalan Setia Prima (Placeholder)',
    locality: 'Setia Alam',
    region: 'Selangor',
    postalCode: '40170',
    country: 'MY',
  },
  serviceAreas: ['Setia Alam', 'Alam Impian', 'Bukit Raja', 'Eco Ardence'],
  hours: 'Mon–Sat, 8:00am – 6:00pm',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Garden Maintenance', href: '/garden-maintenance' },
  { label: 'Landscaping', href: '/landscaping-design' },
  { label: 'Artificial Grass', href: '/artificial-grass' },
  { label: 'Tree Trimming', href: '/tree-trimming' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export type Service = {
  slug: string
  href: string
  title: string
  short: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'garden-maintenance',
    href: '/garden-maintenance',
    title: 'Garden Maintenance',
    short:
      'Regular lawn mowing, hedge trimming, weeding and fertilizing to keep your garden looking its best all year round.',
    image: '/images/garden-maintenance.png',
  },
  {
    slug: 'landscaping-design',
    href: '/landscaping-design',
    title: 'Landscaping Design & Build',
    short:
      'Garden redesigns, planting, hardscaping and water features that transform your outdoor space.',
    image: '/images/landscaping-design.png',
  },
  {
    slug: 'artificial-grass',
    href: '/artificial-grass',
    title: 'Artificial Grass Installation',
    short:
      'Low-maintenance, evergreen synthetic turf that stays lush through the Malaysian heat and rain.',
    image: '/images/artificial-grass.png',
  },
  {
    slug: 'tree-trimming',
    href: '/tree-trimming',
    title: 'Tree Trimming & Pruning',
    short:
      'Safe, tidy trimming and pruning to keep your trees healthy and your property protected.',
    image: '/images/tree-trimming.png',
  },
]

// Placeholder trust stats — update with real numbers.
export const trustStats = [
  { value: '10+', label: 'Years serving Setia Alam' },
  { value: '850+', label: 'Gardens maintained' },
  { value: '4.9★', label: 'Average customer rating' },
  { value: '100%', label: 'Local, family-run team' },
]

// Placeholder reviews — replace with real customer testimonials.
export const testimonials = [
  {
    quote:
      'They keep our lawn looking immaculate every fortnight. Always on time and very tidy — highly recommend for anyone in Setia Alam.',
    name: 'Placeholder Name',
    detail: 'Homeowner, Setia Alam (placeholder review)',
  },
  {
    quote:
      'They redesigned our front garden and it completely transformed the look of our home. Friendly team who clearly know local plants.',
    name: 'Placeholder Name',
    detail: 'Homeowner, Alam Impian (placeholder review)',
  },
  {
    quote:
      'Fast, professional artificial grass installation for our back patio. No more muddy patches after the rain. Very happy with the result.',
    name: 'Placeholder Name',
    detail: 'Homeowner, Eco Ardence (placeholder review)',
  },
]
