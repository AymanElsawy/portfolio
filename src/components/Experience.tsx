import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { experience } from '../data/resume'
import Section from './Section'
import { FadeIn, MaskReveal } from './reveal'

export default function Experience() {
  const track = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ['start 75%', 'end 65%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <div ref={track} className="relative pl-6 sm:pl-8">
        {/* The rule fills as you read down it — the scroll indicator is the timeline. */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-rule)]" />
        <motion.div
          style={reduced ? undefined : { scaleY }}
          className="absolute left-0 top-2 bottom-2 w-px origin-top bg-[var(--color-signal)]"
        />

        {experience.map((job) => (
          <article key={job.company + job.period} className="relative pb-14 last:pb-0">
            <span className="absolute -left-6 top-2.5 h-1.5 w-1.5 -translate-x-1/2 bg-[var(--color-ink-strong)] sm:-left-8" />

            <FadeIn>
              <p className="figures text-[13px] text-[var(--color-ink-dim)]">{job.period}</p>
            </FadeIn>

            <h3 className="display mt-2 text-[clamp(1.25rem,2.6vw,1.75rem)] text-[var(--color-ink-strong)]">
              <MaskReveal delay={0.06}>{job.company}</MaskReveal>
            </h3>
            <FadeIn delay={0.16}>
              <p className="mt-1 text-[15px] text-[var(--color-ink)]">{job.title}</p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <ul className="mt-5 max-w-[62ch] space-y-3">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-[15px] leading-relaxed text-[var(--color-ink)]"
                >
                  <span className="absolute left-0 top-[0.72em] h-px w-2.5 bg-[var(--color-rule)]" />
                  {point}
                </li>
              ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-5 text-[13.5px] text-[var(--color-signal)]">{job.tags.join(', ')}</p>
            </FadeIn>
          </article>
        ))}
      </div>
    </Section>
  )
}
