import { skills } from '../data/resume'
import Section from './Section'
import SpecList from './SpecList'

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <SpecList
        rows={skills.map((g) => ({ term: g.group, detail: g.items.join(', ') }))}
        termClass="sm:grid-cols-[13rem_minmax(0,1fr)]"
      />
    </Section>
  )
}
