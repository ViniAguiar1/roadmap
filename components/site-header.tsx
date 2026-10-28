import { LOCALES, REPO_URL, SITE_URL, roadmapPath, t, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { GithubIcon } from "./github-icon"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a
          href={`${SITE_URL}/${locale}`}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-mu transition-colors hover:text-fg"
        >
          Vinicius Aguiar <span aria-hidden>/</span> <span className="text-fg">Roadmap</span>
        </a>

        <div className="flex items-center gap-2">
          <nav
            aria-label={t(locale, { pt: "Idioma", en: "Language", es: "Idioma", jp: "言語", fr: "Langue" })}
            className="hidden items-center sm:flex"
          >
            {LOCALES.map((l) => (
              <a
                key={l}
                href={roadmapPath(l)}
                hrefLang={l}
                aria-current={l === locale ? "page" : undefined}
                className={cn(
                  "px-1.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                  l === locale ? "text-fg" : "text-mu hover:text-fg",
                )}
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-8 place-items-center border border-line text-mu transition-colors hover:border-field hover:text-fg"
          >
            <GithubIcon className="size-3.5" />
          </a>
          <ThemeToggle label={t(locale, { pt: "Alternar tema", en: "Toggle theme", es: "Cambiar tema", jp: "テーマを切り替え", fr: "Changer de thème" })} />
        </div>
      </div>
    </header>
  )
}
