# Contribuindo

Obrigado por ajudar! A maior parte das contribuições mexe só em dados, em `data/`.

## Corrigir ou adicionar material

O material de cada tópico fica em `data/roadmap-content/s<N>.ts` (N é o número da seção), chaveado pelo id do tópico:

```ts
"w1:dns": {
  description: { pt: "..." },
  materials: [
    { title: "DNS", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", kind: "docs" },
  ],
},
```

- **`kind`** pode ser `video` (YouTube etc.), `course` (trilha com várias aulas), `docs` (documentação oficial, MDN, spec) ou `article` (post ou guia).
- **`title`** é o título real da página ou do vídeo, sem o nome do site no fim.
- Use de 1 a 3 materiais por tópico, do mais útil para o menos útil. Prefira fontes canônicas e estáveis (MDN, react.dev, nextjs.org, web.dev, typescriptlang.org…).
- **Confira o link antes de abrir o PR.** A página precisa responder 200 e continuar sendo sobre o tópico depois de qualquer redirect. Para vídeos do YouTube, o oEmbed precisa devolver o título:

  ```bash
  curl -sL -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" <url>
  curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json"
  ```

## Descrição de um tópico

Escreva em português do Brasil, em 2 ou 3 frases (cerca de 35 a 60 palavras). Diga o que o tópico é e por que ele importa, seja para o resto do frontend, para uma entrevista ou para produção. Mantenha o termo em inglês quando é assim que se fala (closure, event loop, hydration).

## Adicionar ou renomear um tópico

Os tópicos ficam em `data/roadmap.ts`. O id de um tópico é `w<semana>:<slug do texto em PT>`, e é ele que guarda o progresso de quem estuda no `localStorage`. Por isso:

- **renomear um tópico apaga o progresso salvo dele**, então só renomeie quando valer a pena;
- quem adiciona um tópico precisa adicionar também o conteúdo dele em `data/roadmap-content/`. O `pnpm test` falha se algum tópico ficar sem descrição ou sem material, ou se sobrar conteúdo de um tópico que não existe mais.

## Traduções

Todo texto de conteúdo é um `LocalizedString`: `{ pt: "...", en: "...", es: "...", jp: "...", fr: "..." }`. Só o `pt` é obrigatório; um locale sem tradução mostra o texto em PT. Para traduzir, basta adicionar a chave do idioma ao lado do `pt`.

## Antes do PR

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

O CI roda exatamente isso.
