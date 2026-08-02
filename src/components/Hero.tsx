import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/resume'

const roles = ['React.js', 'Angular', 'Next.js', 'Flutter']

const line1 = `Hi, I'm ${profile.name.split(' ')[0]},`
const line2 = 'Frontend Developer'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 24, rotateX: -60 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function AnimatedLine({ text, delay = 0, letterClassName }: { text: string; delay?: number; letterClassName?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      className="inline-block"
      style={{ perspective: 800 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className={`inline-block will-change-transform ${letterClassName ?? ''}`}
          style={letterClassName ? { animationDelay: `${i * 0.09}s` } : undefined}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg overflow-hidden"
    >
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-[var(--color-accent-2)] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-1.5 text-xs text-[var(--color-text-dim)] mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        Available for new opportunities
      </motion.div>

      <h1 className="relative z-10 font-display text-center text-5xl sm:text-6xl md:text-7xl font-semibold text-[var(--color-heading)] leading-[1.05] max-w-4xl">
        <AnimatedLine text={line1} delay={0.1} />
        <br />
        <AnimatedLine text={line2} delay={0.1 + line1.length * 0.045} letterClassName="text-gradient-move" />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative z-10 mt-6 max-w-xl text-center text-base sm:text-lg text-[var(--color-text-dim)]"
      >
        4+ years building fast, accessible web apps — currently shipping digital banking
        experiences at Banque Misr.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        {roles.map((r) => (
          <span
            key={r}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text)]"
          >
            {r}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 mt-10 flex items-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-[var(--color-heading)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
        >
          View my work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 mt-10 flex items-center gap-5 text-[var(--color-text-dim)]"
      >
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-heading)] transition-colors">
          <FaGithub size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-heading)] transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--color-heading)] transition-colors">
          <Mail size={20} />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 z-10 text-[var(--color-text-dim)]"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
