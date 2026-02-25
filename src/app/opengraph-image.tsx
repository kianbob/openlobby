import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OpenLobby — Follow the Money in Washington'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #581c87 100%)',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 900, color: 'white', marginBottom: 16 }}>
          OpenLobby
        </div>
        <div style={{ fontSize: 32, color: '#c7d2fe', marginBottom: 32 }}>
          Follow the Money in Washington
        </div>
        <div style={{ fontSize: 20, color: '#a5b4fc' }}>
          $37.7B in Federal Lobbying · 726K+ Filings · 2018–2025
        </div>
      </div>
    ),
    { ...size }
  )
}
