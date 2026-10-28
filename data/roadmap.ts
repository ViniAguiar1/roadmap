import { t, type Locale, type LocalizedString } from "@/lib/i18n"
import { topicContent, type Material } from "./roadmap-content"

// Tópico em string pura é termo técnico que não se traduz (useEffect, CORS,
// Fiber). Tópico em LocalizedString é texto que muda com o idioma.
type Topic = string | LocalizedString

type RoadmapWeek = {
  week: number
  title: LocalizedString
  description: LocalizedString
  topics: Topic[]
}

type RoadmapSection = {
  title: LocalizedString
  weeks: RoadmapWeek[]
}

// Formas já resolvidas para um locale — é o que a página entrega ao client.
export type ResolvedTopic = { id: string; slug: string; label: string; description: string | null; materials: Material[] }
export type ResolvedWeek = { id: string; week: number; title: string; description: string; topics: ResolvedTopic[] }
export type ResolvedSection = { id: string; title: string; weeks: ResolvedWeek[] }

// O conteúdo está em PT; os outros idiomas caem no PT até serem traduzidos.
const sections: RoadmapSection[] = [
  {
    title: { pt: "Fundamentos da Web" },
    weeks: [
      {
        week: 1,
        title: { pt: "Como a web funciona" },
        description: { pt: "O caminho de uma requisição: da URL ao IP, da conexão TCP à resposta HTTP, e o que os headers decidem sobre cache." },
        topics: ["Internet", "IP", "DNS", "TCP", "HTTP", "HTTPS / TLS", { pt: "Request e Response" }, "Status Codes", { pt: "Headers e Cache HTTP" }],
      },
      {
        week: 2,
        title: { pt: "HTML semântico e acessibilidade" },
        description: { pt: "HTML como estrutura e significado — o que o navegador, os buscadores e os leitores de tela entendem da página." },
        topics: [
          { pt: "Estrutura do documento" },
          { pt: "Tags semânticas" },
          { pt: "Formulários" },
          { pt: "Links e navegação" },
          { pt: "Imagens e mídia" },
          "Meta Tags",
          { pt: "Árvore de acessibilidade" },
          "ARIA",
        ],
      },
      {
        week: 3,
        title: { pt: "CSS e layout" },
        description: { pt: "Como o CSS decide o que aplicar e onde cada caixa vai parar, do box model ao Grid e às container queries." },
        topics: [
          "Box Model",
          "Cascade",
          "Specificity",
          "Positioning",
          "Stacking Context",
          "Flexbox",
          "Grid",
          { pt: "Unidades relativas" },
          { pt: "Design responsivo" },
          "Container Queries",
        ],
      },
      {
        week: 4,
        title: { pt: "Como o navegador renderiza" },
        description: { pt: "O pipeline que transforma HTML e CSS em pixels, e o que faz uma página travar ou repintar sem necessidade." },
        topics: [
          "Critical Rendering Path",
          "DOM",
          "CSSOM",
          "Render Tree",
          "Layout",
          "Paint",
          "Composite",
          "Reflow vs Repaint",
          { pt: "Bloqueio de render (scripts e CSS)" },
        ],
      },
    ],
  },
  {
    title: { pt: "JavaScript e TypeScript" },
    weeks: [
      {
        week: 5,
        title: { pt: "JavaScript core" },
        description: { pt: "Os mecanismos da linguagem que mais caem em entrevista: escopo, closures, this e protótipos." },
        topics: [
          { pt: "Tipos e coerção" },
          "Scope",
          "Hoisting",
          "Closures",
          "this",
          "Prototypes",
          "Classes",
          { pt: "Referência vs valor" },
          { pt: "Imutabilidade" },
        ],
      },
      {
        week: 6,
        title: { pt: "JavaScript assíncrono" },
        description: { pt: "Como o JavaScript faz várias coisas com uma thread só — event loop, filas e as abstrações sobre elas." },
        topics: [
          "Event Loop",
          "Call Stack",
          "Task Queue",
          "Microtask Queue",
          "Callbacks",
          "Promises",
          "async / await",
          "fetch",
          "AbortController",
        ],
      },
      {
        week: 7,
        title: { pt: "DOM e JavaScript moderno" },
        description: { pt: "A sintaxe moderna do dia a dia e a API do DOM: eventos, propagação e delegação." },
        topics: [
          "ES Modules",
          "Destructuring",
          "Spread / Rest",
          { pt: "Métodos de array" },
          "DOM API",
          "Events",
          "Bubbling vs Capturing",
          "Event Delegation",
          "Debounce / Throttle",
        ],
      },
      {
        week: 8,
        title: { pt: "TypeScript" },
        description: { pt: "O sistema de tipos do TypeScript, de unions e narrowing a generics e utility types." },
        topics: [
          { pt: "Tipos básicos" },
          "Interfaces vs Types",
          "Union / Intersection",
          "Narrowing",
          "Generics",
          "Utility Types",
          "Type Inference",
          "Discriminated Unions",
          "unknown vs any",
        ],
      },
      {
        week: 9,
        title: { pt: "Tooling" },
        description: { pt: "O que acontece entre o código e o bundle: gerenciadores de pacote, bundlers, transpilers e linters." },
        topics: [
          "npm / pnpm",
          "Lockfiles",
          "Bundlers",
          "Vite",
          "Transpilers (SWC / Babel)",
          "Tree Shaking",
          "ESLint",
          "tsconfig",
          "Monorepo",
        ],
      },
    ],
  },
  {
    title: { pt: "React" },
    weeks: [
      {
        week: 10,
        title: { pt: "Fundamentos de React" },
        description: { pt: "O modelo mental do React: componentes como função de props e state, composição e listas." },
        topics: [
          "JSX",
          { pt: "Componentes" },
          "Props",
          "State",
          { pt: "Renderização condicional" },
          { pt: "Listas e keys" },
          { pt: "Eventos" },
          { pt: "Composição" },
          "Controlled vs Uncontrolled",
        ],
      },
      {
        week: 11,
        title: { pt: "Hooks" },
        description: { pt: "Cada hook, quando usar e quando não usar — e as regras que fazem eles funcionarem." },
        topics: [
          "useState",
          "useEffect",
          "useRef",
          "useMemo",
          "useCallback",
          "useContext",
          "useReducer",
          "useLayoutEffect",
          "Custom Hooks",
          { pt: "Regras dos hooks" },
        ],
      },
      {
        week: 12,
        title: { pt: "React por baixo" },
        description: { pt: "Como o React decide o que renderizar: reconciliation, Fiber, fases de render e commit e concorrência." },
        topics: [
          "Virtual DOM",
          "Reconciliation",
          "Fiber",
          "Render vs Commit",
          "Batching",
          "StrictMode",
          "Concurrent Rendering",
          "useTransition",
          "useDeferredValue",
          "Suspense",
          "React Compiler",
        ],
      },
      {
        week: 13,
        title: { pt: "Estado e dados" },
        description: { pt: "Onde cada estado deve morar: local, compartilhado, global ou vindo do servidor, e formulários." },
        topics: [
          "Lifting State Up",
          "Prop Drilling",
          "Context",
          "Zustand / Redux",
          "Server State",
          "TanStack Query",
          "Optimistic Updates",
          "React Hook Form",
          { pt: "Validação com Zod" },
        ],
      },
      {
        week: 14,
        title: { pt: "Padrões de componentes" },
        description: { pt: "Os padrões de composição usados em bibliotecas de componentes e design systems." },
        topics: [
          "Compound Components",
          "Render Props",
          "Higher-Order Components",
          "Headless UI",
          "Polymorphic Components",
          "Error Boundaries",
          "Portals",
          "Refs",
        ],
      },
    ],
  },
  {
    title: { pt: "Next.js e Renderização" },
    weeks: [
      {
        week: 15,
        title: { pt: "Estratégias de renderização" },
        description: { pt: "Onde e quando o HTML é gerado, e o custo de cada estratégia para o usuário e para o servidor." },
        topics: ["CSR", "SSR", "SSG", "ISR", "Streaming", "Hydration", "Partial Prerendering", "Islands Architecture"],
      },
      {
        week: 16,
        title: { pt: "Next.js App Router" },
        description: { pt: "O App Router por dentro: layouts, Server e Client Components, Server Actions e o ciclo da requisição." },
        topics: [
          "File-based Routing",
          "Layouts",
          "Server Components",
          "Client Components",
          "Server Actions",
          "Route Handlers",
          "Middleware / Proxy",
          "Metadata",
          "loading / error",
        ],
      },
      {
        week: 17,
        title: { pt: "Dados e cache" },
        description: { pt: "Como buscar dados sem cascata e as camadas de cache e revalidação do Next.js." },
        topics: [
          { pt: "Data fetching no servidor" },
          "Request Waterfalls",
          { pt: "Fetch em paralelo" },
          "Revalidation",
          "Cache Tags",
          "use cache",
          "Edge vs Node Runtime",
          "CDN",
        ],
      },
      {
        week: 18,
        title: { pt: "Autenticação e segurança no frontend" },
        description: { pt: "Autenticação no navegador e as vulnerabilidades que o frontend precisa evitar." },
        topics: ["Cookies", "Sessions", "JWT", "OAuth", "XSS", "CSRF", "CSP", "CORS", { pt: "Sanitização de HTML" }],
      },
    ],
  },
  {
    title: { pt: "Qualidade e Performance" },
    weeks: [
      {
        week: 19,
        title: { pt: "Testes" },
        description: { pt: "Como provar que a interface funciona: o que testar em cada nível e com quais ferramentas." },
        topics: [
          { pt: "Pirâmide de testes" },
          "Unit Tests",
          "Integration Tests",
          "E2E Tests",
          "Vitest",
          "Testing Library",
          "Playwright",
          "MSW",
          "Mocking",
        ],
      },
      {
        week: 20,
        title: { pt: "Performance" },
        description: { pt: "Medir antes de otimizar: Core Web Vitals, bundle, renderização e as técnicas que movem cada métrica." },
        topics: [
          "Core Web Vitals",
          "LCP",
          "INP",
          "CLS",
          "Lighthouse",
          "Code Splitting",
          "Lazy Loading",
          { pt: "Otimização de imagens e fontes" },
          "Memoization",
          "Virtualization",
          "React Profiler",
        ],
      },
      {
        week: 21,
        title: { pt: "Acessibilidade e design systems" },
        description: { pt: "Interfaces que funcionam para todo mundo e a base de um design system consistente." },
        topics: [
          "WCAG",
          { pt: "Navegação por teclado" },
          "Focus Management",
          "Screen Readers",
          { pt: "Contraste" },
          "Design Tokens",
          { pt: "Biblioteca de componentes" },
          "Storybook",
          "i18n",
        ],
      },
    ],
  },
  {
    title: { pt: "Frontend System Design" },
    weeks: [
      {
        week: 22,
        title: { pt: "Fundamentos de Frontend System Design" },
        description: { pt: "Como conduzir uma entrevista de Frontend System Design, dos requisitos às escolhas de arquitetura." },
        topics: [
          { pt: "Como conduzir a entrevista" },
          "Functional Requirements",
          "Non-Functional Requirements",
          { pt: "Arquitetura de componentes" },
          "Data Model",
          "REST vs GraphQL",
          { pt: "Escolha de renderização" },
          "Polling / WebSockets / SSE",
          "Offline / PWA",
        ],
      },
      {
        week: 23,
        title: { pt: "Arquitetura em escala" },
        description: { pt: "O que muda quando o frontend cresce: vários times, deploys independentes e observabilidade." },
        topics: [
          "Monorepo",
          "Micro Frontends",
          "Module Federation",
          "Feature Flags",
          "A/B Testing",
          "Real User Monitoring",
          "Error Tracking",
          "CI/CD",
        ],
      },
      {
        week: 24,
        title: { pt: "Prática de Frontend System Design" },
        description: { pt: "Problemas clássicos de Frontend System Design para praticar de ponta a ponta." },
        topics: [
          "Autocomplete / Typeahead",
          "News Feed",
          "Image Carousel",
          "Chat / Realtime",
          "Data Table",
          "Mock Interviews",
          { pt: "Explicar trade-offs" },
          { pt: "Identificar gargalos" },
        ],
      },
    ],
  },
]

// Os ids derivam do texto em PT e do número da semana — nunca do idioma da
// página. É o que mantém o progresso salvo no localStorage válido quando o
// visitante troca de idioma.
function slug(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function getRoadmap(locale: Locale): ResolvedSection[] {
  return sections.map((section, sectionIndex) => ({
    id: `s${sectionIndex + 1}`,
    title: t(locale, section.title),
    weeks: section.weeks.map((week) => ({
      id: `w${week.week}`,
      week: week.week,
      title: t(locale, week.title),
      description: t(locale, week.description),
      topics: week.topics.map((topic) => {
        const pt = typeof topic === "string" ? topic : topic.pt
        const id = `w${week.week}:${slug(pt)}`
        const content = topicContent[id]
        return {
          id,
          slug: slug(pt),
          label: typeof topic === "string" ? topic : t(locale, topic),
          description: content ? t(locale, content.description) : null,
          materials: content?.materials ?? [],
        }
      }),
    })),
  }))
}
