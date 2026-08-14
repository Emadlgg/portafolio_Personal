// src/components/Header.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'

const SECTIONS = [
  { id: 'home', num: '00', label: 'Home' },
  { id: 'about', num: '01', label: 'About' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'personal', num: '04', label: 'Personal' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'contact', num: '06', label: 'Contact' },
]

export default function Header({ activeSection, isScrolled, isDark, toggleTheme }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-base-bg/90 backdrop-blur-md border-base-line'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-display font-semibold text-lg tracking-tight">
            OSMAN<span className="text-green-400">.</span>DEV
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 ${
                  activeSection === s.id ? 'text-green-400' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="opacity-50">{s.num}</span>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-muted hover:text-green-400 transition-colors"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="https://github.com/Emadlgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green-400 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/osman-edlg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green-400 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
