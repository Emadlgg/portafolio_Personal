// src/components/ProjectCard.jsx
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const fig = String(index + 1).padStart(2, '0')

  return (
    <motion.a
      href={project.codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="draft-corners group block border border-base-line bg-base-panel hover:border-blue-400/50 transition-colors"
    >
      <div className="relative h-44 overflow-hidden border-b border-base-line">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-0 left-0 bg-base-bg/90 px-2 py-1 font-mono text-[10px] text-blue-400 border-r border-b border-base-line">
          fig.{fig}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg leading-snug">
            {project.name}
          </h3>
          <FiArrowUpRight className="shrink-0 mt-1 text-muted group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-blue-400/80">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
