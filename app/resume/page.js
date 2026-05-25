import { resume, about } from '@/data/content'

export const metadata = { title: 'Resume — Siv' }

function Entry({ entry }) {
  return (
    <div className="resume-entry">
      <div className="resume-row">
        <span className="resume-role">{entry.role}</span>
        <span className="resume-year">{entry.years}</span>
      </div>
      <p className="resume-co">{entry.company}{entry.location ? ` · ${entry.location}` : ''}</p>
      <p className="resume-desc">{entry.desc}</p>
    </div>
  )
}

export default function ResumePage() {
  return (
    <main>
      <div className="wrap">
        <p className="eyebrow">Resume</p>
        <h1 className="section-heading">Experience & education</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: 24 }}>Experience</p>
            {resume.experience.map((e, i) => <Entry key={i} entry={e} />)}
          </div>
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: 24 }}>Education</p>
            {resume.education.map((e, i) => <Entry key={i} entry={e} />)}

            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', margin: '36px 0 16px' }}>Tools</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {about.tools.map(tool => (
                <span key={tool} style={{ fontSize: 12, color: 'var(--accent)', background: 'var(--ivory2)', padding: '4px 12px', borderRadius: 100, border: '1px solid var(--ivory3)' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <a href="/siv-resume.pdf" download className="btn btn-ghost">Download full resume (PDF) ↓</a>
        </div>
      </div>
      <footer>© 2025 Siv · All rights reserved</footer>
    </main>
  )
}
