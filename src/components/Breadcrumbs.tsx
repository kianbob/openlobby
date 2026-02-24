import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="hover:text-primary">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-gray-300">›</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">{item.name}</Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
