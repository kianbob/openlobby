'use client'

export default function WidgetWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '16px', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        nav, footer, .back-to-top { display: none !important; }
        main { padding: 0 !important; }
        body { min-height: auto !important; }
      `}} />
      {children}
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: '#9ca3af' }}>
        Powered by <a href="https://www.openlobby.us" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>OpenLobby</a>
      </div>
    </div>
  )
}
