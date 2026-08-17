/* script.js — JCFL Website
   Minimal vanilla JS: navigation, dropdowns, mobile menu only. */

(function () {
  'use strict';

  /* ── Mobile Navigation Toggle ── */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu   = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></svg>';
    });
  }

  /* ── Mobile Submenu Toggles ── */
  const mobileParentBtns = document.querySelectorAll('.mobile-menu-link[aria-haspopup="true"]');
  mobileParentBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const submenuId = btn.getAttribute('aria-controls');
      const submenu   = document.getElementById(submenuId);
      if (!submenu) return;
      const isOpen = submenu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const chevron = btn.querySelector('.chevron');
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    });
  });

  /* ── Close mobile menu on outside click ── */
  document.addEventListener('click', function (e) {
    if (!mobileMenu || !mobileToggle) return;
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></svg>';
    }
  });

  /* ── Keyboard accessibility for desktop dropdowns ── */
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    const link    = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    if (!dropdown || !link) return;

    /* Ensure button semantics */
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');

    item.addEventListener('mouseenter', function () {
      dropdown.style.display = 'block';
      link.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('mouseleave', function () {
      dropdown.style.display = '';
      link.setAttribute('aria-expanded', 'false');
    });

    /* Keyboard: Enter/Space on the nav link toggles dropdown */
    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const shown = dropdown.style.display === 'block';
        dropdown.style.display = shown ? '' : 'block';
        link.setAttribute('aria-expanded', shown ? 'false' : 'true');
      }
      if (e.key === 'Escape') {
        dropdown.style.display = '';
        link.setAttribute('aria-expanded', 'false');
        link.focus();
      }
    });

    /* Trap focus within dropdown, Escape closes */
    dropdown.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.style.display = '';
        link.setAttribute('aria-expanded', 'false');
        link.focus();
      }
    });
  });

  /* ── Lazy load images below fold ── */
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[data-src]');
    const imgObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imgObs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(function (img) { imgObs.observe(img); });
  }

})();
