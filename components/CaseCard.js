import Link from 'next/link'

export default function CaseCard({ study, featured = false }) {
  const { slug, emoji, thumbColor, tags, title, desc, meta } = study

  if (featured) {
    return (
      <Link href={`/work/${slug}`} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: 16,
        transition: 'all 0.28s',
      }}
        className="case-card-featured"
      >
        <div className={`thumb-${thumbColor}`} style={{
          minHeight: 280,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          position: 'relative',
        }}>
          {emoji}
          <span style={{ position: 'absolute', bottom: 14, left: 14, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(44,36,22,0.4)' }}>
            {tags[0]}
          </span>
        </div>
        <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 26, letterSpacing: '-0.3px', lineHeight: 1.25, color: 'var(--ink)', marginBottom: 14 }}>
            {title}
          </h3>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 16 }}>
              {Object.entries(meta).slice(0, 2).map(([k, v]) => (
                <div key={k} style={{ fontSize: 11, color: 'var(--muted)' }}>
                  <strong style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--ink2)', marginBottom: 1, textTransform: 'capitalize' }}>{k}</strong>
                  {v}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 16, color: 'var(--ivory3)', transition: 'all 0.22s' }}>↗</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/work/${slug}`} style={{
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 20,
      overflow: 'hidden',
      transition: 'all 0.28s',
    }}>
      <div className={`thumb-${thumbColor}`} style={{
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 56,
        position: 'relative',
      }}>
        {emoji}
        <span style={{ position: 'absolute', bottom: 14, left: 14, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(44,36,22,0.4)' }}>
          {tags[0]}
        </span>
      </div>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 20, letterSpacing: '-0.3px', lineHeight: 1.25, color: 'var(--ink)', marginBottom: 10 }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>{meta.role}</span>
          <span style={{ fontSize: 16, color: 'var(--ivory3)' }}>↗</span>
        </div>
      </div>
    </Link>
  )
}
