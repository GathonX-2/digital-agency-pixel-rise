import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Mail, MapPin, Phone, Moon, Sun } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/apropos', label: 'A propos' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
  }`

function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}

function Header() {
  const [theme, setTheme] = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/70 backdrop-blur shadow-sm">
      <div className="section-shell py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center text-white font-bold shadow-md shadow-rose-200">
            PR
          </div>
          <div className="text-sm">
            <p className="font-semibold text-primary">Pixel Rise</p>
            <p className="text-xs text-slate-500">Agence Digitale</p>
          </div>
        </NavLink>
        <nav className="hidden md:flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-slate-100 px-2 py-1 shadow-sm dark:bg-white/5 dark:border-slate-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-slate-300'
                    : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors dark:text-slate-200"
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === 'dark' ? 'Clair' : 'Sombre'}
          </button>
          <a
            href="https://app.pixel-rise.com/reservation?client_id=6"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-white font-semibold shadow-md shadow-rose-200 hover:-translate-y-0.5 transition-transform"
          >
            Réserver
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-white to-soft border-t border-slate-100 pt-14 pb-10 text-slate-700">
      <div className="section-shell grid md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center text-white font-bold shadow-md shadow-rose-200">
              PR
            </div>
            <div>
              <p className="font-semibold text-primary">Pixel Rise</p>
              <p className="text-xs text-slate-500">Agence Digitale</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Une agence digitale aide les entreprises à renforcer leur présence en ligne en offrant
            des services de marketing, conception web, réseaux sociaux, référencement SEO et
            solutions numériques innovantes.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Pages</h4>
          <div className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://app.pixel-rise.com/reservation?client_id=6"
              className="hover:text-primary transition-colors text-sm font-medium text-slate-600"
            >
              Réservation
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary mt-0.5" />
            <span>Hell-Ville, Nosy-Be, DIANA, MADAGASCAR</span>
          </div>
          <a
            href="mailto:info@islandmanager.com"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            info@islandmanager.com
          </a>
          <a
            href="tel:+2613200000000"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            +261 (32) 00 000 00
          </a>
        </div>
      </div>
      <div className="section-shell text-center text-xs text-slate-500 mt-10 border-t border-slate-100 pt-6">
        Copyright © Island Manager 2024 · Tous droits réservés
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
