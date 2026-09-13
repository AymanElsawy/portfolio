import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Scroll reveals reuse the hero's own language: type arrives by unmasking from
 * behind a line, and structural rules draw themselves left to right. Nothing
 * slides up out of nowhere.
 */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  if (reduced) return <span className={className}>{children}</span>

  return (
    <span className="mask-line">
      <motion.span
        initial={{ y: '112%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className={`block will-change-transform ${className ?? ''}`}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function DrawRule({ delay = 0, soft = false }: { delay?: number; soft?: boolean }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={`h-px w-full origin-left ${
        soft ? 'bg-[var(--color-rule-soft)]' : 'bg-[var(--color-rule)]'
      }`}
    />
  )
}

/** Opacity only — a translate here would read as the generic scroll fade-up. */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
