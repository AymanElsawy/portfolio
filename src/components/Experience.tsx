import { motion } from 'framer-motion'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[var(--color-accent-2)]">02 — Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-heading)] mt-3 mb-14">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="relative border-l border-[var(--color-border)] ml-2">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10 pb-14 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-display text-xl font-semibold text-[var(--color-heading)]">
                  {job.title} <span className="text-[var(--color-accent)]">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-[var(--color-text-dim)] whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="text-sm text-[var(--color-text)] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[var(--color-text-dim)]" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-dim)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
