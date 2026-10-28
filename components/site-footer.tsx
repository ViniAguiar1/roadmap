import { REPO_URL, SITE_URL, t, type Locale } from "@/lib/i18n"

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-mu sm:flex-row sm:items-center sm:justify-between">
        <p>
          {t(locale, { pt: "Open source · MIT", en: "Open source · MIT", es: "Open source · MIT", jp: "オープンソース · MIT", fr: "Open source · MIT" })}
          <span aria-hidden> — </span>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-fg transition-colors hover:text-mu">
            {t(locale, { pt: "Contribua no GitHub", en: "Contribute on GitHub", es: "Contribuye en GitHub", jp: "GitHub で貢献する", fr: "Contribuer sur GitHub" })}
          </a>
        </p>
        <a href={`${SITE_URL}/${locale}`} className="transition-colors hover:text-fg">
          {t(locale, { pt: "Feito por Vinicius Aguiar", en: "Made by Vinicius Aguiar", es: "Hecho por Vinicius Aguiar", jp: "制作：Vinicius Aguiar", fr: "Créé par Vinicius Aguiar" })}
        </a>
      </div>
    </footer>
  )
}
