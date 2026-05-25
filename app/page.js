import Link from 'next/link'
import { hero, marquee, caseStudies, process, meta } from '@/data/content'
import CaseCard from '@/components/CaseCard'

export default function Home() {
  const featured = caseStudies.find(c => c.featured)
  const rest = caseStudies.filter(c => !c.featured)

  const marqueeItems = [...marquee, ...marquee]

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 48px 80px',
      }}>
        <p className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
          {hero.eyebrow}
        </p>

        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(52px, 8vw, 96px)',
          lineHeight: 1.0,
          letterSpacing: '-2px',
          color: 'var(--ink)',
          marginBottom: 8,
        }}>
          {hero.heading.map((line, i) => (
            <span key={i} style={{ display: 'block', color: i === hero.heading.length - 1 ? 'var(--gold)' : 'var(--ink)' }}>
              {line}
            </span>
          ))}
        </h1>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginTop: 32, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 420 }}>
            {hero.sub}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <Link href="/work" className="btn btn-dark">View my work →</Link>
            <Link href="/contact" className="btn btn-ghost">Say hello</Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" style={{ marginLeft: 28 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED WORK ── */}
      <section className="wrap-wide" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>Featured case studies</h2>
          </div>
          <Link href="/work" className="btn btn-ghost">View all →</Link>
        </div>

        {/* Featured card */}
        {featured && <CaseCard study={featured} featured />}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginTop: 16 }}>
          {rest.map(study => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <div style={{ background: 'var(--ink)', padding: '64px 48px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(250,247,242,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 36 }}>
            How I work
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {process.map((step, i) => (
              <div key={step.num} style={{
                paddingLeft: i === 0 ? 0 : 32,
                paddingRight: i === process.length - 1 ? 0 : 32,
                borderRight: i < process.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 36, color: 'var(--gold)', opacity: 0.5, lineHeight: 1, marginBottom: 10 }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 500, color: 'var(--ivory)', marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontSize: 13, color: 'rgba(250,247,242,0.45)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 48px 100px', textAlign: 'center' }}>
        <div className="avail-badge" style={{ margin: '0 auto 28px' }}>
          <span className="avail-dot" />
          Available for freelance & full-time roles
        </div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--ink)', letterSpacing: '-0.8px', lineHeight: 1.15, marginBottom: 20 }}>
          Let's make something great together.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32 }}>
          Open to product design roles and freelance collaborations.
        </p>
        <Link href="/contact" className="btn btn-dark">Get in touch →</Link>
      </div>

      <footer>© 2025 {meta.name} · Designed with care · Open to new opportunities</footer>
    </main>
  )
}
