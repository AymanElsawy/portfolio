import type { ReactNode } from 'react'
import { DrawRule, FadeIn } from './reveal'

export type SpecRow = { term: string; detail: ReactNode }

/**
 * The hairline-ruled tables used by About, Skills and Contact. Each row draws
 * its own rule and fades its content in just behind it, one after the next.
 */
export default function SpecList({
  rows,
  termClass = 'sm:grid-cols-[11rem_minmax(0,1fr)]',
  className,
}: {
  rows: SpecRow[]
  termClass?: string
  className?: string
}) {
  return (
    <dl className={className}>
      <DrawRule />
      {rows.map((row, i) => (
        <div key={row.term}>
          <FadeIn
            delay={0.14 + i * 0.07}
            className={`grid grid-cols-1 gap-1 py-4 sm:gap-6 ${termClass}`}
          >
            <dt className="plate text-[13px] text-[var(--color-ink-dim)]">{row.term}</dt>
            <dd className="text-[15px] leading-relaxed text-[var(--color-ink-strong)]">
              {row.detail}
            </dd>
          </FadeIn>
          <DrawRule soft delay={0.08 + i * 0.07} />
        </div>
      ))}
    </dl>
  )
}
