import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation } from 'react-router-dom'
import {
  applyTheme,
  readThemeFromQuery,
  resolveTheme,
  toggleTheme,
  type Theme,
} from '../lib/theme'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [theme, setThemeState] = useState<Theme>(() => resolveTheme())

  useEffect(() => {
    const fromQuery = readThemeFromQuery(location.search)
    if (fromQuery) {
      applyTheme(fromQuery, { persist: false })
      setThemeState(fromQuery)
      return
    }
    const next = resolveTheme(location.search)
    applyTheme(next)
    setThemeState(next)
  }, [location.search])

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next)
    setThemeState(next)
  }, [])

  const toggle = useCallback(() => {
    setThemeState(current => toggleTheme(current))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
