import { profile } from '../data/resume'
import Section from './Section'
import SpecList from './SpecList'
import { FadeIn, MaskReveal } from './reveal'

const channels = [
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { label: 'GitHub', value: 'View profile', href: profile.github },
  { label: 'LinkedIn', value: 'View profile', href: profile.linkedin },
]

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's talk about your next build">
      <FadeIn delay={0.12}>
        <p className="prose-serif text-[var(--color-ink)]">
          I'm open to frontend roles and freelance work — web apps, dashboards, or an iOS build.
          Send a note and I'll reply within a day.
        </p>
      </FadeIn>

      <h3 className="display mt-10 text-[clamp(1.5rem,4.6vw,3rem)]">
        <a
          href={`mailto:${profile.email}`}
          className="rule-link inline-block text-[var(--color-ink-strong)] hover:text-[var(--color-signal)]"
        >
          <MaskReveal delay={0.2}>{profile.email}</MaskReveal>
        </a>
      </h3>

      <SpecList
        className="mt-14"
        termClass="sm:grid-cols-[11rem_minmax(0,1fr)]"
        rows={channels.map((c) => ({
          term: c.label,
          detail: (
            <a
              href={c.href}
              {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="figures rule-link text-[var(--color-ink-strong)]"
            >
              {c.value}
            </a>
          ),
        }))}
      />
    </Section>
  )
}
