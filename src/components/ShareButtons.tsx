'use client'

export default function ShareButtons({ url, title }: { url: string; title?: string }) {
  const text = title || 'Check out this lobbying data'
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-gray-500">Share:</span>
      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">𝕏</a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">LinkedIn</a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">Facebook</a>
      <button onClick={() => navigator.clipboard.writeText(url)} className="text-gray-500 hover:text-primary">Copy</button>
    </div>
  )
}
