"use client"

import { useMemo, useState, useSyncExternalStore } from "react"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  FileText,
  GraduationCap,
  PlayCircle,
  type LucideIcon,
} from "lucide-react"
import { cn, MONO_CHIP } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/sheet"
import type { ResolvedSection, ResolvedTopic, ResolvedWeek } from "@/data/roadmap"
import type { MaterialKind } from "@/data/roadmap-content"

export type RoadmapLabels = {
  roadmap: string
  week: string
  next: string
  nextTopic: string
  allDone: string
  expandAll: string
  collapseAll: string
  completed: string
  of: string
  weekTopics: string
  previous: string
  following: string
  showTopics: string
  material: string
  markDone: string
  kinds: Record<MaterialKind, string>
}

const KIND_ICONS: Record<MaterialKind, LucideIcon> = {
  video: PlayCircle,
  course: GraduationCap,
  docs: BookOpen,
  article: FileText,
}

// Progresso em localStorage, lido por useSyncExternalStore: o servidor e a
// hidratação veem "[]", e o client troca para o valor salvo logo em seguida —
// sem mismatch e sem setState dentro de useEffect.
const STORAGE_KEY = "roadmap:frontend:v1"
const EMPTY = "[]"
const listeners = new Set<() => void>()
let cache: string | null = null

function readStorage(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY
  } catch {
    // Modo privado ou storage bloqueado: o progresso vive só em memória.
    return EMPTY
  }
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return
  cache = event.newValue ?? EMPTY
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  if (listeners.size === 1) window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener("storage", onStorage)
  }
}

function getSnapshot(): string {
  if (cache === null) cache = readStorage()
  return cache
}

const getServerSnapshot = () => EMPTY

function writeProgress(ids: Set<string>) {
  cache = JSON.stringify([...ids])
  try {
    window.localStorage.setItem(STORAGE_KEY, cache)
  } catch {}
  listeners.forEach((listener) => listener())
}

function parseProgress(raw: string): Set<string> {
  try {
    const value: unknown = JSON.parse(raw)
    return new Set(Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [])
  } catch {
    return new Set()
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

// O que está aberto no sheet vai para a URL (?semana=01&topico=dns) para o
// link poder ser compartilhado. replaceState e não router.push: navegar no
// sheet não deve re-renderizar a página no servidor nem empilhar histórico.
type SheetView = { week: number; topic: string | null }

function syncSheetParams(view: SheetView | null) {
  const url = new URL(window.location.href)
  url.searchParams.delete("semana")
  url.searchParams.delete("topico")
  if (view) {
    url.searchParams.set("semana", pad(view.week))
    if (view.topic) url.searchParams.set("topico", view.topic)
  }
  window.history.replaceState(window.history.state, "", url)
}

function domainOf(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "")
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: () => void
  label?: string
}) {
  return (
    <span className="relative inline-flex size-4 shrink-0">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className="peer size-4 cursor-pointer appearance-none border border-field transition-colors checked:border-fg checked:bg-fg focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-fg"
      />
      <Check
        aria-hidden
        strokeWidth={3}
        className="pointer-events-none absolute inset-0.5 hidden size-3 text-canvas peer-checked:block"
      />
    </span>
  )
}

