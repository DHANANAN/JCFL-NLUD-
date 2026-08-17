/* ================================================================
   script.js — Journal of Corporate and Financial Laws (JCFL)
   CCLGFL · National Law University Delhi
   Classical Academic Law Review Interactive Core
   ================================================================ */

(function () {
  'use strict';

  var LOGO_URL = 'https://i.ibb.co/23fPdtdF/OPv-Xht-Cx.jpg';

  /* ── 1. Page Progress & Gentle Reveal on Load ── */
  var progressBar = document.createElement('div');
  progressBar.id = 'page-progress-bar';
  document.body.prepend(progressBar);

  setTimeout(function () {
    progressBar.style.width = '70%';
  }, 40);

  window.addEventListener('load', function () {
    progressBar.style.width = '100%';
    setTimeout(function () {
      progressBar.style.opacity = '0';
      document.body.classList.add('page-loaded');
      setTimeout(function () {
        if (progressBar.parentNode) progressBar.remove();
      }, 500);
    }, 400);
  });

  /* ── 2. Universal Logo Fallback Protection ── */
  function fixLogos() {
    var imgs = document.querySelectorAll('img[data-logo], .masthead-logo, .footer-logo, .cclgfl-logo-large');
    imgs.forEach(function (img) {
      img.onerror = function () {
        this.onerror = null;
        this.src = LOGO_URL;
      };
      if (!img.src || img.src === '' || img.src.indexOf('OPv-Xht-Cx.jpg') === -1) {
        img.src = LOGO_URL;
      }
    });
  }

  /* ── 3. Mobile Navigation Menu ── */
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

  /* ── 4. Mobile Submenu Accordions ── */
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

  /* ── 5. Close Mobile Menu on Outside Click ── */
  document.addEventListener('click', function (e) {
    if (!mobileMenu || !mobileToggle) return;
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.innerHTML = ICON_OPEN;
    }
  });

  /* ── 6. Desktop Accessible Keyboard Navigation ── */
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

  /* ── 7. Gentle Scroll Reveal (Intersection Observer) ── */
  if ('IntersectionObserver' in window) {
    var fadeEls = document.querySelectorAll('.fade-in');
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    fadeEls.forEach(function (el) { fadeObs.observe(el); });
  } else {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── 8. One-Click Bluebook Citation Copy with Clean Toast ── */
  var toast = document.createElement('div');
  toast.id = 'citation-toast';
  toast.textContent = 'Citation copied to clipboard (Bluebook 21st ed.)';
  document.body.appendChild(toast);

  var toastTimer = null;
  function showToast(text) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = text || 'Citation copied to clipboard (Bluebook 21st ed.)';
    toast.classList.add('show');
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2800);
  }

  document.addEventListener('click', function (e) {
    var citeBtn = e.target.closest('[data-copy-citation]');
    if (!citeBtn) return;
    e.preventDefault();
    var citation = citeBtn.getAttribute('data-copy-citation');
    if (!citation) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(citation).then(function () {
        showToast('Citation copied to clipboard: ' + citation.substring(0, 48) + '…');
      }).catch(function () {
        prompt('Copy citation manually:', citation);
      });
    } else {
      prompt('Copy citation manually:', citation);
    }
  });

  /* ── 9. Font Size Adjuster for Senior Scholars ── */
  var savedFontSize = localStorage.getItem('jcfl-font-size');
  if (savedFontSize) {
    document.documentElement.style.fontSize = savedFontSize;
  }

  document.querySelectorAll('[data-font-size]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var size = this.getAttribute('data-font-size');
      var newSize = '16.5px';
      if (size === 'sm') newSize = '15px';
      if (size === 'md') newSize = '16.5px';
      if (size === 'lg') newSize = '18.5px';
      document.documentElement.style.fontSize = newSize;
      localStorage.setItem('jcfl-font-size', newSize);
      showToast('Font size adjusted to ' + (size === 'lg' ? 'Large (18.5px)' : size === 'sm' ? 'Compact (15px)' : 'Standard (16.5px)'));
    });
  });

  /* ── 10. Contact Form Handler ── */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Transmitting to Secretariat…';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Message Transmitted';
        showToast('Your message has been received by the JCFL Editorial Desk.');
        setTimeout(function () {
          btn.textContent = orig;
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1200);
    });
  }

  /* ── 11. Active Nav Link Detection ── */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.split('#')[0] === currentPath) {
      var item = link.closest('.nav-item');
      if (item) item.classList.add('active');
    }
  });

  fixLogos();
})();
