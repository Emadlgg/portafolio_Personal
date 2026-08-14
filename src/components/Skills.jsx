// src/components/Skills.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillsSchema, typeColors } from '../data/skills'

const TYPES = ['all', 'language', 'frontend', 'backend', 'database', 'data', 'quality', 'tooling', 'support']

function LevelBar({ level }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-base-line overflow-hidden">
        <motion.div
          className="h-full bg-green-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="font-mono text-[10px] text-muted w-7 text-right shrink-0">{level}%</span>
    </div>
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const rows = filter === 'all' ? skillsSchema : skillsSchema.filter((s) => s.type === filter)

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag mb-3">// fig. 03 — skills_schema</div>
          <h2 className="font-display font-bold text-4xl mb-4">Skills</h2>
          <p className="text-muted mb-10 max-w-xl">
            Representadas como un esquema de base de datos — porque, honestamente, así es como pienso mi stack.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider border transition-colors ${
                  filter === t
                    ? 'border-green-400 text-green-400'
                    : 'border-base-line text-muted hover:text-ink hover:border-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="border border-base-line bg-base-panel overflow-hidden">
            <div className="grid grid-cols-12 px-5 py-3 border-b border-base-line label-tag">
              <span className="col-span-4 sm:col-span-3">field</span>
              <span className="col-span-3 sm:col-span-2">type</span>
              <span className="col-span-5 sm:col-span-3">level</span>
              <span className="hidden sm:block sm:col-span-4">description</span>
            </div>
            <AnimatePresence mode="popLayout">
              {rows.map((s) => (
                <motion.div
                  layout
                  key={s.field}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-12 px-5 py-4 border-b border-base-line last:border-b-0 items-center hover:bg-white/[0.03] transition-colors"
                >
                  <span className="col-span-4 sm:col-span-3 font-medium pr-2">{s.field}</span>
                  <span className={`col-span-3 sm:col-span-2 font-mono text-xs uppercase ${typeColors[s.type]}`}>
                    {s.type}
                  </span>
                  <span className="col-span-5 sm:col-span-3 pr-2">
                    <LevelBar level={s.level} />
                  </span>
                  <span className="hidden sm:block sm:col-span-4 text-sm text-muted">{s.note}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}