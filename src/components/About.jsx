// src/components/About.jsx
import { motion } from 'framer-motion'

const EDUCATION = [
  {
    degree: 'B.S. Computer Science & Information Technology',
    school: 'Universidad del Valle de Guatemala',
    period: '2023 — Present',
    status: 'active',
  },
  {
    degree: 'Computer Science Technician',
    school: 'Centro Educativo Técnico Laboral Kinal',
    period: '2017 — 2022',
    status: 'complete',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag mb-3">// fig. 01 — about</div>
          <h2 className="font-display font-bold text-4xl mb-16">About</h2>

          <div className="max-w-3xl space-y-5 text-muted text-lg leading-relaxed mb-24">
            <p>
              Soy una persona apasionada por la tecnología, pero también profundamente interesada
              en cómo esta se relaciona con las personas. El desarrollo de software no solo resuelve
              problemas técnicos — también responde al contexto humano en el que se inserta cada solución.
            </p>
            <p>
              Mi enfoque va más allá del código: construyo herramientas accesibles e intuitivas,
              y valoro el aprendizaje constante tanto en tecnología como fuera de ella.
            </p>
            <p>
              Cada proyecto busca unir precisión técnica con sensibilidad creativa, generando
              valor auténtico para quienes lo utilizan.
            </p>
          </div>

          {/* Education */}
          <div className="label-tag mb-6">// fig. 01.2 — education</div>
          <div className="border border-base-line bg-base-panel">
            <div className="grid grid-cols-12 px-5 py-3 border-b border-base-line label-tag">
              <span className="col-span-6">Degree</span>
              <span className="col-span-4">Institution</span>
              <span className="col-span-2 text-right">Period</span>
            </div>
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-12 px-5 py-5 border-b border-base-line last:border-b-0 items-center hover:bg-white/[0.02] transition-colors"
              >
                <span className="col-span-6 font-medium pr-4">{edu.degree}</span>
                <span className="col-span-4 text-muted text-sm pr-4">{edu.school}</span>
                <span className="col-span-2 font-mono text-xs text-right flex items-center justify-end gap-2">
                  {edu.status === 'active' && (
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  )}
                  <span className="text-muted">{edu.period}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
