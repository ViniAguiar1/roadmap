import type { TopicContent } from "./types"

export const s6: Record<string, TopicContent> = {
  // Semana 22 — Fundamentos de Frontend System Design
  "w22:como-conduzir-a-entrevista": {
    description: {
      pt: "A entrevista de Frontend System Design é aberta e o candidato conduz: esclarece requisitos, desenha a arquitetura, define o data model, a interface com a API e aprofunda otimizações. Ter um roteiro como o RADIO evita travar no quadro branco e mostra senioridade na gestão do tempo.",
    },
    materials: [
      { title: "The RADIO Framework", url: "https://www.greatfrontend.com/front-end-system-design-playbook/framework", kind: "article" },
      { title: "Front End System Design Interview Overview", url: "https://www.frontendinterviewhandbook.com/front-end-system-design", kind: "article" },
      { title: "Interview Evaluation Criteria", url: "https://www.greatfrontend.com/front-end-system-design-playbook/evaluation-axes", kind: "article" },
    ],
  },
  "w22:functional-requirements": {
    description: {
      pt: "Functional requirements definem o que o produto faz: fluxos principais, quem usa, em quais dispositivos e o que fica fora do escopo. Nos primeiros minutos da entrevista, perguntar e fixar esses pontos delimita o problema e evita projetar a solução errada com perfeição.",
    },
    materials: [
      { title: "The RADIO Framework", url: "https://www.greatfrontend.com/front-end-system-design-playbook/framework", kind: "article" },
      { title: "Front End System Design Interview - Applications", url: "https://www.frontendinterviewhandbook.com/front-end-system-design/applications", kind: "article" },
    ],
  },
  "w22:non-functional-requirements": {
    description: {
      pt: "Non-functional requirements descrevem como o sistema se comporta: performance, acessibilidade, i18n, suporte offline, segurança e escala. São eles que justificam decisões de arquitetura, e citar metas concretas como Core Web Vitals diferencia uma resposta sênior de uma lista genérica de features.",
    },
    materials: [
      { title: "Web Vitals", url: "https://web.dev/articles/vitals", kind: "article" },
      { title: "The RADIO Framework", url: "https://www.greatfrontend.com/front-end-system-design-playbook/framework", kind: "article" },
      { title: "Common Mistakes to Avoid", url: "https://www.greatfrontend.com/front-end-system-design-playbook/common-mistakes", kind: "article" },
    ],
  },
  "w22:arquitetura-de-componentes": {
    description: {
      pt: "Arquitetura de componentes é quebrar a UI em uma hierarquia com responsabilidades claras, decidir onde o estado vive e como os dados fluem entre camadas. Na entrevista, o diagrama de componentes e a fronteira entre server, client store e view mostram se você pensa em manutenção, reuso e testabilidade.",
    },
    materials: [
      { title: "Thinking in React", url: "https://react.dev/learn/thinking-in-react", kind: "docs" },
      { title: "Compound Pattern", url: "https://www.patterns.dev/react/compound-pattern", kind: "article" },
      { title: "Container/Presentational Pattern", url: "https://www.patterns.dev/react/presentational-container-pattern", kind: "article" },
    ],
  },
  "w22:data-model": {
    description: {
      pt: "O data model define as entidades do cliente, separando server state (cache do que veio da API) de client state (UI, formulários, seleção). Normalizar entidades e evitar estado duplicado ou derivável reduz bugs de sincronização, e é a etapa em que o entrevistador avalia sua clareza sobre fonte de verdade.",
    },
    materials: [
      { title: "Choosing the State Structure", url: "https://react.dev/learn/choosing-the-state-structure", kind: "docs" },
      { title: "Normalizing State Shape", url: "https://redux.js.org/usage/structuring-reducers/normalizing-state-shape", kind: "docs" },
      { title: "TanStack Query Overview", url: "https://tanstack.com/query/latest/docs/framework/react/overview", kind: "docs" },
    ],
  },
  "w22:rest-vs-graphql": {
    description: {
      pt: "REST expõe recursos em endpoints com semântica HTTP e cache nativo; GraphQL expõe um schema tipado em que o cliente pede exatamente os campos que precisa. A escolha envolve over-fetching, número de round trips, cache, versionamento e complexidade no servidor, e é pergunta frequente ao desenhar a interface com a API.",
    },
    materials: [
      { title: "What's the Difference Between GraphQL and REST?", url: "https://aws.amazon.com/compare/the-difference-between-graphql-and-rest/", kind: "article" },
      { title: "Learn GraphQL", url: "https://graphql.org/learn/", kind: "docs" },
      { title: "REST", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST", kind: "docs" },
    ],
  },
  "w22:escolha-de-renderizacao": {
    description: {
      pt: "Escolher entre CSR, SSR, SSG, ISR, streaming e Server Components é decidir onde e quando o HTML é gerado. A decisão afeta TTFB, LCP, SEO, custo de servidor e interatividade, e em entrevista você precisa justificá-la pelos requisitos: um dashboard autenticado e uma página de produto pedem estratégias diferentes.",
    },
    materials: [
      { title: "Rendering on the Web", url: "https://web.dev/articles/rendering-on-the-web", kind: "article" },
      { title: "React Server Components", url: "https://www.patterns.dev/react/react-server-components", kind: "article" },
    ],
  },
  "w22:polling-websockets-sse": {
    description: {
      pt: "Short polling, long polling, Server-Sent Events e WebSockets são formas de levar atualizações do servidor ao cliente, com trade-offs de latência, custo de conexão e direção do fluxo. SSE resolve streams unidirecionais com reconexão automática; WebSocket serve comunicação bidirecional. Escolher bem é central em chats, feeds e notificações.",
    },
    materials: [
      { title: "Using server-sent events", url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events", kind: "docs" },
      { title: "The WebSocket API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", kind: "docs" },
      { title: "Long polling", url: "https://javascript.info/long-polling", kind: "article" },
    ],
  },
  "w22:offline-pwa": {
    description: {
      pt: "Uma PWA usa service worker, Cache Storage e manifest para funcionar offline, carregar rápido em rede ruim e ser instalável. Em system design, suporte offline exige decidir estratégias de cache (cache first, network first, stale-while-revalidate) e como enfileirar e sincronizar escritas quando a conexão volta.",
    },
    materials: [
      { title: "Learn PWA", url: "https://web.dev/learn/pwa", kind: "course" },
      { title: "The Offline Cookbook", url: "https://web.dev/articles/offline-cookbook", kind: "article" },
      { title: "Service Worker API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API", kind: "docs" },
    ],
  },

  // Semana 23 — Arquitetura em escala
  "w23:monorepo": {
    description: {
      pt: "Um monorepo guarda vários apps e pacotes num só repositório, com workspaces, dependências internas e build orquestrado por ferramentas como Turborepo ou Nx. Facilita compartilhar design system e tipos e fazer mudanças atômicas, mas exige cache de tarefas e fronteiras claras para o CI não ficar lento.",
    },
    materials: [
      { title: "Monorepo Explained", url: "https://monorepo.tools/", kind: "article" },
      { title: "Turborepo Introduction", url: "https://turborepo.dev/docs", kind: "docs" },
      { title: "Workspace", url: "https://pnpm.io/workspaces", kind: "docs" },
    ],
  },
  "w23:micro-frontends": {
    description: {
      pt: "Micro frontends dividem a aplicação por domínio ou rota, permitindo que times diferentes façam deploy de forma independente. O ganho é autonomia organizacional; o custo é duplicação de dependências, consistência visual e navegação entre partes. Em entrevista, saber quando não usar vale tanto quanto saber implementar.",
    },
    materials: [
      { title: "Micro Frontends", url: "https://martinfowler.com/articles/micro-frontends.html", kind: "article" },
      { title: "Multi-Zones", url: "https://nextjs.org/docs/app/guides/multi-zones", kind: "docs" },
      { title: "Micro Frontends - extending the microservice idea to frontend development", url: "https://micro-frontends.org/", kind: "article" },
    ],
  },
  "w23:module-federation": {
    description: {
      pt: "Module Federation permite que um bundle carregue em runtime módulos expostos por outro build, compartilhando dependências como React sem duplicá-las. É a técnica mais comum para micro frontends no cliente, e os pontos sensíveis são versionamento de shared deps, contratos entre remotes e fallback quando um remote falha.",
    },
    materials: [
      { title: "Module Federation", url: "https://webpack.js.org/concepts/module-federation/", kind: "docs" },
      { title: "Introduction", url: "https://module-federation.io/guide/start/index.html", kind: "docs" },
    ],
  },
  "w23:feature-flags": {
    description: {
      pt: "Feature flags desacoplam deploy de release: o código vai para produção desligado e é ativado por usuário, segmento ou porcentagem. Habilitam trunk-based development, rollout gradual e kill switch, mas flags esquecidas viram dívida técnica e avaliá-las no cliente pode causar flicker de layout.",
    },
    materials: [
      { title: "Feature Toggles (aka Feature Flags)", url: "https://martinfowler.com/articles/feature-toggles.html", kind: "article" },
      { title: "OpenFeature Introduction", url: "https://openfeature.dev/docs/reference/intro", kind: "docs" },
      { title: "Flags SDK", url: "https://flags-sdk.dev/", kind: "docs" },
    ],
  },
  "w23:a-b-testing": {
    description: {
      pt: "A/B testing expõe variantes a grupos aleatórios de usuários e mede uma métrica para decidir com dados. No frontend, as questões são atribuição estável da variante, evitar flicker ao trocar a UI, instrumentar eventos corretamente e não encerrar o teste antes de ter significância estatística.",
    },
    materials: [
      { title: "A/B testing", url: "https://www.optimizely.com/optimization-glossary/ab-testing/", kind: "article" },
      { title: "Experiments", url: "https://posthog.com/docs/experiments", kind: "docs" },
    ],
  },
  "w23:real-user-monitoring": {
    description: {
      pt: "Real User Monitoring coleta métricas de performance dos usuários reais, em dispositivos e redes reais, ao contrário do teste sintético do Lighthouse. É assim que se acompanha LCP, INP e CLS no p75 em produção, e mencionar RUM mostra que você mede impacto em vez de otimizar às cegas.",
    },
    materials: [
      { title: "RUM vs. Synthetic monitoring", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Rum-vs-Synthetic", kind: "docs" },
      { title: "Getting started with measuring Web Vitals", url: "https://web.dev/articles/vitals-measurement-getting-started", kind: "article" },
      { title: "web-vitals", url: "https://github.com/GoogleChrome/web-vitals", kind: "docs" },
    ],
  },
  "w23:error-tracking": {
    description: {
      pt: "Error tracking captura exceções do cliente com stack trace, source maps, contexto do usuário e breadcrumbs, agrupando ocorrências para priorizar correções. Combina error boundaries no React, handlers globais de error e unhandledrejection e uma ferramenta como Sentry, e é parte esperada da observabilidade em qualquer design de produção.",
    },
    materials: [
      { title: "Sentry for JavaScript", url: "https://docs.sentry.io/platforms/javascript/", kind: "docs" },
      { title: "Catching rendering errors with an Error Boundary", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary", kind: "docs" },
      { title: "Window: error event", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event", kind: "docs" },
    ],
  },
  "w23:ci-cd": {
    description: {
      pt: "CI integra e valida cada mudança com lint, typecheck, testes e build automáticos; CD leva o artefato aprovado para preview e produção sem passos manuais. No frontend, preview deploys por PR, budgets de bundle e rollback rápido fazem parte de como um time entrega com segurança e frequência.",
    },
    materials: [
      { title: "Continuous Integration", url: "https://martinfowler.com/articles/continuousIntegration.html", kind: "article" },
      { title: "Understanding GitHub Actions", url: "https://docs.github.com/en/actions/get-started/understand-github-actions", kind: "docs" },
      { title: "Deployments", url: "https://vercel.com/docs/deployments", kind: "docs" },
    ],
  },

  // Semana 24 — Prática de Frontend System Design
  "w24:autocomplete-typeahead": {
    description: {
      pt: "O autocomplete é a questão clássica de componente: debounce das requisições, cache de resultados por query, cancelamento de respostas fora de ordem, navegação por teclado e o padrão ARIA combobox. Cobre em pouco espaço performance, rede, estado e acessibilidade, por isso aparece tanto em entrevistas.",
    },
    materials: [
      { title: "Autocomplete", url: "https://www.greatfrontend.com/questions/system-design/autocomplete", kind: "article" },
      { title: "Combobox Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/", kind: "docs" },
      { title: "Debounce", url: "https://developer.mozilla.org/en-US/docs/Glossary/Debounce", kind: "docs" },
    ],
  },
  "w24:news-feed": {
    description: {
      pt: "Desenhar um news feed exercita paginação por cursor, infinite scroll com Intersection Observer, virtualização de listas longas, atualizações otimistas e chegada de posts novos sem pular o scroll. É uma das questões de aplicação mais pedidas porque junta data model, API e performance em escala.",
    },
    materials: [
      { title: "News Feed (e.g. Facebook)", url: "https://www.greatfrontend.com/questions/system-design/news-feed-facebook", kind: "article" },
      { title: "Infinite Queries", url: "https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries", kind: "docs" },
      { title: "Intersection Observer API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API", kind: "docs" },
    ],
  },
  "w24:image-carousel": {
    description: {
      pt: "O carrossel de imagens parece simples, mas cobre lazy loading e preload da próxima imagem, imagens responsivas, animação sem layout shift, autoplay pausável, gestos de toque e o padrão ARIA de carousel. É bom para mostrar cuidado com performance percebida e acessibilidade num componente isolado.",
    },
    materials: [
      { title: "Image Carousel", url: "https://www.greatfrontend.com/questions/system-design/image-carousel", kind: "article" },
      { title: "Carousel (Slide Show or Image Rotator) Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/carousel/", kind: "docs" },
      { title: "Browser-level image lazy loading for the web", url: "https://web.dev/articles/browser-level-image-lazy-loading", kind: "article" },
    ],
  },
  "w24:chat-realtime": {
    description: {
      pt: "Um chat em tempo real envolve conexão WebSocket com reconexão, envio otimista com status por mensagem, ordenação e deduplicação, histórico paginado, indicador de digitação e fila offline. A questão testa se você pensa em consistência entre cliente e servidor, não só em renderizar uma lista de mensagens.",
    },
    materials: [
      { title: "Chat App (e.g. Messenger)", url: "https://www.greatfrontend.com/questions/system-design/chat-application-messenger", kind: "article" },
      { title: "Writing WebSocket client applications", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications", kind: "docs" },
      { title: "useOptimistic", url: "https://react.dev/reference/react/useOptimistic", kind: "docs" },
    ],
  },
  "w24:data-table": {
    description: {
      pt: "Uma data table de produção precisa de ordenação, filtros e paginação no cliente ou no servidor, virtualização para milhares de linhas, colunas configuráveis e navegação por teclado no padrão grid. A decisão central é onde processar os dados, e bibliotecas headless como TanStack Table separam a lógica do markup.",
    },
    materials: [
      { title: "Data Table", url: "https://www.greatfrontend.com/questions/system-design/data-table", kind: "article" },
      { title: "TanStack Table Overview", url: "https://tanstack.com/table/latest/docs/overview", kind: "docs" },
      { title: "TanStack Virtual Introduction", url: "https://tanstack.com/virtual/latest/docs/introduction", kind: "docs" },
    ],
  },
  "w24:mock-interviews": {
    description: {
      pt: "Mock interviews simulam a entrevista real com tempo limitado, alguém fazendo perguntas e feedback no final. Para system design é o melhor treino, porque o difícil não é saber os conceitos e sim conduzir a conversa, desenhar enquanto fala e administrar 45 minutos sem perder profundidade.",
    },
    materials: [
      { title: "Best mock coding interview platforms for Software Engineers", url: "https://www.techinterviewhandbook.org/mock-interviews/", kind: "article" },
      { title: "Types of Questions to Expect", url: "https://www.greatfrontend.com/front-end-system-design-playbook/types-of-questions", kind: "article" },
      { title: "Front End System Design Interview - User Interface Components", url: "https://www.frontendinterviewhandbook.com/front-end-system-design/ui-components", kind: "article" },
    ],
  },
  "w24:explicar-trade-offs": {
    description: {
      pt: "Em system design não existe resposta certa, existe decisão justificada. Explicar trade-offs é nomear as alternativas, dizer o que cada uma custa em performance, complexidade e experiência do time e amarrar a escolha a um requisito. É o principal sinal de senioridade que o entrevistador procura.",
    },
    materials: [
      { title: "Interview Evaluation Criteria", url: "https://www.greatfrontend.com/front-end-system-design-playbook/evaluation-axes", kind: "article" },
      { title: "Rendering on the Web", url: "https://web.dev/articles/rendering-on-the-web", kind: "article" },
      { title: "Architectural Decision Records (ADRs)", url: "https://adr.github.io/", kind: "article" },
    ],
  },
  "w24:identificar-gargalos": {
    description: {
      pt: "Identificar gargalos é localizar onde o sistema vai degradar: long tasks bloqueando a main thread, re-renders em cascata, payloads grandes, waterfalls de requisições ou listas sem virtualização. Na entrevista, antecipar esses pontos e dizer como medi-los com DevTools e Profiler encerra o design com profundidade.",
    },
    materials: [
      { title: "Analyze runtime performance", url: "https://developer.chrome.com/docs/devtools/performance", kind: "docs" },
      { title: "Optimize long tasks", url: "https://web.dev/articles/optimize-long-tasks", kind: "article" },
      { title: "<Profiler>", url: "https://react.dev/reference/react/Profiler", kind: "docs" },
    ],
  },
}
