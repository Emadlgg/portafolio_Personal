// src/components/Personal.jsx
import { motion } from 'framer-motion'
import PersonalCard from './PersonalCard'
import SpotifyPanel from './SpotifyPanel'


export default function Personal() {
  return (
    <section id="personal" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag mb-3">// fig. 04 — beyond_the_code</div>
          <h2 className="font-display font-bold text-4xl mb-4">Beyond the Code</h2>
          <p className="text-muted mb-12 max-w-xl">
            Dos registros más, estos no están en ningún stack técnico.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <PersonalCard />
            <SpotifyPanel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}