import { about } from '@/data/content'

export const metadata = { title: 'About — Siv' }

export default function AboutPage() {
  return (
    <main>
      <div className="wrap">
        <p className="eyebrow">About me</p>
        <h1 className="section-heading">The person behind the pixels</h1>

        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 21, color: 'var(--ink2)', lineHeight: 1.65, borderLeft: '2px solid var(--gold)', paddingLeft: 22, marginBottom: 32 }}>
          {about.intro}
        </p>

        {about.body.map((p, i) => (
          <p key={i} style={{ fontSize: 16, color: i === about.body.length - 1 ? 'var(--muted)' : 'var(--ink2)', lineHeight: 1.85, marginBottom: 18 }}>
            {p}
          </p>
        ))}

        {/* Skills */}
        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', margin: '48px 0 20px' }}>
          Core skills
        </p>
        {about.skills.map(skill => (
          <div key={skill.name} className="skill-row">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${skill.pct}%` }} />
            </div>
          </div>
        ))}

        {/* Tools */}
        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', margin: '40px 0 16px' }}>
          Tools
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {about.tools.map(tool => (
            <span key={tool} style={{ fontSize: 12, color: 'var(--accent)', background: 'var(--ivory2)', padding: '4px 12px', borderRadius: 100, border: '1px solid var(--ivory3)' }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
      <footer>© 2025 Siv · All rights reserved</footer>
    </main>
  )
}
