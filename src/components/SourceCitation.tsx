export default function SourceCitation({ sources, lastUpdated, className }: { sources?: string[]; lastUpdated?: string; className?: string }) {
  return (
    <div className={`mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 ${className || ''}`}>
      {sources && sources.length > 0 && (
        <p><strong>Data Sources:</strong> {sources.join(' · ')}</p>
      )}
      {lastUpdated && (
        <p className="mt-1">Last updated: {lastUpdated}</p>
      )}
      <p className="mt-1">
        This site is an independent journalism project. Analysis and editorial content are not affiliated with or endorsed by any government agency.
      </p>
    </div>
  )
}
