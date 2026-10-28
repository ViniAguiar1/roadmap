import type { TopicContent } from "./types"

export const s1: Record<string, TopicContent> = {
  // Semana 1 — Como a web funciona
  "w1:internet": {
    description: {
      pt: "A internet é uma rede de redes: roteadores, cabos e provedores que trocam pacotes entre máquinas usando protocolos comuns. Ter esse modelo mental na cabeça é a base para explicar latência, CDN e por que a distância física entre usuário e servidor pesa na performance.",
    },
    materials: [
      { title: "How does the Internet work?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work", kind: "docs" },
      { title: "What is the Internet?", url: "https://www.youtube.com/watch?v=Dxcc6ycZ73M", kind: "video" },
      { title: "How the Internet Works in 5 Minutes", url: "https://www.youtube.com/watch?v=7_LPdttKXPc", kind: "video" },
    ],
  },
  "w1:ip": {
    description: {
      pt: "O IP endereça cada máquina na rede e roteia pacotes salto a salto até o destino, sem garantia de entrega ou ordem. Entender IPv4, IPv6 e o papel do roteamento explica por que existe uma camada de transporte acima dele e como o DNS entra na história.",
    },
    materials: [
      { title: "IP Address", url: "https://developer.mozilla.org/en-US/docs/Glossary/IP_Address", kind: "docs" },
      { title: "The Internet: IP Addresses & DNS", url: "https://www.youtube.com/watch?v=5o8CwafCxnU", kind: "video" },
    ],
  },
  "w1:dns": {
    description: {
      pt: "O DNS traduz nomes como example.com em endereços IP, numa cadeia de consultas entre resolver, root, TLD e servidor autoritativo. Em entrevista aparece no clássico o que acontece quando você digita uma URL e explica latência de primeira visita, TTL e dns-prefetch.",
    },
    materials: [
      { title: "How DNS works", url: "https://dnsimple.com/comics/how-dns-works/", kind: "article" },
      { title: "DNS", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", kind: "docs" },
      { title: "The Internet: IP Addresses & DNS", url: "https://www.youtube.com/watch?v=5o8CwafCxnU", kind: "video" },
    ],
  },
  "w1:tcp": {
    description: {
      pt: "O TCP cria uma conexão confiável sobre o IP: handshake de três vias, ordenação, retransmissão e controle de congestionamento. Esse custo de ida e volta explica por que conexões novas são caras, por que keep-alive e preconnect ajudam e o que o HTTP/3 muda ao trocar TCP por QUIC.",
    },
    materials: [
      { title: "TCP", url: "https://developer.mozilla.org/en-US/docs/Glossary/TCP", kind: "docs" },
      { title: "The Internet: Packets, Routing & Reliability", url: "https://www.youtube.com/watch?v=AYdF7b3nMto", kind: "video" },
    ],
  },
  "w1:http": {
    description: {
      pt: "HTTP é o protocolo de requisição e resposta, sem estado, que o navegador usa para buscar quase tudo. Saber a diferença entre HTTP/1.1, HTTP/2 e HTTP/3, métodos e o papel dos cookies é pré-requisito para discutir fetch, cache, CORS e performance de rede.",
    },
    materials: [
      { title: "Overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview", kind: "docs" },
      { title: "The Internet: HTTP & HTML", url: "https://www.youtube.com/watch?v=kBXQZMmiA4s", kind: "video" },
    ],
  },
  "w1:https-tls": {
    description: {
      pt: "HTTPS é HTTP sobre TLS, que garante confidencialidade, integridade e autenticidade via certificados e troca de chaves no handshake. Cai em entrevista junto com o fluxo de uma URL e importa em produção: HTTP/2, service workers e várias APIs do navegador só funcionam em contexto seguro.",
    },
    materials: [
      { title: "Transport Layer Security (TLS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security", kind: "docs" },
      { title: "The Illustrated TLS 1.3 Connection", url: "https://tls13.xargs.org/", kind: "article" },
      { title: "The Internet: Encryption & Public Keys", url: "https://www.youtube.com/watch?v=ZghMPWGXexs", kind: "video" },
    ],
  },
  "w1:request-e-response": {
    description: {
      pt: "Toda troca HTTP é uma mensagem de request (método, URL, headers, corpo) e uma de response (status, headers, corpo). Ler essas mensagens no painel Network do DevTools é a habilidade que destrava debug de APIs, idempotência de métodos e a escolha entre GET, POST, PUT e PATCH.",
    },
    materials: [
      { title: "HTTP messages", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages", kind: "docs" },
      { title: "HTTP request methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods", kind: "docs" },
    ],
  },
  "w1:status-codes": {
    description: {
      pt: "Status codes resumem o resultado de uma requisição em cinco famílias: 1xx, 2xx, 3xx, 4xx e 5xx. Saber distinguir 301 de 302, 401 de 403 e 304 de 200 é pergunta frequente e define como o frontend trata erro, redirecionamento e cache.",
    },
    materials: [
      { title: "HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status", kind: "docs" },
      { title: "RFC 9110: HTTP Semantics", url: "https://www.rfc-editor.org/rfc/rfc9110", kind: "docs" },
    ],
  },
  "w1:headers-e-cache-http": {
    description: {
      pt: "Headers carregam metadados da mensagem, e os de cache (Cache-Control, ETag, Last-Modified, Vary) decidem se o navegador ou a CDN reaproveitam uma resposta. Uma estratégia de cache bem feita, com assets versionados e max-age longo, é das otimizações de maior impacto e mais cobradas em entrevista.",
    },
    materials: [
      { title: "HTTP caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching", kind: "docs" },
      { title: "Caching best practices & max-age gotchas", url: "https://jakearchibald.com/2016/caching-best-practices/", kind: "article" },
      { title: "Prevent unnecessary network requests with the HTTP Cache", url: "https://web.dev/articles/http-cache", kind: "article" },
    ],
  },

  // Semana 2 — HTML semântico e acessibilidade
  "w2:estrutura-do-documento": {
    description: {
      pt: "Um documento HTML válido começa com doctype, html com lang, head com charset e viewport, e body com o conteúdo. Parece básico, mas erros aqui quebram renderização em modo quirks, leitura por leitores de tela e SEO, e é o ponto de partida de qualquer pergunta sobre HTML.",
    },
    materials: [
      { title: "Document structure", url: "https://web.dev/learn/html/document-structure", kind: "course" },
      { title: "Basic HTML syntax", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", kind: "docs" },
    ],
  },
  "w2:tags-semanticas": {
    description: {
      pt: "Tags semânticas como header, nav, main, article, section e button descrevem o papel do conteúdo, não a aparência. Elas alimentam a árvore de acessibilidade, a navegação por landmarks e o SEO de graça, e trocar div clicável por button é o exemplo clássico cobrado em entrevista.",
    },
    materials: [
      { title: "Semantic HTML", url: "https://web.dev/learn/html/semantic-html", kind: "course" },
      { title: "Structuring documents", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents", kind: "docs" },
    ],
  },
  "w2:formularios": {
    description: {
      pt: "Formulários combinam form, label, input e button com validação nativa, tipos de input e envio por submit. Usar label associado, autocomplete e o evento submit em vez de onClick resolve acessibilidade, teclado e mobile, e é base para entender form actions e libs como React Hook Form.",
    },
    materials: [
      { title: "Learn Forms", url: "https://web.dev/learn/forms", kind: "course" },
      { title: "Forms", url: "https://web.dev/learn/html/forms", kind: "course" },
      { title: "Web forms", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms", kind: "docs" },
    ],
  },
  "w2:links-e-navegacao": {
    description: {
      pt: "O elemento a é o mecanismo de navegação da web: href, target, rel, âncoras e download. Saber quando usar link e quando usar button, além de rel=noopener e texto de link descritivo, aparece em revisões de acessibilidade e explica o que componentes como o Link do Next.js fazem por baixo.",
    },
    materials: [
      { title: "Links", url: "https://web.dev/learn/html/links", kind: "course" },
      { title: "Creating links", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links", kind: "docs" },
      { title: "<a>: The Anchor element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a", kind: "docs" },
    ],
  },
  "w2:imagens-e-midia": {
    description: {
      pt: "Imagens e mídia envolvem img com alt, srcset e sizes, picture para formatos modernos, video e audio. Imagens costumam ser o maior peso da página e o elemento de LCP, então dimensões explícitas, lazy loading e responsive images impactam direto Core Web Vitals.",
    },
    materials: [
      { title: "Images", url: "https://web.dev/learn/html/images", kind: "course" },
      { title: "Using responsive images in HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images", kind: "docs" },
      { title: "Learn Images", url: "https://web.dev/learn/images", kind: "course" },
    ],
  },
  "w2:meta-tags": {
    description: {
      pt: "Meta tags no head definem charset, viewport, descrição, robots e os dados de compartilhamento via Open Graph. São o que buscadores e redes sociais leem antes do conteúdo, e esquecer o viewport ainda é causa comum de site quebrado no mobile.",
    },
    materials: [
      { title: "Metadata", url: "https://web.dev/learn/html/metadata", kind: "course" },
      { title: "<meta>: The metadata element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta", kind: "docs" },
      { title: "The Open Graph protocol", url: "https://ogp.me/", kind: "docs" },
    ],
  },
  "w2:arvore-de-acessibilidade": {
    description: {
      pt: "A árvore de acessibilidade é a versão do DOM que o navegador expõe para tecnologias assistivas, com nome, role e estado de cada elemento. Entender como ela é derivada do HTML explica por que semântica correta resolve a maior parte da acessibilidade e como inspecioná-la no DevTools.",
    },
    materials: [
      { title: "The Accessibility Tree", url: "https://web.dev/articles/the-accessibility-tree", kind: "article" },
      { title: "Accessibility tree", url: "https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree", kind: "docs" },
      { title: "Full accessibility tree in Chrome DevTools", url: "https://developer.chrome.com/blog/full-accessibility-tree", kind: "article" },
    ],
  },
  "w2:aria": {
    description: {
      pt: "ARIA adiciona roles, estados e propriedades à árvore de acessibilidade quando o HTML nativo não basta, como em tabs, combobox e modais. A primeira regra é não usar ARIA se existir elemento nativo, e saber aplicar os padrões do APG separa um componente acessível de um que só parece funcionar.",
    },
    materials: [
      { title: "Read Me First", url: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/", kind: "docs" },
      { title: "ARIA", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA", kind: "docs" },
      { title: "ARIA Authoring Practices Guide", url: "https://www.w3.org/WAI/ARIA/apg/", kind: "docs" },
    ],
  },

  // Semana 3 — CSS e layout
  "w3:box-model": {
    description: {
      pt: "Todo elemento é uma caixa de content, padding, border e margin, e box-sizing define se width inclui padding e borda. Margin collapse, display block versus inline e o reset com border-box são fonte constante de bugs de layout e de perguntas de entrevista.",
    },
    materials: [
      { title: "Box Model", url: "https://web.dev/learn/css/box-model", kind: "course" },
      { title: "The box model", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model", kind: "docs" },
    ],
  },
  "w3:cascade": {
    description: {
      pt: "A cascade é o algoritmo que decide qual declaração vence quando várias se aplicam ao mesmo elemento: origem, importância, cascade layers, specificity e ordem. Entender isso evita a guerra de !important e explica como Tailwind, CSS Modules e @layer convivem num projeto.",
    },
    materials: [
      { title: "The cascade", url: "https://web.dev/learn/css/the-cascade", kind: "course" },
      { title: "Introduction to the CSS cascade", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction", kind: "docs" },
      { title: "Handling conflicts", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts", kind: "docs" },
    ],
  },
  "w3:specificity": {
    description: {
      pt: "Specificity é o peso de um seletor, calculado em colunas de IDs, classes e tipos, usado pela cascade para desempatar regras. Calcular de cabeça e entender o efeito de :is(), :where() e :not() aparece em entrevista e explica por que seletores com ID dificultam manutenção.",
    },
    materials: [
      { title: "Specificity", url: "https://web.dev/learn/css/specificity", kind: "course" },
      { title: "Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity", kind: "docs" },
      { title: "Specificity Calculator", url: "https://specificity.keegan.st/", kind: "article" },
    ],
  },
  "w3:positioning": {
    description: {
      pt: "A propriedade position (static, relative, absolute, fixed, sticky) tira ou ajusta elementos do fluxo normal em relação a um containing block. Saber qual ancestral serve de referência para absolute e por que sticky às vezes não gruda resolve boa parte dos bugs de dropdown, tooltip e header.",
    },
    materials: [
      { title: "Positioning", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning", kind: "docs" },
      { title: "position", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position", kind: "docs" },
    ],
  },
  "w3:stacking-context": {
    description: {
      pt: "Stacking context é o grupo isolado em que z-index é comparado; propriedades como position com z-index, opacity, transform e isolation criam um novo. É a explicação para o z-index: 9999 que não funciona, e entender isso evita gambiarras com modais, toasts e menus.",
    },
    materials: [
      { title: "What The Heck, z-index??", url: "https://www.joshwcomeau.com/css/stacking-contexts/", kind: "article" },
      { title: "Z-index and stacking contexts", url: "https://web.dev/learn/css/z-index", kind: "course" },
      { title: "Stacking context", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context", kind: "docs" },
    ],
  },
  "w3:flexbox": {
    description: {
      pt: "Flexbox é o modelo de layout unidimensional para distribuir itens em linha ou coluna, com flex-grow, flex-shrink, flex-basis, gap e alinhamento. É o layout mais usado no dia a dia, e entender como o espaço livre é dividido evita o chute de propriedades até funcionar.",
    },
    materials: [
      { title: "An Interactive Guide to Flexbox", url: "https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/", kind: "article" },
      { title: "Flexbox", url: "https://web.dev/learn/css/flexbox", kind: "course" },
      { title: "A Complete Guide to CSS Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", kind: "article" },
    ],
  },
  "w3:grid": {
    description: {
      pt: "CSS Grid é o modelo bidimensional de layout, com linhas e colunas explícitas, unidade fr, áreas nomeadas e auto-fit com minmax. Resolve layouts de página e cards responsivos sem media query, e saber quando usar Grid ou Flexbox é pergunta comum em entrevista.",
    },
    materials: [
      { title: "An Interactive Guide to CSS Grid", url: "https://www.joshwcomeau.com/css/interactive-guide-to-grid/", kind: "article" },
      { title: "Grid", url: "https://web.dev/learn/css/grid", kind: "course" },
      { title: "A Complete Guide to CSS Grid Layout", url: "https://css-tricks.com/complete-guide-css-grid-layout/", kind: "article" },
    ],
  },
  "w3:unidades-relativas": {
    description: {
      pt: "Unidades relativas como rem, em, %, vw, vh, dvh e ch escalam com a fonte, o pai ou a viewport em vez de valores fixos. Usar rem para tipografia respeita a preferência de fonte do usuário, e entender dvh resolve o clássico bug do 100vh no mobile.",
    },
    materials: [
      { title: "Sizing Units", url: "https://web.dev/learn/css/sizing", kind: "course" },
      { title: "The Surprising Truth About Pixels and Accessibility", url: "https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/", kind: "article" },
      { title: "CSS values and units", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units", kind: "docs" },
    ],
  },
  "w3:design-responsivo": {
    description: {
      pt: "Design responsivo adapta o layout a qualquer tela com meta viewport, layouts fluidos, media queries e imagens responsivas, partindo do mobile. É requisito de praticamente qualquer produto e aparece em entrevista quando se pede para montar um layout que funcione do celular ao desktop.",
    },
    materials: [
      { title: "Learn Responsive Design", url: "https://web.dev/learn/design", kind: "course" },
      { title: "Responsive web design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", kind: "docs" },
      { title: "Media queries", url: "https://web.dev/learn/design/media-queries", kind: "course" },
    ],
  },
  "w3:container-queries": {
    description: {
      pt: "Container queries aplicam estilos com base no tamanho do container pai, não da viewport, via container-type e @container. Permitem componentes realmente reutilizáveis, que se adaptam ao espaço onde são colocados, algo que media queries não resolvem num design system.",
    },
    materials: [
      { title: "A Friendly Introduction to Container Queries", url: "https://www.joshwcomeau.com/css/container-queries-introduction/", kind: "article" },
      { title: "CSS container queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries", kind: "docs" },
    ],
  },

  // Semana 4 — Como o navegador renderiza
  "w4:critical-rendering-path": {
    description: {
      pt: "O Critical Rendering Path é a sequência que o navegador percorre do HTML recebido até os primeiros pixels: DOM, CSSOM, render tree, layout e paint. É o mapa que conecta todas as otimizações de carregamento e a resposta esperada na pergunta sobre o que acontece depois que o HTML chega.",
    },
    materials: [
      { title: "Understand the critical path", url: "https://web.dev/learn/performance/understanding-the-critical-path", kind: "course" },
      { title: "Critical rendering path", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path", kind: "docs" },
      { title: "So how does the browser actually render a website", url: "https://www.youtube.com/watch?v=SmE4OwHztCc", kind: "video" },
    ],
  },
  "w4:dom": {
    description: {
      pt: "O DOM é a árvore de objetos que o navegador constrói a partir do HTML e expõe ao JavaScript para leitura e mutação. Entender que o DOM é diferente do HTML fonte e que mexer nele tem custo é a base para entender o que o React e o virtual DOM tentam otimizar.",
    },
    materials: [
      { title: "Document Object Model (DOM)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", kind: "docs" },
      { title: "DOM tree", url: "https://javascript.info/dom-nodes", kind: "article" },
    ],
  },
  "w4:cssom": {
    description: {
      pt: "O CSSOM é a árvore equivalente ao DOM para estilos, construída a partir de todo o CSS da página e usada para calcular o estilo final de cada nó. Como precisa estar completo antes da renderização, ele explica por que CSS é render-blocking e por que CSS crítico inline acelera o first paint.",
    },
    materials: [
      { title: "Constructing the Object Model", url: "https://web.dev/articles/critical-rendering-path/constructing-the-object-model", kind: "article" },
      { title: "CSS Object Model (CSSOM)", url: "https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model", kind: "docs" },
    ],
  },
  "w4:render-tree": {
    description: {
      pt: "A render tree combina DOM e CSSOM e contém só os nós visíveis, já com estilo computado; elementos com display: none ficam de fora. Entender essa etapa explica a diferença entre display: none e visibility: hidden e por que o navegador só pode fazer layout depois dela.",
    },
    materials: [
      { title: "Render-tree Construction, Layout, and Paint", url: "https://web.dev/articles/critical-rendering-path/render-tree-construction", kind: "article" },
      { title: "Populating the page: how browsers work", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work", kind: "docs" },
    ],
  },
  "w4:layout": {
    description: {
      pt: "Layout é a etapa em que o navegador calcula posição e tamanho de cada caixa da render tree a partir da viewport. É cara e se propaga pela árvore, então ler offsetHeight logo após mudar estilo força layout síncrono e causa layout thrashing, um problema real de performance em listas e animações.",
    },
    materials: [
      { title: "Avoid large, complex layouts and layout thrashing", url: "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing", kind: "article" },
      { title: "Populating the page: how browsers work", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work", kind: "docs" },
      { title: "Inside look at modern web browser (part 3)", url: "https://developer.chrome.com/blog/inside-browser-part3", kind: "article" },
    ],
  },
  "w4:paint": {
    description: {
      pt: "Paint transforma as caixas calculadas em listas de comandos de desenho: texto, cores, bordas, sombras e imagens, por camada. Propriedades como box-shadow e filter grandes deixam o paint caro, e o painel Rendering do DevTools mostra quais áreas estão sendo repintadas a cada frame.",
    },
    materials: [
      { title: "Simplify paint complexity and reduce paint areas", url: "https://web.dev/articles/simplify-paint-complexity-and-reduce-paint-areas", kind: "article" },
      { title: "Inside look at modern web browser (part 3)", url: "https://developer.chrome.com/blog/inside-browser-part3", kind: "article" },
    ],
  },
  "w4:composite": {
    description: {
      pt: "Composite é a etapa em que o navegador junta as camadas pintadas na ordem certa, geralmente na GPU e fora da main thread. Animar só transform e opacity mantém o trabalho no compositor e garante 60 fps mesmo com JavaScript ocupado, a regra de ouro de animações performáticas.",
    },
    materials: [
      { title: "Stick to Compositor-Only Properties and Manage Layer Count", url: "https://web.dev/articles/stick-to-compositor-only-properties-and-manage-layer-count", kind: "article" },
      { title: "How to create high-performance CSS animations", url: "https://web.dev/articles/animations-guide", kind: "article" },
      { title: "RenderingNG architecture", url: "https://developer.chrome.com/docs/chromium/renderingng-architecture", kind: "docs" },
    ],
  },
  "w4:reflow-vs-repaint": {
    description: {
      pt: "Reflow recalcula geometria e dispara layout, paint e composite; repaint só redesenha pixels quando muda algo visual como cor. Saber quais propriedades e APIs disparam cada um é pergunta clássica de entrevista e guia a escolha do que animar e de como agrupar leituras e escritas no DOM.",
    },
    materials: [
      { title: "Rendering performance", url: "https://web.dev/articles/rendering-performance", kind: "article" },
      { title: "What forces layout/reflow", url: "https://gist.github.com/paulirish/5d52fb081b3570c81e3a", kind: "article" },
      { title: "Reflow", url: "https://developer.mozilla.org/en-US/docs/Glossary/Reflow", kind: "docs" },
    ],
  },
  "w4:bloqueio-de-render-scripts-e-css": {
    description: {
      pt: "CSS bloqueia a renderização e scripts síncronos bloqueiam o parser, atrasando o first paint até serem baixados e executados. Usar defer, async, type=module, media em links de CSS e preload é como se ganha FCP e LCP, e entender a diferença entre async e defer cai em quase toda entrevista.",
    },
    materials: [
      { title: "Optimize resource loading", url: "https://web.dev/learn/performance/optimize-resource-loading", kind: "course" },
      { title: "Render-blocking CSS", url: "https://web.dev/articles/critical-rendering-path/render-blocking-css", kind: "article" },
      { title: "Eliminate render-blocking resources", url: "https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources", kind: "docs" },
    ],
  },
}
