import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { LOCALES, SITE_URL, isLocale, localeToHtmlLang, localeToOgLocale, t, type Locale } from "@/lib/i18n"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" })

// Umami só liga com o id configurado: forks não mandam métricas para o site original.
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return {
    title: {
      default: t(locale, { pt: "Roadmap Frontend & React", en: "Frontend & React Roadmap", es: "Roadmap Frontend & React", jp: "フロントエンド & React ロードマップ", fr: "Roadmap Frontend & React" }),
      template: "%s | Vinicius Aguiar",
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      locale: localeToOgLocale(locale),
      siteName: "Vinicius Aguiar",
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale

  return (
    <html lang={localeToHtmlLang(locale)} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        {UMAMI_WEBSITE_ID && (
          <Script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_WEBSITE_ID} strategy="afterInteractive" />
        )}
        <ThemeProvider>
          <SiteHeader locale={locale} />
          <main className="flex-1">{children}</main>
          <SiteFooter locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  )
}
