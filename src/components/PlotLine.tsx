import { motion, useReducedMotion } from 'framer-motion'

const PATH =
  'M0,168 L83,158 L166,172 L250,140 L333,150 L416,112 L500,124 L583,76 L666,90 L750,44 L833,56 L916,22 L1000,6'

const VERTICES = PATH.slice(1)
  .split(' L')
  .map((pair) => pair.split(',').map(Number) as [number, number])

const DRAW = 1.9

/**
 * The page's single unprompted moment: a pen plots one rising line across the
 * hero on load, then stops. Reflects the subject matter — four years of
 * dashboards and banking charts — rather than decorating it.
 */
export default function PlotLine() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-[58%]" aria-hidden>
      <svg
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
        className="h-[46vh] w-full text-[var(--color-signal)] opacity-[0.45]"
        fill="none"
      >
        <motion.path
          d={PATH}
          stroke="currentColor"
          strokeWidth={1.25}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: DRAW, ease: [0.33, 0.05, 0.2, 1] }}
        />
        {VERTICES.map(([x, y], i) => (
          <motion.line
            key={x}
            x1={x}
            y1={y - 3}
            x2={x}
            y2={y + 3}
            stroke="currentColor"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            initial={reduced ? { opacity: 0.55 } : { opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{
              duration: 0.25,
              delay: reduced ? 0 : (i / (VERTICES.length - 1)) * DRAW,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
