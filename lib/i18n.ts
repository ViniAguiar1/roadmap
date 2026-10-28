export const LOCALES = ["pt", "en", "es", "jp", "fr"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "pt"

// Domínio canônico: o roadmap é servido em viniciusaguiardev.com.br/:locale/roadmap.
export const SITE_URL = "https://viniciusaguiardev.com.br"
export const REPO_URL = "https://github.com/ViniAguiar1/roadmap"

export type LocalizedString = Partial<Record<Locale, string>> & { pt: string }

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale)
}

/** `pt` é obrigatório e é o fallback de qualquer locale sem tradução. */
export function t(locale: Locale, translations: LocalizedString): string {
  return translations[locale] ?? translations.pt
}

const HTML_LANGS: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-ES", jp: "ja-JP", fr: "fr-FR" }
const OG_LOCALES: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES", jp: "ja_JP", fr: "fr_FR" }

export function localeToHtmlLang(locale: Locale): string {
  return HTML_LANGS[locale]
}

export function localeToOgLocale(locale: Locale): string {
  return OG_LOCALES[locale]
}

export function roadmapPath(locale: Locale): string {
  return `/${locale}/roadmap`
}

/** canonical + hreflang apontando para o domínio principal. */
export function buildAlternates(locale: Locale) {
  const languages: Record<string, string> = {}
  for (const l of LOCALES) languages[localeToHtmlLang(l)] = `${SITE_URL}${roadmapPath(l)}`
  languages["x-default"] = `${SITE_URL}${roadmapPath(DEFAULT_LOCALE)}`
  return { canonical: `${SITE_URL}${roadmapPath(locale)}`, languages }
}
