'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { meta } from '@/data/content'

const links = [
  { href: '/work',    label: 'Work' },
  { href: '/about',   label: 'About' },
  { href: '/resume',  label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">{meta.name}</Link>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`nav-link ${pathname.startsWith(href) ? 'active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
