import type { TopicContent } from "./types"

export const s4: Record<string, TopicContent> = {
  // Semana 15 — Estratégias de renderização
  "w15:csr": {
    description: {
      pt: "No CSR o servidor entrega um HTML quase vazio e o JavaScript monta a página no navegador. É simples de hospedar e bom para apps muito interativos atrás de login, mas piora FCP, LCP e SEO, já que nada aparece até o bundle baixar, ser parseado e executar.",
    },
    materials: [
      { title: "Rendering on the Web", url: "https://web.dev/articles/rendering-on-the-web", kind: "article" },
      { title: "Client-side Rendering", url: "https://www.patterns.dev/react/client-side-rendering/", kind: "article" },
      { title: "10 Rendering Patterns for Web Apps", url: "https://www.youtube.com/watch?v=Dkx5ydvtpCA", kind: "video" },
    ],
  },
  "w15:ssr": {
    description: {
      pt: "No SSR o HTML é gerado no servidor a cada request, com os dados já embutidos, e depois hidratado no cliente. Melhora o primeiro paint e o SEO de páginas dinâmicas, ao custo de TTFB maior e servidor sempre ligado; em entrevista, saiba comparar com CSR e SSG.",
    },
    materials: [
      { title: "Server-side Rendering", url: "https://www.patterns.dev/react/server-side-rendering/", kind: "article" },
      { title: "Server-side Rendering (SSR)", url: "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering", kind: "docs" },
    ],
  },
  "w15:ssg": {
    description: {
      pt: "No SSG as páginas viram HTML estático no build e são servidas direto da CDN. É a opção mais rápida e barata para conteúdo que muda pouco, como blogs e docs, mas exige rebuild para atualizar e não escala bem para milhões de páginas ou dados por usuário.",
    },
    materials: [
      { title: "Static Rendering", url: "https://www.patterns.dev/react/static-rendering/", kind: "article" },
      { title: "Static Site Generation (SSG)", url: "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation", kind: "docs" },
    ],
  },
  "w15:isr": {
    description: {
      pt: "O ISR combina SSG com atualização sob demanda: a página estática é regenerada em background após um intervalo ou quando você invalida o cache. Resolve o problema do rebuild completo em sites grandes e segue o modelo stale-while-revalidate, servindo a versão antiga enquanto gera a nova.",
    },
    materials: [
      { title: "How to implement Incremental Static Regeneration (ISR)", url: "https://nextjs.org/docs/app/guides/incremental-static-regeneration", kind: "docs" },
      { title: "Incremental Static Regeneration (ISR)", url: "https://vercel.com/docs/incremental-static-regeneration", kind: "docs" },
      { title: "Incremental Static Generation", url: "https://www.patterns.dev/react/incremental-static-rendering/", kind: "article" },
    ],
  },
  "w15:streaming": {
    description: {
      pt: "Streaming envia o HTML em pedaços conforme cada parte fica pronta, em vez de esperar a página inteira. Com Suspense, o shell aparece rápido e trechos lentos chegam depois com fallback; isso reduz TTFB e FCP e evita que uma query lenta bloqueie a página toda.",
    },
    materials: [
      { title: "App Router: Streaming", url: "https://nextjs.org/learn/dashboard-app/streaming", kind: "course" },
      { title: "Streaming Server-Side Rendering", url: "https://www.patterns.dev/react/streaming-ssr/", kind: "article" },
      { title: "renderToPipeableStream", url: "https://react.dev/reference/react-dom/server/renderToPipeableStream", kind: "docs" },
    ],
  },
  "w15:hydration": {
    description: {
      pt: "Hydration é o processo em que o React no cliente anexa event listeners e estado ao HTML que veio do servidor. Se o render do cliente diverge do servidor, como com Date, window ou random, surge o hydration mismatch, um erro clássico de entrevista e de produção.",
    },
    materials: [
      { title: "The Perils of Hydration", url: "https://www.joshwcomeau.com/react/the-perils-of-rehydration/", kind: "article" },
      { title: "hydrateRoot", url: "https://react.dev/reference/react-dom/client/hydrateRoot", kind: "docs" },
      { title: "Text content does not match server-rendered HTML", url: "https://nextjs.org/docs/messages/react-hydration-error", kind: "docs" },
    ],
  },
  "w15:partial-prerendering": {
    description: {
      pt: "Partial Prerendering gera no build um shell estático da rota e deixa buracos dinâmicos, delimitados por Suspense, que são preenchidos por streaming no request. Une a velocidade do estático com dados por usuário na mesma página e, no Next.js 16, vem via Cache Components.",
    },
    materials: [
      { title: "Caching", url: "https://nextjs.org/docs/app/getting-started/caching", kind: "docs" },
      { title: "Partial prerendering: Building towards a new default rendering model", url: "https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model", kind: "article" },
      { title: "cacheComponents", url: "https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents", kind: "docs" },
    ],
  },
  "w15:islands-architecture": {
    description: {
      pt: "Na Islands Architecture a página é HTML estático e só alguns componentes interativos, as ilhas, recebem JavaScript e hidratam de forma independente. Reduz muito o JS enviado em sites de conteúdo; é a base do Astro e um bom contraponto ao modelo de hidratar a página inteira.",
    },
    materials: [
      { title: "Islands Architecture", url: "https://jasonformat.com/islands-architecture/", kind: "article" },
      { title: "Islands Architecture", url: "https://www.patterns.dev/vanilla/islands-architecture/", kind: "article" },
      { title: "Islands architecture", url: "https://docs.astro.build/en/concepts/islands/", kind: "docs" },
    ],
  },

  // Semana 16 — Next.js App Router
  "w16:file-based-routing": {
    description: {
      pt: "No App Router as rotas nascem da estrutura de pastas em app/: cada pasta é um segmento e page.tsx a torna pública. Segmentos dinâmicos, route groups e pastas privadas organizam o projeto sem configurar um router, e entender essas convenções é pré-requisito para todo o resto.",
    },
    materials: [
      { title: "Project structure and organization", url: "https://nextjs.org/docs/app/getting-started/project-structure", kind: "docs" },
      { title: "Dynamic Route Segments", url: "https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes", kind: "docs" },
    ],
  },
  "w16:layouts": {
    description: {
      pt: "Layouts envolvem as páginas de um segmento e persistem entre navegações, sem remontar nem perder estado. Permitem aninhar UI compartilhada como sidebars e headers; saber que layouts não re-renderizam na navegação e não recebem searchParams evita bugs comuns.",
    },
    materials: [
      { title: "Layouts and Pages", url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages", kind: "docs" },
      { title: "layout.js", url: "https://nextjs.org/docs/app/api-reference/file-conventions/layout", kind: "docs" },
    ],
  },
  "w16:server-components": {
    description: {
      pt: "React Server Components rodam só no servidor, podem acessar banco e segredos diretamente e não enviam seu código ao bundle do cliente. São o padrão no App Router; entender o que eles podem e não podem fazer, como não usar hooks de estado, é central em entrevistas de Next.js.",
    },
    materials: [
      { title: "Making Sense of React Server Components", url: "https://www.joshwcomeau.com/react/server-components/", kind: "article" },
      { title: "Server Components", url: "https://react.dev/reference/rsc/server-components", kind: "docs" },
      { title: "Server and Client Components", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components", kind: "docs" },
    ],
  },
  "w16:client-components": {
    description: {
      pt: "A diretiva use client marca a fronteira a partir da qual os componentes vão para o bundle e hidratam no navegador, liberando estado, efeitos e eventos. A arte está em empurrar essa fronteira para as folhas da árvore e passar Server Components como children para manter o JS pequeno.",
    },
    materials: [
      { title: "What Does use client Do?", url: "https://overreacted.io/what-does-use-client-do/", kind: "article" },
      { title: "'use client' directive", url: "https://react.dev/reference/rsc/use-client", kind: "docs" },
      { title: "Server and Client Components", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components", kind: "docs" },
    ],
  },
  "w16:server-actions": {
    description: {
      pt: "Server Actions são funções marcadas com use server que o cliente chama como se fossem locais, mas executam no servidor via POST. Servem para mutações e formulários com progressive enhancement; como são endpoints públicos, exigem validação de entrada e checagem de autorização.",
    },
    materials: [
      { title: "Mutating Data", url: "https://nextjs.org/docs/app/getting-started/mutating-data", kind: "docs" },
      { title: "Server Functions", url: "https://react.dev/reference/rsc/server-functions", kind: "docs" },
      { title: "'use server' directive", url: "https://react.dev/reference/rsc/use-server", kind: "docs" },
    ],
  },
  "w16:route-handlers": {
    description: {
      pt: "Route Handlers são arquivos route.ts que exportam funções GET, POST e afins usando as Web APIs Request e Response. Servem para webhooks, APIs públicas e respostas não-HTML; em entrevista, saiba quando usar um handler e quando uma Server Action resolve melhor.",
    },
    materials: [
      { title: "Route Handlers", url: "https://nextjs.org/docs/app/getting-started/route-handlers", kind: "docs" },
      { title: "route.js", url: "https://nextjs.org/docs/app/api-reference/file-conventions/route", kind: "docs" },
    ],
  },
  "w16:middleware-proxy": {
    description: {
      pt: "O proxy.ts, antigo middleware.ts renomeado no Next.js 16, roda antes de cada request e pode reescrever, redirecionar ou alterar headers. É usado para i18n, redirects de auth e A/B tests; deve ser leve e não substitui a checagem de autorização perto dos dados.",
    },
    materials: [
      { title: "Proxy", url: "https://nextjs.org/docs/app/getting-started/proxy", kind: "docs" },
      { title: "proxy.js", url: "https://nextjs.org/docs/app/api-reference/file-conventions/proxy", kind: "docs" },
      { title: "Renaming Middleware to Proxy", url: "https://nextjs.org/docs/messages/middleware-to-proxy", kind: "docs" },
    ],
  },
  "w16:metadata": {
    description: {
      pt: "A Metadata API gera title, description, Open Graph, canonical e hreflang a partir de um objeto metadata ou da função generateMetadata, por rota. Centraliza SEO no servidor, evita manipular o head à mão e permite metadados dinâmicos baseados em params e dados.",
    },
    materials: [
      { title: "Metadata and OG images", url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images", kind: "docs" },
      { title: "generateMetadata", url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata", kind: "docs" },
    ],
  },
  "w16:loading-error": {
    description: {
      pt: "Os arquivos loading.tsx e error.tsx criam, por segmento, um Suspense boundary com fallback e um error boundary com opção de retry. Isolam falhas e estados de carregamento sem derrubar o layout pai, e mostram que você entende como o App Router compõe boundaries.",
    },
    materials: [
      { title: "Error Handling", url: "https://nextjs.org/docs/app/getting-started/error-handling", kind: "docs" },
      { title: "loading.js", url: "https://nextjs.org/docs/app/api-reference/file-conventions/loading", kind: "docs" },
      { title: "error.js", url: "https://nextjs.org/docs/app/api-reference/file-conventions/error", kind: "docs" },
    ],
  },

  // Semana 17 — Dados e cache
  "w17:data-fetching-no-servidor": {
    description: {
      pt: "No App Router, Server Components são async e buscam dados direto com fetch, ORM ou SDK, sem useEffect nem camada de API intermediária. Isso elimina loading spinners em cascata no cliente e mantém segredos no servidor, mas exige pensar em cache e em onde cada dado é carregado.",
    },
    materials: [
      { title: "Fetching Data", url: "https://nextjs.org/docs/app/getting-started/fetching-data", kind: "docs" },
      { title: "App Router: Fetching Data", url: "https://nextjs.org/learn/dashboard-app/fetching-data", kind: "course" },
    ],
  },
  "w17:request-waterfalls": {
    description: {
      pt: "Um waterfall acontece quando requests que poderiam ser paralelos esperam uns pelos outros, seja por awaits em sequência ou por componentes que só buscam dados depois que o pai renderiza. É uma das causas mais comuns de páginas lentas e aparece muito em perguntas de performance.",
    },
    materials: [
      { title: "How to fetch data in React with performance in mind", url: "https://www.developerway.com/posts/how-to-fetch-data-in-react", kind: "article" },
      { title: "Performance & Request Waterfalls", url: "https://tanstack.com/query/latest/docs/framework/react/guides/request-waterfalls", kind: "docs" },
      { title: "Fetching Data", url: "https://nextjs.org/docs/app/getting-started/fetching-data", kind: "docs" },
    ],
  },
  "w17:fetch-em-paralelo": {
    description: {
      pt: "Disparar requests independentes ao mesmo tempo, com Promise.all ou iniciando as promises antes do await, faz o tempo total ser o do request mais lento e não a soma. Combinado com Suspense, permite mostrar cada parte assim que fica pronta em vez de esperar tudo.",
    },
    materials: [
      { title: "Fetching Data", url: "https://nextjs.org/docs/app/getting-started/fetching-data", kind: "docs" },
      { title: "Promise.all()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all", kind: "docs" },
    ],
  },
  "w17:revalidation": {
    description: {
      pt: "Revalidation é como dados em cache são atualizados: por tempo, com cacheLife ou revalidate, ou sob demanda, com revalidatePath e revalidateTag após uma mutação. Escolher a estratégia certa equilibra frescor e performance e evita o bug de dado velho depois de salvar.",
    },
    materials: [
      { title: "Revalidating", url: "https://nextjs.org/docs/app/getting-started/revalidating", kind: "docs" },
      { title: "revalidatePath", url: "https://nextjs.org/docs/app/api-reference/functions/revalidatePath", kind: "docs" },
      { title: "revalidateTag", url: "https://nextjs.org/docs/app/api-reference/functions/revalidateTag", kind: "docs" },
    ],
  },
  "w17:cache-tags": {
    description: {
      pt: "Cache tags rotulam entradas de cache, com cacheTag ou a opção tags do fetch, para invalidar todas que dependem de um dado de uma vez, via revalidateTag ou updateTag. Permitem invalidação granular, como um produto específico, sem jogar fora o cache inteiro da rota.",
    },
    materials: [
      { title: "cacheTag", url: "https://nextjs.org/docs/app/api-reference/functions/cacheTag", kind: "docs" },
      { title: "revalidateTag", url: "https://nextjs.org/docs/app/api-reference/functions/revalidateTag", kind: "docs" },
      { title: "updateTag", url: "https://nextjs.org/docs/app/api-reference/functions/updateTag", kind: "docs" },
    ],
  },
  "w17:use-cache": {
    description: {
      pt: "A diretiva use cache marca uma função, componente ou página inteira como cacheável, com a chave derivada automaticamente dos argumentos. É o modelo de cache explícito do Next.js 16 com Cache Components, substituindo o cache implícito do fetch e o unstable_cache.",
    },
    materials: [
      { title: "use cache", url: "https://nextjs.org/docs/app/api-reference/directives/use-cache", kind: "docs" },
      { title: "Composable Caching with Next.js", url: "https://nextjs.org/blog/composable-caching", kind: "article" },
      { title: "cacheLife", url: "https://nextjs.org/docs/app/api-reference/functions/cacheLife", kind: "docs" },
    ],
  },
  "w17:edge-vs-node-runtime": {
    description: {
      pt: "O Edge Runtime roda um subconjunto das Web APIs perto do usuário, com cold start mínimo, mas sem módulos nativos do Node nem muitas libs. O Node runtime tem a API completa e fica perto do banco; a escolha depende de latência, dependências e de onde estão os dados.",
    },
    materials: [
      { title: "Edge Runtime", url: "https://nextjs.org/docs/app/api-reference/edge", kind: "docs" },
      { title: "Runtimes", url: "https://vercel.com/docs/functions/runtimes", kind: "docs" },
      { title: "Route Segment Config", url: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config", kind: "docs" },
    ],
  },
  "w17:cdn": {
    description: {
      pt: "Uma CDN é uma rede de servidores distribuídos que guarda cópias de assets e respostas perto do usuário, reduzindo latência e carga na origem. O comportamento é guiado por headers como Cache-Control e s-maxage, e entender isso explica por que SSG e ISR são tão rápidos.",
    },
    materials: [
      { title: "Content delivery networks (CDNs)", url: "https://web.dev/articles/content-delivery-networks", kind: "article" },
      { title: "HTTP caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching", kind: "docs" },
      { title: "CDN", url: "https://developer.mozilla.org/en-US/docs/Glossary/CDN", kind: "docs" },
    ],
  },

  // Semana 18 — Autenticação e segurança no frontend
  "w18:cookies": {
    description: {
      pt: "Cookies são pares chave-valor que o navegador envia automaticamente em cada request ao domínio. Os atributos HttpOnly, Secure, SameSite, Domain e Path definem quem lê o cookie e quando ele é enviado, e são a base de sessões seguras e da defesa contra XSS e CSRF.",
    },
    materials: [
      { title: "Using HTTP cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies", kind: "docs" },
      { title: "SameSite cookies explained", url: "https://web.dev/articles/samesite-cookies-explained", kind: "article" },
      { title: "cookies", url: "https://nextjs.org/docs/app/api-reference/functions/cookies", kind: "docs" },
    ],
  },
  "w18:sessions": {
    description: {
      pt: "Uma sessão mantém o usuário autenticado entre requests, seja guardando um ID opaco no cookie com estado no servidor, seja um token assinado stateless. Em entrevista, discuta trade-offs de revogação, expiração, rotação do ID após login e onde validar a sessão.",
    },
    materials: [
      { title: "How to implement authentication in Next.js", url: "https://nextjs.org/docs/app/guides/authentication", kind: "docs" },
      { title: "Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html", kind: "docs" },
    ],
  },
  "w18:jwt": {
    description: {
      pt: "JWT é um token compacto com header, payload e assinatura em base64url, que permite verificar a identidade sem consultar o banco. O payload é legível, não secreto; os pontos de entrevista são onde armazenar o token, como revogar, expiração curta e validação do algoritmo.",
    },
    materials: [
      { title: "JSON Web Token Introduction", url: "https://www.jwt.io/introduction", kind: "article" },
      { title: "JSON Web Token Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html", kind: "docs" },
      { title: "RFC 7519 - JSON Web Token (JWT)", url: "https://datatracker.ietf.org/doc/html/rfc7519", kind: "docs" },
    ],
  },
  "w18:oauth": {
    description: {
      pt: "OAuth 2.0 é um protocolo de autorização delegada: o usuário permite que um app acesse recursos em outro serviço sem compartilhar a senha. OpenID Connect adiciona identidade por cima; para SPAs e apps públicos, o fluxo recomendado é Authorization Code com PKCE.",
    },
    materials: [
      { title: "An Illustrated Guide to OAuth and OpenID Connect", url: "https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc", kind: "article" },
      { title: "OAuth 2.0", url: "https://oauth.net/2/", kind: "docs" },
      { title: "PKCE", url: "https://oauth.net/2/pkce/", kind: "docs" },
    ],
  },
  "w18:xss": {
    description: {
      pt: "XSS é a injeção de script malicioso que roda no contexto do seu site, roubando sessão ou agindo pelo usuário. O React escapa texto por padrão, mas dangerouslySetInnerHTML, URLs javascript: e manipulação direta do DOM reabrem a porta; é a vulnerabilidade de frontend mais cobrada.",
    },
    materials: [
      { title: "Cross-site scripting (XSS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS", kind: "docs" },
      { title: "Cross Site Scripting Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html", kind: "docs" },
    ],
  },
  "w18:csrf": {
    description: {
      pt: "CSRF engana o navegador para enviar um request autenticado a outro site, aproveitando que cookies vão automaticamente. As defesas são SameSite nos cookies, tokens anti-CSRF e checagem do header Origin; Server Actions do Next.js já comparam Origin e Host.",
    },
    materials: [
      { title: "Cross-site request forgery (CSRF)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/CSRF", kind: "docs" },
      { title: "Cross-Site Request Forgery Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html", kind: "docs" },
    ],
  },
  "w18:csp": {
    description: {
      pt: "Content Security Policy é um header que diz ao navegador de onde scripts, estilos e outros recursos podem ser carregados. Uma CSP estrita, com nonces e strict-dynamic, é a segunda linha de defesa contra XSS, mesmo quando uma injeção escapa do código.",
    },
    materials: [
      { title: "Content Security Policy (CSP)", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP", kind: "docs" },
      { title: "Content security policy", url: "https://web.dev/articles/csp", kind: "article" },
      { title: "How to set a Content Security Policy (CSP) for your Next.js application", url: "https://nextjs.org/docs/app/guides/content-security-policy", kind: "docs" },
    ],
  },
  "w18:cors": {
    description: {
      pt: "CORS é o mecanismo pelo qual um servidor, via headers Access-Control-Allow-*, autoriza outra origem a ler suas respostas, relaxando a same-origin policy. Entender preflight, credenciais e por que o erro aparece só no navegador é pergunta frequente e fonte de muita confusão.",
    },
    materials: [
      { title: "How to win at CORS", url: "https://jakearchibald.com/2021/cors/", kind: "article" },
      { title: "Cross-Origin Resource Sharing (CORS)", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS", kind: "docs" },
    ],
  },
  "w18:sanitizacao-de-html": {
    description: {
      pt: "Sanitizar HTML é remover tags, atributos e URLs perigosos de conteúdo vindo do usuário antes de injetá-lo no DOM. Quando você realmente precisa renderizar HTML, como rich text ou markdown, use DOMPurify ou a Sanitizer API e reforce com Trusted Types em vez de regex caseira.",
    },
    materials: [
      { title: "DOMPurify", url: "https://github.com/cure53/DOMPurify", kind: "docs" },
      { title: "HTML Sanitizer API", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API", kind: "docs" },
      { title: "Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types", url: "https://web.dev/articles/trusted-types", kind: "article" },
    ],
  },
}
