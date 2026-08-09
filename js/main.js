/**
 * ============================================================
 * MAIN.JS — renderização e interatividade do portfólio
 * ------------------------------------------------------------
 * Todo o conteúdo é lido de PORTFOLIO_DATA (js/data.js).
 * Nenhuma informação de texto fica fixa neste arquivo.
 * ============================================================
 */

(function () {
  "use strict";

  const data = PORTFOLIO_DATA;

  /* ---------------------------------------------------------
   * Ícones inline (SVG) — evita dependência externa
   * --------------------------------------------------------- */
  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.2L19.8 6H4.2ZM20 8.1l-7.4 5.9a1 1 0 0 1-1.2 0L4 8.1v10.4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.1Z"/></svg>',
    html:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.58 5H5.72l.3 3.4h11.23l-.42 4.7-4.86 1.34-4.87-1.34-.31-3.5H3.34l.58 6.55L11.97 20l8.05-2.24L21.08 5z"/></svg>',
    css:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.58 5H5.72l.15 1.7h11.53l-.68 7.63-6.25 1.73-6.25-1.73-.41-4.63h3.37l.21 2.37 3.08.83 3.08-.83.33-3.67H5.27l-.6-6.73h14.41z"/></svg>',
    javascript:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h18v18H3V3zm11.5 12.5c0-1.4 1.1-1.9 2.5-1.9 1.1 0 2.1.4 2.8.9l.8-2.2c-.8-.6-2.1-1-3.6-1-3 0-5.1 1.7-5.1 4.5 0 4.1 5.7 3.5 5.7 5.3 0 .7-.6 1-1.6 1-1.2 0-2.5-.5-3.3-1.1l-.8 2.2c.9.7 2.4 1.2 4.1 1.2 3.3 0 5.4-1.6 5.4-4.6.1-4.3-5.7-3.6-5.7-5.3zm-5.8-3.4h3.1v10H8.7v-10z"/></svg>',
    typescript:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.5 1.5h21v21h-21zM13.8 17.7c.6.4 1.4.7 2.3.7 1.2 0 1.9-.6 1.9-1.4 0-.9-.7-1.3-2.3-1.9-2.1-.8-3.4-1.8-3.4-3.8 0-2.2 1.8-3.9 4.6-3.9 1.3 0 2.3.3 3 .7l-.7 2.1c-.5-.3-1.3-.6-2.2-.6-1.1 0-1.7.5-1.7 1.2 0 .8.8 1.1 2.5 1.8 2.2.9 3.2 2 3.2 3.9 0 2.4-1.8 4-4.8 4-1.5 0-2.8-.4-3.6-.9l.7-2.1zm-8-9.4h7.5v2.2h-2.5v9.4H8.3v-9.4H5.8V8.3z"/></svg>',
    react:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="9" ry="4.2"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>',
    tailwind:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>',
    git:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9c.195.195.451.293.707.293s.512-.098.707-.293l9-9a.999.999 0 0 0 0-1.414zM13 17.586l-2-2V13.41c.525-.331.875-.91.875-1.569 0-1.035-.84-1.875-1.875-1.875s-1.875-.84-1.875-1.875c0-.659.35-1.238.875-1.569V7.414l2-2v2.172c-.525.331-.875.91-.875 1.569 0 .493.195.939.512 1.272l1.628 1.628c.333-.317.779-.512 1.272-.512 1.035 0 1.875.84 1.875 1.875 0 1.035-.84 1.875-1.875 1.875z"/></svg>',
    vscode:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.52-3.42a.893.893 0 0 0-1.07 0L.35 6.64a.893.893 0 0 0-.06 1.34l4.28 4.02-4.28 4.02a.893.893 0 0 0 .06 1.34l1.1 1.09a.893.893 0 0 0 1.07 0l4.52-3.42 9.46 8.63c.49.45 1.18.57 1.7.29l4.94-2.38c.54-.26.85-.8.85-1.39V3.97c0-.59-.31-1.13-.85-1.39zM18 18.66l-7.05-6.66L18 5.34v13.32z"/></svg>',
    figma:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 1 1 0 6h-3V3z"/></svg>',
    postman:
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>',
  };

  const socialIconFor = (key) => ICONS[key] || ICONS.email;

  /* ---------------------------------------------------------
   * Utilidades
   * --------------------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  /* ===========================================================
   * NAVBAR
   * =========================================================== */
  function renderNav() {
    const list = $("#navbar-list");
    const mobileList = $("#mobile-menu-list");

    data.nav.forEach((item) => {
      const li = el("li", null, `<a href="${item.href}">${item.label}</a>`);
      list.appendChild(li);

      const liMobile = el("li", null, `<a href="${item.href}">${item.label}</a>`);
      mobileList.appendChild(liMobile);
    });
  }

  function renderHeroAndFooterSocials() {
    const { socials } = data.profile;
    const heroSocials = $("#hero-socials");
    const mobileSocials = $("#mobile-menu-socials");
    const footerSocials = $("#footer-socials");

    const entries = [
      { key: "github", url: socials.github, label: "GitHub" },
      { key: "linkedin", url: socials.linkedin, label: "LinkedIn" },
      { key: "email", url: `mailto:${socials.email}`, label: "Email" },
    ];

    entries.forEach(({ key, url, label }) => {
      heroSocials.appendChild(
        el(
          "a",
          "btn btn--icon",
          socialIconFor(key)
        )
      ).setAttribute("href", url);
      heroSocials.lastChild.setAttribute("aria-label", label);
      heroSocials.lastChild.setAttribute("target", "_blank");
      heroSocials.lastChild.setAttribute("rel", "noopener noreferrer");

      const mIcon = el("a", "btn btn--icon", socialIconFor(key));
      mIcon.setAttribute("href", url);
      mIcon.setAttribute("aria-label", label);
      mobileSocials.appendChild(mIcon);

      const fIcon = el("a", "btn btn--icon", socialIconFor(key));
      fIcon.setAttribute("href", url);
      fIcon.setAttribute("aria-label", label);
      footerSocials.appendChild(fIcon);
    });
  }

  function initNavbarScroll() {
    const navbar = $("#navbar");
    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initActiveLinkTracking() {
    const sections = data.nav.map((n) => document.getElementById(n.href.slice(1))).filter(Boolean);
    const navLinks = $all("#navbar-list a, #mobile-menu-list a");

    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  function initMobileMenu() {
    const toggle = $("#navbar-toggle");
    const menu = $("#mobile-menu");
    const overlay = $("#mobile-menu-overlay");

    const closeMenu = () => {
      menu.classList.remove("is-open");
      overlay.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    };

    const openMenu = () => {
      menu.classList.add("is-open");
      overlay.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);
    $all("#mobile-menu-list a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ===========================================================
   * HERO
   * =========================================================== */
  function renderHero() {
    $("#hero-greeting").textContent = data.profile.greeting;
    $("#hero-name").textContent = data.profile.name;
    $("#hero-role").textContent = data.profile.role;
    $("#hero-description").textContent = data.profile.description;
    $("#hero-initials").textContent = data.profile.avatarInitials;
  }

  /* ===========================================================
   * ABOUT
   * =========================================================== */
  function renderAbout() {
    $("#about-heading").textContent = data.about.heading;

    const paraWrap = $("#about-paragraphs");
    data.about.paragraphs.forEach((p) => {
      paraWrap.appendChild(el("p", null, p));
    });

    const highlightsWrap = $("#about-highlights");
    data.about.highlights.forEach((h) => {
      highlightsWrap.appendChild(el("li", null, h));
    });

    const timelineWrap = $("#about-timeline");
    const timelineEl = el("div", "timeline");
    data.about.timeline.forEach((item) => {
      const itemEl = el(
        "div",
        "timeline__item",
        `
        <span class="timeline__dot"></span>
        <div class="timeline__year">${item.year}</div>
        <div class="timeline__title">${item.title}</div>
        <div class="timeline__desc">${item.description}</div>
      `
      );
      timelineEl.appendChild(itemEl);
    });
    timelineWrap.appendChild(timelineEl);
  }

  /* ===========================================================
   * SKILLS (Pure Minimalist Typographic Layout)
   * =========================================================== */
  function renderSkills() {
    $("#skills-heading").textContent = data.skills.heading;
    const wrap = $("#skills-categories");
    wrap.innerHTML = "";

    data.skills.categories.forEach((category) => {
      const categoryEl = el("div", "skills__category");
      categoryEl.appendChild(el("h3", "skills__category-name", category.name));

      const grid = el("div", "skills__grid");
      category.items.forEach((skill) => {
        const card = el(
          "div",
          "skill-card",
          `
          <div class="skill-card__header">
            <h4 class="skill-card__name">${skill.name}</h4>
            <span class="skill-card__tag">${skill.tag}</span>
          </div>
          <p class="skill-card__desc">${skill.description}</p>
        `
        );
        grid.appendChild(card);
      });

      categoryEl.appendChild(grid);
      wrap.appendChild(categoryEl);
    });
  }

  /* ===========================================================
   * PROJECTS
   * =========================================================== */
  let currentFilter = "Todos";

  function renderProjectFilters() {
    const wrap = $("#projects-filters");
    data.projectFilters.forEach((filter) => {
      const btn = el("button", "filter-btn", filter);
      btn.type = "button";
      btn.setAttribute("role", "tab");
      if (filter === currentFilter) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        currentFilter = filter;
        $all(".filter-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        applyProjectFilter();
      });
      wrap.appendChild(btn);
    });
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    data.projects.forEach((project) => {
      const card = el("article", "project-card");
      card.dataset.categories = project.categories.join(",");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ver detalhes do projeto ${project.name}`);

      card.innerHTML = `
        <div class="project-card__media"><span>&lt;/&gt; ${project.name}</span></div>
        <div class="project-card__body">
          <div class="project-card__top">
            <h3 class="project-card__name">${project.name}</h3>
            <span class="project-card__status">${project.status}</span>
          </div>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">
            ${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="project-card__foot">
            <span>${project.year}</span>
            <span class="project-card__links">
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Repositório no GitHub" onclick="event.stopPropagation()">${ICONS.github}</a>` : ""}
              ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração" onclick="event.stopPropagation()">↗</a>` : ""}
            </span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openProjectModal(project));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProjectModal(project);
        }
      });

      grid.appendChild(card);
    });
  }

  function applyProjectFilter() {
    $all(".project-card").forEach((card) => {
      const categories = card.dataset.categories.split(",");
      const show = currentFilter === "Todos" || categories.includes(currentFilter);
      card.classList.toggle("is-hidden", !show);
    });

    if (window.refreshProjectsCarousel) {
      window.refreshProjectsCarousel();
    }
  }

  function initProjectsCarousel() {
    const grid = $("#projects-grid");
    const prevBtn = $("#projects-prev");
    const nextBtn = $("#projects-next");
    const pagination = $("#projects-pagination");
    const container = $(".projects__carousel-container") || grid;

    if (!grid || !prevBtn || !nextBtn) return;

    let updateDots = () => {};
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 3500;

    const getVisibleCards = () => $all(".project-card:not(.is-hidden)", grid);

    const getStepWidth = () => {
      const visible = getVisibleCards();
      if (!visible.length) return grid.clientWidth;
      const cardWidth = visible[0].offsetWidth;
      const style = window.getComputedStyle(grid);
      const gap = parseFloat(style.gap) || 22;
      return cardWidth + gap;
    };

    const updateControls = () => {
      const visible = getVisibleCards();
      if (!visible.length) return;

      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const currentScroll = grid.scrollLeft;

      prevBtn.disabled = currentScroll <= 4 && maxScroll <= 0;
      nextBtn.disabled = currentScroll >= maxScroll - 4 && maxScroll <= 0;

      updateDots();
    };

    const setupPagination = () => {
      pagination.innerHTML = "";
      const visible = getVisibleCards();
      if (!visible.length) return;

      const numPages = Math.max(1, Math.ceil((grid.scrollWidth - 10) / grid.clientWidth));

      if (numPages <= 1) return;

      for (let i = 0; i < numPages; i++) {
        const dot = el("button", "pagination-dot");
        dot.type = "button";
        dot.setAttribute("aria-label", `Ir para página ${i + 1}`);
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", () => {
          grid.scrollTo({ left: i * grid.clientWidth, behavior: "smooth" });
          resetAutoplay();
        });
        pagination.appendChild(dot);
      }

      updateDots = () => {
        const dots = $all(".pagination-dot", pagination);
        if (!dots.length) return;
        const pageIndex = Math.min(dots.length - 1, Math.round(grid.scrollLeft / grid.clientWidth));
        dots.forEach((dot, idx) => {
          dot.classList.toggle("is-active", idx === pageIndex);
        });
      };
    };

    const advanceSlide = () => {
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const currentScroll = grid.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        grid.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        grid.scrollBy({ left: getStepWidth(), behavior: "smooth" });
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(advanceSlide, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    const resetAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    prevBtn.addEventListener("click", () => {
      const currentScroll = grid.scrollLeft;
      if (currentScroll <= 10) {
        grid.scrollTo({ left: grid.scrollWidth, behavior: "smooth" });
      } else {
        grid.scrollBy({ left: -getStepWidth(), behavior: "smooth" });
      }
      resetAutoplay();
    });

    nextBtn.addEventListener("click", () => {
      advanceSlide();
      resetAutoplay();
    });

    container.addEventListener("mouseenter", stopAutoplay);
    container.addEventListener("mouseleave", startAutoplay);
    container.addEventListener("touchstart", stopAutoplay, { passive: true });
    container.addEventListener("touchend", startAutoplay, { passive: true });

    grid.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", () => {
      setupPagination();
      updateControls();
    });

    window.refreshProjectsCarousel = () => {
      grid.scrollTo({ left: 0 });
      setTimeout(() => {
        setupPagination();
        updateControls();
        resetAutoplay();
      }, 50);
    };

    setTimeout(() => {
      setupPagination();
      updateControls();
      startAutoplay();
    }, 100);
  }

  /* ===========================================================
   * PROJECT MODAL
   * =========================================================== */
  function openProjectModal(project) {
    const modal = $("#project-modal");
    const content = $("#modal-content");

    content.innerHTML = `
      <h3 class="modal__title" id="modal-title">${project.name}</h3>
      <div class="modal__meta"><span>${project.year}</span><span>·</span><span>${project.status}</span></div>

      <div class="modal__body">
        <p>${project.fullDescription}</p>

        <div class="modal__section-title">Tecnologias</div>
        <div class="modal__tags">
          ${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>

        <div class="modal__section-title">Principais desafios</div>
        <p>${project.challenges}</p>

        <div class="modal__section-title">Aprendizados</div>
        <p>${project.learnings}</p>
      </div>

      <div class="modal__actions">
        ${project.github ? `<a class="btn btn--ghost" href="${project.github}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>` : ""}
        ${project.demo ? `<a class="btn btn--primary" href="${project.demo}" target="_blank" rel="noopener noreferrer">Ver Demo</a>` : ""}
      </div>
    `;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#modal-close").focus();
  }

  function closeProjectModal() {
    const modal = $("#project-modal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModal() {
    $("#modal-close").addEventListener("click", closeProjectModal);
    $("#modal-overlay").addEventListener("click", closeProjectModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProjectModal();
    });
  }

  /* ===========================================================
   * EXPERIENCE
   * =========================================================== */
  function renderExperience() {
    $("#experience-heading").textContent = data.experience.heading;
    const { current, personalProjectsNote } = data.experience;

    $("#experience-card").innerHTML = `
      <div class="experience__role">${current.role}</div>
      <div class="experience__company">${current.company}</div>
      <div class="experience__period">${current.period}</div>
      <ul class="experience__list">
        ${current.responsibilities.map((r) => `<li>${r}</li>`).join("")}
      </ul>
    `;

    $("#experience-note").textContent = personalProjectsNote;
  }

  /* ===========================================================
   * CERTIFICATES
   * =========================================================== */
  function renderCertificates() {
    $("#certificates-heading").textContent = data.certificates.heading;
    const grid = $("#certificates-grid");

    data.certificates.items.forEach((cert) => {
      const initials = cert.institution.slice(0, 2).toUpperCase();
      const card = el(
        "div",
        "certificate-card",
        `
        <div class="certificate-card__icon">${initials}</div>
        <div class="certificate-card__name">${cert.name}</div>
        <div class="certificate-card__institution">${cert.institution}</div>
        <p class="certificate-card__desc">${cert.description}</p>
        <div class="certificate-card__date">${cert.date}</div>
      `
      );
      grid.appendChild(card);
    });
  }

  /* ===========================================================
   * CONTACT
   * =========================================================== */
  function renderContact() {
    $("#contact-heading").textContent = data.contact.heading;
    $("#contact-description").textContent = data.contact.description;

    const linksWrap = $("#contact-links");
    const { socials } = data.profile;
    const linkEntries = [
      { key: "github", label: "GitHub", value: socials.github.replace("https://", ""), href: socials.github },
      { key: "linkedin", label: "LinkedIn", value: socials.linkedin.replace("https://", ""), href: socials.linkedin },
      { key: "email", label: "Email", value: socials.email, href: `mailto:${socials.email}` },
    ];

    linkEntries.forEach(({ key, label, value, href }) => {
      const a = el(
        "a",
        "contact__link",
        `
        <span class="contact__link-icon">${socialIconFor(key)}</span>
        <span>
          <span class="contact__link-label" style="display:block;">${label}</span>
          <span class="contact__link-value">${value}</span>
        </span>
      `
      );
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksWrap.appendChild(a);
    });
  }

  /* ---------------------------------------------------------
   * Validação de formulário (equivalente ao par
   * React Hook Form + Zod em uma versão HTML/CSS/JS puro)
   * --------------------------------------------------------- */
  function validateContactForm(values) {
    const errors = {};

    if (!values.name || values.name.trim().length < 3) {
      errors.name = "Informe seu nome (mínimo 3 caracteres).";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email || !emailPattern.test(values.email)) {
      errors.email = "Informe um email válido.";
    }

    if (!values.message || values.message.trim().length < 10) {
      errors.message = "Sua mensagem deve ter pelo menos 10 caracteres.";
    }

    return errors;
  }

  function initContactForm() {
    const form = $("#contact-form");
    const successEl = $("#contact-success");

    const fields = {
      name: { input: $("#field-name"), error: $("#error-name") },
      email: { input: $("#field-email"), error: $("#error-email") },
      message: { input: $("#field-message"), error: $("#error-message") },
    };

    const clearErrors = () => {
      Object.values(fields).forEach(({ input, error }) => {
        input.classList.remove("is-invalid");
        error.textContent = "";
      });
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      successEl.classList.remove("is-visible");
      clearErrors();

      const values = {
        name: fields.name.input.value,
        email: fields.email.input.value,
        message: fields.message.input.value,
      };

      const errors = validateContactForm(values);

      if (Object.keys(errors).length > 0) {
        Object.entries(errors).forEach(([key, message]) => {
          fields[key].input.classList.add("is-invalid");
          fields[key].error.textContent = message;
        });
        fields[Object.keys(errors)[0]].input.focus();
        return;
      }

      // Simula envio (sem back-end configurado neste projeto estático)
      successEl.classList.add("is-visible");
      form.reset();
      setTimeout(() => successEl.classList.remove("is-visible"), 5000);
    });

    Object.values(fields).forEach(({ input, error }) => {
      input.addEventListener("input", () => {
        input.classList.remove("is-invalid");
        error.textContent = "";
      });
    });
  }

  /* ===========================================================
   * FOOTER
   * =========================================================== */
  function renderFooter() {
    $("#footer-rights").textContent = `© ${new Date().getFullYear()} ${data.profile.name}. ${data.footer.rightsText}`;
    $("#footer-links-label").textContent = data.footer.quickLinksLabel;
    $("#footer-socials-label").textContent = data.footer.socialsLabel;

    const linksWrap = $("#footer-links");
    data.nav.forEach((item) => {
      linksWrap.appendChild(el("li", null, `<a href="${item.href}">${item.label}</a>`));
    });
  }

  /* ===========================================================
   * SCROLL REVEAL
   * =========================================================== */
  function initScrollReveal() {
    const targets = $all(".reveal");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
  }

  /* ===========================================================
   * SMOOTH SCROLL COM OFFSET DE NAVBAR
   * =========================================================== */
  function initAnchorScroll() {
    document.addEventListener("click", (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = $("#navbar").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    });
  }

  /* ===========================================================
   * INIT
   * =========================================================== */
  function init() {
    renderNav();
    renderHeroAndFooterSocials();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjectFilters();
    renderProjects();
    renderExperience();
    renderCertificates();
    renderContact();
    renderFooter();

    initNavbarScroll();
    initActiveLinkTracking();
    initMobileMenu();
    initModal();
    initContactForm();
    initScrollReveal();
    initAnchorScroll();
    initDynamicButtons();
    initProjectsCarousel();
    applyProjectFilter();
  }

  function initDynamicButtons() {
    document.addEventListener("mousemove", (e) => {
      const btn = e.target.closest(".btn, .filter-btn");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
