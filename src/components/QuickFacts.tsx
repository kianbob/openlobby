export default function QuickFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Quick Facts</h3>
      <div className="space-y-3">
        {facts.map((f, i) => (
          <div key={i}>
            <div className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{f.value}</div>
            <div className="text-xs text-gray-500">{f.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
