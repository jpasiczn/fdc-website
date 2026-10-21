(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.querySelector('.nav-mobile-toggle');
  const menu   = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.contains('is-open');
      menu.classList.toggle('is-open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
      menu.setAttribute('aria-hidden', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

    // Close when a mobile link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
      });
    });
  }

  // Header shadow on scroll
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  // Fade-up scroll animations
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // No IntersectionObserver: just show everything
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      // Close all
      document.querySelectorAll('.faq-item.is-open').forEach(function (open) {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
