import { profile, education, languages } from '../data/resume'
import Section from './Section'
import SpecList from './SpecList'
import { FadeIn } from './reveal'

const spec = [
  { term: 'Role', detail: 'Frontend developer, four years in production' },
  { term: 'Day to day', detail: 'Angular and React, TypeScript, accessible UI, performance' },
  { term: 'Also builds', detail: 'Node.js and Express APIs, MongoDB, Flutter apps for iOS' },
  { term: 'Education', detail: `${education.degree}, ${education.period}` },
  {
    term: 'Languages',
    detail: languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(', '),
  },
]

export default function About() {
  return (
    <Section id="about" label="About" title="What I do">
      <FadeIn delay={0.12}>
        <p className="prose-serif text-[var(--color-ink)]">{profile.summary}</p>
      </FadeIn>

      <SpecList rows={spec} className="mt-12" />
    </Section>
  )
}
