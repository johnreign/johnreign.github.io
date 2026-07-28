/* ============================================================
   John Reignel Bajao — Portfolio Interactions
   Vanilla JS only. No dependencies. No build step required.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* ----------------------------------------------------------
     1. DARK MODE TOGGLE
     Respects saved preference, falls back to system preference.
  ---------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  function applyTheme(theme) {
    htmlEl.classList.toggle('dark', theme === 'dark');
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const isDark = htmlEl.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });

  /* ----------------------------------------------------------
     2. MOBILE NAVIGATION (hamburger menu)
     Includes Escape-to-close and focus return to the trigger
     button for keyboard users.
  ---------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconHamburger = document.getElementById('icon-hamburger');
  const iconClose = document.getElementById('icon-close');

  function isMobileMenuOpen() {
    return !mobileMenu?.classList.contains('hidden');
  }

  function closeMobileMenu({ returnFocus = false } = {}) {
    mobileMenu?.classList.add('hidden');
    iconHamburger?.classList.remove('hidden');
    iconClose?.classList.add('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    if (returnFocus) {
      mobileMenuBtn?.focus();
    }
  }

  function openMobileMenu() {
    mobileMenu?.classList.remove('hidden');
    iconHamburger?.classList.add('hidden');
    iconClose?.classList.remove('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
  }

  mobileMenuBtn?.addEventListener('click', () => {
    isMobileMenuOpen() ? closeMobileMenu() : openMobileMenu();
  });

  // Close on Escape and return focus to the toggle button
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen()) {
      closeMobileMenu({ returnFocus: true });
    }
  });

  // Close mobile menu whenever a nav link is tapped
  document.querySelectorAll('#mobile-menu [data-nav]').forEach((link) => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  /* ----------------------------------------------------------
     3. SMOOTH SCROLLING
     (html has class="scroll-smooth" as a baseline; this adds
     an offset-aware scroll so the sticky header never covers
     the target section heading)
  ---------------------------------------------------------- */
  const HEADER_OFFSET = 80;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[data-nav]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top: targetPosition, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

      // Update the URL hash without an abrupt jump
      history.pushState(null, '', href);

      // Move focus to the target section for keyboard/screen-reader users
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ----------------------------------------------------------
     4/7. SCROLL-DEPENDENT UI (sticky header shadow + back-to-top)
     Combined into a single requestAnimationFrame-throttled
     scroll listener to minimize layout thrashing / reflow cost.
  ---------------------------------------------------------- */
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');
  let scrollTicking = false;

  function handleScrollEffects() {
    const y = window.scrollY;

    if (y > 12) {
      header?.classList.add('shadow-md', 'border-slate-200', 'dark:border-slate-800');
    } else {
      header?.classList.remove('shadow-md', 'border-slate-200', 'dark:border-slate-800');
    }

    if (y > 480) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }

    scrollTicking = false;
  }

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(handleScrollEffects);
      scrollTicking = true;
    }
  }

  handleScrollEffects(); // run once on load in case the page loads mid-scroll (e.g. back/forward nav)
  window.addEventListener('scroll', onScroll, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* ----------------------------------------------------------
     5. ACTIVE NAVIGATION HIGHLIGHTING
     Uses IntersectionObserver (no scroll-listener cost) to detect
     which section is in view and highlights the matching nav link.
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isMatch);
      if (isMatch) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveLink(visible.target.id);
      }
    },
    {
      root: null,
      rootMargin: '-30% 0px -55% 0px', // Bias toward the upper-middle of the viewport
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  /* ----------------------------------------------------------
     6. SCROLL REVEAL ANIMATIONS (fade-in-up)
     Applies to any element with the `.reveal` class. This is a
     pure progressive enhancement: the matching CSS only hides
     content when html.js is present (see inline <style> in
     index.html), so disabled/broken JS never hides content.
  ---------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = Math.min(index * 40, 200);
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: if IntersectionObserver isn't supported, just show everything.
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  /* ----------------------------------------------------------
     8. CONTACT FORM (front-end only — no backend wired up)
     Prevents default submission, shows a confirmation message,
     and resets the form. Replace this handler with a real
     fetch() call to your form backend / service when ready.
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    formStatus?.classList.remove('hidden');
    contactForm.reset();

    window.setTimeout(() => {
      formStatus?.classList.add('hidden');
    }, 6000);
  });
});
