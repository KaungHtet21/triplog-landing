import { AnimatePresence, motion } from 'framer-motion'

type StageId = 'countdown' | 'notes' | 'inspiration' | 'saving'

type FeatureCanvasProps = {
  stage: StageId
}

const fade = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -14, filter: 'blur(6px)' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

function CountdownCanvas() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="text-[10px] uppercase tracking-[0.28em] text-subtle sm:text-xs">
        Trip countdown
      </p>
      <div className="mt-5 grid w-full max-w-sm grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
        {[
          { n: '7', l: 'Days' },
          { n: '09', l: 'Hrs' },
          { n: '41', l: 'Min' },
        ].map(cell => (
          <div
            key={cell.l}
            className="rounded-xl border border-line bg-accent-soft py-4 sm:rounded-2xl sm:py-6"
          >
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
              {cell.n}
            </p>
            <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-muted sm:mt-2 sm:text-[10px]">
              {cell.l}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex w-full max-w-sm items-center gap-3 sm:mt-10">
        <span className="text-[10px] uppercase tracking-[0.16em] text-subtle">
          Home
        </span>
        <div className="relative h-px flex-1 bg-accent/15">
          <motion.span
            className="absolute -top-1.5 h-3 w-3 rounded-full bg-accent"
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-subtle">
          MM
        </span>
      </div>
    </div>
  )
}

function NotesCanvas() {
  const lines = [
    'Gate B2 — 06:40 sharp',
    'Bring cash for night market',
    'Power bank × 2',
    'Hidden ramen after set 2',
  ]
  return (
    <div className="flex h-full flex-col justify-center px-5 sm:px-8 md:px-12">
      <p className="text-[10px] uppercase tracking-[0.28em] text-subtle sm:text-xs">
        Shared notes
      </p>
      <div className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            className="border-b border-line pb-2.5 font-display text-base text-ink sm:pb-3 sm:text-xl md:text-2xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

function InspirationCanvas() {
  const items = [
    { title: 'Hidden ramen spot', kind: 'Maps' },
    { title: 'Main stage set times', kind: 'TikTok' },
    { title: 'Sunrise lookout', kind: 'Link' },
  ]
  return (
    <div className="flex h-full flex-col justify-center px-5 sm:px-8 md:px-10">
      <p className="text-[10px] uppercase tracking-[0.28em] text-subtle sm:text-xs">
        Inspiration board
      </p>
      <div className="mt-5 grid gap-2.5 sm:mt-8 sm:gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center justify-between gap-3 rounded-xl border border-line bg-accent-soft px-4 py-3 sm:rounded-2xl sm:px-5 sm:py-4"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-xs text-muted">Saved for the crew</p>
            </div>
            <span className="shrink-0 rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-subtle sm:px-3">
              {item.kind}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SavingCanvas() {
  const ranks = [
    { name: 'Kaung Htet', amount: '40k', w: '80%' },
    { name: 'Aye', amount: '15k', w: '30%' },
    { name: 'Min', amount: '10k', w: '20%' },
  ]
  return (
    <div className="flex h-full flex-col justify-center px-5 sm:px-8 md:px-10">
      <p className="text-[10px] uppercase tracking-[0.28em] text-subtle sm:text-xs">
        Squad piggy bank
      </p>
      <div className="mt-4 flex items-end justify-between gap-3 sm:mt-6 sm:gap-4">
        <div className="min-w-0">
          <p className="text-sm text-muted">Saved so far</p>
          <p className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
            MMK 65k
          </p>
        </div>
        <p className="shrink-0 pb-1 text-right text-[11px] text-subtle sm:text-xs">
          of 10M
          <br />
          1% funded
        </p>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-accent-soft sm:mt-5">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: '8%' }}
          transition={{ duration: 0.9 }}
        />
      </div>
      <div className="mt-5 space-y-3 sm:mt-8">
        {ranks.map((r, i) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-5 text-xs text-subtle">#{i + 1}</span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex justify-between gap-2 text-xs">
                <span className="truncate text-ink">{r.name}</span>
                <span className="shrink-0 text-muted">{r.amount}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-accent-soft">
                <motion.div
                  className="h-full rounded-full bg-accent/70"
                  initial={{ width: 0 }}
                  animate={{ width: r.w }}
                  transition={{ duration: 0.8, delay: 0.1 * i }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FeatureCanvas({ stage }: FeatureCanvasProps) {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line bg-[radial-gradient(ellipse_at_top,var(--hero-glow),transparent_55%),var(--bg-elevated)] shadow-[0_40px_100px_rgba(0,0,0,0.18)] sm:aspect-[4/5] sm:rounded-[1.75rem] md:aspect-square">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div key={stage} className="absolute inset-0" {...fade}>
          {stage === 'countdown' ? <CountdownCanvas /> : null}
          {stage === 'notes' ? <NotesCanvas /> : null}
          {stage === 'inspiration' ? <InspirationCanvas /> : null}
          {stage === 'saving' ? <SavingCanvas /> : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
