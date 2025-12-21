// Main JS
// 1) Mobile navbar toggle
// 2) Project card expand/collapse
// 3) Lightbox modal
// 4) Dark/Light theme toggle

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupProjectToggle();
  setupLightbox();
  setupThemeToggle();
});

function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const clickedInside = nav.contains(target) || menuBtn.contains(target);
    if (!clickedInside && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

function setupProjectToggle() {
  const card = document.querySelector("[data-project]");
  if (!card) return;

  const btn = card.querySelector(".project-toggle");
  const text = card.querySelector(".toggle-text");
  const details = card.querySelector(".project-details");
  if (!btn || !text || !details) return;

  btn.addEventListener("click", () => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isExpanded));
    details.hidden = isExpanded;

    card.classList.toggle("is-open", !isExpanded);
    text.textContent = isExpanded ? "Show details" : "Hide details";
  });
}

function setupLightbox() {
  const lightbox = document.querySelector("[data-lightbox]");
  const openBtn = document.querySelector("[data-open-lightbox]");
  if (!lightbox || !openBtn) return;

  const closeButtons = lightbox.querySelectorAll("[data-close-lightbox]");
  const close = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };

  const open = () => {
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };

  openBtn.addEventListener("click", open);
  closeButtons.forEach((btn) => btn.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.hidden && e.key === "Escape") close();
  });
}

function setupThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (prefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }
}
