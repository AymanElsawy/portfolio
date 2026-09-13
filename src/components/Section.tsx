import type { ReactNode } from 'react'
import { DrawRule, FadeIn, MaskReveal } from './reveal'

/**
 * Every section shares one asymmetric grid: a sticky label rail on the left,
 * content on the right. The rail tells you where you are while you scroll,
 * so the sections themselves need no eyebrow labels.
 */
export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title?: string
  children: ReactNode
}) {
  return (
    <section id={id}>
      <DrawRule />
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-x-10 px-6 py-20 sm:px-10 md:grid-cols-[9rem_minmax(0,1fr)] md:py-28">
        <FadeIn className="mb-8 md:mb-0">
          <p className="sticky top-24 plate text-[13px] text-[var(--color-ink-dim)]">{label}</p>
        </FadeIn>
        <div>
          {title && (
            <h2 className="display mb-10 text-[clamp(1.9rem,4.2vw,3rem)] text-[var(--color-ink-strong)]">
              <MaskReveal delay={0.05}>{title}</MaskReveal>
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
