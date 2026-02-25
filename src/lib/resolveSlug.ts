import fs from 'fs'
import path from 'path'

let clientLookup: Record<string, string> | null = null
let firmLookup: Record<string, string> | null = null
let lobbyistLookup: Record<string, string> | null = null

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function loadLookup(filename: string): Record<string, string> {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', filename), 'utf8'))
  } catch {
    return {}
  }
}

export function resolveClientSlug(nameOrSlug: string): string {
  if (!clientLookup) clientLookup = loadLookup('client-slug-lookup.json')
  const slug = slugify(nameOrSlug)
  return clientLookup[slug] || slug
}

export function resolveLobbyistSlug(nameOrSlug: string): string {
  if (!lobbyistLookup) lobbyistLookup = loadLookup('lobbyist-slug-lookup.json')
  const slug = slugify(nameOrSlug)
  return lobbyistLookup[slug] || slug
}

export function resolveFirmSlug(nameOrSlug: string): string {
  if (!firmLookup) firmLookup = loadLookup('firm-slug-lookup.json')
  const slug = slugify(nameOrSlug)
  return firmLookup[slug] || slug
}
