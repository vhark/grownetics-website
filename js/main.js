/* ─── Grownetics Website — main.js ─── */

/* ── Nav: solid parchment bg always. No logo swap. ── */
const nav = document.getElementById('top-nav');

// Force solid immediately — nav is always light bg, dark logo
nav?.classList.remove('nav-dark');
nav?.classList.add('nav-light', 'scrolled');

// Keep scrolled class (shadow) when user scrolls past 20px
const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Mobile menu ── */
const hamburger   = document.getElementById('nav-hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

hamburger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));
mobileMenu?.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Smooth scroll ── */
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

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  }),
  { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Guide form ── */
document.getElementById('guide-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('guide-email')?.value?.trim();
  if (!email) return;
  fetch('https://go.growneticsos.com/form/submit?formId=2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    body: JSON.stringify({ mauticform: { email, source: '5-problems-guide' } })
  }).catch(() => {});
  this.style.display = 'none';
  document.getElementById('guide-success').style.display = 'block';
});

/* ── Demo form ── */
document.getElementById('submit-btn')?.addEventListener('click', () => {
  const email = document.getElementById('email')?.value?.trim();
  if (!email || !email.includes('@')) { document.getElementById('email')?.focus(); return; }
  const payload = {
    fname:     document.getElementById('fname')?.value,
    lname:     document.getElementById('lname')?.value,
    email,
    sqft:      document.getElementById('sqft')?.value,
    system:    document.getElementById('system')?.value,
    challenge: document.getElementById('challenge')?.value,
  };
  fetch('https://go.growneticsos.com/form/submit?formId=1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    body: JSON.stringify({ mauticform: payload })
  }).catch(() => {});
  document.querySelector('.contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
});
