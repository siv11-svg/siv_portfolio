import { meta } from '@/data/content'

export const metadata = { title: 'Contact — Siv' }

export default function ContactPage() {
  return (
    <main>
      <div className="wrap">
        <p className="eyebrow">Get in touch</p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--ink)', lineHeight: 1.15, letterSpacing: '-0.8px', marginBottom: 48 }}>
          Let's make something<br />great together.
        </h1>

        <div className="avail-badge" style={{ marginBottom: 32 }}>
          <span className="avail-dot" />
          Available for freelance & full-time roles
        </div>

        <div style={{ maxWidth: 500, marginBottom: 48 }}>
          <a href={`mailto:${meta.email}`} className="contact-link">
            <span className="contact-link-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              <span>{meta.email}</span>
            </span>
            <span className="contact-arrow">↗</span>
          </a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </span>
            <span className="contact-arrow">↗</span>
          </a>
          <a href={meta.dribbble} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M3 21c0-4 3-7 9-7s9 3 9 7"/></svg>
              <span>Dribbble / Behance</span>
            </span>
            <span className="contact-arrow">↗</span>
          </a>
        </div>

        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 440 }}>
          Whether you have a role in mind, a project to scope, or just want to connect — I'm always happy to talk design.
        </p>
      </div>
      <footer>© 2025 {meta.name} · All rights reserved</footer>
    </main>
  )
}
