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
          justifyContent: 'space-between',
          padding: '60px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #581c87 100%)',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 80, fontWeight: 900, color: 'white', marginBottom: 16 }}>
            OpenLobby
          </div>
          <div style={{ fontSize: 32, color: '#c7d2fe', marginBottom: 40 }}>
            Follow the Money in Washington
          </div>
        </div>

        <div style={{ display: 'flex', gap: '50px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#f59e0b' }}>$37.7B</div>
            <div style={{ fontSize: 16, color: '#a5b4fc' }}>Total Lobbying</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#f59e0b' }}>726K+</div>
            <div style={{ fontSize: 16, color: '#a5b4fc' }}>Filings</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#f59e0b' }}>23,545</div>
            <div style={{ fontSize: 16, color: '#a5b4fc' }}>Lobbyists</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: '#f59e0b' }}>37,994</div>
            <div style={{ fontSize: 16, color: '#a5b4fc' }}>Clients</div>
          </div>
        </div>

        <div style={{ fontSize: 20, color: '#6366f1' }}>
          openlobby.us · 2018–2025 Senate LDA Filings
        </div>
      </div>
    ),
    { ...size }
  )
}
