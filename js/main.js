;(function () {
  "use strict"

  const $ = (sel, ctx = document) => ctx.querySelector(sel)
  const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel))


  function initNavbarScroll() {
    const navbar = $("#navbar")
    if (!navbar) return
    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
  }

  function initActiveLinkTracking() {
    const sections = $all("section[id]").filter(Boolean)
    const navLinks = $all("#navbar-list a, #mobile-menu-list a")

    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${id}`,
        )
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
  }

  function initMobileMenu() {
    const toggle = $("#navbar-toggle")
    const menu = $("#mobile-menu")
    const overlay = $("#mobile-menu-overlay")

    if (!toggle || !menu || !overlay) return

    const closeMenu = () => {
      menu.classList.remove("is-open")
      overlay.classList.remove("is-open")
      toggle.setAttribute("aria-expanded", "false")
      menu.setAttribute("aria-hidden", "true")
    }

    const openMenu = () => {
      menu.classList.add("is-open")
      overlay.classList.add("is-open")
      toggle.setAttribute("aria-expanded", "true")
      menu.setAttribute("aria-hidden", "false")
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open")
      isOpen ? closeMenu() : openMenu()
    })

    overlay.addEventListener("click", closeMenu)
    $all("#mobile-menu-list a").forEach((a) =>
      a.addEventListener("click", closeMenu),
    )
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu()
    })
  }

  let currentFilter = "Todos"

  function initProjectFilters() {
    const filterBtns = $all("#projects-filters .filter-btn")
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter || btn.textContent.trim()
        currentFilter = filter
        filterBtns.forEach((b) => b.classList.remove("is-active"))
        btn.classList.add("is-active")
        applyProjectFilter()
      })
    })
  }

  function applyProjectFilter() {
    $all(".project-card").forEach((card) => {
      const categories = (card.dataset.categories || "")
        .split(",")
        .map((c) => c.trim())
      const show =
        currentFilter === "Todos" || categories.includes(currentFilter)
      card.classList.toggle("is-hidden", !show)
    })

    if (window.refreshProjectsCarousel) {
      window.refreshProjectsCarousel()
    }
  }

  function initProjectsCarousel() {
    const grid = $("#projects-grid")
    const prevBtn = $("#projects-prev")
    const nextBtn = $("#projects-next")
    const pagination = $("#projects-pagination")
    const container = $(".projects__carousel-container") || grid

    if (!grid) return

    let updateDots = () => {}
    let autoplayTimer = null

    const getVisibleCards = () => $all(".project-card:not(.is-hidden)", grid)

    const getStepWidth = () => {
      const visible = getVisibleCards()
      if (!visible.length) return grid.clientWidth
      const cardWidth = visible[0].offsetWidth
      const style = window.getComputedStyle(grid)
      const gap = parseFloat(style.gap) || 22
      return cardWidth + gap
    }

    const updateControls = () => {
      const visible = getVisibleCards()
      if (!visible.length) return

      if (prevBtn && nextBtn) {
        const maxScroll = grid.scrollWidth - grid.clientWidth
        const currentScroll = Math.ceil(grid.scrollLeft)
        prevBtn.disabled = currentScroll <= 4 && maxScroll <= 0
        nextBtn.disabled = currentScroll >= maxScroll - 4 && maxScroll <= 0
      }

      updateDots()
    }

    const setupPagination = () => {
      if (!pagination) return
      pagination.innerHTML = ""
      const visible = getVisibleCards()
      if (!visible.length) return

      const maxScroll = grid.scrollWidth - grid.clientWidth
      if (maxScroll <= 10) {
        pagination.style.display = "none"
        return
      }
      pagination.style.display = "flex"

      const step = getStepWidth()
      const numDots = visible.length

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("button")
        dot.className = "pagination-dot"
        dot.type = "button"
        dot.setAttribute("aria-label", `Ir para projeto ${i + 1}`)
        if (i === 0) dot.classList.add("is-active")
        dot.addEventListener("click", () => {
          const targetLeft = Math.min(maxScroll, i * step)
          grid.scrollTo({ left: targetLeft, behavior: "smooth" })
          resetAutoplay()
        })
        pagination.appendChild(dot)
      }

      updateDots = () => {
        const dots = $all(".pagination-dot", pagination)
        if (!dots.length) return
        const step = getStepWidth()
        const pageIndex = Math.min(
          dots.length - 1,
          Math.round(grid.scrollLeft / step),
        )
        dots.forEach((dot, idx) => {
          dot.classList.toggle("is-active", idx === pageIndex)
        })
      }
    }

    const advanceSlide = () => {
      const visible = getVisibleCards()
      if (visible.length <= 1) return

      const maxScroll = grid.scrollWidth - grid.clientWidth
      const currentScroll = Math.ceil(grid.scrollLeft)
      const step = getStepWidth()

      if (currentScroll >= maxScroll - 15 || maxScroll <= 0) {
        grid.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        grid.scrollTo({
          left: Math.min(maxScroll, currentScroll + step),
          behavior: "smooth",
        })
      }
    }

    const startAutoplay = () => {
      stopAutoplay()
      autoplayTimer = setInterval(advanceSlide, AUTOPLAY_INTERVAL)
    }

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer)
        autoplayTimer = null
      }
    }

    const resetAutoplay = () => {
      stopAutoplay()
      startAutoplay()
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const maxScroll = grid.scrollWidth - grid.clientWidth
        const currentScroll = Math.ceil(grid.scrollLeft)
        const step = getStepWidth()

        if (currentScroll <= 15) {
          grid.scrollTo({ left: maxScroll, behavior: "smooth" })
        } else {
          grid.scrollTo({
            left: Math.max(0, currentScroll - step),
            behavior: "smooth",
          })
        }
        resetAutoplay()
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        advanceSlide()
        resetAutoplay()
      })
    }

    container.addEventListener("mouseenter", stopAutoplay)
    container.addEventListener("mouseleave", startAutoplay)
    container.addEventListener("touchstart", stopAutoplay, { passive: true })
    container.addEventListener("touchend", startAutoplay, { passive: true })

    grid.addEventListener("scroll", updateControls, { passive: true })
    window.addEventListener("resize", () => {
      setupPagination()
      updateControls()
    })

    window.refreshProjectsCarousel = () => {
      grid.scrollTo({ left: 0 })
      setTimeout(() => {
        setupPagination()
        updateControls()
        resetAutoplay()
      }, 50)
    }

    setTimeout(() => {
      setupPagination()
      updateControls()
      startAutoplay()
    }, 200)
  }

  function openProjectModal(card) {
    const modal = $("#project-modal")
    const content = $("#modal-content")
    const template = card.querySelector("template.project-modal-template")

    if (!modal || !content || !template) return

    content.innerHTML = template.innerHTML

    modal.classList.add("is-open")
    modal.setAttribute("aria-hidden", "false")
    document.body.style.overflow = "hidden"
    $("#modal-close").focus()
  }

  function closeProjectModal() {
    const modal = $("#project-modal")
    if (!modal) return
    modal.classList.remove("is-open")
    modal.setAttribute("aria-hidden", "true")
    document.body.style.overflow = ""
  }

  function initModal() {
    $all(".project-card").forEach((card) => {
      card.addEventListener("click", () => openProjectModal(card))
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openProjectModal(card)
        }
      })
    })

    const closeBtn = $("#modal-close")
    const overlay = $("#modal-overlay")

    if (closeBtn) closeBtn.addEventListener("click", closeProjectModal)
    if (overlay) overlay.addEventListener("click", closeProjectModal)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProjectModal()
    })
  }

  function initCertificateModal() {
    const modal = document.getElementById("certificate-modal")
    const modalImage = document.getElementById("certificate-modal-image")
    const closeButton = document.getElementById("certificate-modal-close")
    const overlay = document.getElementById("certificate-modal-overlay")
    const modalTitle = document.getElementById("certificate-modal-title")
    const modalInstitution = document.getElementById("certificate-modal-institution")
    const externalLink = document.getElementById("certificate-modal-external-link")
    const imageWrapper = modal ? modal.querySelector(".certificate-modal__image-wrapper") : null

    if (!modal || !modalImage) return

    const openModal = (card) => {
      const certificateSrc = card.getAttribute("data-certificate")
      const credentialUrl = card.getAttribute("data-credential-url") || certificateSrc
      const cardTitle = card.querySelector(".certificate-card__name")?.textContent?.trim() || "Certificado"
      const cardInst = card.querySelector(".certificate-card__institution")?.textContent?.trim() || ""

      if (!certificateSrc) return

      if (modalTitle) modalTitle.textContent = cardTitle
      if (modalInstitution) modalInstitution.textContent = cardInst

      if (externalLink) {
        if (credentialUrl) {
          externalLink.href = credentialUrl
          externalLink.style.display = "inline-flex"
        } else {
          externalLink.style.display = "none"
        }
      }

      if (imageWrapper) imageWrapper.classList.add("is-loading")
      modalImage.onload = () => {
        if (imageWrapper) imageWrapper.classList.remove("is-loading")
      }
      modalImage.onerror = () => {
        if (imageWrapper) imageWrapper.classList.remove("is-loading")
      }

      modalImage.src = certificateSrc
      modalImage.alt = `Certificado - ${cardTitle}`

      modal.classList.add("is-open")
      modal.setAttribute("aria-hidden", "false")
      document.body.style.overflow = "hidden"
      closeButton?.focus()
    }

    const closeModal = () => {
      modal.classList.remove("is-open")
      modal.setAttribute("aria-hidden", "true")
      document.body.style.overflow = ""
      setTimeout(() => {
        if (!modal.classList.contains("is-open")) {
          modalImage.src = ""
        }
      }, 300)
    }

    const certificateCards = document.querySelectorAll(".certificate-card")
    certificateCards.forEach((card) => {
      card.addEventListener("click", () => openModal(card))
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openModal(card)
        }
      })
    })

    if (closeButton) closeButton.addEventListener("click", closeModal)
    if (overlay) overlay.addEventListener("click", closeModal)

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal()
      }
    })
  }

  function validateContactForm(values) {
    const errors = {}

    if (!values.name || values.name.trim().length < 3) {
      errors.name = "Informe seu nome (mínimo 3 caracteres)."
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!values.email || !emailPattern.test(values.email)) {
      errors.email = "Informe um email válido."
    }

    if (!values.message || values.message.trim().length < 10) {
      errors.message = "Sua mensagem deve ter pelo menos 10 caracteres."
    }

    return errors
  }

  function initContactForm() {
  const form = $("#contact-form")
  const successEl = $("#contact-success")

  if (!form) return

  const fields = {
    name: {
      input: $("#field-name"),
      error: $("#error-name"),
    },
    email: {
      input: $("#field-email"),
      error: $("#error-email"),
    },
    message: {
      input: $("#field-message"),
      error: $("#error-message"),
    },
  }

  const clearErrors = () => {
    Object.values(fields).forEach(({ input, error }) => {
      if (input) input.classList.remove("is-invalid")
      if (error) error.textContent = ""
    })
  }

  form.addEventListener("submit", (e) => {
    clearErrors()

    if (successEl) {
      successEl.classList.remove("is-visible")
    }

    const values = {
      name: fields.name.input ? fields.name.input.value : "",
      email: fields.email.input ? fields.email.input.value : "",
      message: fields.message.input ? fields.message.input.value : "",
    }

    const errors = validateContactForm(values)

    if (Object.keys(errors).length > 0) {
      e.preventDefault()

      Object.entries(errors).forEach(([key, message]) => {
        if (fields[key].input) {
          fields[key].input.classList.add("is-invalid")
        }

        if (fields[key].error) {
          fields[key].error.textContent = message
        }
      })

      const firstError = Object.keys(errors)[0]

      if (fields[firstError].input) {
        fields[firstError].input.focus()
      }

      return
    }

  })

  Object.values(fields).forEach(({ input, error }) => {
    if (input) {
      input.addEventListener("input", () => {
        input.classList.remove("is-invalid")

        if (error) {
          error.textContent = ""
        }
      })
    }
  })
}

  function initScrollReveal() {
    const targets = $all(".reveal")
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )
    targets.forEach((t) => observer.observe(t))
  }

  function initAnchorScroll() {
    document.addEventListener("click", (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute("href").slice(1)
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const navbar = $("#navbar")
      const navHeight = navbar ? navbar.offsetHeight : 0
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight + 1
      window.scrollTo({ top, behavior: "smooth" })
      history.pushState(null, "", `#${id}`)
    })
  }

  function initDynamicButtons() {
    document.addEventListener("mousemove", (e) => {
      const btn = e.target.closest(".btn, .filter-btn")
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      btn.style.setProperty("--x", `${x}px`)
      btn.style.setProperty("--y", `${y}px`)
    })
  }

  function init() {
    initNavbarScroll()
    initActiveLinkTracking()
    initMobileMenu()
    initProjectFilters()
    initModal()
    initCertificateModal()
    initContactForm()
    initScrollReveal()
    initAnchorScroll()
    initDynamicButtons()
    initProjectsCarousel()
    applyProjectFilter()
  }

  document.addEventListener("DOMContentLoaded", init)
})()



function equalizeCertificateCards() {
  const cards = document.querySelectorAll(".certificate-card");

  if (!cards.length) return;

  cards.forEach((card) => {
    card.style.height = "auto";
  });

  let maxHeight = 0;

  cards.forEach((card) => {
    const height = card.offsetHeight;

    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}


window.addEventListener("load", equalizeCertificateCards);


window.addEventListener("resize", equalizeCertificateCards);