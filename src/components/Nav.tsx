import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const ids = links.map((l) => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-rule)] bg-[var(--color-veil)] backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="plate text-[13px] text-[var(--color-ink-strong)]">
          Ayman Khalifa
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={l.href}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative block px-3 py-1.5 text-[13.5px] transition-colors ${
                  active === l.id
                    ? 'text-[var(--color-ink-strong)]'
                    : 'text-[var(--color-ink-dim)] hover:text-[var(--color-ink-strong)]'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-marker"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-[var(--color-signal)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-1.5 text-[var(--color-ink-strong)] md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden
        style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--color-signal)] transition-opacity duration-300"
      />

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--color-rule)] bg-[var(--color-bg)] md:hidden"
          >
            <ul className="px-6 py-2">
              {links.map((l) => (
                <li key={l.id} className="border-b border-[var(--color-rule-soft)] last:border-b-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-[15px] text-[var(--color-ink-strong)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
