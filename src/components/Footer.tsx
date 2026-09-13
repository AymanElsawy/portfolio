import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-6 py-8 text-[12.5px] text-[var(--color-ink-dim)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="figures">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Set in Archivo and Newsreader. Built with React and Framer Motion.</p>
      </div>
    </footer>
  )
}
