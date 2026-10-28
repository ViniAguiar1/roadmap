import type { TopicContent } from "./types"

export const s2: Record<string, TopicContent> = {
  // Semana 5 — JavaScript core
  "w5:tipos-e-coercao": {
    description: {
      pt: "JavaScript tem sete tipos primitivos mais object, e converte entre eles implicitamente em operações como ==, + e contextos booleanos. Entender coerção explica bugs clássicos ([] + {}, 0 == ''), por que se prefere === e o que é truthy/falsy, tema recorrente em perguntas de entrevista.",
    },
    materials: [
      { title: "JavaScript data types and data structures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures", kind: "docs" },
      { title: "Type Conversions", url: "https://javascript.info/type-conversions", kind: "article" },
      { title: "Equality comparisons and sameness", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness", kind: "docs" },
    ],
  },
  "w5:scope": {
    description: {
      pt: "Scope define onde uma variável é visível: global, de módulo, de função ou de bloco (let/const). O JavaScript usa lexical scope, ou seja, o acesso é decidido por onde o código foi escrito, não por onde é chamado. É a base para entender closures, hoisting e vazamento de variáveis globais.",
    },
    materials: [
      { title: "Scope", url: "https://developer.mozilla.org/en-US/docs/Glossary/Scope", kind: "docs" },
      { title: "Variable scope, closure", url: "https://javascript.info/closure", kind: "article" },
    ],
  },
  "w5:hoisting": {
    description: {
      pt: "Hoisting é o comportamento em que declarações são registradas antes da execução do escopo: function declarations ficam utilizáveis antes da linha, var vira undefined e let/const ficam na temporal dead zone. Cai em entrevista como pergunta de saída de código e explica erros de ReferenceError.",
    },
    materials: [
      { title: "Hoisting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting", kind: "docs" },
      { title: "The old var", url: "https://javascript.info/var", kind: "article" },
      { title: "let: temporal dead zone", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let", kind: "docs" },
    ],
  },
  "w5:closures": {
    description: {
      pt: "Uma closure é uma função que mantém acesso às variáveis do escopo onde foi criada, mesmo depois que esse escopo terminou. Está por trás de factories, memoização, módulos, debounce e dos hooks do React (e do bug de stale closure em useEffect), por isso é uma das perguntas mais comuns em entrevista.",
    },
    materials: [
      { title: "Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures", kind: "docs" },
      { title: "Variable scope, closure", url: "https://javascript.info/closure", kind: "article" },
      { title: "Learn Closures In 7 Minutes", url: "https://www.youtube.com/watch?v=3a0I8ICR1Vg", kind: "video" },
    ],
  },
  "w5:this": {
    description: {
      pt: "O valor de this é decidido pela forma como a função é chamada: método, chamada solta, new, call/apply/bind ou arrow function, que herda o this léxico. Perder o this ao passar um método como callback é um bug clássico, e prever o this de um trecho é pergunta frequente em entrevista.",
    },
    materials: [
      { title: "this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this", kind: "docs" },
      { title: "Object methods, this", url: "https://javascript.info/object-methods", kind: "article" },
      { title: "Function binding", url: "https://javascript.info/bind", kind: "article" },
    ],
  },
  "w5:prototypes": {
    description: {
      pt: "Todo objeto JavaScript tem um prototype, e a busca de propriedades sobe por essa prototype chain até null. É o mecanismo real de herança da linguagem, por baixo de class e dos métodos de Array e Object. Entender isso responde perguntas sobre herança, __proto__ vs prototype e Object.create.",
    },
    materials: [
      { title: "Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain", kind: "docs" },
      { title: "Prototypal inheritance", url: "https://javascript.info/prototype-inheritance", kind: "article" },
    ],
  },
  "w5:classes": {
    description: {
      pt: "Classes são sintaxe sobre prototypes, com constructor, métodos, herança via extends/super, campos estáticos e campos privados (#). Mesmo com React funcional, aparecem em SDKs, erros customizados e código legado, e em entrevista se espera saber o que elas compilam e onde diferem de funções construtoras.",
    },
    materials: [
      { title: "Using classes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes", kind: "docs" },
      { title: "Class basic syntax", url: "https://javascript.info/class", kind: "article" },
      { title: "Classes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes", kind: "docs" },
    ],
  },
  "w5:referencia-vs-valor": {
    description: {
      pt: "Primitivos são copiados por valor; objetos e arrays são acessados por referência, então duas variáveis podem apontar para o mesmo dado. Isso explica mutações acidentais, a diferença entre shallow e deep copy (spread vs structuredClone) e por que o React compara props e state por referência.",
    },
    materials: [
      { title: "Object references and copying", url: "https://javascript.info/object-copy", kind: "article" },
      { title: "structuredClone()", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone", kind: "docs" },
    ],
  },
  "w5:imutabilidade": {
    description: {
      pt: "Imutabilidade é criar novos objetos em vez de alterar os existentes, com spread, map, filter ou toSorted. No React é requisito: o re-render e a memoização dependem de uma nova referência para detectar mudança, e mutar state diretamente é uma das causas mais comuns de UI que não atualiza.",
    },
    materials: [
      { title: "Updating Objects in State", url: "https://react.dev/learn/updating-objects-in-state", kind: "docs" },
      { title: "Updating Arrays in State", url: "https://react.dev/learn/updating-arrays-in-state", kind: "docs" },
      { title: "Object.freeze()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze", kind: "docs" },
    ],
  },

  // Semana 6 — JavaScript assíncrono
  "w6:event-loop": {
    description: {
      pt: "O event loop é o mecanismo que permite ao JavaScript single-threaded lidar com I/O e timers: quando a call stack esvazia, ele roda as microtasks e depois a próxima task, intercalando com renderização. É a pergunta assíncrona mais clássica de entrevista e explica travamentos de UI.",
    },
    materials: [
      { title: "What the heck is the event loop anyway? | Philip Roberts | JSConf EU", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", kind: "video" },
      { title: "Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ...", url: "https://www.youtube.com/watch?v=cCOL7MC4Pl0", kind: "video" },
      { title: "Event loop: microtasks and macrotasks", url: "https://javascript.info/event-loop", kind: "article" },
    ],
  },
  "w6:call-stack": {
    description: {
      pt: "A call stack registra as funções em execução: cada chamada empilha um frame e cada retorno desempilha. Enquanto ela não esvazia, nada mais roda, nem eventos nem renderização. Ajuda a ler stack traces, entender stack overflow em recursão e por que código síncrono pesado congela a página.",
    },
    materials: [
      { title: "Call stack", url: "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack", kind: "docs" },
      { title: "JavaScript execution model", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model", kind: "docs" },
      { title: "What the heck is the event loop anyway? | Philip Roberts | JSConf EU", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", kind: "video" },
    ],
  },
  "w6:task-queue": {
    description: {
      pt: "A task queue (macrotasks) guarda callbacks de setTimeout, setInterval, eventos de UI e mensagens; o event loop executa uma task por volta. Saber disso explica por que setTimeout(fn, 0) não roda imediatamente e como quebrar trabalho longo em pedaços para manter a página responsiva.",
    },
    materials: [
      { title: "Tasks, microtasks, queues and schedules", url: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/", kind: "article" },
      { title: "JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue", url: "https://www.youtube.com/watch?v=eiC58R16hb8", kind: "video" },
      { title: "Event loop: microtasks and macrotasks", url: "https://javascript.info/event-loop", kind: "article" },
    ],
  },
  "w6:microtask-queue": {
    description: {
      pt: "A microtask queue recebe callbacks de Promise (then, await), queueMicrotask e MutationObserver, e é esvaziada por completo após cada task, antes da renderização. Por isso uma Promise resolve antes de um setTimeout 0, pergunta de ordem de execução muito comum em entrevista.",
    },
    materials: [
      { title: "Using microtasks in JavaScript with queueMicrotask()", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide", kind: "docs" },
      { title: "Microtasks", url: "https://javascript.info/microtask-queue", kind: "article" },
      { title: "Tasks, microtasks, queues and schedules", url: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/", kind: "article" },
    ],
  },
  "w6:callbacks": {
    description: {
      pt: "Callback é uma função passada como argumento para ser chamada depois, o primeiro modelo de código assíncrono em JavaScript. Ainda está em event listeners, métodos de array e APIs de Node, e entender seus problemas (callback hell, inversão de controle, erros perdidos) explica por que Promises surgiram.",
    },
    materials: [
      { title: "Introduction: callbacks", url: "https://javascript.info/callbacks", kind: "article" },
      { title: "Callback function", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function", kind: "docs" },
    ],
  },
  "w6:promises": {
    description: {
      pt: "Uma Promise representa um valor futuro com estados pending, fulfilled ou rejected, encadeável com then/catch/finally. Combinadores como Promise.all, allSettled, race e any resolvem paralelismo e timeouts; implementar Promise.all ou explicar o tratamento de rejeições é exercício frequente em entrevista.",
    },
    materials: [
      { title: "Using promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises", kind: "docs" },
      { title: "Promise", url: "https://javascript.info/promise-basics", kind: "article" },
      { title: "Promise API", url: "https://javascript.info/promise-api", kind: "article" },
    ],
  },
  "w6:async-await": {
    description: {
      pt: "async/await é sintaxe sobre Promises que deixa código assíncrono com cara de síncrono, com erros tratados via try/catch. O erro comum é serializar sem querer chamadas independentes com await em sequência, quando Promise.all as faria em paralelo, algo que impacta direto a latência em produção.",
    },
    materials: [
      { title: "async function", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", kind: "docs" },
      { title: "Async/await", url: "https://javascript.info/async-await", kind: "article" },
      { title: "The Async Await Episode I Promised", url: "https://www.youtube.com/watch?v=vn3tm0quoqE", kind: "video" },
    ],
  },
  "w6:fetch": {
    description: {
      pt: "fetch é a API nativa de requisições HTTP baseada em Promises, com Request, Response e Headers. Detalhe que cai em entrevista: ela só rejeita em falha de rede, então status 404 ou 500 precisam ser checados via response.ok. Também é a base do data fetching no Next.js e em server components.",
    },
    materials: [
      { title: "Using the Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", kind: "docs" },
      { title: "Fetch", url: "https://javascript.info/fetch", kind: "article" },
    ],
  },
  "w6:abortcontroller": {
    description: {
      pt: "AbortController cria um AbortSignal que cancela fetch, event listeners e outras operações assíncronas. Resolve race conditions em buscas com autocomplete, requisições pendentes após desmontar um componente (cleanup do useEffect) e timeouts com AbortSignal.timeout.",
    },
    materials: [
      { title: "AbortController", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", kind: "docs" },
      { title: "Fetch: Abort", url: "https://javascript.info/fetch-abort", kind: "article" },
      { title: "AbortSignal.timeout()", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static", kind: "docs" },
    ],
  },

  // Semana 7 — DOM e JavaScript moderno
  "w7:es-modules": {
    description: {
      pt: "ES Modules é o sistema de módulos nativo do JavaScript, com import/export estáticos, escopo próprio e carregamento assíncrono. A estrutura estática é o que permite tree shaking e code splitting com import() dinâmico, e a diferença para CommonJS (require) ainda causa erros de interop no tooling.",
    },
    materials: [
      { title: "JavaScript modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules", kind: "docs" },
      { title: "Modules, introduction", url: "https://javascript.info/modules-intro", kind: "article" },
    ],
  },
  "w7:destructuring": {
    description: {
      pt: "Destructuring extrai valores de objetos e arrays em variáveis, com renomeação, valores default e aninhamento. É onipresente em React, nas props de componentes e no retorno de useState, e saber como defaults se comportam com undefined e null evita bugs sutis.",
    },
    materials: [
      { title: "Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring", kind: "docs" },
      { title: "Destructuring assignment", url: "https://javascript.info/destructuring-assignment", kind: "article" },
    ],
  },
  "w7:spread-rest": {
    description: {
      pt: "O mesmo operador ... faz duas coisas: spread expande arrays e objetos (cópias, merge, argumentos) e rest agrupa o restante em parâmetros ou destructuring. É a ferramenta padrão para atualizações imutáveis de state, com a ressalva de que a cópia é shallow.",
    },
    materials: [
      { title: "Spread syntax (...)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax", kind: "docs" },
      { title: "Rest parameters and spread syntax", url: "https://javascript.info/rest-parameters-spread", kind: "article" },
      { title: "Rest parameters", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters", kind: "docs" },
    ],
  },
  "w7:metodos-de-array": {
    description: {
      pt: "map, filter, reduce, find, some, every, flatMap e as versões não mutáveis toSorted e toSpliced formam o vocabulário de transformação de dados no frontend. Em entrevista aparecem em exercícios práticos e na pergunta de quais métodos mutam o array original, como sort, splice e reverse.",
    },
    materials: [
      { title: "Array methods", url: "https://javascript.info/array-methods", kind: "article" },
      { title: "Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", kind: "docs" },
    ],
  },
  "w7:dom-api": {
    description: {
      pt: "O DOM é a árvore de objetos que representa o documento e a API para consultá-la e alterá-la: querySelector, createElement, classList, dataset. Frameworks abstraem isso, mas entrevistas de frontend pedem manipulação sem framework, e entender o custo de mexer no DOM explica o virtual DOM.",
    },
    materials: [
      { title: "DOM scripting introduction", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting", kind: "course" },
      { title: "Document", url: "https://javascript.info/document", kind: "article" },
      { title: "Document Object Model (DOM)", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", kind: "docs" },
    ],
  },
  "w7:events": {
    description: {
      pt: "Eventos são o modelo de interação do browser: addEventListener registra handlers que recebem um objeto Event com target, preventDefault e opções como once e passive. Esquecer de remover listeners vaza memória, e o sistema de eventos do React é construído em cima dessa API.",
    },
    materials: [
      { title: "Introduction to events", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events", kind: "docs" },
      { title: "Introduction to browser events", url: "https://javascript.info/introduction-browser-events", kind: "article" },
      { title: "EventTarget.addEventListener()", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener", kind: "docs" },
    ],
  },
  "w7:bubbling-vs-capturing": {
    description: {
      pt: "Um evento percorre três fases: capturing, descendo da raiz ao alvo, target, e bubbling, subindo de volta. Por padrão os listeners rodam no bubbling; capture: true inverte isso. Explicar a diferença entre target e currentTarget e o efeito de stopPropagation é pergunta clássica de entrevista.",
    },
    materials: [
      { title: "Bubbling and capturing", url: "https://javascript.info/bubbling-and-capturing", kind: "article" },
      { title: "Event bubbling", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling", kind: "docs" },
    ],
  },
  "w7:event-delegation": {
    description: {
      pt: "Event delegation é registrar um único listener num ancestral e identificar o elemento de origem via event.target e closest, aproveitando o bubbling. Reduz listeners em listas grandes e cobre elementos adicionados dinamicamente; o próprio React delega eventos na raiz da aplicação.",
    },
    materials: [
      { title: "Event delegation", url: "https://javascript.info/event-delegation", kind: "article" },
      { title: "Event bubbling", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling", kind: "docs" },
    ],
  },
  "w7:debounce-throttle": {
    description: {
      pt: "Debounce adia a execução até o evento parar de disparar por um intervalo; throttle limita a no máximo uma execução por intervalo. São usados em busca com autocomplete, scroll e resize para poupar requisições e renderizações, e implementar um debounce do zero é exercício recorrente de entrevista.",
    },
    materials: [
      { title: "Debouncing and Throttling Explained Through Examples", url: "https://css-tricks.com/debouncing-throttling-explained-examples/", kind: "article" },
      { title: "Learn Debounce And Throttle In 16 Minutes", url: "https://www.youtube.com/watch?v=cjIswDCKgu0", kind: "video" },
      { title: "Debounce", url: "https://developer.mozilla.org/en-US/docs/Glossary/Debounce", kind: "docs" },
    ],
  },

  // Semana 8 — TypeScript
  "w8:tipos-basicos": {
    description: {
      pt: "TypeScript adiciona anotações de tipo estáticas ao JavaScript: string, number, boolean, arrays, tuplas, objetos, funções, literal types, null e undefined com strictNullChecks. Os tipos somem no build, então o ganho é pegar erros no editor e no CI, hoje padrão em vagas de frontend.",
    },
    materials: [
      { title: "Everyday Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", kind: "docs" },
      { title: "The Basics", url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html", kind: "docs" },
      { title: "TypeScript in 100 Seconds", url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA", kind: "video" },
    ],
  },
  "w8:interfaces-vs-types": {
    description: {
      pt: "interface e type alias descrevem formatos de objeto quase da mesma forma, mas interface aceita declaration merging e extends, enquanto type cobre unions, tuplas e mapped types. A pergunta de quando usar cada um é comum em entrevista; o que importa é justificar e manter consistência no time.",
    },
    materials: [
      { title: "Differences Between Type Aliases and Interfaces", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces", kind: "docs" },
      { title: "Type vs Interface: Which Should You Use?", url: "https://www.totaltypescript.com/type-vs-interface-which-should-you-use", kind: "article" },
    ],
  },
  "w8:union-intersection": {
    description: {
      pt: "Union (A | B) representa um valor que pode ser de um tipo ou de outro; intersection (A & B) combina tipos num só que tem tudo. Unions modelam estados e variantes de props, intersections compõem tipos, e entender que numa union só se acessa o que é comum leva direto a narrowing.",
    },
    materials: [
      { title: "Union Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types", kind: "docs" },
      { title: "Intersection Types", url: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types", kind: "docs" },
    ],
  },
  "w8:narrowing": {
    description: {
      pt: "Narrowing é como o TypeScript refina um tipo amplo dentro de um bloco a partir de checagens em runtime: typeof, instanceof, in, igualdade, truthiness e type predicates (x is T). É o que torna unions utilizáveis na prática e evita casts com as espalhados pelo código.",
    },
    materials: [
      { title: "Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", kind: "docs" },
    ],
  },
  "w8:generics": {
    description: {
      pt: "Generics parametrizam tipos para que funções, componentes e hooks funcionem com vários tipos sem perder informação, como useState<T> ou um fetcher tipado. Constraints (extends) e defaults completam o recurso; escrever uma função genérica simples é pergunta frequente em entrevista de TypeScript.",
    },
    materials: [
      { title: "Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html", kind: "docs" },
      { title: "Beginner's TypeScript", url: "https://www.totaltypescript.com/tutorials/beginners-typescript", kind: "course" },
    ],
  },
  "w8:utility-types": {
    description: {
      pt: "Utility types são transformações prontas de tipos: Partial, Required, Pick, Omit, Record, ReturnType, Awaited, NonNullable. Evitam duplicar definições ao derivar tipos de outros, como props de formulário a partir de um modelo, e por baixo são mapped e conditional types.",
    },
    materials: [
      { title: "Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html", kind: "docs" },
      { title: "Mapped Types", url: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html", kind: "docs" },
    ],
  },
  "w8:type-inference": {
    description: {
      pt: "O TypeScript infere tipos de inicializações, retornos e contexto, como no parâmetro de um callback de map. Anotar só onde agrega (fronteiras de API, parâmetros) deixa o código mais limpo, e recursos como as const e satisfies controlam o quão estreita a inferência fica.",
    },
    materials: [
      { title: "Type Inference", url: "https://www.typescriptlang.org/docs/handbook/type-inference.html", kind: "docs" },
      { title: "The satisfies operator", url: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator", kind: "docs" },
    ],
  },
  "w8:discriminated-unions": {
    description: {
      pt: "Discriminated unions são unions de objetos que compartilham um campo literal, como status: 'loading' | 'success' | 'error', usado para narrowing. Tornam estados impossíveis irrepresentáveis e, com never no default do switch, o compilador acusa casos não tratados. É padrão para state de UI e reducers.",
    },
    materials: [
      { title: "Discriminated unions", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions", kind: "docs" },
      { title: "TypeScript Discriminated Unions for Frontend Developers", url: "https://www.totaltypescript.com/discriminated-unions-are-a-devs-best-friend", kind: "article" },
      { title: "Exhaustiveness checking", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking", kind: "docs" },
    ],
  },
  "w8:unknown-vs-any": {
    description: {
      pt: "any desliga a checagem de tipos e se espalha silenciosamente pelo código; unknown aceita qualquer valor mas exige narrowing antes do uso. Para dados externos, como respostas de API, JSON.parse ou erros em catch, unknown é a escolha segura, e saber justificar isso é pergunta comum de entrevista.",
    },
    materials: [
      { title: "New unknown top type", url: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type", kind: "docs" },
      { title: "unknown", url: "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown", kind: "docs" },
      { title: "any", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any", kind: "docs" },
    ],
  },

  // Semana 9 — Tooling
  "w9:npm-pnpm": {
    description: {
      pt: "npm e pnpm instalam e resolvem dependências a partir do package.json e rodam scripts. O pnpm usa um store global com hard links e um node_modules estrito, o que economiza disco e impede importar pacotes não declarados (phantom dependencies). Saber a diferença ajuda a depurar instalações e CI.",
    },
    materials: [
      { title: "Motivation", url: "https://pnpm.io/motivation", kind: "docs" },
      { title: "Package management basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management", kind: "docs" },
      { title: "About npm", url: "https://docs.npmjs.com/about-npm/", kind: "docs" },
    ],
  },
  "w9:lockfiles": {
    description: {
      pt: "Lockfiles (package-lock.json, pnpm-lock.yaml) registram a versão exata de cada dependência, inclusive transitivas, para que todo ambiente instale a mesma árvore. Sem eles, ranges de semver como ^1.2.0 deixam o build mudar sozinho; em CI se usa install com frozen lockfile.",
    },
    materials: [
      { title: "package-lock.json", url: "https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json/", kind: "docs" },
      { title: "pnpm install", url: "https://pnpm.io/cli/install", kind: "docs" },
      { title: "About semantic versioning", url: "https://docs.npmjs.com/about-semantic-versioning/", kind: "docs" },
    ],
  },
  "w9:bundlers": {
    description: {
      pt: "Bundlers como webpack, Rollup, esbuild e Turbopack partem de um entry point, montam o grafo de módulos e geram os arquivos que o browser carrega, com minificação, code splitting e tratamento de assets. Entender isso explica o tamanho do bundle e como diagnosticar JavaScript demais na página.",
    },
    materials: [
      { title: "Client-side tooling overview", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Overview", kind: "article" },
      { title: "Concepts", url: "https://webpack.js.org/concepts/", kind: "docs" },
      { title: "Why Vite", url: "https://vite.dev/guide/why", kind: "docs" },
    ],
  },
  "w9:vite": {
    description: {
      pt: "Vite é um build tool que serve ES Modules nativos em dev, com HMR rápido sem empacotar tudo, e gera o build de produção com Rollup. É o padrão para apps React fora do Next.js e base do Vitest, então vale saber por que ele é mais rápido que setups com webpack.",
    },
    materials: [
      { title: "Why Vite", url: "https://vite.dev/guide/why", kind: "docs" },
      { title: "Getting Started", url: "https://vite.dev/guide/", kind: "docs" },
      { title: "Vite in 100 Seconds", url: "https://www.youtube.com/watch?v=KCrXgy8qtjM", kind: "video" },
    ],
  },
  "w9:transpilers-swc-babel": {
    description: {
      pt: "Transpilers convertem código moderno, JSX e TypeScript em JavaScript que o ambiente alvo executa. Babel é extensível via plugins em JavaScript; SWC faz o mesmo em Rust, muito mais rápido, e é o compilador do Next.js. Nenhum dos dois checa tipos, por isso o tsc continua rodando no CI.",
    },
    materials: [
      { title: "What is Babel?", url: "https://babeljs.io/docs/", kind: "docs" },
      { title: "Next.js Compiler", url: "https://nextjs.org/docs/architecture/nextjs-compiler", kind: "docs" },
      { title: "SWC: Rust-based platform for the Web", url: "https://swc.rs/", kind: "docs" },
    ],
  },
  "w9:tree-shaking": {
    description: {
      pt: "Tree shaking é a eliminação de exports não usados no build, possível graças aos imports estáticos de ES Modules. Falha com CommonJS, side effects ou imports de barrel files, e por isso o campo sideEffects no package.json importa. Impacta direto o tamanho do bundle e o tempo de carregamento.",
    },
    materials: [
      { title: "Reduce JavaScript payloads with tree shaking", url: "https://web.dev/articles/reduce-javascript-payloads-with-tree-shaking", kind: "article" },
      { title: "Tree Shaking", url: "https://webpack.js.org/guides/tree-shaking/", kind: "docs" },
      { title: "Tree shaking", url: "https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking", kind: "docs" },
    ],
  },
  "w9:eslint": {
    description: {
      pt: "ESLint analisa o código estaticamente e aponta bugs e padrões problemáticos com regras configuráveis, no formato flat config (eslint.config.js). No React, regras como rules-of-hooks e exhaustive-deps pegam erros que o TypeScript não vê, e rodar lint no CI mantém o padrão do time.",
    },
    materials: [
      { title: "Getting Started with ESLint", url: "https://eslint.org/docs/latest/use/getting-started", kind: "docs" },
      { title: "Configuration Files", url: "https://eslint.org/docs/latest/use/configure/configuration-files", kind: "docs" },
      { title: "Rules of Hooks", url: "https://react.dev/reference/rules/rules-of-hooks", kind: "docs" },
    ],
  },
  "w9:tsconfig": {
    description: {
      pt: "O tsconfig.json define quais arquivos o TypeScript compila e com quais regras: strict, target, module, moduleResolution, paths, jsx. Configurações erradas geram erros de resolução de módulos ou deixam bugs passarem, e em monorepos ele é compartilhado via extends.",
    },
    materials: [
      { title: "The TSConfig Cheat Sheet", url: "https://www.totaltypescript.com/tsconfig-cheat-sheet", kind: "article" },
      { title: "What is a tsconfig.json", url: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html", kind: "docs" },
      { title: "TSConfig Reference", url: "https://www.typescriptlang.org/tsconfig/", kind: "docs" },
    ],
  },
  "w9:monorepo": {
    description: {
      pt: "Um monorepo reúne vários apps e pacotes num só repositório, com workspaces (pnpm, npm) para linkar dependências internas e ferramentas como Turborepo ou Nx para cache e orquestração de tarefas. Facilita compartilhar UI e config entre apps, ao custo de mais cuidado com builds e limites entre pacotes.",
    },
    materials: [
      { title: "Monorepo Explained", url: "https://monorepo.tools/", kind: "article" },
      { title: "Workspace", url: "https://pnpm.io/workspaces", kind: "docs" },
      { title: "Monorepos - How the Pros Scale Huge Software Projects // Turborepo vs Nx", url: "https://www.youtube.com/watch?v=9iU_IE6vnJ8", kind: "video" },
    ],
  },
}
