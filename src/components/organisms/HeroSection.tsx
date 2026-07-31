import { motion } from 'framer-motion'
import { MagneticButton } from '../atoms/MagneticButton'
import { HeroConstellation } from '../molecules/HeroConstellation'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 sm:px-5 sm:pb-20 md:gap-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display mb-4 text-3xl font-semibold tracking-tight text-ink sm:mb-6 sm:text-4xl md:text-5xl"
          >
            Triplog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mx-auto max-w-xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl md:text-5xl lg:mx-0 lg:text-[3.5rem]"
          >
            Travel together.
            <br />
            <span className="text-muted">Remember forever.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg lg:mx-0"
          >
            One place for your crew to countdown, save, note ideas, collect
            inspiration, and capture the trip with Disposable Camera Mode.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <MagneticButton
              className="w-full sm:w-auto"
              onClick={() => (window.location.hash = 'download')}
            >
              Download App
            </MagneticButton>
            <MagneticButton
              className="w-full sm:w-auto"
              variant="ghost"
              onClick={() => (window.location.hash = 'camera')}
            >
              See the camera
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="w-full min-w-0"
        >
          <HeroConstellation />
        </motion.div>
      </div>
    </section>
  )
}
