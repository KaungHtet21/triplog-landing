import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrandMark } from '../atoms/BrandMark'

const links = [
  { href: '#before', label: 'Before' },
  { href: '#together', label: 'Trip' },
  { href: '#camera', label: 'Camera' },
  { href: '#plus', label: 'Plus' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-5 sm:pt-4 md:px-8">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 sm:px-5 sm:py-3">
          <a
            href="#top"
            onClick={close}
            className="flex items-center gap-2.5"
          >
            {/* <BrandMark size={32} /> */}
            <span className="font-display text-base font-semibold tracking-tight text-ink">
              Triplog
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#download"
              onClick={close}
              className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-accent-ink transition hover:bg-white/90 sm:px-4"
            >
              Download
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink md:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-sm text-muted transition hover:bg-white/[0.04] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
