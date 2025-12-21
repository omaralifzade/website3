---
layout: default
title: Projects
---

<section class="section">
  <h1 class="page-title">Projects</h1>
  <p class="page-subtitle">
    One highlighted project (click to expand details and zoom the image).
  </p>

  <article class="project-card" data-project>
    <header class="project-head">
      <div>
        <p class="project-kicker">Project 1</p>
        <h2 class="project-name">How does hardware work?</h2>
      </div>

      <button
        class="project-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="p1-details"
      >
        <span class="toggle-text">Show details</span>
        <span class="toggle-icon" aria-hidden="true">▾</span>
      </button>
    </header>

    <div class="project-preview">
      <p class="project-summary">
        I prototyped fundamental logic gates (NOT, AND, OR) using breadboards and integrated circuits to observe real-world digital signal behavior. This project bridged the gap between theoretical logic design and physical circuit implementation.
      </p>

      <div class="project-actions">
        <a
          class="btn"
          href="https://youtu.be/SkQbOcOEohQ?si=uFB-AONvCIYH4fy2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
 HEAD

        <!-- Optional: add your repo link here later -->
        <a
          class="btn btn-ghost"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >
          Project Repo (optional)
        </a>
 e3ffccd (Final enhancements)
      </div>
    </div>

    <div class="project-details" id="p1-details" hidden>
      <div class="project-grid-2">
        <div class="card">
          <h3 class="section-title" style="margin-top:0;">What I did</h3>
          <ul class="list">
            <li>Built basic logic gates using breadboards and ICs.</li>
            <li>Tested inputs/outputs to understand digital signal behavior.</li>
            <li>Connected physical implementation to logic design concepts.</li>
          </ul>

          <div class="note">
            Add your team info, tools, and extra gates (XOR/NOR) if you want.
          </div>
        </div>

        <figure class="project-figure card">
          <button
            class="img-btn"
            type="button"
            data-open-lightbox
            aria-label="Open project image"
          >
            <img
              class="project-image"
              src="{{ '/assets/images/project1.jpeg' | relative_url }}"
              alt="Project 1 screenshot"
              loading="lazy"
            />
          </button>
          <figcaption class="photo-hint">
            Click the image to zoom.
          </figcaption>
        </figure>
      </div>
    </div>
  </article>

  <div class="lightbox" data-lightbox hidden>
    <div class="lightbox-backdrop" data-close-lightbox></div>

HEAD
    <div
      class="lightbox-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Project image preview"
    >
      <button class="lightbox-close" type="button" data-close-lightbox aria-label="Close">
        ✕
      </button>

    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Project image preview">
      <button class="lightbox-close" type="button" data-close-lightbox aria-label="Close">✕</button>
 e3ffccd (Final enhancements)

      <img
        class="lightbox-img"
        src="{{ '/assets/images/project1.jpeg' | relative_url }}"
        alt="Project 1 screenshot enlarged"
        loading="lazy"
      />
    </div>
  </div>
</section>
