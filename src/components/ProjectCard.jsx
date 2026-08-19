// src/components/ProjectCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiFolder } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const fig = String(index + 1).padStart(2, '0')
  const isInternal = Boolean(project.internalLink)

  const Wrapper = isInternal ? Link : motion.a
  const wrapperProps = isInternal
    ? { to: project.internalLink }
    : { href: project.codeUrl, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Wrapper
        {...wrapperProps}
        className="draft-corners group block border border-base-line bg-base-panel hover:border-green-400/50 transition-colors"
      >
        <div className="relative h-44 overflow-hidden border-b border-base-line">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-base-bg/60">
              <FiFolder className="text-4xl text-base-line group-hover:text-green-400/40 transition-colors" />
            </div>
          )}
          <div className="absolute top-0 left-0 bg-base-bg/90 px-2 py-1 font-mono text-[10px] text-green-400 border-r border-b border-base-line">
            fig.{fig}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display font-semibold text-lg leading-snug">
              {project.name}
            </h3>
            <FiArrowUpRight className="shrink-0 mt-1 text-muted group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-green-400/80">
            {project.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  )
}