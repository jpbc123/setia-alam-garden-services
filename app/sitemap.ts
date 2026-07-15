import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1 },
    { path: '/garden-maintenance', priority: 0.9 },
    { path: '/landscaping-design', priority: 0.8 },
    { path: '/artificial-grass', priority: 0.8 },
    { path: '/tree-care', priority: 0.8 },
    { path: '/about', priority: 0.5 },
    { path: '/contact', priority: 0.9 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
