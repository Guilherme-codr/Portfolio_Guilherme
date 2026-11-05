# Portfólio — Guilherme Lacerda

Site: https://guilherme-codr.github.io/Portfolio_Guilherme/

Feito com React, Vite e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Esse comando testa o build, faz commit de todas as alterações e dá push na `main`.
O push dispara o GitHub Actions (`.github/workflows/deploy.yml`), que publica o
site no GitHub Pages em cerca de 1 minuto. Acompanhe pela aba **Actions**.

Mensagem de commit personalizada: `npm run deploy -- "minha mensagem"`

Deploy direto do PC, sem GitHub Actions: `npm run deploy:local`

## Editar conteúdo

- Projetos: `src/data/projects.js`
- Contatos do rodapé: `src/data/contacts.js`
