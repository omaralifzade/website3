/* Main JS for:
   1) Mobile navbar toggle
   2) Projects accordion expand/collapse
*/

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupAccordion();
});

function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking outside
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

function setupAccordion() {
  const accordion = document.querySelector("[data-accordion]");
  if (!accordion) return;

  const items = accordion.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const panel = item.querySelector(".accordion-panel");
    const icon = item.querySelector(".accordion-icon");

    if (!header || !panel || !icon) return;

    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Toggle current item
      header.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
      icon.textContent = isExpanded ? "+" : "–";
    });
  });
}

// ===== Projects: toggle + lightbox =====
document.addEventListener("DOMContentLoaded", () => {
  setupProjectToggle();
  setupLightbox();
});

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
