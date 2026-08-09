# Guilherme Silva — Portfólio (HTML, CSS e JavaScript)

Portfólio profissional construído **apenas com HTML, CSS e JavaScript puro** (sem frameworks, sem build step), com dark mode, glassmorphism leve, microinterações e conteúdo 100% centralizado em um arquivo de dados.

## ✨ Apresentação

Site de portfólio para Guilherme Silva, Desenvolvedor Front-end Júnior, com seções de Hero, Sobre, Skills, Projetos (com filtros e modal), Experiência, Certificados, Contato (com validação) e Footer. Inspirado visualmente em Vercel, Linear, Stripe e Apple.

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico e acessível
- **CSS3** puro (custom properties, Grid, Flexbox, animações)
- **JavaScript** (Vanilla, ES6+) — sem dependências externas
- Google Fonts (Space Grotesk, Inter, JetBrains Mono)

Não há bundler, transpilador ou dependências de `npm` — o projeto roda diretamente no navegador.

## 📁 Estrutura do projeto

```
site/
├── index.html          # Marcação e estrutura de todas as seções
├── css/
│   └── style.css        # Design tokens, layout, dark mode, responsividade, animações
├── js/
│   ├── data.js           # TODO o conteúdo do portfólio (fonte única de dados)
│   └── main.js           # Renderização dinâmica + interatividade
├── assets/               # Imagens e ícones (opcional)
└── README.md
```

### Por que os dados ficam em `js/data.js`?

Nenhuma informação (textos, projetos, skills, certificados, links) fica fixa no HTML ou no JS de renderização. Tudo vem do objeto `PORTFOLIO_DATA`, o que torna trivial atualizar o conteúdo sem tocar em marcação ou lógica.

## 🚀 Como instalar

Não há instalação de dependências — é um site estático.

```bash
git clone <url-do-repositorio>
cd site
```

## ▶️ Como executar

Basta abrir o `index.html` no navegador, ou (recomendado, para evitar restrições de CORS/fetch) rodar um servidor estático local:

```bash
# Opção 1 — Python
python3 -m http.server 5500

# Opção 2 — Node (npx, sem instalar nada globalmente)
npx serve .
```

Depois acesse `http://localhost:5500` (ou a porta indicada pelo terminal).

## 📜 Scripts disponíveis

Como não há `package.json`, não existem scripts npm. Os comandos acima (`http.server` / `npx serve`) são suficientes para desenvolvimento local.

## ☁️ Deploy

O projeto pode ser publicado em qualquer hospedagem de arquivos estáticos:

**Vercel**
1. Crie um novo projeto na Vercel e aponte para este repositório.
2. Em *Framework Preset*, selecione **Other**.
3. Deixe o *Build Command* vazio e o *Output Directory* como a raiz do projeto (`.`) ou a pasta `site/`, conforme a estrutura do seu repositório.
4. Deploy.

Também funciona diretamente em **GitHub Pages**, **Netlify** ou **Cloudflare Pages**, sem nenhuma configuração adicional.

## 🗂️ Organização das pastas

- `css/style.css` — todo o design system (cores, tipografia, espaçamentos), componentes visuais e media queries (mobile-first).
- `js/data.js` — conteúdo do portfólio (perfil, navegação, sobre, skills, projetos, experiência, certificados, contato, footer).
- `js/main.js` — funções de renderização (uma por seção) e interações (navbar, menu mobile, scroll reveal, filtros de projetos, modal, validação de formulário).

## ➕ Como adicionar novos projetos

Edite o array `projects` em `js/data.js` e adicione um novo objeto seguindo o modelo:

```js
{
  id: 16,
  name: "Nome do Projeto",
  description: "Descrição curta exibida no card.",
  fullDescription: "Descrição completa exibida no modal.",
  technologies: ["React", "TypeScript"],
  categories: ["React", "TypeScript"], // usado pelos filtros
  year: 2025,
  status: "Concluído", // ou "Em andamento"
  github: "https://github.com/usuario/projeto",
  demo: "https://meusite.com/projeto",
  challenges: "Principal desafio enfrentado.",
  learnings: "O que foi aprendido no processo.",
  images: [],
}
```

O card e o modal são renderizados automaticamente — nenhuma alteração em HTML ou JS de renderização é necessária. Para adicionar uma nova categoria de filtro, inclua o nome também no array `projectFilters`.

## 🧑‍💻 Como alterar informações pessoais

Todas as informações pessoais (nome, cargo, descrição, links sociais, sobre, timeline, skills, experiência, certificados, textos de contato e footer) ficam em `js/data.js`, dentro do objeto `PORTFOLIO_DATA`. Basta editar os campos correspondentes — o site é atualizado automaticamente ao recarregar a página.

## ♿ Acessibilidade e boas práticas

- HTML semântico (`header`, `main`, `section`, `footer`, `nav`)
- Navegação por teclado (menu mobile, modal de projetos e formulário totalmente operáveis via teclado)
- Estados de foco visíveis (`:focus-visible`)
- Atributos ARIA em elementos interativos (menu, modal, mensagens de erro do formulário)
- Respeito à preferência `prefers-reduced-motion`
- Contraste de cores pensado para o modo escuro

## 📄 Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para utilizá-lo como base para o seu próprio portfólio, com os devidos créditos.
