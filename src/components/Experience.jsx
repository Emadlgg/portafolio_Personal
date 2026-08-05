// src/components/Experience.jsx
import { motion } from 'framer-motion'

// TODO: ajusta nombres de empresa, fechas y bullets exactos según tu CV
const EXPERIENCE = [
  {
    role: 'QA Engineer & Full Stack Developer',
    org: 'Product Development Team',
    period: '2026 — Present',
    type: 'Full-time',
    bullets: [
      'Diseño y ejecución de casos de prueba para productos previo a su lanzamiento',
      'Desarrollo full-stack de herramientas internas de QA',
      'Trabajo bajo metodología Scrum en equipo multidisciplinario',
    ],
  },
  {
    role: 'Práctica Profesional — Full Stack QA Tooling',
    org: 'TCM Galaxion',
    period: '—',
    type: 'Internship',
    bullets: [
      'Herramienta interna full-stack para probar APIs de Customer Order y Device Category Management contra ambiente UAT',
      'Stack: React + Vite, Express + Node.js, Docker Compose',
      'Integración end-to-end con flujos de pago (EpinPayment, CreditCardPayment)',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'Universidad del Valle de Guatemala',
    period: '—',
    type: 'Academic',
    bullets: [
      'Apoyo en cursos de la carrera de Ingeniería en Ciencias de la Computación',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'Universidad del Valle de Guatemala',
    period: '—',
    type: 'Academic',
    bullets: [
      'Segundo rol de asistencia académica dentro de la carrera',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag mb-3">// fig. 02 — experience</div>
          <h2 className="font-display font-bold text-4xl mb-16">Experience</h2>

          <div className="relative border-l border-base-line ml-2">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-base-bg border-2 border-green-400" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display font-semibold text-xl">{exp.role}</h3>
                  <span className="font-mono text-[11px] uppercase text-green-400 border border-green-400/40 px-2 py-0.5">
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 mb-3 font-mono text-xs text-muted">
                  <span>{exp.org}</span>
                  <span className="opacity-50">·</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-green-400 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
