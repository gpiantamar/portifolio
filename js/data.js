/**
 * ============================================================
 * PORTFOLIO DATA
 * ------------------------------------------------------------
 * Todas as informações do portfólio ficam centralizadas aqui.
 * Para atualizar textos, projetos, skills, certificados etc,
 * edite apenas este arquivo — nenhum dado fica fixo no HTML/JS
 * de renderização.
 * ============================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Guilherme Silva",
    role: "Desenvolvedor Front-end Júnior",
    greeting: "Olá, eu sou",
    description:
      "Sou apaixonado por criar interfaces modernas, responsivas e intuitivas, buscando sempre oferecer a melhor experiência ao usuário. Atualmente trabalho com implantação e suporte de temas para plataformas de e-commerce, adquirindo experiência prática em desenvolvimento Front-end e evolução constante nas tecnologias web.",
    location: "Brasil",
    avatarInitials: "GS",
    socials: {
      github: "https://github.com/guilherme-silva",
      linkedin: "https://linkedin.com/in/guilherme-silva",
      email: "contato@guilhermesilva.dev",
    },
  },

  nav: [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Certificados", href: "#certificates" },
    { label: "Contato", href: "#contact" },
  ],

  about: {
    heading: "Sobre mim",
    paragraphs: [
      "Atualmente trabalho com implantação e suporte de temas para plataformas de e-commerce, atuando diretamente na customização de layouts e correção de comportamentos de interface para lojas virtuais.",
      "No dia a dia, desenvolvo interfaces responsivas com HTML, CSS, JavaScript e React, sempre buscando equilíbrio entre performance, acessibilidade e uma boa experiência visual.",
      "Estou constantemente estudando novas tecnologias Front-end — TypeScript, boas práticas de arquitetura e ferramentas de produtividade — para evoluir como desenvolvedor e entregar cada vez mais valor em cada projeto.",
    ],
    highlights: [
      "Implantação e suporte de temas para e-commerce",
      "Desenvolvimento de interfaces responsivas",
      "Base sólida em HTML, CSS, JavaScript e React",
      "Estudo contínuo de novas tecnologias Front-end",
    ],
    timeline: [
      {
        year: "2021",
        title: "Início dos estudos",
        description:
          "Primeiro contato com HTML, CSS e lógica de programação, explorando cursos e projetos pessoais.",
      },
      {
        year: "2022",
        title: "Faculdade",
        description:
          "Início da graduação voltada à área de tecnologia, aprofundando fundamentos de programação e desenvolvimento web.",
      },
      {
        year: "2023",
        title: "Primeiros projetos",
        description:
          "Desenvolvimento de landing pages e pequenas aplicações com JavaScript, consolidando a base de Front-end.",
      },
      {
        year: "2024",
        title: "Trabalho atual",
        description:
          "Atuação com implantação e suporte de temas para plataformas de e-commerce, unindo teoria e prática no mercado.",
      },
      {
        year: "Próximo passo",
        title: "Próximos objetivos",
        description:
          "Aprofundar conhecimentos em React, TypeScript e arquitetura Front-end, evoluindo para um papel Pleno.",
      },
    ],
  },

  skills: {
    heading: "Skills & Competências",
    categories: [
      {
        name: "Desenvolvimento Front-end",
        items: [
          {
            name: "HTML5",
            tag: "Semântica & Acessibilidade",
            description: "Estruturação limpa, SEO técnico e conformidade com padrões WCAG.",
          },
          {
            name: "CSS3",
            tag: "Layouts & Animações",
            description: "Flexbox, Grid Layout, animações de alta performance e design responsivo.",
          },
          {
            name: "JavaScript",
            tag: "ES6+ & Async",
            description: "Lógica moderna, manipulação avançada de DOM, Promises e Fetch API.",
          },
          {
            name: "TypeScript",
            tag: "Tipagem Estática",
            description: "Desenvolvimento seguro com interfaces, enums e checagem de tipos em tempo de compilação.",
          },
          {
            name: "React",
            tag: "Componentes & Hooks",
            description: "Arquitetura reativa de componentes, gestão de estado e otimização de renderização.",
          },
          {
            name: "Tailwind CSS",
            tag: "Estilização Utilitária",
            description: "Sistemas de design consistentes, agilidade de prototipagem e customização via tokens.",
          },
        ],
      },
      {
        name: "Ferramentas & Workflow",
        items: [
          {
            name: "Git",
            tag: "Versionamento",
            description: "Fluxo de trabalho com branches, commits atômicos e resolução de conflitos.",
          },
          {
            name: "GitHub",
            tag: "Colaboração",
            description: "Organização de repositórios, Pull Requests, Code Review e documentação.",
          },
          {
            name: "VS Code",
            tag: "IDE / Dev Environment",
            description: "Configuração otimizada com snippets, linters, formatadores e atalhos de alta produtividade.",
          },
          {
            name: "Figma",
            tag: "UI / UX Inspection",
            description: "Fidelidade na conversão de layouts, medição de espaçamentos e exportação de assets.",
          },
          {
            name: "Postman",
            tag: "APIs & Testes HTTP",
            description: "Inspeção de endpoints, validação de payloads JSON e testes de integração REST.",
          },
        ],
      },
    ],
  },

  projectFilters: ["Todos", "React", "JavaScript", "TypeScript", "Landing Pages"],

  projects: [
    {
      id: 1,
      name: "E-commerce Theme Customizer",
      description:
        "Customização de tema para loja virtual, com ajustes de layout, performance e comportamento responsivo.",
      fullDescription:
        "Projeto realizado no ambiente de trabalho atual, envolvendo a implantação e customização de um tema de e-commerce. O foco foi ajustar componentes visuais, corrigir inconsistências entre dispositivos e otimizar tempos de carregamento sem comprometer a experiência do usuário.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["JavaScript"],
      year: 2024,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/ecommerce-theme",
      demo: "https://guilhermesilva.dev/projects/ecommerce-theme",
      challenges:
        "Lidar com CSS legado do template e garantir compatibilidade entre navegadores sem quebrar o layout existente.",
      learnings:
        "Aprofundamento em depuração de CSS complexo e boas práticas de performance em ambientes de produção.",
      images: [],
    },
    {
      id: 2,
      name: "Task Manager React",
      description: "Aplicação de gerenciamento de tarefas com React e Context API.",
      fullDescription:
        "Aplicativo pessoal para organização de tarefas diárias, com criação, edição, marcação de concluído e persistência local dos dados.",
      technologies: ["React", "JavaScript", "CSS"],
      categories: ["React", "JavaScript"],
      year: 2024,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/task-manager-react",
      demo: "https://guilhermesilva.dev/projects/task-manager",
      challenges: "Gerenciar estado global das tarefas sem bibliotecas externas.",
      learnings: "Uso prático de Context API e hooks personalizados.",
      images: [],
    },
    {
      id: 3,
      name: "Landing Page SaaS",
      description: "Landing page moderna para produto SaaS fictício.",
      fullDescription:
        "Página de apresentação de produto com seções de recursos, preços e depoimentos, focada em conversão e performance.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Landing Pages", "JavaScript"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/landing-saas",
      demo: "https://guilhermesilva.dev/projects/landing-saas",
      challenges: "Criar hierarquia visual clara para guiar o usuário até a conversão.",
      learnings: "Técnicas de copywriting aplicadas ao design de interface.",
      images: [],
    },
    {
      id: 4,
      name: "Dashboard Financeiro",
      description: "Painel de controle com gráficos e indicadores financeiros.",
      fullDescription:
        "Dashboard para acompanhamento de métricas financeiras pessoais, com gráficos interativos e filtros por período.",
      technologies: ["React", "TypeScript", "CSS"],
      categories: ["React", "TypeScript"],
      year: 2024,
      status: "Em andamento",
      github: "https://github.com/guilherme-silva/dashboard-financeiro",
      demo: "",
      challenges: "Modelar tipos consistentes para diferentes formatos de dados financeiros.",
      learnings: "Primeiros passos sólidos com TypeScript em um projeto real.",
      images: [],
    },
    {
      id: 5,
      name: "Portfólio Fotográfico",
      description: "Site de portfólio para fotógrafo com galeria responsiva.",
      fullDescription:
        "Site institucional para exibição de trabalhos fotográficos, com galeria em grid, lightbox e formulário de contato.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Landing Pages", "JavaScript"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/portfolio-fotografo",
      demo: "https://guilhermesilva.dev/projects/portfolio-fotografo",
      challenges: "Otimizar carregamento de imagens em alta resolução.",
      learnings: "Lazy loading e otimização de assets de imagem.",
      images: [],
    },
    {
      id: 6,
      name: "App de Receitas",
      description: "Aplicação para busca e organização de receitas culinárias.",
      fullDescription:
        "Consumo de API pública de receitas com busca, filtros por categoria e lista de favoritos salva localmente.",
      technologies: ["React", "JavaScript"],
      categories: ["React", "JavaScript"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/app-receitas",
      demo: "https://guilhermesilva.dev/projects/app-receitas",
      challenges: "Tratar estados de carregamento e erro de forma consistente.",
      learnings: "Consumo de APIs REST e tratamento de estados assíncronos.",
      images: [],
    },
    {
      id: 7,
      name: "Landing Page Imobiliária",
      description: "Página institucional para captação de leads imobiliários.",
      fullDescription:
        "Landing page com formulário de contato integrado, seção de imóveis em destaque e depoimentos de clientes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Landing Pages"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/landing-imobiliaria",
      demo: "https://guilhermesilva.dev/projects/landing-imobiliaria",
      challenges: "Criar formulário validado sem frameworks externos.",
      learnings: "Validação de formulários em JavaScript puro.",
      images: [],
    },
    {
      id: 8,
      name: "Componentes UI Reutilizáveis",
      description: "Biblioteca pessoal de componentes de interface em React.",
      fullDescription:
        "Conjunto de componentes reutilizáveis (botões, cards, modais, inputs) documentados para acelerar novos projetos.",
      technologies: ["React", "TypeScript"],
      categories: ["React", "TypeScript"],
      year: 2024,
      status: "Em andamento",
      github: "https://github.com/guilherme-silva/ui-components",
      demo: "",
      challenges: "Projetar componentes flexíveis o suficiente para múltiplos contextos.",
      learnings: "Design de APIs de componentes e props reutilizáveis.",
      images: [],
    },
    {
      id: 9,
      name: "Clone Spotify (estudo)",
      description: "Estudo de layout inspirado na interface do Spotify.",
      fullDescription:
        "Projeto de estudo para replicar a interface visual do Spotify, focando em Grid/Flexbox avançado e responsividade.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["JavaScript"],
      year: 2022,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/spotify-clone-study",
      demo: "https://guilhermesilva.dev/projects/spotify-clone",
      challenges: "Reproduzir fielmente um layout complexo apenas com CSS.",
      learnings: "Domínio avançado de Flexbox e Grid combinados.",
      images: [],
    },
    {
      id: 10,
      name: "Landing Page de Evento",
      description: "Página promocional para evento de tecnologia.",
      fullDescription:
        "Landing page com contagem regressiva, seção de palestrantes e formulário de inscrição.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Landing Pages"],
      year: 2022,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/landing-evento",
      demo: "https://guilhermesilva.dev/projects/landing-evento",
      challenges: "Implementar contagem regressiva precisa em JavaScript puro.",
      learnings: "Manipulação de datas e temporizadores em JS.",
      images: [],
    },
    {
      id: 11,
      name: "Blog Pessoal",
      description: "Blog estático para publicação de artigos sobre Front-end.",
      fullDescription:
        "Blog pessoal para compartilhar aprendizados sobre desenvolvimento Front-end, com listagem e página de artigo.",
      technologies: ["React", "TypeScript"],
      categories: ["React", "TypeScript"],
      year: 2024,
      status: "Em andamento",
      github: "https://github.com/guilherme-silva/blog-pessoal",
      demo: "",
      challenges: "Estruturar conteúdo de forma escalável para novos posts.",
      learnings: "Organização de conteúdo e roteamento com React Router.",
      images: [],
    },
    {
      id: 12,
      name: "Calculadora de Orçamento",
      description: "Ferramenta simples para simulação de orçamentos.",
      fullDescription:
        "Aplicação para simular orçamentos de projetos Front-end com base em escopo, prazo e complexidade.",
      technologies: ["JavaScript", "HTML", "CSS"],
      categories: ["JavaScript"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/calculadora-orcamento",
      demo: "https://guilhermesilva.dev/projects/calculadora-orcamento",
      challenges: "Definir regras de cálculo claras e configuráveis.",
      learnings: "Lógica de negócio aplicada à interface.",
      images: [],
    },
    {
      id: 13,
      name: "Landing Page Curso Online",
      description: "Página de vendas para curso online fictício.",
      fullDescription:
        "Landing page com estrutura de vendas: benefícios, depoimentos, FAQ e chamada para ação.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["Landing Pages"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/landing-curso",
      demo: "https://guilhermesilva.dev/projects/landing-curso",
      challenges: "Organizar uma página longa mantendo boa navegação.",
      learnings: "Uso de âncoras e navegação suave (smooth scroll).",
      images: [],
    },
    {
      id: 14,
      name: "Weather App",
      description: "Aplicação de previsão do tempo consumindo API pública.",
      fullDescription:
        "Aplicação que exibe a previsão do tempo para cidades pesquisadas, consumindo uma API externa de clima.",
      technologies: ["React", "JavaScript"],
      categories: ["React", "JavaScript"],
      year: 2023,
      status: "Concluído",
      github: "https://github.com/guilherme-silva/weather-app",
      demo: "https://guilhermesilva.dev/projects/weather-app",
      challenges: "Tratar diferentes formatos e falhas de resposta da API.",
      learnings: "Boas práticas de consumo de APIs REST.",
      images: [],
    },
    {
      id: 15,
      name: "Design System Pessoal",
      description: "Base de tokens de design e componentes para projetos futuros.",
      fullDescription:
        "Conjunto de tokens (cores, tipografia, espaçamentos) e componentes base para acelerar o início de novos projetos Front-end.",
      technologies: ["TypeScript", "React"],
      categories: ["React", "TypeScript"],
      year: 2024,
      status: "Em andamento",
      github: "https://github.com/guilherme-silva/design-system",
      demo: "",
      challenges: "Definir uma nomenclatura de tokens consistente e escalável.",
      learnings: "Fundamentos de Design Systems aplicados na prática.",
      images: [],
    },
  ],

  experience: {
    heading: "Experiência",
    current: {
      role: "Desenvolvedor Front-end",
      company: "Implantação e Suporte de Temas E-commerce",
      period: "2024 — Atual",
      responsibilities: [
        "Implantação de lojas virtuais",
        "Customização de layouts",
        "Desenvolvimento Front-end com HTML, CSS, JavaScript e React",
        "Correção de bugs",
        "Atendimento técnico",
        "Melhorias visuais e otimização de interfaces",
      ],
    },
    personalProjectsNote:
      "Além do trabalho atual, dedico parte do tempo a projetos pessoais para praticar React, TypeScript e novas arquiteturas Front-end — a seção de Projetos reúne os principais.",
  },

  certificates: {
    heading: "Certificados",
    items: [
      {
        name: "JavaScript Completo",
        institution: "Origamid",
        description: "Fundamentos e conceitos avançados de JavaScript moderno.",
        date: "2023",
      },
      {
        name: "React.js na Prática",
        institution: "Origamid",
        description: "Componentização, hooks e boas práticas com React.",
        date: "2023",
      },
      {
        name: "HTML e CSS Avançado",
        institution: "Origamid",
        description: "Layouts responsivos com Flexbox e Grid.",
        date: "2022",
      },
      {
        name: "Git e GitHub na Prática",
        institution: "Alura",
        description: "Controle de versão e fluxo colaborativo de trabalho.",
        date: "2022",
      },
      {
        name: "Lógica de Programação",
        institution: "Alura",
        description: "Fundamentos de lógica aplicados ao desenvolvimento web.",
        date: "2021",
      },
      {
        name: "TypeScript para Front-end",
        institution: "Rocketseat",
        description: "Tipagem estática aplicada a projetos React.",
        date: "2024",
      },
    ],
  },

  contact: {
    heading: "Contato",
    description:
      "Aberto a oportunidades, freelas e boas conversas sobre Front-end. Envie uma mensagem ou me encontre nas redes abaixo.",
  },

  footer: {
    quickLinksLabel: "Links rápidos",
    socialsLabel: "Redes sociais",
    rightsText: "Todos os direitos reservados.",
  },
};
