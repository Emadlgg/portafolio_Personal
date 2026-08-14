// src/components/SpotifyPanel.jsx
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = ['now', 'artists', 'albums']

function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] bg-green-400"
          animate={{ height: ['30%', '100%', '30%'] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function SpotifyPanel() {
  const [tab, setTab] = useState('now')
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    fetch('/api/spotify')
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then((json) => {
        setData(json)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="border border-base-line bg-base-panel p-6 h-[420px] flex flex-col">
      <div className="label-tag mb-4">// record — spotify</div>

      <div className="flex gap-2 mb-5">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider border transition-colors ${
              tab === t
                ? 'border-green-400 text-green-400'
                : 'border-base-line text-muted hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {status === 'loading' && (
          <p className="font-mono text-xs text-muted">fetching...</p>
        )}

        {status === 'error' && (
          <p className="font-mono text-xs text-muted">spotify_unavailable — try again later</p>
        )}

        {status === 'ready' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tab === 'now' && <NowTab now={data.now} />}
              {tab === 'artists' && <ArtistsTab artists={data.artists} />}
              {tab === 'albums' && <AlbumsTab albums={data.albums} />}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

function NowTab({ now }) {
  if (!now) return <p className="font-mono text-xs text-muted">no recent activity</p>

  return (
    <a
      href={now.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      {now.image && (
        <img src={now.image} alt="" className="w-16 h-16 border border-base-line shrink-0" />
      )}
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase text-muted mb-1">
          {now.playing ? 'now playing' : 'last played'}
        </div>
        <div className="font-medium truncate group-hover:text-green-400 transition-colors">
          {now.name}
        </div>
        <div className="text-sm text-muted truncate">{now.artist}</div>
        {now.playing && (
          <div className="mt-2">
            <Equalizer />
          </div>
        )}
      </div>
    </a>
  )
}

function ArtistsTab({ artists }) {
  if (!artists?.length) return <p className="font-mono text-xs text-muted">no data yet</p>

  return (
    <div className="space-y-1 font-mono text-xs">
      <div className="text-muted mb-2">last 4 weeks</div>
      {artists.map((a, i) => (
        <a
          key={a.id}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 py-2 border-b border-base-line last:border-b-0 hover:text-green-400 transition-colors"
        >
          <span className="text-muted w-5">{String(i + 1).padStart(2, '0')}</span>
          {a.image && <img src={a.image} alt="" className="w-8 h-8 rounded-full" />}
          <span className="truncate">{a.name}</span>
        </a>
      ))}
    </div>
  )
}

function AlbumsTab({ albums }) {
  if (!albums?.length) return <p className="font-mono text-xs text-muted">no data yet</p>

  return (
    <div>
      <div className="font-mono text-[11px] text-muted mb-3">
        derivado de tu top tracks — aproximación, no un dato oficial de Spotify
      </div>
      <div className="grid grid-cols-3 gap-3">
        {albums.map((al) => (
          <a
            key={al.id}
            href={al.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {al.image && (
              <img
                src={al.image}
                alt=""
                className="w-full aspect-square object-cover border border-base-line group-hover:border-green-400 transition-colors"
              />
            )}
            <div className="font-mono text-[10px] text-muted mt-1 truncate group-hover:text-green-400 transition-colors">
              {al.artist}
            </div>
            <div className="font-mono text-[10px] text-muted/70 truncate">
              {al.count} track{al.count > 1 ? 's' : ''} in top 50
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}