function TopicPage({
  topic,
  labels,
  checked,
  onToggle,
}: {
  topic: ResolvedTopic
  labels: RoadmapLabels
  checked: boolean
  onToggle: () => void
}) {
  return (
    <>
      <SheetTitle className="mt-2 text-3xl font-medium leading-tight tracking-[-0.02em] text-fg">
        {topic.label}
      </SheetTitle>
      {topic.description && (
        <SheetDescription className="mt-3 text-[15px] leading-relaxed text-mu">
          {topic.description}
        </SheetDescription>
      )}

      <label className="mt-6 inline-flex cursor-pointer items-center gap-3 border border-line px-3 py-2 text-sm text-fg transition-colors hover:border-field">
        <Checkbox checked={checked} onChange={onToggle} />
        {labels.markDone}
      </label>

      {topic.materials.length > 0 && (
        <>
          <div className="mt-8 mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
            <span>{labels.material}</span>
            <span className="tabular-nums">{topic.materials.length}</span>
          </div>
          <ul className="flex flex-col gap-2">
            {topic.materials.map((material) => {
              const Icon = KIND_ICONS[material.kind]
              return (
                <li key={material.url}>
                  <a
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-line p-4 transition-colors hover:border-field"
                  >
                    <span className="grid size-10 shrink-0 place-items-center border border-line text-mu">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm leading-snug text-fg">{material.title}</span>
                      <span className="mt-1.5 flex items-center gap-2">
                        <span className={MONO_CHIP}>{labels.kinds[material.kind]}</span>
                        <span className="truncate font-mono text-[11px] text-mu">{domainOf(material.url)}</span>
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

export function Roadmap({
  sections,
  labels,
  initialView,
}: {
  sections: ResolvedSection[]
  labels: RoadmapLabels
  initialView: SheetView | null
}) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const done = useMemo(() => parseProgress(raw), [raw])
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set())
  const [view, setView] = useState<SheetView | null>(initialView)

  const weeks = sections.flatMap((s) => s.weeks)
  const allTopics = weeks.flatMap((w) => w.topics)
  const totalDone = allTopics.filter((topic) => done.has(topic.id)).length

  let next: { week: ResolvedWeek; topicId: string; slug: string; label: string } | null = null
  for (const week of weeks) {
    const topic = week.topics.find((tp) => !done.has(tp.id))
    if (topic) {
      next = { week, topicId: topic.id, slug: topic.slug, label: topic.label }
      break
    }
  }

  const allExpanded = expanded.size === weeks.length
  // O sheet é uma sequência só: semana 01, seus tópicos, semana 02, seus
  // tópicos… Anterior/Próximo andam por ela atravessando as semanas.
  const pages = weeks.flatMap((week) => [
    { view: { week: week.week, topic: null }, label: week.title },
    ...week.topics.map((tp) => ({ view: { week: week.week, topic: tp.slug }, label: tp.label })),
  ])
  const pageIndex = view
    ? pages.findIndex((p) => p.view.week === view.week && p.view.topic === view.topic)
    : -1
  const current = pageIndex === -1 ? null : weeks.find((w) => w.week === view?.week) ?? null
  const currentTopic = current && view?.topic ? current.topics.find((tp) => tp.slug === view.topic) ?? null : null
  const currentSection = current ? sections.find((s) => s.weeks.includes(current)) : undefined
  const previousPage = pageIndex > 0 ? pages[pageIndex - 1] : null
  const nextPage = pageIndex !== -1 && pageIndex < pages.length - 1 ? pages[pageIndex + 1] : null

  function openView(nextView: SheetView | null) {
    setView(nextView)
    syncSheetParams(nextView)
  }

  function openWeek(week: number | null) {
    openView(week === null ? null : { week, topic: null })
  }

  function toggleTopic(id: string) {
    const nextDone = new Set(done)
    if (nextDone.has(id)) nextDone.delete(id)
    else nextDone.add(id)
    writeProgress(nextDone)
  }

  function toggleWeek(week: ResolvedWeek) {
    const nextDone = new Set(done)
    const complete = week.topics.every((tp) => done.has(tp.id))
    for (const tp of week.topics) {
      if (complete) nextDone.delete(tp.id)
      else nextDone.add(tp.id)
    }
    writeProgress(nextDone)
  }

  function toggleExpanded(id: string) {
    setExpanded((prev) => {
      const nextSet = new Set(prev)
      if (nextSet.has(id)) nextSet.delete(id)
      else nextSet.add(id)
      return nextSet
    })
  }

  function renderWeek(week: ResolvedWeek, side: "left" | "right") {
    const open = expanded.has(week.id)
    const count = week.topics.filter((tp) => done.has(tp.id)).length
    const complete = count === week.topics.length

    return (
      <div
        key={week.id}
        id={week.id}
        style={{ order: week.week }}
        className={cn(
          "relative ml-8 scroll-mt-24 border bg-card transition-colors @3xl:ml-0",
          week.week === view?.week ? "border-fg" : "border-line hover:border-field",
        )}
      >
        {/* Conector até a espinha: à esquerda no layout de uma coluna; no de
            duas, atravessa o vão e passa por trás do nó da seção. */}
        <span
          aria-hidden
          className={cn(
            "absolute top-[1.6rem] -left-5 h-px w-5 bg-line",
            side === "left" ? "@3xl:left-auto @3xl:-right-30 @3xl:w-30" : "@3xl:-left-30 @3xl:w-30",
          )}
        />
        <div className="flex items-center gap-3 py-3 pl-4 pr-2">
          <Checkbox
            checked={complete}
            onChange={() => toggleWeek(week)}
            label={`${labels.week} ${pad(week.week)}: ${week.title}`}
          />
          <button
            type="button"
            onClick={() => openWeek(week.week)}
            aria-haspopup="dialog"
            className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 text-left"
          >
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
                {labels.week} {pad(week.week)}
              </span>
              <span className={cn("block text-sm leading-snug", complete ? "text-mu" : "text-fg")}>
                {week.title}
              </span>
            </span>
            <span className="font-mono text-[11px] tabular-nums text-mu">
              {count}/{week.topics.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => toggleExpanded(week.id)}
            aria-expanded={open}
            aria-controls={`${week.id}-topics`}
            aria-label={`${labels.showTopics}: ${week.title}`}
            className="grid size-7 shrink-0 cursor-pointer place-items-center text-mu transition-colors hover:text-fg"
          >
            <ChevronDown aria-hidden className={cn("size-4 transition-transform", open && "rotate-180")} />
          </button>
        </div>

        {open && (
          <ul id={`${week.id}-topics`} className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
            {week.topics.map((topic) => {
              const checked = done.has(topic.id)
              return (
                <li key={topic.id}>
                  <label
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-2 border px-2.5 py-1.5 text-[13px] transition-colors",
                      topic.id === next?.topicId ? "border-fg" : "border-line hover:border-field",
                      checked ? "text-mu line-through" : "text-fg",
                    )}
                  >
                    <Checkbox checked={checked} onChange={() => toggleTopic(topic.id)} />
                    {topic.label}
                    {topic.id === next?.topicId && (
                      <span className="bg-fg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-canvas">
                        {labels.next}
                      </span>
                    )}
                  </label>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="@container">
      <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mu">
          <span className="tabular-nums text-fg">{totalDone}</span> {labels.of}{" "}
          <span className="tabular-nums">{allTopics.length}</span> {labels.completed}
        </p>
        <button
          type="button"
          onClick={() => setExpanded(allExpanded ? new Set() : new Set(weeks.map((w) => w.id)))}
          className="inline-flex cursor-pointer items-center gap-2 border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mu transition-colors hover:border-field hover:text-fg"
        >
          <ChevronsUpDown aria-hidden className="size-3.5" />
          {allExpanded ? labels.collapseAll : labels.expandAll}
        </button>
      </div>

      <div className="relative flex flex-col gap-14">
        {/* A espinha: corre à esquerda numa coluna e pelo centro em duas. */}
        <span aria-hidden className="absolute inset-y-0 left-3 w-px bg-line @3xl:left-1/2" />

        {sections.map((section) => {
          const topics = section.weeks.flatMap((w) => w.topics)
          const count = topics.filter((tp) => done.has(tp.id)).length
          const percent = topics.length ? Math.round((count / topics.length) * 100) : 0
          // Semanas alternam de lado na ordem do currículo: 1ª à esquerda, 2ª à direita…
          const left = section.weeks.filter((_, i) => i % 2 === 0)
          const right = section.weeks.filter((_, i) => i % 2 === 1)

          return (
            <section
              key={section.id}
              aria-labelledby={`${section.id}-title`}
              className="relative flex flex-col gap-3 @3xl:flex-row @3xl:items-center @3xl:gap-0"
            >
              <div className="contents @3xl:flex @3xl:flex-1 @3xl:flex-col @3xl:gap-3">
                {left.map((week) => renderWeek(week, "left"))}
              </div>

              <div
                style={{ order: 0 }}
                className="relative z-10 ml-8 bg-fg px-4 py-3 text-canvas @3xl:mx-8 @3xl:w-44 @3xl:shrink-0"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 id={`${section.id}-title`} className="text-[15px] font-medium leading-tight">
                    {section.title}
                  </h2>
                  <span className="font-mono text-[11px] tabular-nums">
                    {count}/{topics.length}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-label={section.title}
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="mt-2.5 h-0.5 bg-canvas/20"
                >
                  <div className="h-full bg-canvas transition-[width]" style={{ width: `${percent}%` }} />
                </div>
              </div>

              <div className="contents @3xl:flex @3xl:flex-1 @3xl:flex-col @3xl:gap-3">
                {right.map((week) => renderWeek(week, "right"))}
              </div>
            </section>
          )
        })}
      </div>

      <div className="pointer-events-none sticky bottom-4 z-20 mt-12 flex">
        <button
          type="button"
          onClick={() => next && openView({ week: next.week.week, topic: next.slug })}
          disabled={!next}
          className="pointer-events-auto inline-flex cursor-pointer items-center gap-4 border border-line bg-surface px-4 py-2.5 text-left shadow-lg transition-colors hover:border-field disabled:cursor-default"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
              {labels.nextTopic}
            </span>
            <span className="block text-sm text-fg">{next ? next.label : labels.allDone}</span>
          </span>
          {next && <ArrowRight aria-hidden className="size-4 text-mu" />}
        </button>
      </div>

      <Sheet open={current !== null} onOpenChange={(isOpen) => !isOpen && openView(null)}>
        <SheetContent
          side="right"
          className="w-full gap-0 p-0 sm:max-w-md"
          // Foco no painel, não no primeiro botão (o breadcrumb): o leitor de
          // tela anuncia o título e o Tab segue a ordem natural do conteúdo.
          onOpenAutoFocus={(event) => {
            event.preventDefault()
            ;(event.currentTarget as HTMLElement).focus()
          }}
        >
          {current && (
            <>
              <div className="flex-1 overflow-y-auto px-6 pb-8 pt-6">
                <nav aria-label="Breadcrumb" className="pr-8 text-xs text-mu">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li>{labels.roadmap}</li>
                    <li aria-hidden>
                      <ChevronRight className="size-3" />
                    </li>
                    <li>{currentSection?.title}</li>
                    <li aria-hidden>
                      <ChevronRight className="size-3" />
                    </li>
                    {currentTopic ? (
                      <>
                        <li>
                          <button
                            type="button"
                            onClick={() => openWeek(current.week)}
                            className="cursor-pointer underline-offset-4 transition-colors hover:text-fg hover:underline"
                          >
                            {current.title}
                          </button>
                        </li>
                        <li aria-hidden>
                          <ChevronRight className="size-3" />
                        </li>
                        <li className="text-fg">{currentTopic.label}</li>
                      </>
                    ) : (
                      <li className="text-fg">{current.title}</li>
                    )}
                  </ol>
                </nav>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
                  {labels.week} {pad(current.week)}
                </p>

                {currentTopic ? (
                  <TopicPage
                    topic={currentTopic}
                    labels={labels}
                    checked={done.has(currentTopic.id)}
                    onToggle={() => toggleTopic(currentTopic.id)}
                  />
                ) : (
                  <>
                    <SheetTitle className="mt-2 text-2xl font-medium leading-tight tracking-[-0.02em] text-fg">
                      {current.title}
                    </SheetTitle>
                    <SheetDescription className="mt-3 text-[15px] leading-relaxed text-mu">
                      {current.description}
                    </SheetDescription>

                    <div className="mt-8 mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
                      <span>{labels.weekTopics}</span>
                      <span className="tabular-nums">
                        {current.topics.filter((tp) => done.has(tp.id)).length}/{current.topics.length}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {current.topics.map((topic) => {
                        const checked = done.has(topic.id)
                        return (
                          <li
                            key={topic.id}
                            className={cn(
                              "flex items-center gap-3 border pl-4 transition-colors",
                              topic.id === next?.topicId ? "border-fg" : "border-line hover:border-field",
                            )}
                          >
                            <Checkbox
                              checked={checked}
                              onChange={() => toggleTopic(topic.id)}
                              label={topic.label}
                            />
                            <button
                              type="button"
                              onClick={() => openView({ week: current.week, topic: topic.slug })}
                              className={cn(
                                "flex min-w-0 flex-1 cursor-pointer items-center gap-3 py-3 pr-3 text-left text-sm",
                                checked ? "text-mu line-through" : "text-fg",
                              )}
                            >
                              <span className="flex-1">{topic.label}</span>
                              {topic.id === next?.topicId && (
                                <span className="bg-fg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-canvas">
                                  {labels.next}
                                </span>
                              )}
                              <ChevronRight aria-hidden className="size-4 shrink-0 text-mu" />
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-line px-6 py-4">
                {previousPage ? (
                  <button
                    type="button"
                    onClick={() => openView(previousPage.view)}
                    className="min-w-0 cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
                      <ArrowLeft aria-hidden className="size-3" /> {labels.previous}
                    </span>
                    <span className="mt-1 block truncate text-sm text-fg">{previousPage.label}</span>
                  </button>
                ) : (
                  <span />
                )}
                {nextPage && (
                  <button
                    type="button"
                    onClick={() => openView(nextPage.view)}
                    className="min-w-0 cursor-pointer text-right"
                  >
                    <span className="flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mu">
                      {labels.following} <ArrowRight aria-hidden className="size-3" />
                    </span>
                    <span className="mt-1 block truncate text-sm text-fg">{nextPage.label}</span>
                  </button>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
