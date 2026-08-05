// src/components/Hero.jsx
import { motion } from 'framer-motion'

const NODES = [
  { id: 'frontend', label: 'FRONTEND', x: 300, y: 110 },
  { id: 'backend', label: 'BACKEND', x: 490, y: 300 },
  { id: 'qa', label: 'QA & TESTING', x: 300, y: 490 },
  { id: 'databases', label: 'DATABASES', x: 110, y: 300 },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-4">// fig. 00 — profile</div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] mb-6">
            Osman de León
          </h1>
          <p className="font-mono text-green-400 text-lg mb-6">
            Full Stack Developer &amp; QA Engineer
          </p>
          <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
            Construyo sistemas confiables de extremo a extremo — desde interfaces
            cuidadas hasta el esquema de datos que las sostiene, con la mentalidad
            de quien también los pone a prueba.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-green-400 text-base-bg font-mono text-sm font-medium hover:bg-green-500 transition-colors"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-base-line font-mono text-sm text-ink hover:border-green-400 hover:text-green-400 transition-colors"
            >
              contact_me()
            </a>
          </div>
        </motion.div>

        {/* Right: ER-diagram signature element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-lg mx-auto w-full"
        >
          <svg viewBox="0 0 600 600" className="w-full h-full">
            {/* connecting lines */}
            {NODES.map((n, i) => (
              <motion.line
                key={n.id}
                x1="300"
                y1="300"
                x2={n.x}
                y2={n.y}
                stroke="var(--line)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeInOut' }}
              />
            ))}

            {/* traveling pulse per line */}
            {NODES.map((n, i) => (
              <motion.circle
                key={`pulse-${n.id}`}
                r="4"
                fill="var(--green)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [300, n.x],
                  cy: [300, n.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2 + i * 0.4,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* outer nodes */}
            {NODES.map((n, i) => (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
              >
                <rect
                  x={n.x - 55}
                  y={n.y - 20}
                  width="110"
                  height="40"
                  fill="var(--panel)"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="11"
                  fill="var(--muted)"
                  letterSpacing="0.5"
                >
                  {n.label}
                </text>
              </motion.g>
            ))}

            {/* center node */}
            <motion.g
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <rect
                x={300 - 65}
                y={300 - 26}
                width="130"
                height="52"
                fill="var(--bg)"
                stroke="var(--green)"
                strokeWidth="1.5"
              />
              <text
                x="300"
                y="295"
                textAnchor="middle"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="600"
                fontSize="16"
                fill="var(--ink)"
              >
                OSMAN
              </text>
              <text
                x="300"
                y="312"
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize="9"
                fill="var(--green)"
                letterSpacing="1"
              >
                PRIMARY KEY
              </text>
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
