import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

export default function NotFound() {
  const { t } = useLang()

  return (
    <section className="container-page flex min-h-[60dvh] flex-col items-start justify-center py-24">
      <h1 className="text-3xl font-bold tracking-tight text-ink">{t.notFound.title}</h1>
      <p className="mt-4">{t.notFound.body}</p>
      <Link to="/" className="btn-primary mt-8">
        {t.notFound.home}
      </Link>
    </section>
  )
}
