// src/components/LabPage.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiBook,
} from 'react-icons/fi'
import { labs } from '../data/labs'

function groupByFolder(paths) {
  const groups = {}

  for (const path of paths) {
    const parts = path.split('/')
    const folder = parts.length > 1 ? parts[0] : '(root)'

    if (!groups[folder]) {
      groups[folder] = []
    }

    groups[folder].push(path)
  }

  return groups
}

export default function LabPage() {
  const { slug } = useParams()
  const lab = labs[slug]

  const [status, setStatus] = useState('loading')
  const [groups, setGroups] = useState({})

  useEffect(() => {
    if (!lab) return

    window.scrollTo(0, 0)

    // Reset state when changing labs
    setStatus('loading')
    setGroups({})

    const url = `https://api.github.com/repos/${lab.owner}/${lab.repo}/git/trees/${lab.branch}?recursive=1`

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('github_api_error')
        }

        return response.json()
      })
      .then((data) => {
        const notebooks = (data.tree || [])
          .filter(
            (item) =>
              item.type === 'blob' &&
              item.path.endsWith('.ipynb')
          )
          .map((item) => item.path)

        if (notebooks.length === 0) {
          setStatus('empty')
          return
        }

        setGroups(groupByFolder(notebooks))
        setStatus('ready')
      })
      .catch(() => {
        setStatus('error')
      })
  }, [lab])

  if (!lab) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="label-tag mb-4">// 404</p>

          <h1 className="font-display font-bold text-3xl mb-6">
            Lab not found
          </h1>

          <Link
            to="/"
            className="font-mono text-sm text-green-400 hover:underline"
          >
            ← back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  const repoUrl = `https://github.com/${lab.owner}/${lab.repo}`

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-green-400 transition-colors mb-10"
          >
            <FiArrowLeft />
            back to portfolio
          </Link>

          <div className="label-tag mb-3">
            // repo — {lab.repo}
          </div>

          <h1 className="font-display font-bold text-4xl mb-4">
            {lab.name}
          </h1>

          <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl">
            {lab.description}
          </p>

          {/* GitHub repository link */}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-base-line font-mono text-sm hover:border-green-400 hover:text-green-400 transition-colors mb-14"
          >
            <FiGithub />
            view on GitHub
            <FiExternalLink className="text-xs" />
          </a>

          {/* Loading */}
          {status === 'loading' && (
            <p className="font-mono text-sm text-muted">
              fetching notebooks from GitHub...
            </p>
          )}

          {/* Error */}
          {status === 'error' && (
            <p className="font-mono text-sm text-muted">
              no se pudo consultar la API de GitHub ahora mismo
              (puede ser un límite temporal de requests) —{' '}
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                revisa el repo directo
              </a>
              .
            </p>
          )}

          {/* No notebooks */}
          {status === 'empty' && (
            <p className="font-mono text-sm text-muted">
              todavía no hay notebooks publicados en este repo.
            </p>
          )}

          {/* Notebook list */}
          {status === 'ready' && (
            <div className="space-y-10">
              {Object.entries(groups).map(
                ([folder, notebooks], groupIndex) => (
                  <motion.div
                    key={folder}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.05 }}
                  >
                    <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                      {folder}
                    </h3>

                    <div className="border border-base-line bg-base-panel divide-y divide-base-line">
                      {notebooks.map((path) => {
                        const filename = path.split('/').pop()

                        const nbviewerUrl =
                          `https://nbviewer.org/github/` +
                          `${lab.owner}/${lab.repo}/blob/` +
                          `${lab.branch}/${path}`

                        return (
                          <a
                            key={path}
                            href={nbviewerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-5 py-4 hover:bg-white/[0.03] transition-colors group"
                          >
                            <FiBook className="text-green-400 shrink-0" />

                            <span className="font-mono text-sm truncate flex-1 group-hover:text-green-400 transition-colors">
                              {filename}
                            </span>

                            <FiExternalLink className="text-muted text-xs shrink-0" />
                          </a>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}