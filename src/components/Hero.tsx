import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/resume'
import PlotLine from './PlotLine'

const HEADLINE = ['I build frontends', 'that go live', 'and stay live.']

const facts = [
  { label: 'Now', value: 'Engineer III, Banque Misr' },
  { label: 'Live products', value: '9' },
  { label: 'On the App Store', value: '2 iOS apps' },
  { label: 'Based in', value: profile.location },
]

const line = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.85, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const plotY = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])
  const plotOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: plotY, opacity: plotOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <PlotLine />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pt-32 pb-16 sm:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="plate mb-10 text-[13px] text-[var(--color-ink-dim)]"
        >
          {profile.name} — frontend developer
        </motion.p>

        <h1 className="display text-[clamp(2.7rem,8.4vw,6.5rem)] text-[var(--color-ink-strong)]">
          {HEADLINE.map((text, i) => (
            <span key={text} className="mask-line">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className="block will-change-transform"
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="prose-serif mt-9 text-[var(--color-ink)]"
        >
          Four years of production work — digital banking for millions of customers at Banque
          Misr, plus corporate sites, admin dashboards, and two iOS apps shipped to the App
          Store.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.68 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a
            href="#work"
            className="bg-[var(--color-ink-strong)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-signal)]"
          >
            See the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rule-link text-sm font-medium text-[var(--color-ink-strong)]"
          >
            Email me
          </a>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="relative mx-auto grid w-full max-w-[1180px] grid-cols-2 border-t border-[var(--color-rule)] px-6 sm:px-10 md:grid-cols-4"
      >
        {facts.map((f) => (
          <div
            key={f.label}
            className="border-b border-[var(--color-rule-soft)] py-5 pr-6 md:border-b-0"
          >
            <dt className="plate text-[12px] text-[var(--color-ink-dim)]">{f.label}</dt>
            <dd className="figures mt-1.5 text-[15px] text-[var(--color-ink-strong)]">{f.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
