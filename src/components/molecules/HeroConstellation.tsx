import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMouseParallax } from '../../hooks/useMouseParallax'

function Chip({
  label,
  children,
  className = '',
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-bg-elevated/90 p-3.5 shadow-xl backdrop-blur-md sm:p-4 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">{label}</p>
      {children}
    </div>
  )
}

/** Abstract trip constellation — stacked on mobile, orbiting on desktop. */
export function HeroConstellation() {
  const offset = useMouseParallax(16)

  return (
    <>
      {/* Mobile / tablet: readable stack */}
      <div className="mx-auto flex w-full max-w-md flex-col gap-3 lg:hidden">
        <Chip label="Departure">
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <p className="font-display text-5xl font-semibold tracking-tight text-ink">
                7
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Days to go
              </p>
            </div>
            <p className="pb-1 text-right text-sm text-muted">
              Tomorrowland
              <br />
              Yangon
            </p>
          </div>
        </Chip>
        <div className="grid grid-cols-2 gap-3">
          <Chip label="Group saving">
            <p className="font-display mt-2 text-base font-semibold text-ink">
              MMK 65k
            </p>
            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[12%] rounded-full bg-white" />
            </div>
          </Chip>
          <Chip label="Inspiration">
            <p className="mt-2 text-sm font-medium leading-snug text-ink">
              Hidden ramen spot
            </p>
          </Chip>
        </div>
        <Chip label="Notes">
          <p className="mt-2 text-sm leading-relaxed text-ink/90">
            Meet at gate B2 · don’t forget power bank
          </p>
        </Chip>
        <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-bg-elevated/90 py-2 pl-2 pr-4">
          <div className="flex -space-x-2">
            {['#3f3f46', '#52525b', '#71717a'].map(c => (
              <span
                key={c}
                className="h-7 w-7 rounded-full border-2 border-bg-elevated"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-xs text-muted">3 exploring</span>
        </div>
      </div>

      {/* Desktop: floating constellation */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[480px] lg:block">
        <div
          aria-hidden
          className="absolute inset-[8%] rounded-full border border-white/[0.06]"
        />
        <div
          aria-hidden
          className="absolute inset-[22%] rounded-full border border-dashed border-white/[0.08]"
        />
        <motion.div
          aria-hidden
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/40" />
          <span className="absolute bottom-[18%] left-[8%] h-1 w-1 rounded-full bg-white/25" />
          <span className="absolute right-[12%] top-[30%] h-1 w-1 rounded-full bg-white/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            transform: `translate3d(${offset.x * 0.2}px, ${offset.y * 0.2}px, 0)`,
          }}
          className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.22em] text-subtle">
              Departure
            </p>
            <p className="font-display mt-3 text-7xl font-semibold tracking-tight text-ink">
              7
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
              Days to go
            </p>
            <div className="mt-5 h-px w-full bg-white/10" />
            <p className="mt-4 text-sm text-muted">Tomorrowland · Yangon</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            transform: `translate3d(${-offset.x * 0.55}px, ${-offset.y * 0.4}px, 0)`,
          }}
          className="absolute left-0 top-[12%] w-[46%]"
        >
          <Chip label="Group saving">
            <p className="font-display mt-2 text-lg font-semibold text-ink">
              MMK 65k
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: '12%' }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
            </div>
          </Chip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.35}px, 0)`,
          }}
          className="absolute right-0 top-[18%] w-[44%]"
        >
          <Chip label="Inspiration">
            <p className="mt-2 text-sm font-medium leading-snug text-ink">
              Hidden ramen spot
            </p>
            <p className="mt-1 truncate text-xs text-muted">maps.app.goo.gl/…</p>
          </Chip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            transform: `translate3d(${offset.x * 0.3}px, ${-offset.y * 0.5}px, 0)`,
          }}
          className="absolute bottom-[6%] right-[2%] w-[52%]"
        >
          <Chip label="Notes">
            <p className="mt-2 text-sm leading-relaxed text-ink/90">
              Meet at gate B2 · don’t forget power bank
              <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-white align-middle" />
            </p>
          </Chip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          style={{
            transform: `translate3d(${-offset.x * 0.4}px, ${offset.y * 0.3}px, 0)`,
          }}
          className="absolute bottom-[14%] left-[4%]"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-bg-elevated/90 py-2 pl-2 pr-4 backdrop-blur-md">
            <div className="flex -space-x-2">
              {['#3f3f46', '#52525b', '#71717a'].map(c => (
                <span
                  key={c}
                  className="h-7 w-7 rounded-full border-2 border-bg-elevated"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-xs text-muted">3 exploring</span>
          </div>
        </motion.div>
      </div>
    </>
  )
}
