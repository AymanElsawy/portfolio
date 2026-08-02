import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-dim)]">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with React &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
