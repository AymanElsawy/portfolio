import { motion } from 'framer-motion'
import { profile } from '../data/resume'

const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '10+', label: 'Projects shipped' },
  { value: '2', label: 'iOS apps on App Store' },
  { value: '4', label: 'Companies' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[var(--color-accent-2)]">01 — About</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-heading)] mt-3 mb-6">
            A frontend developer who ships.
          </h2>
          <p className="text-[var(--color-text)] text-lg leading-relaxed max-w-3xl">
            {profile.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left"
            >
              <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-[var(--color-text-dim)]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
