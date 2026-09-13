import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { projects } from '../data/resume'
import Section from './Section'
import { DrawRule, FadeIn, MaskReveal } from './reveal'

function domainOf(link: string | null) {
  if (!link) return 'Not public'
  try {
    return new URL(link).hostname.replace(/^www\./, '')
  } catch {
    return link
  }
}

const rowClass =
  'group grid w-full grid-cols-1 items-baseline gap-x-6 gap-y-2 py-6 text-left sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto]'

/**
 * The work reads as a manifest of shipped products. Hovering a row pulls the
 * screenshot up under the cursor, so the page stays typographic until asked.
 */
export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [finePointer, setFinePointer] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const px = useSpring(x, { stiffness: 340, damping: 34, mass: 0.5 })
  const py = useSpring(y, { stiffness: 340, damping: 34, mass: 0.5 })

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const sync = () => setFinePointer(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return (
    <Section id="work" label="Work" title="Products that are live">
      <div
        className=""
        onPointerMove={(e) => {
          x.set(e.clientX)
          y.set(e.clientY)
        }}
        onPointerLeave={() => setHovered(null)}
      >
        {projects.map((project, i) => {
          const body = (
            <>
              <h3 className="display text-[clamp(1.35rem,3.2vw,2.1rem)] text-[var(--color-ink-strong)] transition-[color,transform] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-[var(--color-signal)] group-focus-visible:text-[var(--color-signal)]">
                <MaskReveal delay={0.05}>{project.name}</MaskReveal>
              </h3>

              <FadeIn delay={0.18} className="text-[14.5px] leading-relaxed text-[var(--color-ink)]">
                {project.description}
              </FadeIn>

              <FadeIn delay={0.24} className="figures text-[13px] text-[var(--color-ink-dim)]">
                {domainOf(project.link)}
              </FadeIn>

              <FadeIn delay={0.3} className="text-[13px] text-[var(--color-ink-dim)] sm:col-span-3">
                {project.stack.join(', ')}
              </FadeIn>

              {/* Touch devices never get the cursor preview, so show it inline. */}
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="mt-2 h-44 w-full border border-[var(--color-rule)] object-cover object-top sm:hidden"
              />
            </>
          )

          const handlers = {
            onPointerEnter: () => setHovered(i),
            onFocus: () => setHovered(i),
            onBlur: () => setHovered(null),
          }

          return (
            <div key={project.name}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={rowClass}
                  {...handlers}
                >
                  {body}
                </a>
              ) : (
                <div className={rowClass} {...handlers}>
                  {body}
                </div>
              )}
              <DrawRule soft />
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {finePointer && hovered !== null && (
          <motion.figure
            key={projects[hovered].name}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: px, top: py }}
            className="pointer-events-none fixed z-30 m-0 hidden -translate-x-1/2 -translate-y-[115%] sm:block"
            aria-hidden
          >
            <img
              src={projects[hovered].image}
              alt=""
              className="h-[188px] w-[300px] border border-[var(--color-rule)] bg-[var(--color-surface)] object-cover object-top"
            />
          </motion.figure>
        )}
      </AnimatePresence>
    </Section>
  )
}
