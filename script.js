/* script.js — JCFL Website */
(function () {
  'use strict';

  var LOGO_URL = 'https://i.ibb.co/23fPdtdF/OPv-Xht-Cx.jpg';

  /* ── Fix any broken logo images ── */
  function fixLogos() {
    var imgs = document.querySelectorAll('img[data-logo]');
    imgs.forEach(function (img) {
      img.onerror = function () { this.src = LOGO_URL; };
      if (!img.complete || img.naturalWidth === 0) { img.src = LOGO_URL; }
    });
  }

  /* ── Mobile Navigation Toggle ── */
  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu   = document.getElementById('mobile-menu');

  var ICON_OPEN  = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></svg>';
  var ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></svg>';

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen ? ICON_CLOSE : ICON_OPEN;
    });
  }

  /* ── Mobile Submenu Toggles ── */
  var mobileParentBtns = document.querySelectorAll('.mobile-menu-link[aria-haspopup="true"]');
  mobileParentBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var submenuId = btn.getAttribute('aria-controls');
      var submenu   = document.getElementById(submenuId);
      if (!submenu) return;
      var isOpen = submenu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      var chevron = btn.querySelector('.chevron');
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    });
  });

  /* ── Close mobile menu on outside click ── */
  document.addEventListener('click', function (e) {
    if (!mobileMenu || !mobileToggle) return;
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.innerHTML = ICON_OPEN;
    }
  });

  /* ── Desktop dropdown keyboard nav ── */
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    var link    = item.querySelector('.nav-link');
    var dropdown = item.querySelector('.dropdown');
    if (!dropdown || !link) return;

    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var shown = dropdown.style.display === 'block';
        dropdown.style.display = shown ? '' : 'block';
        link.setAttribute('aria-expanded', shown ? 'false' : 'true');
      }
      if (e.key === 'Escape') {
        dropdown.style.display = '';
        link.setAttribute('aria-expanded', 'false');
        link.focus();
      }
    });

    dropdown.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.style.display = '';
        link.setAttribute('aria-expanded', 'false');
        link.focus();
      }
    });
  });

  /* ── Fade-in on scroll ── */
  if ('IntersectionObserver' in window) {
    var fadeEls = document.querySelectorAll('.fade-in');
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(function (el) { fadeObs.observe(el); });
  }

  /* ── Contact form handler ── */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Message Sent';
        setTimeout(function () {
          btn.textContent = orig;
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      }, 1200);
    });
  }

  /* ── Active nav link ── */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.split('#')[0] === currentPath) {
      link.closest('.nav-item') && link.closest('.nav-item').classList.add('active');
    }
  });

  fixLogos();
})();
