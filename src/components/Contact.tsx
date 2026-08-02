import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[var(--color-accent-2)]">05 — Contact</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[var(--color-heading)] mt-3 mb-6">
            Let's build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="text-[var(--color-text-dim)] max-w-xl mx-auto mb-10">
            Open to new opportunities and freelance projects. Reach out and I'll get back to you
            as soon as I can.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-heading)] px-8 py-4 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
          >
            <Mail size={18} />
            {profile.email}
          </a>

          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-[var(--color-text-dim)]">
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-[var(--color-heading)] transition-colors">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-heading)] transition-colors">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-heading)] transition-colors">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
