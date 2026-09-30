import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { useLang } from '../i18n/useLang'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t, profile } = useLang()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const navItems = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.projects, href: '/#projects' },
    { label: t.nav.research, href: '/#research' },
    { label: t.nav.skills, href: '/#skills' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-bg/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label={t.nav.aria}>
        <Link to="/" className="text-base font-bold tracking-tight text-ink" onClick={close}>
          {profile.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageToggle />
          </li>
          <li>
            <Link to="/#contact" className="btn-primary !py-2">
              {t.contact}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="-mr-3 p-3 text-ink"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-page flex flex-col gap-1 pb-6 md:hidden">
          {[...navItems, { label: t.contact, href: '/#contact' }].map((item) => (
            <li key={item.href}>
              <Link to={item.href} onClick={close} className="block py-3 text-lg font-semibold text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
