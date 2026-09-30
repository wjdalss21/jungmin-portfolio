import { useLang } from '../i18n/useLang'

export default function SkipLink() {
  const { t } = useLang()
  return (
    <a href="#main" className="skip-link">
      {t.skip}
    </a>
  )
}
