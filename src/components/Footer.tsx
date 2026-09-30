import { useLang } from '../i18n/useLang'

export default function Footer() {
  const { profile } = useLang()

  return (
    <footer className="border-t border-line/10">
      <div className="container-page flex flex-col gap-2 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>{profile.email}</p>
      </div>
    </footer>
  )
}
