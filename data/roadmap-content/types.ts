import type { LocalizedString } from "@/lib/i18n"

export type MaterialKind = "video" | "article" | "docs" | "course"

export type Material = {
  title: string
  url: string
  kind: MaterialKind
}

// Página de estudo de um tópico, chaveada pelo id do tópico (`w1:dns`).
export type TopicContent = {
  description: LocalizedString
  materials: Material[]
}
