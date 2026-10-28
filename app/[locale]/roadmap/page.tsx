import { notFound } from "next/navigation"
import { buildAlternates, isLocale, roadmapPath, SITE_URL, t } from "@/lib/i18n"
import { getRoadmap } from "@/data/roadmap"
import { Roadmap } from "@/components/roadmap"
import { SectionEyebrow } from "@/components/section-eyebrow"

type PageProps = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ semana?: string; topico?: string }>
}

export async function generateMetadata({ params }: Pick<PageProps, "params">) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    title: t(locale, { pt: "Roadmap Frontend & React", en: "Frontend & React Roadmap", es: "Roadmap Frontend & React", jp: "フロントエンド & React ロードマップ", fr: "Roadmap Frontend & React" }),
    description: t(locale, { pt: "Roadmap de 24 semanas para entrevistas de Frontend e React: fundamentos da web, JavaScript, TypeScript, React, Next.js, performance e Frontend System Design.", en: "A 24-week roadmap for Frontend and React interviews: web fundamentals, JavaScript, TypeScript, React, Next.js, performance and Frontend System Design.", es: "Roadmap de 24 semanas para entrevistas de Frontend y React: fundamentos de la web, JavaScript, TypeScript, React, Next.js, performance y Frontend System Design.", jp: "フロントエンドと React の面接に向けた 24 週間のロードマップ：Web の基礎、JavaScript、TypeScript、React、Next.js、パフォーマンス、フロントエンドのシステム設計。", fr: "Roadmap de 24 semaines pour les entretiens Frontend et React : fondamentaux du web, JavaScript, TypeScript, React, Next.js, performance et Frontend System Design." }),
    alternates: buildAlternates(locale),
  }
}

export default async function RoadmapPage({ params, searchParams }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { semana, topico } = await searchParams
  const sections = getRoadmap(locale)
  const weekCount = sections.reduce((sum, s) => sum + s.weeks.length, 0)
  // ?semana=01 abre o sheet da semana e ?semana=01&topico=dns, o tópico.
  // Semana inexistente é ignorada; tópico inexistente cai na semana.
  const week = sections.flatMap((s) => s.weeks).find((w) => w.week === Number(semana))
  const topic = week?.topics.find((tp) => tp.slug === topico)
  const initialView = week ? { week: week.week, topic: topic?.slug ?? null } : null

  const title = t(locale, { pt: "Roadmap Frontend & React", en: "Frontend & React Roadmap", es: "Roadmap Frontend & React", jp: "フロントエンド & React ロードマップ", fr: "Roadmap Frontend & React" })

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description: t(locale, { pt: "Roadmap de 24 semanas para entrevistas de Frontend e React.", en: "A 24-week roadmap for Frontend and React interviews.", es: "Roadmap de 24 semanas para entrevistas de Frontend y React.", jp: "フロントエンドと React の面接に向けた 24 週間のロードマップ。", fr: "Roadmap de 24 semaines pour les entretiens Frontend et React." }),
          url: `${SITE_URL}${roadmapPath(locale)}`,
          author: { "@type": "Person", name: "Vinicius Aguiar", url: SITE_URL },
        }) }}
      />

        <header className="mb-10">
          <SectionEyebrow index="01">
            {weekCount} {t(locale, { pt: "semanas", en: "weeks", es: "semanas", jp: "週", fr: "semaines" })}
          </SectionEyebrow>
          <h1 className="font-medium leading-[1.05] tracking-[-0.025em] text-fg [font-size:clamp(1.875rem,3.6vw,3rem)]">
            {title}
          </h1>
          <p className="text-mu mt-3 max-w-2xl leading-relaxed">
            {t(locale, { pt: "Fundamentos sólidos para entrevistas de Frontend: perguntas técnicas de JavaScript e React, exercícios de código e Frontend System Design. Marque o que já estudou — o progresso fica salvo neste navegador.", en: "Solid foundations for Frontend interviews: JavaScript and React technical questions, coding exercises and Frontend System Design. Check off what you've studied — progress is saved in this browser.", es: "Fundamentos sólidos para entrevistas de Frontend: preguntas técnicas de JavaScript y React, ejercicios de código y Frontend System Design. Marca lo que ya estudiaste — el progreso se guarda en este navegador.", jp: "フロントエンド面接のための確かな基礎：JavaScript と React の技術的な質問、コーディング課題、フロントエンドのシステム設計。学習済みの項目にチェックを入れると、進捗はこのブラウザに保存されます。", fr: "Des bases solides pour les entretiens Frontend : questions techniques sur JavaScript et React, exercices de code et Frontend System Design. Cochez ce que vous avez étudié — la progression est enregistrée dans ce navigateur." })}
          </p>
        </header>

        <Roadmap
          sections={sections}
          initialView={initialView}
          labels={{
            roadmap: "Roadmap",
            week: t(locale, { pt: "Semana", en: "Week", es: "Semana", jp: "週", fr: "Semaine" }),
            next: t(locale, { pt: "Próximo", en: "Next", es: "Siguiente", jp: "次", fr: "Suivant" }),
            nextTopic: t(locale, { pt: "Próximo tópico", en: "Next topic", es: "Próximo tema", jp: "次のトピック", fr: "Sujet suivant" }),
            allDone: t(locale, { pt: "Roadmap concluído", en: "Roadmap complete", es: "Roadmap completado", jp: "ロードマップ完了", fr: "Roadmap terminée" }),
            expandAll: t(locale, { pt: "Expandir tudo", en: "Expand all", es: "Expandir todo", jp: "すべて展開", fr: "Tout déplier" }),
            collapseAll: t(locale, { pt: "Recolher tudo", en: "Collapse all", es: "Contraer todo", jp: "すべて折りたたむ", fr: "Tout replier" }),
            of: t(locale, { pt: "de", en: "of", es: "de", jp: "/", fr: "sur" }),
            completed: t(locale, { pt: "concluídos", en: "completed", es: "completados", jp: "完了", fr: "terminés" }),
            weekTopics: t(locale, { pt: "Tópicos da semana", en: "This week's topics", es: "Temas de la semana", jp: "今週のトピック", fr: "Sujets de la semaine" }),
            previous: t(locale, { pt: "Anterior", en: "Previous", es: "Anterior", jp: "前へ", fr: "Précédent" }),
            following: t(locale, { pt: "Próximo", en: "Next", es: "Siguiente", jp: "次へ", fr: "Suivant" }),
            material: t(locale, { pt: "Material", en: "Resources", es: "Material", jp: "教材", fr: "Ressources" }),
            markDone: t(locale, { pt: "Marcar como estudado", en: "Mark as studied", es: "Marcar como estudiado", jp: "学習済みにする", fr: "Marquer comme étudié" }),
            kinds: {
              video: t(locale, { pt: "Vídeo", en: "Video", es: "Video", jp: "動画", fr: "Vidéo" }),
              course: t(locale, { pt: "Curso", en: "Course", es: "Curso", jp: "コース", fr: "Cours" }),
              docs: t(locale, { pt: "Docs", en: "Docs", es: "Docs", jp: "ドキュメント", fr: "Docs" }),
              article: t(locale, { pt: "Artigo", en: "Article", es: "Artículo", jp: "記事", fr: "Article" }),
            },
            showTopics: t(locale, { pt: "Mostrar tópicos", en: "Show topics", es: "Mostrar temas", jp: "トピックを表示", fr: "Afficher les sujets" }),
          }}
        />
    </div>
  )
}
