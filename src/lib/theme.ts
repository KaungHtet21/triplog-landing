export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'triplog-theme'

export function readThemeFromQuery(search = window.location.search): Theme | null {
  const value = new URLSearchParams(search).get('theme')
  if (value === 'light' || value === 'dark') return value
  return null
}

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === 'light' || value === 'dark') return value
  } catch {
    /* private mode */
  }
  return null
}

export function resolveTheme(search = window.location.search): Theme {
  return readThemeFromQuery(search) ?? readStoredTheme() ?? 'dark'
}

export function applyTheme(
  theme: Theme,
  options?: { persist?: boolean },
): void {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.style.colorScheme = theme

  if (options?.persist === false) return

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* private mode */
  }
}

export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  return next
}
