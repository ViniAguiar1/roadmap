import { describe, it, expect } from "vitest"
import { LOCALES } from "@/lib/i18n"
import { getRoadmap } from "./roadmap"
import { topicContent } from "./roadmap-content"

describe("roadmap", () => {
  const sections = getRoadmap("pt")
  const weeks = sections.flatMap((s) => s.weeks)

  it("numera as semanas de 1 a N, sem buraco nem repetição", () => {
    expect(weeks.map((w) => w.week)).toEqual(weeks.map((_, i) => i + 1))
  })

  // O id é a chave do progresso no localStorage: repetido, marcar um tópico marcaria o outro.
  it("gera ids de tópico únicos", () => {
    const ids = weeks.flatMap((w) => w.topics.map((tp) => tp.id))
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("mantém os mesmos ids em todos os locales", () => {
    const ids = (locale: (typeof LOCALES)[number]) =>
      getRoadmap(locale).flatMap((s) => s.weeks.flatMap((w) => w.topics.map((tp) => tp.id)))
    for (const locale of LOCALES) expect(ids(locale)).toEqual(ids("pt"))
  })
})

describe("conteúdo dos tópicos", () => {
  const sections = getRoadmap("pt")
  const topics = sections.flatMap((s) => s.weeks.flatMap((w) => w.topics))

  it("todo tópico tem descrição e ao menos um material", () => {
    const missing = topics.filter((tp) => !tp.description || tp.materials.length === 0).map((tp) => tp.id)
    expect(missing).toEqual([])
  })

  // Chave órfã em data/roadmap-content: o tópico foi renomeado e o conteúdo
  // ficou para trás, sem aparecer em lugar nenhum.
  it("não tem conteúdo para tópico inexistente", () => {
    const ids = new Set(topics.map((tp) => tp.id))
    expect(Object.keys(topicContent).filter((id) => !ids.has(id))).toEqual([])
  })

  it("só tem materiais com URL https", () => {
    const bad = topics.flatMap((tp) => tp.materials.filter((m) => !m.url.startsWith("https://")).map((m) => `${tp.id} ${m.url}`))
    expect(bad).toEqual([])
  })
})
