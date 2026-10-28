# Roadmap Frontend & React

Roadmap de 24 semanas para entrevistas de Frontend e React, do funcionamento da web ao Frontend System Design. São 6 seções, 24 semanas e 216 tópicos. Cada tópico tem uma descrição curta e material de estudo selecionado.

**No ar:** [viniciusaguiardev.com.br/pt/roadmap](https://viniciusaguiardev.com.br/pt/roadmap)

| Seção | Semanas |
| --- | --- |
| Fundamentos da Web | 01–04 |
| JavaScript e TypeScript | 05–09 |
| React | 10–14 |
| Next.js e Renderização | 15–18 |
| Qualidade e Performance | 19–21 |
| Frontend System Design | 22–24 |

O progresso é marcado por tópico e fica salvo no `localStorage` do navegador. Não tem conta nem backend.

## Rodando localmente

```bash
nvm use        # Node 24 (.nvmrc)
pnpm install
pnpm dev       # http://localhost:3002/pt/roadmap
```

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | servidor de desenvolvimento na porta 3002 |
| `pnpm build` | build de produção |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Vitest: integridade do roadmap e do conteúdo |

## Estrutura

```
data/roadmap.ts            seções, semanas e tópicos
data/roadmap-content/      página de estudo de cada tópico (um arquivo por seção)
components/roadmap.tsx     o mapa, o sheet lateral e o progresso
lib/i18n.ts                locales e helper t()
app/[locale]/roadmap/      a página
```

## Contribuindo

Correções de link, materiais melhores, tópicos novos e traduções são bem-vindos. Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Como ele é servido

Este app é um micro frontend (uma *zona*, no vocabulário do Next.js) do [viniciusaguiardev.com.br](https://github.com/ViniAguiar1/viniciusaguiardev). O portfólio reescreve `/:locale/roadmap` e `/roadmap-static/*` para o deploy deste repositório:

- `assetPrefix: "/roadmap-static"` evita colisão de assets com o portfólio no mesmo domínio;
- toda resposta sai com `x-zone: roadmap`;
- o `robots.txt` do domínio deste deploy bloqueia indexação, porque o endereço canônico é o do portfólio.

Para rodar um fork como site independente, remova o `assetPrefix` em `next.config.ts`, troque `SITE_URL` em `lib/i18n.ts` e libere o `app/robots.ts`.

## Licença

[MIT](LICENSE)
