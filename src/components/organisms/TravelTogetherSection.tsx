import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURE_STAGES } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'
import { FeatureCanvas } from '../molecules/FeatureCanvas'

gsap.registerPlugin(ScrollTrigger)

export function TravelTogetherSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=220%',
        pin: true,
        scrub: 0.6,
        onUpdate: self => {
          const idx = Math.min(
            FEATURE_STAGES.length - 1,
            Math.floor(self.progress * FEATURE_STAGES.length),
          )
          setActive(idx)
        },
      })
      return () => st.kill()
    })

    return () => mm.revert()
  }, [])

  const stage = FEATURE_STAGES[active]

  return (
    <section
      ref={sectionRef}
      id="together"
      className="relative flex min-h-[100dvh] items-center bg-bg-elevated py-16 md:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.04),transparent_50%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-5 md:grid-cols-2 md:gap-12 md:px-8">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="The whole trip"
            title="Every moment that matters — before you even leave."
            description="Countdown, notes, inspiration, and group saving — the core of planning together."
          />

          {/* Mobile: horizontal stage chips */}
          <ul className="scrollbar-none mt-8 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {FEATURE_STAGES.map((item, index) => (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    index === active
                      ? 'border-white/25 bg-white text-accent-ink'
                      : 'border-white/10 bg-transparent text-muted'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop: vertical list driven by scroll */}
          <ul className="mt-10 hidden space-y-2 md:block">
            {FEATURE_STAGES.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-xl border px-4 py-3.5 transition ${
                  index === active
                    ? 'border-white/20 bg-white/[0.06]'
                    : 'border-transparent bg-transparent'
                }`}
              >
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="text-xs text-muted">{item.caption}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <FeatureCanvas stage={stage.id} />
          <p className="mt-4 text-center text-sm text-muted md:mt-6">
            {stage.label}
            <span className="md:hidden"> · {stage.caption}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
