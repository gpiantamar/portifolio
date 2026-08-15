# Guilherme Silva — Portfólio (HTML, CSS e JavaScript)

Portfólio profissional moderno construído **apenas com HTML5, CSS3 e JavaScript puro (Vanilla)** (sem frameworks, sem build step), com design clean, elevação de cards, microinterações, carrossel de projetos e botão para download de currículo.

## ✨ Apresentação

Site de portfólio para **Guilherme Silva — Estagiário em Desenvolvimento Front-end**, contando com seções de Hero, Sobre, Skills (Competências), Projetos (com filtros por tecnologia, carrossel e modal detalhado), Experiência, Certificados, Contato (com validação de formulário) e Rodapé. Inspirado visualmente nas melhores práticas de design moderno (Vercel, Linear, Apple).

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico, estruturado e acessível
- **CSS3** puro (Custom Properties / Design Tokens, Flexbox, Grid Layout, animações de alta performance)
- **JavaScript (Vanilla, ES6+)** — interatividade pura sem dependências externas
- **Google Fonts** (Plus Jakarta Sans, Inter, JetBrains Mono)

Não há bundlers (Vite/Webpack), transpiladores ou dependências de `npm` — o projeto roda diretamente em qualquer navegador web.

## 📁 Estrutura do projeto

```
site/
├── index.html          # Estrutura HTML5 semântica e conteúdo estático do portfólio
├── css/
│   └── style.css        # Design system, layout, responsividade e animações
├── js/
│   └── main.js           # Interatividade (menu mobile, filtros, modal, carrossel, validação)
├── assets/
│   └── curriculo.pdf    # Arquivo PDF do currículo para download
└── README.md           # Documentação do projeto
```

### Dados no HTML (`index.html`)

Todas as informações (textos, dados do perfil, projetos, skills, certificados e links) estão inseridas diretamente na marcação do `index.html`, garantindo excelente desempenho, rápido carregamento e facilidade de manutenção.

## 🚀 Como executar o projeto

Não há instalação de dependências — por ser um site estático, basta abrir o arquivo `index.html` no seu navegador.

Para a melhor experiência e teste de carregamento de assets locais:

```bash
# Opção 1 — Python
python3 -m http.server 5500

# Opção 2 — Node (sem instalar nada globalmente)
npx serve .
```

Acesse no navegador: `http://localhost:5500`.

## ☁️ Deploy

O site pode ser hospedado gratuitamente em qualquer serviço de páginas estáticas:
- **Vercel** (Framework Preset: *Other*)
- **GitHub Pages**
- **Netlify**
- **Cloudflare Pages**

## 🗂️ Organização dos arquivos

- `css/style.css` — todo o design system (variáveis CSS, tipografia, cores HSL/hex, cards com efeito glow, botões pill de filtros e animações).
- `index.html` — marcação completa do portfólio (Hero com botão de download de CV, Sobre mim, Competências, Projetos, Trajetória, Certificados, Contato e Rodapé).
- `js/main.js` — gerenciamento das interações (menu lateral responsivo, carrossel de projetos com autoplay e navegação por setas/pontos, filtros por categoria, modal popup por `<template>` e validação do formulário de contato).
- `assets/curriculo.pdf` — arquivo PDF baixado ao clicar no botão "Baixar Currículo".

## ➕ Como adicionar um novo projeto

1. Adicione um novo elemento `<article class="project-card" data-categories="Tecnologia1,Tecnologia2">` dentro da div `#projects-grid` em `index.html`.
2. Inclua o banner do projeto em `<div class="project-card__media">` e preencha as informações do card.
3. Dentro do card, adicione a tag `<template class="project-modal-template">` contendo o conteúdo completo do modal para exibição em popup.

## 🧑‍💻 Alterando informações pessoais

Todas as informações pessoais (nome, cargo de Estagiário, foto/avatar GS, sobre, trajetórias e links sociais) ficam diretamente no arquivo `index.html`.

## ♿ Acessibilidade e Boas Práticas

- HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- Suporte a navegação por teclado (`:focus-visible` em botões, links e cards de projetos)
- Atributos ARIA em componentes interativos (menu móvel, modais e formulário)
- Design Responsivo (Mobile-first e adaptável a telas desktop, tablet e smartphones)
- Respeito à preferência de movimento reduzido (`prefers-reduced-motion`)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizar como referência para o seu próprio portfólio.
