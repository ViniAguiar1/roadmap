import type { TopicContent } from "./types"

export const s5: Record<string, TopicContent> = {
  // Semana 19 — Testes
  "w19:piramide-de-testes": {
    description: {
      pt: "A pirâmide de testes propõe muitos testes unitários baratos, menos testes de integração e poucos E2E caros. No frontend, o Testing Trophy de Kent C. Dodds desloca o peso para integração. Em entrevista, saber defender onde investir esforço de teste mostra maturidade sobre custo, confiança e velocidade do feedback.",
    },
    materials: [
      { title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", kind: "article" },
      { title: "The Testing Trophy and Testing Classifications", url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications", kind: "article" },
      { title: "Write tests. Not too many. Mostly integration.", url: "https://kentcdodds.com/blog/write-tests", kind: "article" },
    ],
  },
  "w19:unit-tests": {
    description: {
      pt: "Testes unitários verificam uma unidade isolada, como uma função pura, um hook ou um reducer, sem rede nem DOM real. São rápidos e apontam a falha com precisão, mas acoplados demais à implementação viram fardo em refactors. Em entrevista, espere discutir o que vale testar unitariamente e o que não vale.",
    },
    materials: [
      { title: "Unit Test", url: "https://martinfowler.com/bliki/UnitTest.html", kind: "article" },
      { title: "Static vs Unit vs Integration vs E2E Testing for Frontend Apps", url: "https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests", kind: "article" },
      { title: "Test-Driven Development // Fun TDD Introduction with JavaScript", url: "https://www.youtube.com/watch?v=Jv2uxzhPFl4", kind: "video" },
    ],
  },
  "w19:integration-tests": {
    description: {
      pt: "Testes de integração exercitam várias peças juntas, como um formulário com validação, estado e chamada de API mockada na rede. No frontend costumam dar a melhor relação entre confiança e custo, porque testam o comportamento que o usuário vê sem subir um browser inteiro.",
    },
    materials: [
      { title: "Write tests. Not too many. Mostly integration.", url: "https://kentcdodds.com/blog/write-tests", kind: "article" },
      { title: "Integration Test", url: "https://martinfowler.com/bliki/IntegrationTest.html", kind: "article" },
    ],
  },
  "w19:e2e-tests": {
    description: {
      pt: "Testes end-to-end rodam a aplicação real num browser e simulam o usuário do login ao checkout. Dão a maior confiança, mas são lentos e sujeitos a flakiness, então ficam nos fluxos críticos. Em entrevista, saber reduzir flakiness com locators estáveis e isolamento de dados é diferencial.",
    },
    materials: [
      { title: "Best Practices", url: "https://playwright.dev/docs/best-practices", kind: "docs" },
      { title: "Static vs Unit vs Integration vs E2E Testing for Frontend Apps", url: "https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests", kind: "article" },
    ],
  },
  "w19:vitest": {
    description: {
      pt: "Vitest é um test runner nativo do ecossistema Vite, com API compatível com Jest, suporte a ESM e TypeScript sem configuração e watch mode rápido. Virou padrão em projetos novos, e entender describe, expect, vi.fn e ambientes como jsdom é base para qualquer suíte de testes moderna.",
    },
    materials: [
      { title: "Getting Started", url: "https://vitest.dev/guide/", kind: "docs" },
      { title: "Why Vitest", url: "https://vitest.dev/guide/why", kind: "docs" },
      { title: "Mocking", url: "https://vitest.dev/guide/mocking", kind: "docs" },
    ],
  },
  "w19:testing-library": {
    description: {
      pt: "Testing Library incentiva testar componentes como o usuário os usa: buscar por role, label e texto, não por classe ou estado interno. O resultado são testes que sobrevivem a refactors. Em entrevista cai a prioridade das queries, getBy vs findBy, user-event e os erros comuns.",
    },
    materials: [
      { title: "Guiding Principles", url: "https://testing-library.com/docs/guiding-principles", kind: "docs" },
      { title: "About Queries", url: "https://testing-library.com/docs/queries/about", kind: "docs" },
      { title: "Common mistakes with React Testing Library", url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library", kind: "article" },
    ],
  },
  "w19:playwright": {
    description: {
      pt: "Playwright é o framework de E2E da Microsoft que controla Chromium, Firefox e WebKit com auto-wait, locators baseados em acessibilidade, traces e execução paralela. Reduz a flakiness típica de E2E e também faz component testing. É a escolha mais comum hoje em vagas que pedem testes de ponta a ponta.",
    },
    materials: [
      { title: "Installation", url: "https://playwright.dev/docs/intro", kind: "docs" },
      { title: "Best Practices", url: "https://playwright.dev/docs/best-practices", kind: "docs" },
      { title: "Component testing", url: "https://playwright.dev/docs/test-components", kind: "docs" },
    ],
  },
  "w19:msw": {
    description: {
      pt: "Mock Service Worker intercepta requisições na camada de rede, via Service Worker no browser ou interceptadores no Node, e responde com handlers declarados por você. O mesmo mock serve para testes, Storybook e desenvolvimento local, sem mexer em fetch nem no código da aplicação.",
    },
    materials: [
      { title: "Introduction", url: "https://mswjs.io/docs/", kind: "docs" },
      { title: "Stop mocking fetch", url: "https://kentcdodds.com/blog/stop-mocking-fetch", kind: "article" },
      { title: "Quick start", url: "https://mswjs.io/docs/quick-start", kind: "docs" },
    ],
  },
  "w19:mocking": {
    description: {
      pt: "Mocking substitui dependências reais, como módulos, timers, rede ou datas, por dublês controlados para isolar o que está sob teste. Mock demais testa a implementação e esconde bugs de integração. Em entrevista, saber a diferença entre mock, stub e spy, e quando não mockar, é o que conta.",
    },
    materials: [
      { title: "But really, what is a JavaScript mock?", url: "https://kentcdodds.com/blog/but-really-what-is-a-javascript-mock", kind: "article" },
      { title: "Mocking", url: "https://vitest.dev/guide/mocking", kind: "docs" },
      { title: "Mocks Aren't Stubs", url: "https://martinfowler.com/articles/mocksArentStubs.html", kind: "article" },
    ],
  },

  // Semana 20 — Performance
  "w20:core-web-vitals": {
    description: {
      pt: "Core Web Vitals são as métricas do Google para experiência real do usuário: LCP para carregamento, INP para responsividade e CLS para estabilidade visual, medidas no percentil 75 de dados de campo. Influenciam ranking de busca e são a linguagem comum para discutir performance em entrevista e em produção.",
    },
    materials: [
      { title: "Web Vitals", url: "https://web.dev/articles/vitals", kind: "article" },
      { title: "Understanding Core Web Vitals and Google search results", url: "https://developers.google.com/search/docs/appearance/core-web-vitals", kind: "docs" },
      { title: "The ultimate guide to web performance", url: "https://www.youtube.com/watch?v=0fONene3OIA", kind: "video" },
    ],
  },
  "w20:lcp": {
    description: {
      pt: "Largest Contentful Paint mede quando o maior elemento visível, geralmente uma imagem hero ou bloco de texto, termina de renderizar; o alvo é até 2,5s. Otimizar LCP passa por TTFB, descoberta precoce do recurso, fetchpriority e evitar render-blocking, temas recorrentes em entrevista de performance.",
    },
    materials: [
      { title: "Largest Contentful Paint (LCP)", url: "https://web.dev/articles/lcp", kind: "article" },
      { title: "Optimize Largest Contentful Paint", url: "https://web.dev/articles/optimize-lcp", kind: "article" },
      { title: "Optimize resource loading with the Fetch Priority API", url: "https://web.dev/articles/fetch-priority", kind: "article" },
    ],
  },
  "w20:inp": {
    description: {
      pt: "Interaction to Next Paint mede a latência das interações ao longo da visita, do clique até o próximo frame pintado; o alvo é até 200ms. Substituiu o FID em 2024. Long tasks na main thread, hydration pesada e re-renders grandes no React são as causas típicas.",
    },
    materials: [
      { title: "Interaction to Next Paint (INP)", url: "https://web.dev/articles/inp", kind: "article" },
      { title: "Optimize Interaction to Next Paint", url: "https://web.dev/articles/optimize-inp", kind: "article" },
    ],
  },
  "w20:cls": {
    description: {
      pt: "Cumulative Layout Shift soma os deslocamentos inesperados de layout durante a visita; o alvo é até 0,1. Imagens sem dimensões, anúncios, fontes que trocam de métrica e conteúdo injetado acima da dobra são os culpados clássicos. Reservar espaço com width, height e aspect-ratio resolve a maioria.",
    },
    materials: [
      { title: "Cumulative Layout Shift (CLS)", url: "https://web.dev/articles/cls", kind: "article" },
      { title: "Optimize Cumulative Layout Shift", url: "https://web.dev/articles/optimize-cls", kind: "article" },
    ],
  },
  "w20:lighthouse": {
    description: {
      pt: "Lighthouse é a ferramenta do Chrome que audita performance, acessibilidade, SEO e boas práticas em ambiente de laboratório, com score ponderado por métricas. É útil para regressão em CI, mas não substitui dados de campo. Entender de onde vem o score evita otimizar o número em vez do usuário.",
    },
    materials: [
      { title: "Introduction to Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview", kind: "docs" },
      { title: "Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring", kind: "docs" },
      { title: "Performance panel: Analyze your website's performance", url: "https://developer.chrome.com/docs/devtools/performance/overview", kind: "docs" },
    ],
  },
  "w20:code-splitting": {
    description: {
      pt: "Code splitting divide o bundle em chunks carregados sob demanda, por rota ou por componente, via import() dinâmico e React.lazy. Menos JavaScript inicial significa parse e execução mais rápidos e melhor INP. Em entrevista, aparece como resposta a bundle grande e na discussão de onde cortar.",
    },
    materials: [
      { title: "Reduce JavaScript payloads with code splitting", url: "https://web.dev/articles/reduce-javascript-payloads-with-code-splitting", kind: "article" },
      { title: "lazy", url: "https://react.dev/reference/react/lazy", kind: "docs" },
      { title: "Code splitting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting", kind: "docs" },
    ],
  },
  "w20:lazy-loading": {
    description: {
      pt: "Lazy loading adia o carregamento de recursos fora da tela ou não essenciais, como imagens com loading=lazy, iframes e componentes com next/dynamic. Economiza banda e acelera o carregamento inicial, mas aplicado no elemento de LCP piora a métrica, uma armadilha comum citada em entrevista.",
    },
    materials: [
      { title: "Lazy loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading", kind: "docs" },
      { title: "Browser-level image lazy loading for the web", url: "https://web.dev/articles/browser-level-image-lazy-loading", kind: "article" },
      { title: "How to lazy load Client Components and libraries", url: "https://nextjs.org/docs/app/guides/lazy-loading", kind: "docs" },
    ],
  },
  "w20:otimizacao-de-imagens-e-fontes": {
    description: {
      pt: "Imagens e fontes costumam ser os bytes mais pesados da página e afetam LCP e CLS diretamente. Formatos modernos como AVIF e WebP, srcset responsivo, font-display, subset e preload resolvem boa parte. next/image e next/font automatizam isso, mas entender o porquê é o que se cobra em entrevista.",
    },
    materials: [
      { title: "Image performance", url: "https://web.dev/learn/performance/image-performance", kind: "course" },
      { title: "Optimize web fonts", url: "https://web.dev/learn/performance/optimize-web-fonts", kind: "course" },
      { title: "Image Optimization", url: "https://nextjs.org/docs/app/getting-started/images", kind: "docs" },
    ],
  },
  "w20:memoization": {
    description: {
      pt: "Memoization no React, com memo, useMemo e useCallback, evita recalcular valores e re-renderizar componentes quando as entradas não mudaram. Tem custo e só ajuda com referências estáveis; o React Compiler automatiza boa parte. Em entrevista, saber quando não memoizar vale tanto quanto saber usar.",
    },
    materials: [
      { title: "Understanding useMemo and useCallback", url: "https://www.joshwcomeau.com/react/usememo-and-usecallback/", kind: "article" },
      { title: "Before You memo()", url: "https://overreacted.io/before-you-memo/", kind: "article" },
      { title: "useMemo", url: "https://react.dev/reference/react/useMemo", kind: "docs" },
    ],
  },
  "w20:virtualization": {
    description: {
      pt: "Virtualization, ou windowing, renderiza só os itens visíveis de uma lista longa e recicla o resto conforme o scroll. Mantém o DOM pequeno e a interação fluida em tabelas e feeds com milhares de linhas. É a resposta esperada quando a entrevista pergunta como renderizar 10 mil itens.",
    },
    materials: [
      { title: "Virtualize large lists with react-window", url: "https://web.dev/articles/virtualize-long-lists-react-window", kind: "article" },
      { title: "TanStack Virtual", url: "https://tanstack.com/virtual/latest", kind: "docs" },
    ],
  },
  "w20:react-profiler": {
    description: {
      pt: "O Profiler do React DevTools grava commits e mostra quais componentes renderizaram, quanto tempo levaram e por quê. Existe também o componente Profiler para medir programaticamente. É o ponto de partida para diagnosticar re-renders desnecessários antes de sair aplicando memo em tudo.",
    },
    materials: [
      { title: "Why React Re-Renders", url: "https://www.joshwcomeau.com/react/why-react-re-renders/", kind: "article" },
      { title: "<Profiler>", url: "https://react.dev/reference/react/Profiler", kind: "docs" },
      { title: "React Performance tracks", url: "https://react.dev/reference/dev-tools/react-performance-tracks", kind: "docs" },
    ],
  },

  // Semana 21 — Acessibilidade e design systems
  "w21:wcag": {
    description: {
      pt: "As WCAG são as diretrizes do W3C para acessibilidade web, organizadas nos princípios perceptível, operável, compreensível e robusto, com níveis A, AA e AAA. O nível AA é o alvo usual de leis e contratos. Em entrevista de senior, espera-se conhecer critérios concretos, não só a sigla.",
    },
    materials: [
      { title: "WCAG 2 Overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", kind: "docs" },
      { title: "How to Meet WCAG (Quickref Reference)", url: "https://www.w3.org/WAI/WCAG22/quickref/", kind: "docs" },
      { title: "Learn Accessibility", url: "https://web.dev/learn/accessibility", kind: "course" },
    ],
  },
  "w21:navegacao-por-teclado": {
    description: {
      pt: "Toda funcionalidade precisa ser operável só com teclado: Tab, Shift+Tab, Enter, Espaço e setas em widgets compostos. Usar elementos nativos como button e a resolve quase tudo; div clicável quebra. Em entrevista, aparece como pedir para tornar um dropdown ou modal acessível por teclado.",
    },
    materials: [
      { title: "Developing a Keyboard Interface", url: "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/", kind: "docs" },
      { title: "Keyboard-navigable JavaScript widgets", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets", kind: "docs" },
      { title: "Understanding Success Criterion 2.1.1: Keyboard", url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html", kind: "docs" },
    ],
  },
  "w21:focus-management": {
    description: {
      pt: "Focus management é mover o foco de forma intencional quando a interface muda: prender o foco num modal, devolvê-lo ao gatilho ao fechar e levá-lo ao novo conteúdo após navegação client-side. Em SPAs isso não acontece sozinho, e errar deixa usuários de teclado e leitor de tela perdidos.",
    },
    materials: [
      { title: "Managing Focus - A11ycasts #22", url: "https://www.youtube.com/watch?v=srLRSQg6Jgg", kind: "video" },
      { title: "Keyboard focus", url: "https://web.dev/learn/accessibility/focus", kind: "course" },
      { title: "Dialog (Modal) Pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/", kind: "docs" },
    ],
  },
  "w21:screen-readers": {
    description: {
      pt: "Leitores de tela como NVDA, JAWS e VoiceOver leem a árvore de acessibilidade, montada a partir do HTML semântico e de atributos ARIA. Nome acessível, role e estado precisam estar corretos. A primeira regra do ARIA é não usar ARIA quando um elemento nativo resolve, e isso sempre cai em entrevista.",
    },
    materials: [
      { title: "Designing for Screen Reader Compatibility", url: "https://webaim.org/techniques/screenreader/", kind: "article" },
      { title: "WAI-ARIA basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics", kind: "docs" },
      { title: "ARIA and HTML", url: "https://web.dev/learn/accessibility/aria-html", kind: "course" },
    ],
  },
  "w21:contraste": {
    description: {
      pt: "Contraste é a razão de luminância entre texto e fundo; a WCAG AA exige 4.5:1 para texto normal e 3:1 para texto grande e componentes de interface. Afeta pessoas com baixa visão e qualquer um sob sol forte. Design tokens com pares de cor já validados evitam regressões no tema claro e escuro.",
    },
    materials: [
      { title: "Contrast and Color Accessibility", url: "https://webaim.org/articles/contrast/", kind: "article" },
      { title: "Understanding Success Criterion 1.4.3: Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", kind: "docs" },
      { title: "Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", kind: "article" },
    ],
  },
  "w21:design-tokens": {
    description: {
      pt: "Design tokens são as decisões visuais do produto, como cor, espaçamento, tipografia e raio, guardadas como dados nomeados e consumidas por CSS, apps e Figma. Separar tokens primitivos de semânticos permite temas, dark mode e rebranding sem caçar valores mágicos pelo código.",
    },
    materials: [
      { title: "What Are Design Tokens?", url: "https://css-tricks.com/what-are-design-tokens/", kind: "article" },
      { title: "Design tokens", url: "https://m3.material.io/foundations/design-tokens/overview", kind: "docs" },
      { title: "Design Tokens Community Group", url: "https://www.designtokens.org/", kind: "docs" },
    ],
  },
  "w21:biblioteca-de-componentes": {
    description: {
      pt: "Uma biblioteca de componentes concentra os blocos reutilizáveis da interface com API consistente, acessibilidade embutida e documentação. As decisões que pesam são headless vs estilizada, composição com compound components e versionamento. Em entrevista de senior, desenhar a API de um componente é pergunta frequente.",
    },
    materials: [
      { title: "Atomic Design", url: "https://bradfrost.com/blog/post/atomic-web-design/", kind: "article" },
      { title: "Compound Pattern", url: "https://www.patterns.dev/react/compound-pattern/", kind: "article" },
      { title: "Introduction", url: "https://www.radix-ui.com/primitives/docs/overview/introduction", kind: "docs" },
    ],
  },
  "w21:storybook": {
    description: {
      pt: "Storybook é um ambiente isolado para desenvolver, documentar e testar componentes, onde cada story representa um estado do componente. Serve de catálogo vivo do design system e base para testes visuais, de interação e de acessibilidade. É ferramenta padrão em times que mantêm bibliotecas de componentes.",
    },
    materials: [
      { title: "Storybook for React tutorial", url: "https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/", kind: "course" },
      { title: "How to write stories", url: "https://storybook.js.org/docs/writing-stories", kind: "docs" },
      { title: "Get started with Storybook", url: "https://storybook.js.org/docs", kind: "docs" },
    ],
  },
  "w21:i18n": {
    description: {
      pt: "Internacionalização é preparar o código para vários idiomas e regiões: textos extraídos, plurais, formatação de datas, números e moedas com Intl, direção RTL e rotas por locale. Localização é o trabalho de traduzir em si. Fazer i18n tarde custa caro, por isso a decisão de arquitetura aparece em entrevista.",
    },
    materials: [
      { title: "Localization vs. Internationalization", url: "https://www.w3.org/International/questions/qa-i18n", kind: "article" },
      { title: "Intl", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl", kind: "docs" },
      { title: "Internationalization", url: "https://nextjs.org/docs/app/guides/internationalization", kind: "docs" },
    ],
  },
}
