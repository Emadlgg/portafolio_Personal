// src/components/Experience.jsx

import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    role: 'Práctica Profesional — Desarrollo Full Stack & QA',
    org: 'Tigo',
    period: 'Feb 2026 — Ago 2026',
    type: 'Profesional',
    description:
      'Participé en el desarrollo y validación de una herramienta interna orientada a QA y pruebas de producto.',
    bullets: [
      'Desarrollé funcionalidades frontend y backend utilizando React, Node.js, Express y Docker.',
      'Consumí APIs REST existentes para construir y validar flujos de prueba contra un ambiente UAT.',
      'Realicé consultas y validaciones sobre bases de datos relacionales como parte del proceso de QA.',
      'Ejecuté pruebas end-to-end y documenté casos y resultados para mantener la trazabilidad del proceso.',
      'Utilicé Git y GitLab para control de versiones y resolución de incidencias técnicas.',
    ],
    tags: [
      'React',
      'Node.js',
      'Express',
      'REST APIs',
      'Docker',
      'SQL',
      'UAT',
      'E2E Testing',
    ],
  },

  {
    role: 'Auxiliar de Cátedra — Algoritmos y Programación Básica',
    org: 'Universidad del Valle de Guatemala',
    period: 'Ene 2026 — Jun 2026',
    type: 'Académico',
    description:
      'Apoyé a estudiantes en el desarrollo de fundamentos de programación, algoritmos y resolución de problemas.',
    bullets: [
      'Brindé acompañamiento en fundamentos de programación y pensamiento algorítmico.',
      'Apoyé a estudiantes durante actividades, ejercicios y resolución de dudas técnicas.',
    ],
    tags: [
      'Algoritmos',
      'Programación',
      'Enseñanza',
    ],
  },

  {
    role: 'Auxiliar de Cátedra — Introducción a Ingeniería en Computación',
    org: 'Universidad del Valle de Guatemala',
    period: 'Ene 2025 — Jun 2025',
    type: 'Académico',
    description:
      'Brindé apoyo académico y técnico durante laboratorios introductorios de Ingeniería en Computación.',
    bullets: [
      'Apoyé a más de 30 estudiantes durante sesiones de laboratorio.',
      'Orienté a estudiantes en conceptos introductorios de programación e Ingeniería en Computación.',
    ],
    tags: [
      'Enseñanza',
      'Computación',
      'Soporte Técnico',
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
          {/* ENCABEZADO */}
          <div className="label-tag mb-3">
            // fig. 02 — experiencia
          </div>

          <h2 className="font-display font-bold text-4xl mb-4">
            Experiencia
          </h2>

          <p className="text-muted max-w-2xl mb-16 leading-relaxed">
            Experiencia profesional y académica en desarrollo full stack,
            aseguramiento de calidad de software y enseñanza.
          </p>

          {/* TIMELINE */}
          <div className="relative border-l border-base-line ml-2">
            {EXPERIENCE.map((exp, i) => (
              <motion.article
                key={`${exp.org}-${exp.role}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                }}
                className="relative pl-8 pb-16 last:pb-0"
              >
                {/* PUNTO DEL TIMELINE */}
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-base-bg border-2 border-green-400" />

                {/* FECHA Y TIPO */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-green-400">
                    {exp.period}
                  </span>

                  <span className="text-base-line">/</span>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-green-400 border border-green-400/40 px-2 py-0.5">
                    {exp.type}
                  </span>
                </div>

                {/* PUESTO */}
                <h3 className="font-display font-semibold text-xl md:text-2xl leading-snug">
                  {exp.role}
                </h3>

                {/* ORGANIZACIÓN */}
                <div className="font-mono text-sm text-muted mt-1 mb-4">
                  @ {exp.org}
                </div>

                {/* DESCRIPCIÓN */}
                {exp.description && (
                  <p className="text-sm text-muted leading-relaxed max-w-3xl mb-5">
                    {exp.description}
                  </p>
                )}

                {/* RESPONSABILIDADES */}
                <ul className="space-y-2 max-w-4xl">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted leading-relaxed flex gap-3"
                    >
                      <span className="text-green-400 shrink-0 font-mono">
                        →
                      </span>

                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* TECNOLOGÍAS / HABILIDADES */}
                {exp.tags && (
                  <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5 font-mono text-[11px] text-green-400/80">
                    {exp.tags.map((tag) => (
                      <span key={tag}>
                        #{tag.replace(/\s+/g, '-')}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}