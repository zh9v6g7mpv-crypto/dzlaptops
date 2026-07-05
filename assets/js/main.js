/* =========================================================
   DZLaptops — interactions: theme, menu, language, reveal
   ========================================================= */

/* ---- Theme (light/dark) ---- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('dz-theme', theme); } catch (e) {}
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.setAttribute('aria-pressed', theme === 'dark');
    // Show the icon of the mode you'll switch TO
    if (typeof ICON !== 'undefined') {
      btn.innerHTML = theme === 'dark' ? ICON.sun : ICON.moon;
    }
  }
}

function initTheme() {
  let theme;
  try { theme = localStorage.getItem('dz-theme'); } catch (e) {}
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(theme);
}

/* Run theme + language ASAP to avoid flash */
initTheme();
if (typeof initLang === 'function') initLang();

document.addEventListener('DOMContentLoaded', () => {
  /* Theme toggle */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* Language select */
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => applyLang(e.target.value));
  }

  /* Mobile menu */
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  if (nav && menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('.nav-links a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }
});
