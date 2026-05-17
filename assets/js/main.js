// Prolair — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Remove unresolved attribute (reveal page after load) ─
  document.body.removeAttribute('unresolved');

  // ── Header hide on scroll down / show on scroll up ──────
  const headerContainer = document.querySelector('.header-container');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    // Só esconde depois de rolar mais que a própria altura do header
    if (scrollingDown && currentScrollY > 116) {
      headerContainer.classList.add('hidden');
    } else {
      headerContainer.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // ── Mobile menu toggle ───────────────────────────────────
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
    });
  }

  // ── Hero crossfade ───────────────────────────────────────
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // ── Footer year ──────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});