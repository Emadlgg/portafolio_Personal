// src/components/PersonalCard.jsx
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MUSIC = ['NSQK', 'Álvaro Díaz', 'Latin Mafia', 'Kali Uchis', 'Daft Punk', 'Skrillex']

// Barcelona palette — used only for the hidden burst, keeps the rest of the site on-brand
const BURST_COLORS = ['#A50044', '#004D98', '#EDBB00']

function ConfettiBurst() {
  const pieces = Array.from({ length: 26 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const angle = (i / pieces.length) * Math.PI * 2
        const distance = 90 + Math.random() * 60
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        const color = BURST_COLORS[i % BURST_COLORS.length]
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 w-1.5 h-1.5"
            style={{ backgroundColor: color }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        )
      })}
    </div>
  )
}

export default function PersonalCard() {
  const [flipped, setFlipped] = useState(false)
  const [burst, setBurst] = useState(false)
  const clickCount = useRef(0)
  const clickTimer = useRef(null)

  const handleClick = () => {
    setFlipped((f) => !f)

    // hidden easter egg — 5 clicks in under 2s
    clickCount.current += 1
    clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => { clickCount.current = 0 }, 2000)
    if (clickCount.current >= 5) {
      clickCount.current = 0
      setBurst(true)
      setTimeout(() => setBurst(false), 900)
    }
  }

  return (

    <div className="w-full" style={{ perspective: '1200px' }}>
      <motion.div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Flip personal card"
        className="relative w-full h-[420px] cursor-pointer select-none"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 border border-base-line bg-base-panel p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="label-tag mb-4">// record — professional</div>
          <div className="font-mono text-sm leading-relaxed text-muted flex-1">
            <span className="text-ink">{'{'}</span>
            <div className="pl-4">
              <div><span className="text-green-400">name</span>: "Osman de León",</div>
              <div><span className="text-green-400">role</span>: "Full Stack Developer & QA Engineer",</div>
              <div><span className="text-green-400">location</span>: "Guatemala",</div>
              <div><span className="text-green-400">focus</span>: ["Full Stack", "QA", "Data"]</div>
            </div>
            <span className="text-ink">{'}'}</span>
          </div>
          <div className="font-mono text-[11px] text-muted/70 pt-4 border-t border-base-line">
            click → flip_record()
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 border border-green-400/40 bg-base-panel p-6 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <AnimatePresence>{burst && <ConfettiBurst />}</AnimatePresence>

          <div className="label-tag mb-4">// record — beyond_the_code</div>

          <div className="space-y-3 font-mono text-xs flex-1 overflow-y-auto pr-1">
            <Row label="team" value="FC Barcelona" />
            <Row label="f1" value="Mercedes — George Russell" />
            <Row label="heroes" value="Spiderman, Doctor Strange" />
            <Row label="music" value={MUSIC.join(', ')} wrap />
            <Row label="hobbies" value="Reading, soccer, volleyball, ir de paseo" wrap />
            <Row label="quote" value={'"en todos lados menos en mi casa"'} wrap />
          </div>

          {/* now playing — static placeholder, ready to wire to Spotify */}
          <div className="pt-4 mt-4 border-t border-base-line">
            <div className="flex items-center gap-3">
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
              <div className="text-[11px] text-muted truncate">
                <span className="text-green-400">now_playing</span> — connect Spotify soon
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Row({ label, value, wrap }) {
  return (
    <div className={wrap ? '' : 'flex items-baseline gap-2'}>
      <span className="text-green-400 shrink-0">{label}:</span>{' '}
      <span className="text-muted">{value}</span>
    </div>
  )
}