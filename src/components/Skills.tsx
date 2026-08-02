import { motion } from 'framer-motion'
import { skills, education, languages } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[var(--color-accent-2)]">04 — Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-heading)] mt-3 mb-14">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left"
            >
              <h3 className="font-display text-sm font-semibold text-[var(--color-heading)] mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1.5 font-mono text-xs text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left"
          >
            <h3 className="font-display text-sm font-semibold text-[var(--color-heading)] mb-2">Education</h3>
            <p className="text-sm text-[var(--color-text)]">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-[var(--color-text-dim)]">{education.period}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left"
          >
            <h3 className="font-display text-sm font-semibold text-[var(--color-heading)] mb-2">Languages</h3>
            <div className="flex gap-6">
              {languages.map((l) => (
                <div key={l.name}>
                  <p className="text-sm text-[var(--color-text)]">{l.name}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-dim)]">{l.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
