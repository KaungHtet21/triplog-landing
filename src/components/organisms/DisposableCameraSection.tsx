import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MEMORY_PHOTOS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const FILM = MEMORY_PHOTOS.slice(0, 5)

export function DisposableCameraSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [flash, setFlash] = useState(false)
  const [count, setCount] = useState(0)
  const [captured, setCaptured] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        once: true,
        onEnter: () => {
          setCount(3)
          let n = 3
          const tick = window.setInterval(() => {
            n -= 1
            setCount(n)
            if (n <= 0) {
              window.clearInterval(tick)
              setFlash(true)
              setCaptured(true)
              window.setTimeout(() => setFlash(false), 160)
            }
          }, 400)
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="camera"
      className="film-grain relative overflow-hidden bg-bg py-20 sm:py-28 md:py-36"
    >
      <AnimatePresence>
        {flash ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-30 bg-white"
          />
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Signature feature"
          title="Disposable Camera Mode"
          description="Tap for a photo. Hold for video. Capture the trip as it happens — no filters, no pressure."
        />

        <div className="mt-10 grid items-center gap-8 sm:mt-14 sm:gap-10 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="relative min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-bg-elevated sm:aspect-[16/11] sm:rounded-[1.5rem]">
              <img
                src={FILM[0]}
                alt=""
                className={`h-full w-full object-cover transition duration-700 ${
                  captured ? 'scale-100 opacity-100' : 'scale-105 opacity-40'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

              <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-white/80 sm:left-5 sm:top-5 sm:h-8 sm:w-8" />
              <span className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-white/80 sm:right-5 sm:top-5 sm:h-8 sm:w-8" />
              <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-white/80 sm:bottom-5 sm:left-5 sm:h-8 sm:w-8" />
              <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-white/80 sm:bottom-5 sm:right-5 sm:h-8 sm:w-8" />

              <div className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.2em] text-white/70 sm:left-6 sm:top-6 sm:text-[10px]">
                Disposable
              </div>

              {count > 0 ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-white drop-shadow-lg sm:text-8xl">
                    {count}
                  </span>
                </div>
              ) : null}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 sm:h-14 sm:w-14">
                  <motion.div
                    className="h-8 w-8 rounded-full bg-white sm:h-10 sm:w-10"
                    animate={flash ? { scale: [1, 0.85, 1] } : {}}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            </div>

            <div className="scrollbar-none mt-4 flex gap-2.5 overflow-x-auto pb-1 sm:mt-5 sm:gap-3">
              {FILM.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt=""
                  initial={{ opacity: 0, y: 24, rotate: -4 + i * 2 }}
                  animate={
                    captured
                      ? { opacity: 1, y: 0, rotate: -6 + i * 3 }
                      : { opacity: 0.25, y: 12 }
                  }
                  transition={{ delay: 0.08 * i, duration: 0.55 }}
                  className="h-20 w-16 shrink-0 rounded-lg object-cover ring-1 ring-line sm:h-24 sm:w-20"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Capture memories in the moment. No curation stress — just the trip
              as it happened.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted sm:mt-10 sm:space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Photo tap · video long-press
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Flip camera · zoom while you shoot
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Built for the trip — not for the algorithm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
