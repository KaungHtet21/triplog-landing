export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-muted sm:px-5 md:flex-row md:px-8 md:text-left">
        <p className="font-display font-semibold text-ink">
          © {new Date().getFullYear()} Triplog
        </p>
        <p>Travel together. Remember forever.</p>
      </div>
    </footer>
  )
}
