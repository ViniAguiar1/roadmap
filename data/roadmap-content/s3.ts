import type { TopicContent } from "./types"

export const s3: Record<string, TopicContent> = {
  // Semana 10 — Fundamentos de React
  "w10:jsx": {
    description: {
      pt: "JSX é uma extensão de sintaxe que compila para chamadas de função (jsx() ou React.createElement) e produz objetos que descrevem a UI. Entender que JSX é só JavaScript explica por que expressões vão entre chaves, por que className e por que não dá para usar if direto no markup.",
    },
    materials: [
      { title: "Writing Markup with JSX", url: "https://react.dev/learn/writing-markup-with-jsx", kind: "docs" },
      { title: "JavaScript in JSX with Curly Braces", url: "https://react.dev/learn/javascript-in-jsx-with-curly-braces", kind: "docs" },
      { title: "Why Do React Elements Have a $$typeof Property?", url: "https://overreacted.io/why-do-react-elements-have-typeof-property/", kind: "article" },
    ],
  },
  "w10:componentes": {
    description: {
      pt: "Componentes são funções que recebem props e retornam elementos React, a unidade básica de reuso e composição da UI. Em entrevista cobra-se saber quebrar uma tela em componentes, onde o estado deve morar e por que componentes precisam ser puros durante o render.",
    },
    materials: [
      { title: "Your First Component", url: "https://react.dev/learn/your-first-component", kind: "docs" },
      { title: "Thinking in React", url: "https://react.dev/learn/thinking-in-react", kind: "docs" },
      { title: "React in 100 Seconds", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", kind: "video" },
    ],
  },
  "w10:props": {
    description: {
      pt: "Props são os argumentos de um componente: dados que fluem de pai para filho, somente leitura, incluindo children e funções de callback. O fluxo unidirecional de dados é a base para raciocinar sobre re-renders, imutabilidade e por que um filho nunca deve mutar o que recebeu.",
    },
    materials: [
      { title: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component", kind: "docs" },
      { title: "Why React Re-Renders", url: "https://www.joshwcomeau.com/react/why-react-re-renders/", kind: "article" },
    ],
  },
  "w10:state": {
    description: {
      pt: "State é a memória de um componente entre renders: atualizar o estado agenda um novo render, e cada render enxerga um snapshot fixo dos valores. Entender state como snapshot resolve perguntas clássicas de entrevista sobre por que o valor não mudou logo após o setState.",
    },
    materials: [
      { title: "State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory", kind: "docs" },
      { title: "State as a Snapshot", url: "https://react.dev/learn/state-as-a-snapshot", kind: "docs" },
      { title: "Why React Re-Renders", url: "https://www.joshwcomeau.com/react/why-react-re-renders/", kind: "article" },
    ],
  },
  "w10:renderizacao-condicional": {
    description: {
      pt: "Renderização condicional decide o que mostrar com if, ternário ou &&, retornando null quando nada deve aparecer. A pegadinha frequente é o && com números (0 renderizado na tela) e o efeito de trocar o tipo de elemento na mesma posição, que reseta o estado.",
    },
    materials: [
      { title: "Conditional Rendering", url: "https://react.dev/learn/conditional-rendering", kind: "docs" },
      { title: "Common Beginner Mistakes with React", url: "https://www.joshwcomeau.com/react/common-beginner-mistakes/", kind: "article" },
    ],
  },
  "w10:listas-e-keys": {
    description: {
      pt: "Listas são renderizadas com map, e cada item precisa de uma key estável que identifique o elemento entre renders. Keys erradas, como o índice em listas reordenáveis, causam estado trocado entre itens e trabalho extra na reconciliation, tema recorrente em entrevista.",
    },
    materials: [
      { title: "Rendering Lists", url: "https://react.dev/learn/rendering-lists", kind: "docs" },
      { title: "Preserving and Resetting State", url: "https://react.dev/learn/preserving-and-resetting-state", kind: "docs" },
      { title: "Common Beginner Mistakes with React", url: "https://www.joshwcomeau.com/react/common-beginner-mistakes/", kind: "article" },
    ],
  },
  "w10:eventos": {
    description: {
      pt: "Eventos em React são handlers passados como props (onClick, onChange) que recebem um SyntheticEvent e usam delegação na raiz da aplicação. Vale dominar propagação, stopPropagation, preventDefault e a diferença entre passar a função e chamá-la no JSX.",
    },
    materials: [
      { title: "Responding to Events", url: "https://react.dev/learn/responding-to-events", kind: "docs" },
    ],
  },
  "w10:composicao": {
    description: {
      pt: "Composição é montar componentes passando elementos via children ou props em vez de herança ou configuração excessiva. É a resposta idiomática do React para reuso e também uma técnica de performance: mover estado para baixo ou passar children evita re-renders desnecessários.",
    },
    materials: [
      { title: "Passing Props to a Component", url: "https://react.dev/learn/passing-props-to-a-component", kind: "docs" },
      { title: "Before You memo()", url: "https://overreacted.io/before-you-memo/", kind: "article" },
      { title: "Inversion of Control", url: "https://kentcdodds.com/blog/inversion-of-control", kind: "article" },
    ],
  },
  "w10:controlled-vs-uncontrolled": {
    description: {
      pt: "Um input controlled tem o valor guardado no state do React e atualizado via onChange; um uncontrolled deixa o DOM guardar o valor e é lido por ref ou FormData. A escolha afeta validação, performance de formulários grandes e o aviso clássico de trocar de uncontrolled para controlled.",
    },
    materials: [
      { title: "<input>", url: "https://react.dev/reference/react-dom/components/input", kind: "docs" },
      { title: "Data binding in React", url: "https://www.joshwcomeau.com/react/data-binding/", kind: "article" },
      { title: "Sharing State Between Components", url: "https://react.dev/learn/sharing-state-between-components", kind: "docs" },
    ],
  },

  // Semana 11 — Hooks
  "w11:usestate": {
    description: {
      pt: "useState declara uma variável de estado e devolve o valor atual e um setter que agenda novo render. Em entrevista caem updater functions (setCount(c => c + 1)), inicialização lazy, imutabilidade de objetos e arrays e por que mutar o estado não dispara render.",
    },
    materials: [
      { title: "useState", url: "https://react.dev/reference/react/useState", kind: "docs" },
      { title: "Queueing a Series of State Updates", url: "https://react.dev/learn/queueing-a-series-of-state-updates", kind: "docs" },
      { title: "10 React Hooks Explained", url: "https://www.youtube.com/watch?v=TNhaISOUy6Q", kind: "video" },
    ],
  },
  "w11:useeffect": {
    description: {
      pt: "useEffect sincroniza o componente com sistemas externos (rede, subscriptions, DOM) depois do commit, com cleanup e array de dependências. É o hook mais mal usado: muita lógica derivada não precisa de effect, e dependências erradas geram loops, stale closures e race conditions.",
    },
    materials: [
      { title: "Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects", kind: "docs" },
      { title: "You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect", kind: "docs" },
      { title: "A Complete Guide to useEffect", url: "https://overreacted.io/a-complete-guide-to-useeffect/", kind: "article" },
    ],
  },
  "w11:useref": {
    description: {
      pt: "useRef guarda um valor mutável que persiste entre renders sem provocar re-render, e é o meio de acessar nós do DOM. Diferenciar ref de state, saber quando ler ref.current (fora do render) e usá-lo para timers, foco e medições é pergunta frequente.",
    },
    materials: [
      { title: "Referencing Values with Refs", url: "https://react.dev/learn/referencing-values-with-refs", kind: "docs" },
      { title: "useRef", url: "https://react.dev/reference/react/useRef", kind: "docs" },
    ],
  },
  "w11:usememo": {
    description: {
      pt: "useMemo memoriza o resultado de um cálculo entre renders enquanto as dependências não mudam. Importa para cálculos caros e para manter referências estáveis passadas a componentes memoizados, mas usado em todo lugar só adiciona custo; entrevistadores querem ouvir quando não usar.",
    },
    materials: [
      { title: "useMemo", url: "https://react.dev/reference/react/useMemo", kind: "docs" },
      { title: "Understanding useMemo and useCallback", url: "https://www.joshwcomeau.com/react/usememo-and-usecallback/", kind: "article" },
      { title: "When to useMemo and useCallback", url: "https://kentcdodds.com/blog/usememo-and-usecallback", kind: "article" },
    ],
  },
  "w11:usecallback": {
    description: {
      pt: "useCallback memoriza a referência de uma função entre renders, equivalente a useMemo retornando uma função. Só traz ganho quando a função vai para um filho com memo ou para dependências de outro hook; caso contrário é ruído, ponto clássico de discussão sobre otimização prematura.",
    },
    materials: [
      { title: "useCallback", url: "https://react.dev/reference/react/useCallback", kind: "docs" },
      { title: "When to useMemo and useCallback", url: "https://kentcdodds.com/blog/usememo-and-usecallback", kind: "article" },
      { title: "Understanding useMemo and useCallback", url: "https://www.joshwcomeau.com/react/usememo-and-usecallback/", kind: "article" },
    ],
  },
  "w11:usecontext": {
    description: {
      pt: "useContext lê o valor do Provider mais próximo acima na árvore, permitindo passar dados sem prop drilling. Todo consumidor re-renderiza quando o value muda, então separar contextos e estabilizar o value com useMemo é essencial para não degradar performance.",
    },
    materials: [
      { title: "useContext", url: "https://react.dev/reference/react/useContext", kind: "docs" },
      { title: "How to use React Context effectively", url: "https://kentcdodds.com/blog/how-to-use-react-context-effectively", kind: "article" },
    ],
  },
  "w11:usereducer": {
    description: {
      pt: "useReducer centraliza transições de estado numa função pura (state, action) => newState, no mesmo modelo do Redux. Vale para estados com várias partes interdependentes e facilita testar a lógica isolada; saber quando preferi-lo ao useState é pergunta comum.",
    },
    materials: [
      { title: "Extracting State Logic into a Reducer", url: "https://react.dev/learn/extracting-state-logic-into-a-reducer", kind: "docs" },
      { title: "useReducer", url: "https://react.dev/reference/react/useReducer", kind: "docs" },
    ],
  },
  "w11:uselayouteffect": {
    description: {
      pt: "useLayoutEffect roda de forma síncrona depois das mutações no DOM e antes do browser pintar, ao contrário do useEffect. Serve para medir layout e reposicionar elementos sem flicker, mas bloqueia a pintura e não roda no servidor, então deve ser exceção.",
    },
    materials: [
      { title: "useLayoutEffect", url: "https://react.dev/reference/react/useLayoutEffect", kind: "docs" },
      { title: "useEffect vs useLayoutEffect", url: "https://kentcdodds.com/blog/useeffect-vs-uselayouteffect", kind: "article" },
    ],
  },
  "w11:custom-hooks": {
    description: {
      pt: "Custom hooks são funções que começam com use e combinam outros hooks para reaproveitar lógica com estado, não o estado em si. É o principal mecanismo de reuso no React moderno, substituindo HOCs e render props, e aparece em exercícios como useDebounce ou useFetch.",
    },
    materials: [
      { title: "Reusing Logic with Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks", kind: "docs" },
      { title: "90% Cleaner React With Hooks", url: "https://www.youtube.com/watch?v=wXLf18DsV-I", kind: "video" },
      { title: "Hooks Pattern", url: "https://www.patterns.dev/react/hooks-pattern/", kind: "article" },
    ],
  },
  "w11:regras-dos-hooks": {
    description: {
      pt: "Hooks só podem ser chamados no topo de componentes ou de outros hooks, nunca dentro de condições, loops ou callbacks. A regra existe porque o React associa o estado à ordem das chamadas; explicar esse porquê é o que separa quem decorou de quem entendeu.",
    },
    materials: [
      { title: "Rules of Hooks", url: "https://react.dev/reference/rules/rules-of-hooks", kind: "docs" },
      { title: "Why Do React Hooks Rely on Call Order?", url: "https://overreacted.io/why-do-hooks-rely-on-call-order/", kind: "article" },
    ],
  },

  // Semana 12 — React por baixo
  "w12:virtual-dom": {
    description: {
      pt: "Virtual DOM é a representação em objetos JavaScript da UI que o React compara entre renders para calcular o mínimo de mudanças no DOM real. Em entrevista é importante desfazer o mito de que é mais rápido que o DOM: o ganho é o modelo declarativo com custo aceitável.",
    },
    materials: [
      { title: "Virtual DOM and Internals", url: "https://legacy.reactjs.org/docs/faq-internals.html", kind: "docs" },
      { title: "React: Rethinking best practices", url: "https://www.youtube.com/watch?v=x7cQ3mrcKaY", kind: "video" },
      { title: "React as a UI Runtime", url: "https://overreacted.io/react-as-a-ui-runtime/", kind: "article" },
    ],
  },
  "w12:reconciliation": {
    description: {
      pt: "Reconciliation é o algoritmo de diff do React: elementos de tipos diferentes geram subárvores novas, e keys identificam filhos entre renders, mantendo a comparação em O(n). Explica por que o estado é preservado ou resetado conforme a posição e o tipo na árvore.",
    },
    materials: [
      { title: "Reconciliation", url: "https://legacy.reactjs.org/docs/reconciliation.html", kind: "docs" },
      { title: "Preserving and Resetting State", url: "https://react.dev/learn/preserving-and-resetting-state", kind: "docs" },
    ],
  },
  "w12:fiber": {
    description: {
      pt: "Fiber é a arquitetura interna do React desde a versão 16: cada componente vira uma unidade de trabalho que pode ser pausada, priorizada e retomada. É o que torna possível concurrent rendering, Suspense e transitions, e aparece em entrevistas sênior sobre internals.",
    },
    materials: [
      { title: "A Cartoon Intro to Fiber", url: "https://www.youtube.com/watch?v=ZCuYPiUIONs", kind: "video" },
      { title: "React Fiber Architecture", url: "https://github.com/acdlite/react-fiber-architecture", kind: "article" },
    ],
  },
  "w12:render-vs-commit": {
    description: {
      pt: "Atualizar a tela no React tem fases: trigger, render (chamar componentes e calcular a nova árvore, que deve ser puro) e commit (aplicar mudanças no DOM e rodar effects). Separar as fases explica por que render pode rodar várias vezes e por que side effects ficam fora dele.",
    },
    materials: [
      { title: "Render and Commit", url: "https://react.dev/learn/render-and-commit", kind: "docs" },
      { title: "React as a UI Runtime", url: "https://overreacted.io/react-as-a-ui-runtime/", kind: "article" },
    ],
  },
  "w12:batching": {
    description: {
      pt: "Batching agrupa várias atualizações de estado num único re-render. Desde o React 18 é automático também em promises, timeouts e eventos nativos; entender a fila de updates explica por que três setCount(count + 1) seguidos incrementam só uma vez.",
    },
    materials: [
      { title: "Queueing a Series of State Updates", url: "https://react.dev/learn/queueing-a-series-of-state-updates", kind: "docs" },
      { title: "Automatic batching for fewer renders in React 18", url: "https://github.com/reactwg/react-18/discussions/21", kind: "article" },
    ],
  },
  "w12:strictmode": {
    description: {
      pt: "StrictMode ativa checagens só em desenvolvimento: renderiza componentes duas vezes e monta, desmonta e remonta effects para expor impurezas e cleanups faltando. Explica o clássico effect que roda duas vezes em dev, que é intencional e não bug.",
    },
    materials: [
      { title: "<StrictMode>", url: "https://react.dev/reference/react/StrictMode", kind: "docs" },
      { title: "Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects", kind: "docs" },
    ],
  },
  "w12:concurrent-rendering": {
    description: {
      pt: "Concurrent rendering permite ao React preparar várias versões da UI e interromper um render em andamento para atender uma atualização mais urgente. É a base de transitions, Suspense e streaming SSR, e muda o modelo mental de render como operação síncrona e indivisível.",
    },
    materials: [
      { title: "React v18.0", url: "https://react.dev/blog/2022/03/29/react-v18", kind: "article" },
      { title: "Beyond React 16", url: "https://www.youtube.com/watch?v=nLF0n9SACd4", kind: "video" },
    ],
  },
  "w12:usetransition": {
    description: {
      pt: "useTransition marca uma atualização de estado como não urgente, deixando a UI responsiva enquanto o render pesado acontece em segundo plano, com isPending para feedback. Resolve travamentos em filtros e navegação sem debounce manual, e no React 19 aceita funções async (Actions).",
    },
    materials: [
      { title: "useTransition", url: "https://react.dev/reference/react/useTransition", kind: "docs" },
      { title: "React v18.0", url: "https://react.dev/blog/2022/03/29/react-v18", kind: "article" },
    ],
  },
  "w12:usedeferredvalue": {
    description: {
      pt: "useDeferredValue devolve uma versão atrasada de um valor, que o React atualiza com baixa prioridade enquanto o valor urgente segue fluido. É útil quando você não controla o setState, como num input que alimenta uma lista pesada, e se compara frequentemente a debounce.",
    },
    materials: [
      { title: "useDeferredValue", url: "https://react.dev/reference/react/useDeferredValue", kind: "docs" },
    ],
  },
  "w12:suspense": {
    description: {
      pt: "Suspense mostra um fallback enquanto filhos aguardam código (lazy) ou dados, de forma declarativa. Com Server Components e streaming SSR, define os limites de carregamento da página; entender onde posicionar boundaries afeta diretamente a experiência e os Core Web Vitals.",
    },
    materials: [
      { title: "<Suspense>", url: "https://react.dev/reference/react/Suspense", kind: "docs" },
      { title: "React v18.0", url: "https://react.dev/blog/2022/03/29/react-v18", kind: "article" },
    ],
  },
  "w12:react-compiler": {
    description: {
      pt: "O React Compiler é um plugin de build que analisa componentes e hooks e insere memoização automaticamente, reduzindo a necessidade de useMemo, useCallback e memo. Ele depende de código que segue as regras do React, então pureza e regras dos hooks deixam de ser só boas práticas.",
    },
    materials: [
      { title: "Introduction", url: "https://react.dev/learn/react-compiler/introduction", kind: "docs" },
      { title: "React Compiler v1.0", url: "https://react.dev/blog/2025/10/07/react-compiler-1", kind: "article" },
    ],
  },

  // Semana 13 — Estado e dados
  "w13:lifting-state-up": {
    description: {
      pt: "Lifting state up é mover o estado para o ancestral comum mais próximo dos componentes que precisam dele, passando valor e callbacks via props. É a primeira ferramenta para compartilhar estado e base da ideia de single source of truth antes de recorrer a context ou stores.",
    },
    materials: [
      { title: "Sharing State Between Components", url: "https://react.dev/learn/sharing-state-between-components", kind: "docs" },
      { title: "Thinking in React", url: "https://react.dev/learn/thinking-in-react", kind: "docs" },
    ],
  },
  "w13:prop-drilling": {
    description: {
      pt: "Prop drilling é passar props por várias camadas que não as usam só para chegar a um componente profundo. Nem sempre é problema, pois deixa o fluxo explícito; em entrevista espera-se conhecer as alternativas (composição, context, store) e os trade-offs de cada uma.",
    },
    materials: [
      { title: "Prop Drilling", url: "https://kentcdodds.com/blog/prop-drilling", kind: "article" },
      { title: "Passing Data Deeply with Context", url: "https://react.dev/learn/passing-data-deeply-with-context", kind: "docs" },
    ],
  },
  "w13:context": {
    description: {
      pt: "Context é o mecanismo nativo para disponibilizar dados a uma subárvore sem passar props manualmente, ideal para tema, locale e usuário autenticado. Não é gerenciador de estado: combinado com useReducer resolve muito, mas atualizações frequentes re-renderizam todos os consumidores.",
    },
    materials: [
      { title: "Passing Data Deeply with Context", url: "https://react.dev/learn/passing-data-deeply-with-context", kind: "docs" },
      { title: "Scaling Up with Reducer and Context", url: "https://react.dev/learn/scaling-up-with-reducer-and-context", kind: "docs" },
      { title: "Application State Management with React", url: "https://kentcdodds.com/blog/application-state-management-with-react", kind: "article" },
    ],
  },
  "w13:zustand-redux": {
    description: {
      pt: "Zustand e Redux (Toolkit) são stores externas para estado global de cliente, com assinatura por seletores que re-renderiza só quem lê a fatia alterada. Em entrevista importa justificar quando uma store faz sentido em vez de context e por que dados de servidor não deveriam morar nela.",
    },
    materials: [
      { title: "Introduction", url: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction", kind: "docs" },
      { title: "Redux Essentials, Part 1: Redux Overview and Concepts", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts", kind: "docs" },
      { title: "Getting Started with Redux Toolkit", url: "https://redux.js.org/toolkit/introduction/getting-started", kind: "docs" },
    ],
  },
  "w13:server-state": {
    description: {
      pt: "Server state é o dado que vive no backend e o cliente só mantém como cache: pode ficar desatualizado, ser compartilhado e precisa de refetch, deduplicação e invalidação. Separá-lo do estado de UI é uma das decisões de arquitetura mais cobradas em entrevistas de frontend.",
    },
    materials: [
      { title: "React Query as a State Manager", url: "https://tkdodo.eu/blog/react-query-as-a-state-manager", kind: "article" },
      { title: "Overview", url: "https://tanstack.com/query/latest/docs/framework/react/overview", kind: "docs" },
    ],
  },
  "w13:tanstack-query": {
    description: {
      pt: "TanStack Query gerencia server state com cache por query key, stale-while-revalidate, retries, deduplicação e mutations com invalidação. Substitui dezenas de useEffect com fetch manual e resolve race conditions e loading states de forma consistente em produção.",
    },
    materials: [
      { title: "Overview", url: "https://tanstack.com/query/latest/docs/framework/react/overview", kind: "docs" },
      { title: "Practical React Query", url: "https://tkdodo.eu/blog/practical-react-query", kind: "article" },
    ],
  },
  "w13:optimistic-updates": {
    description: {
      pt: "Optimistic updates aplicam na UI o resultado esperado de uma mutation antes da resposta do servidor e fazem rollback se ela falhar. Deixam a interface instantânea, mas exigem cuidado com concorrência e consistência; o React 19 traz useOptimistic para o mesmo padrão.",
    },
    materials: [
      { title: "Optimistic Updates", url: "https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates", kind: "docs" },
      { title: "useOptimistic", url: "https://react.dev/reference/react/useOptimistic", kind: "docs" },
      { title: "Concurrent Optimistic Updates in React Query", url: "https://tkdodo.eu/blog/concurrent-optimistic-updates-in-react-query", kind: "article" },
    ],
  },
  "w13:react-hook-form": {
    description: {
      pt: "React Hook Form gerencia formulários com inputs uncontrolled registrados por ref, o que reduz re-renders por tecla em formulários grandes. Oferece validação, estado de erros e integração com schemas; é a escolha padrão do mercado e ilustra bem o trade-off controlled vs uncontrolled.",
    },
    materials: [
      { title: "Get Started", url: "https://react-hook-form.com/get-started", kind: "docs" },
      { title: "useForm", url: "https://react-hook-form.com/docs/useform", kind: "docs" },
    ],
  },
  "w13:validacao-com-zod": {
    description: {
      pt: "Zod define schemas de validação em runtime dos quais o TypeScript infere os tipos, mantendo uma única fonte de verdade. Validar formulários, respostas de API e variáveis de ambiente com o mesmo schema evita divergência entre tipo e dado real, e integra com React Hook Form via resolvers.",
    },
    materials: [
      { title: "Intro", url: "https://zod.dev/", kind: "docs" },
      { title: "Basic usage", url: "https://zod.dev/basics", kind: "docs" },
      { title: "react-hook-form/resolvers", url: "https://github.com/react-hook-form/resolvers", kind: "docs" },
    ],
  },

  // Semana 14 — Padrões de componentes
  "w14:compound-components": {
    description: {
      pt: "Compound components são um conjunto de componentes que compartilham estado implícito via context, como Tabs, Tabs.List e Tabs.Panel. Dão API flexível e declarativa sem explosão de props, e são a base de bibliotecas como Radix; implementar um é exercício comum em entrevista.",
    },
    materials: [
      { title: "Compound Pattern", url: "https://www.patterns.dev/react/compound-pattern/", kind: "article" },
      { title: "React Hooks: Compound Components", url: "https://kentcdodds.com/blog/compound-components-with-react-hooks", kind: "article" },
      { title: "Simply React", url: "https://www.youtube.com/watch?v=AiJ8tRRH0f8", kind: "video" },
    ],
  },
  "w14:render-props": {
    description: {
      pt: "Render props é passar uma função como prop (ou children) que o componente chama para decidir o que renderizar, compartilhando lógica com quem consome. Hoje custom hooks cobrem a maioria dos casos, mas o padrão segue em bibliotecas e aparece ao discutir inversion of control.",
    },
    materials: [
      { title: "Render Props Pattern", url: "https://www.patterns.dev/react/render-props-pattern/", kind: "article" },
      { title: "Render Props", url: "https://legacy.reactjs.org/docs/render-props.html", kind: "docs" },
    ],
  },
  "w14:higher-order-components": {
    description: {
      pt: "Um higher-order component é uma função que recebe um componente e devolve outro com comportamento extra, como withAuth ou connect do Redux. Saber os problemas (wrapper hell, colisão de props, refs) e por que hooks os substituíram é útil em codebases legadas e entrevistas.",
    },
    materials: [
      { title: "HOC Pattern", url: "https://www.patterns.dev/react/hoc-pattern/", kind: "article" },
      { title: "Higher-Order Components", url: "https://legacy.reactjs.org/docs/higher-order-components.html", kind: "docs" },
    ],
  },
  "w14:headless-ui": {
    description: {
      pt: "Headless components entregam comportamento, estado e acessibilidade sem impor estilos, deixando o markup e o visual com quem consome. É o modelo de Radix, Headless UI e TanStack Table, e explica por que shadcn/ui funciona copiando componentes estilizados sobre primitivos.",
    },
    materials: [
      { title: "Headless Component: a pattern for composing React UIs", url: "https://martinfowler.com/articles/headless-component.html", kind: "article" },
      { title: "Introduction", url: "https://www.radix-ui.com/primitives/docs/overview/introduction", kind: "docs" },
      { title: "Headless UI", url: "https://headlessui.com/", kind: "docs" },
    ],
  },
  "w14:polymorphic-components": {
    description: {
      pt: "Componentes polimórficos permitem trocar o elemento renderizado, via prop as ou asChild, mantendo estilos e comportamento, como um Button que vira link. O desafio é tipar corretamente as props do elemento escolhido em TypeScript, tema frequente em design systems.",
    },
    materials: [
      { title: "Composition", url: "https://www.radix-ui.com/primitives/docs/guides/composition", kind: "docs" },
      { title: "How to Build Strongly Typed Polymorphic Components", url: "https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/", kind: "article" },
    ],
  },
  "w14:error-boundaries": {
    description: {
      pt: "Error boundaries capturam erros lançados durante o render de uma subárvore e mostram uma UI de fallback em vez de derrubar a aplicação inteira. Ainda exigem class component (ou a lib react-error-boundary) e não pegam erros em event handlers ou código assíncrono.",
    },
    materials: [
      { title: "Catching rendering errors with an error boundary", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary", kind: "docs" },
      { title: "react-error-boundary", url: "https://github.com/bvaughn/react-error-boundary", kind: "docs" },
    ],
  },
  "w14:portals": {
    description: {
      pt: "Portals renderizam filhos em outro nó do DOM, como o body, mantendo-os na mesma posição da árvore React. Resolvem modais, tooltips e dropdowns presos por overflow ou z-index; vale saber que eventos e context continuam propagando pela árvore React, não pela do DOM.",
    },
    materials: [
      { title: "createPortal", url: "https://react.dev/reference/react-dom/createPortal", kind: "docs" },
    ],
  },
  "w14:refs": {
    description: {
      pt: "Refs dão acesso imperativo a nós do DOM ou a instâncias, para foco, scroll, medição e integração com bibliotecas não React. No React 19 ref virou prop comum e forwardRef deixou de ser necessário; useImperativeHandle expõe só uma API restrita ao pai.",
    },
    materials: [
      { title: "Manipulating the DOM with Refs", url: "https://react.dev/learn/manipulating-the-dom-with-refs", kind: "docs" },
      { title: "useImperativeHandle", url: "https://react.dev/reference/react/useImperativeHandle", kind: "docs" },
      { title: "React v19", url: "https://react.dev/blog/2024/12/05/react-19", kind: "article" },
    ],
  },
}
