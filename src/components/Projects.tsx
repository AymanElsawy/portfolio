import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[var(--color-accent-2)]">03 — Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-heading)] mt-3 mb-14">
            Selected work.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative isolate h-72 overflow-hidden rounded-2xl border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)]"
              >
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="card-image-overlay absolute inset-0" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-left">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-lg font-semibold text-[var(--color-heading)]">
                      {p.name}
                    </h3>
                    {p.link && (
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-[var(--color-text-dim)] transition-all group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-dim)] leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )

            return p.link ? (
              <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="block h-full">
                {Card}
              </a>
            ) : (
              <div key={p.name}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
