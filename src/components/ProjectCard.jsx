// src/components/ProjectCard.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiFolder,
  FiGithub,
  FiPlay,
  FiGlobe,
} from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const fig = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="draft-corners group flex h-full flex-col border border-base-line bg-base-panel hover:border-green-400/50 transition-colors"
    >
      {/* ─────────────────────────────────────
          IMAGE
      ───────────────────────────────────── */}
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

        {/* Figure number */}
        <div className="absolute top-0 left-0 bg-base-bg/90 px-2 py-1 font-mono text-[10px] text-green-400 border-r border-b border-base-line">
          fig.{fig}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-0 right-0 bg-base-bg/90 px-2 py-1 font-mono text-[10px] text-green-400 border-l border-b border-base-line">
            ★ featured
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────
          CONTENT
      ───────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <div className="mb-2">
          <h3 className="font-display font-semibold text-lg leading-snug">
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-green-400/80 mb-5">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        {/* ─────────────────────────────────────
            ACTIONS
        ───────────────────────────────────── */}
        <div className="mt-auto pt-4 border-t border-base-line flex flex-wrap items-center gap-4">
          {/* Internal portfolio page */}
          {project.internalLink && (
            <Link
              to={project.internalLink}
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-green-400 transition-colors"
            >
              Explore
              <FiArrowUpRight />
            </Link>
          )}

          {/* GitHub */}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-green-400 transition-colors"
            >
              <FiGithub />
              GitHub
            </a>
          )}

          {/* Video / Demo */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-green-400 transition-colors"
            >
              <FiPlay />
              Demo
            </a>
          )}

          {/* Live application */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-green-400 transition-colors"
            >
              <FiGlobe />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}