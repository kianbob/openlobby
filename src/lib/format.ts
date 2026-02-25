export function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
  return `$${value.toLocaleString()}`
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 10_000) return `${(value / 1_000).toFixed(1)}K`
  if (value >= 1_000) return value.toLocaleString()
  return String(value)
}

const ACRONYMS = new Set(['llp', 'llc', 'inc', 'lp', 'plc', 'ltd', 'pllc', 'usa', 'us', 'ii', 'iii', 'iv', 'fka', 'dba', 'nra', 'pac', 'phrma', 'afl', 'cio', 'ibm', 'att', 'gsk', 'rtx', 'bae', 'hsbc', 'ubs', 'bny', 'ey', 'pwc', 'kpmg', 'hca', 'ups', 'dhl', 'bmw', 'bp', 'gm', 'ge', 'hp', 'sap', 'abb', 'bgr', 'fca', 'sa', 'nv', 'bv', 'ag', 'hr', 'se', 'ai', 'pmi'])

const SMALL_WORDS = new Set(['of', 'and', 'the', 'for', 'in', 'on', 'at', 'to', 'by', 'or', 'a', 'an', 'is'])

export function toTitleCase(str: string): string {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word, i) => {
      const clean = word.replace(/[^a-z]/g, '').replace(/,$/, '')
      if (ACRONYMS.has(clean)) return word.toUpperCase()
      if (i > 0 && SMALL_WORDS.has(clean)) return word
      if (word.startsWith('(')) return '(' + word.slice(1).charAt(0).toUpperCase() + word.slice(2)
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
