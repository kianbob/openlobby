import fs from 'fs'
import path from 'path'

let clientLookup: Record<string, string> | null = null
let lobbyistLookup: Record<string, string> | null = null
let firmLookup: Record<string, string> | null = null

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function loadLookup(type: 'clients' | 'lobbyists' | 'firms'): Record<string, string> {
  const dir = path.join(process.cwd(), 'public', 'data', type)
  const lookup: Record<string, string> = {}
  try {
    const files = fs.readdirSync(dir)
    for (const f of files) {
      if (!f.endsWith('.json')) continue
      const slug = f.replace('.json', '')
      lookup[slug] = slug
      try {
        const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))
        if (data.name) lookup[slugify(data.name)] = slug
      } catch {}
    }
  } catch {}
  return lookup
}

export function resolveClientSlug(nameOrSlug: string): string {
  if (!clientLookup) clientLookup = loadLookup('clients')
  const slug = slugify(nameOrSlug)
  return clientLookup[slug] || slug
}

export function resolveLobbyistSlug(nameOrSlug: string): string {
  if (!lobbyistLookup) lobbyistLookup = loadLookup('lobbyists')
  const slug = slugify(nameOrSlug)
  return lobbyistLookup[slug] || slug
}

export function resolveFirmSlug(nameOrSlug: string): string {
  if (!firmLookup) firmLookup = loadLookup('firms')
  const slug = slugify(nameOrSlug)
  return firmLookup[slug] || slug
}
