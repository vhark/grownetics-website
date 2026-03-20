/* ─── Grownetics Website — main.js ─── */

/* ── Scroll nav ── */
const nav = document.getElementById('top-nav');
const logoImg = document.getElementById('nav-logo-img');
const onScroll = () => {
  const scrolled = window.scrollY > 24;
  nav?.classList.toggle('scrolled', scrolled);
  if (logoImg) logoImg.src = scrolled ? 'images/logo-black.png' : 'images/logo-white.png';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Mobile menu ── */
const hamburger   = document.getElementById('nav-hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

hamburger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));

// Close on mobile link tap
mobileMenu?.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 16, behavior: 'smooth' });
    mobileMenu?.classList.remove('open');
  });
});

/* ── Demo form ── */
const form      = document.querySelector('.contact-form');
const submitBtn = document.getElementById('submit-btn');
const success   = document.getElementById('form-success');

submitBtn?.addEventListener('click', () => {
  const email = document.getElementById('email')?.value?.trim();
  if (!email || !email.includes('@')) {
    document.getElementById('email')?.focus();
    return;
  }

  // Collect form data
  const payload = {
    fname:     document.getElementById('fname')?.value,
    lname:     document.getElementById('lname')?.value,
    email,
    sqft:      document.getElementById('sqft')?.value,
    system:    document.getElementById('system')?.value,
    challenge: document.getElementById('challenge')?.value,
  };

  // Mautic submit — update formId to actual Grownetics Mautic form
  fetch('https://go.grownetics.com/form/submit?formId=1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    body: JSON.stringify({ mauticform: payload })
  }).catch(() => {}); // graceful fail — show success either way

  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
});
