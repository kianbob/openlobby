import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const investigations = [
  'doge-vs-lobbying', 'tech-lobbying-war', 'big-pharma-lobbying',
  'revolving-door-exposed', 'foreign-influence', 'follow-the-money',
  'defense-contractor-lobbying', 'crypto-lobbying-explosion',
  'ai-regulation-fight', 'tariff-lobbying-surge', 'lobbying-statistics',
  'what-is-lobbying', 'lobbying-vs-contracts', 'healthcare-3-billion-bet',
  'seasonal-lobbying', 'the-22000-percent-roi', 'first-time-filers-2024',
  'the-revolving-door-premium', 'dc-lobbying-capital', 'issue-arms-race',
  'wall-street-washington-pipeline', 'big-oil-climate-lobby',
  'silicon-valley-antitrust', 'healthcare-insurance-lobby',
  'the-lobbying-industrial-complex',
]

function readSlugsFromDir(dirName: string): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'data', dirName)
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.openlobby.us'

  const staticPages = [
    '', '/about', '/clients', '/firms', '/lobbyists', '/issues',
    '/trends', '/revolving-door', '/foreign', '/industries',
    '/investigations', '/search', '/downloads', '/states',
    '/lobbying-roi', '/influence-score', '/arms-race', '/text-analysis',
    '/cross-reference', '/compare', '/your-tax-dollar', '/methodology',
    '/new-entrants', '/momentum', '/concentration', '/issue-battles', '/geographic', '/filing-patterns',
    '/network', '/revolving-door-premium', '/client-trajectories',
    '/lobbying-vs-contracts',
    '/how-lobbying-works',
    '/pharmaceutical-lobbying',
    '/tech-lobbying',
    '/defense-lobbying',
    '/lobbying-statistics-2025',
    '/compare-spending',
    '/timeline',
  ]

  const routes: MetadataRoute.Sitemap = staticPages.map(p => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'daily' : 'weekly',
    priority: p === '' ? 1 : 0.7,
  }))

  // Client detail pages — read all slugs from directory
  for (const slug of readSlugsFromDir('clients')) {
    routes.push({ url: `${baseUrl}/clients/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
  }

  // Firm detail pages
  for (const slug of readSlugsFromDir('firms')) {
    routes.push({ url: `${baseUrl}/firms/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
  }

  // Lobbyist detail pages
  for (const slug of readSlugsFromDir('lobbyists')) {
    routes.push({ url: `${baseUrl}/lobbyists/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 })
  }

  // Issue detail pages
  try {
    const issueIndex = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'issue-index.json'), 'utf-8'))
    for (const i of issueIndex) {
      routes.push({ url: `${baseUrl}/issues/${i.code}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
    }
  } catch {}

  // State detail pages
  try {
    const stateIndex = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'state-index.json'), 'utf-8'))
    for (const s of stateIndex) {
      routes.push({ url: `${baseUrl}/states/${s.abbreviation}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 })
    }
  } catch {}

  // Industry detail pages
  const industrySlugs = [
    'technology', 'healthcare', 'defense', 'energy', 'finance',
    'agriculture', 'transportation', 'telecom', 'real-estate', 'education',
  ]
  for (const slug of industrySlugs) {
    routes.push({ url: `${baseUrl}/industries/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  }

  // Investigation articles
  for (const slug of investigations) {
    routes.push({ url: `${baseUrl}/investigations/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
  }

  return routes
}
