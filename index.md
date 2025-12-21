---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-grid">
    <div class="hero-card">
      <h1 class="hero-title">Hi, I’m Omar!</h1>
      <p class="hero-text">
        I’m a second-year Computer Engineering student. This website is my personal portfolio for the SITE 1101 Information Systems course.
      </p>

      <div class="hero-actions">
        <a class="btn" href="{{ '/projects' | relative_url }}">View Project</a>
        <a class="btn btn-ghost" href="{{ '/about' | relative_url }}">About Me</a>
      </div>

      <div class="mini-links">
        <a href="https://github.com/omaralifzade" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="dot">•</span>
        <a href="https://www.codecademy.com/profiles/bit5357681408" target="_blank" rel="noopener noreferrer">Codecademy</a>
        <span class="dot">•</span>
        <a href="https://github.com/omaralifzade/website3" target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
    </div>

    <div class="photo-card">
      <img class="profile-photo" src="{{ '/assets/images/profile.jpeg' | relative_url }}" alt="Profile photo" />
      <p class="photo-hint"></p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Quick Summary</h2>
  <div class="cards">
    <div class="card">
      <h3>What I study</h3>
      <p>Computer Engineering and Information Systems fundamentals.</p>
    </div>
    <div class="card">
      <h3>What I build</h3>
      <p>Clean, modular websites using Git/GitHub and Jekyll.</p>
    </div>
    <div class="card">
      <h3>Contact</h3>
      <p>Use the Contact page to reach me via email or LinkedIn.</p>
    </div>
  </div>
</section>
