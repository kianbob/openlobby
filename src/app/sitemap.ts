import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.openlobby.us'

  const staticPages = [
    '',
    '/about',
    '/clients',
    '/firms',
    '/lobbyists',
    '/issues',
    '/trends',
    '/revolving-door',
    '/foreign',
    '/industries',
    '/investigations',
    '/search',
    '/downloads',
  ]

  const routes: MetadataRoute.Sitemap = staticPages.map(p => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'daily' : 'weekly',
    priority: p === '' ? 1 : 0.7,
  }))

  // Client detail pages
  try {
    const clientIndex = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'client-index.json'), 'utf-8'))
    for (const c of clientIndex.slice(0, 2000)) {
      routes.push({ url: `${baseUrl}/clients/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
    }
  } catch {}

  // Firm detail pages
  try {
    const firmIndex = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'firm-index.json'), 'utf-8'))
    for (const f of firmIndex.slice(0, 1000)) {
      routes.push({ url: `${baseUrl}/firms/${f.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
    }
  } catch {}

  return routes
}
