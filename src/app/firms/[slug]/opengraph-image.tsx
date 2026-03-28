import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Lobbying Firm Profile — OpenLobby'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let name = slug.replace(/-/g, ' ').toUpperCase()
  let income = '$0'
  let filings = '0'
  let clients = '0'

  try {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), `public/data/firms/${slug}.json`), 'utf-8'))
    name = data.name || name
    const s = data.totalIncome || 0
    income = s >= 1e9 ? `$${(s / 1e9).toFixed(1)}B` : s >= 1e6 ? `$${(s / 1e6).toFixed(1)}M` : s >= 1e3 ? `$${(s / 1e3).toFixed(0)}K` : `$${s}`
    filings = String(data.filings || 0)
    clients = String(data.clientCount || data.clients?.length || 0)
  } catch { /* fallback */ }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #581c87 100%)',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 20, color: '#a5b4fc', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '2px' }}>
            Lobbying Firm Profile
          </div>
          <div style={{ fontSize: 48, fontWeight: 900, color: 'white', lineHeight: 1.1, maxWidth: '900px' }}>
            {name.length > 60 ? name.slice(0, 57) + '...' : name}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#f59e0b' }}>{income}</div>
            <div style={{ fontSize: 18, color: '#a5b4fc' }}>Total Income</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#f59e0b' }}>{filings}</div>
            <div style={{ fontSize: 18, color: '#a5b4fc' }}>Filings</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#f59e0b' }}>{clients}</div>
            <div style={{ fontSize: 18, color: '#a5b4fc' }}>Clients</div>
          </div>
        </div>

        <div style={{ fontSize: 20, color: '#6366f1' }}>
          openlobby.us
        </div>
      </div>
    ),
    { ...size }
  )
}
