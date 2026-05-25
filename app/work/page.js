import Link from 'next/link'
import { caseStudies } from '@/data/content'

export const metadata = { title: 'Work — Siv' }

export default function WorkPage() {
  return (
    <main>
      <div className="wrap">
        <p className="eyebrow">All case studies</p>
        <h1 className="section-heading">Work</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {caseStudies.map(study => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: '32px 36px',
                transition: 'all 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="work-list-item"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {study.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <span style={{ fontSize: 16, color: 'var(--ivory3)' }}>↗</span>
              </div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 22, letterSpacing: '-0.3px', lineHeight: 1.2, color: 'var(--ink)', marginBottom: 10 }}>
                {study.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 600, marginBottom: 20 }}>
                {study.desc}
              </p>
              <div style={{ display: 'flex', gap: 24 }}>
                {Object.entries(study.meta).slice(0, 3).map(([k, v]) => (
                  <div key={k} style={{ fontSize: 12, color: 'var(--muted)' }}>
                    <strong style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink2)', marginBottom: 1, textTransform: 'capitalize' }}>{k}</strong>
                    {v}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer>© 2025 Siv · All rights reserved</footer>
    </main>
  )
}
