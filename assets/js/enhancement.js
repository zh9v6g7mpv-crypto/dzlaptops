/* =========================================================
   DZLaptops — progressive enhancement for the STATIC bundle.
   The HTML already contains all content; this only adds
   theme toggle, language switching, view routing and menu.
   Depends on: I18N, applyLang, initLang (i18n.js).
   ========================================================= */
(function () {
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var META = { home: 'meta.home', categories: 'meta.categories', contact: 'meta.contact' };

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('dz-theme', theme); } catch (e) {}
    var btn = document.getElementById('themeToggle');
    if (btn) { btn.setAttribute('aria-pressed', theme === 'dark'); btn.innerHTML = theme === 'dark' ? SUN : MOON; }
  }

  /* Re-localize the prefilled WhatsApp messages when language changes */
  function waMessage(lang, brand) {
    return ({
      en: brand ? 'Hi DZLaptops, do you have ' + brand + ' laptops available?' : 'Hi DZLaptops, I would like some information.',
      fr: brand ? 'Bonjour DZLaptops, avez-vous des PC portables ' + brand + ' disponibles ?' : 'Bonjour DZLaptops, je souhaite quelques informations.',
      ar: brand ? 'مرحباً DZLaptops، هل تتوفر لديكم حواسيب ' + brand + '؟' : 'مرحباً DZLaptops، أرغب في بعض المعلومات.',
    })[lang];
  }
  function updateWaLinks(lang) {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
      var m = a.getAttribute('href').match(/wa\.me\/(\d+)/);
      if (!m) return;
      var brand = a.getAttribute('data-brand') || '';
      a.setAttribute('href', 'https://wa.me/' + m[1] + '?text=' + encodeURIComponent(waMessage(lang, brand)));
    });
  }

  function currentView() {
    var h = (location.hash || '#home').replace('#', '');
    return document.getElementById('view-' + h) ? h : 'home';
  }
  function showView(name) {
    var views = document.querySelectorAll('.view');
    views.forEach(function (v) { v.classList.toggle('active', v.id === 'view-' + name); });
    document.querySelectorAll('.nav-links a[data-view], .footer a[data-view]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-view') === name);
    });
    var active = document.getElementById('view-' + name);
    if (active) {
      active.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
      var dict = I18N[document.documentElement.getAttribute('lang') || 'en'];
      if (dict && dict[META[name]]) document.title = dict[META[name]];
    }
    window.scrollTo(0, 0);
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* theme */
    var theme;
    try { theme = localStorage.getItem('dz-theme'); } catch (e) {}
    if (!theme) theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(theme);

    /* language */
    initLang();
    updateWaLinks(document.documentElement.getAttribute('lang') || 'en');

    var tt = document.getElementById('themeToggle');
    if (tt) tt.addEventListener('click', function () {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    var ls = document.getElementById('langSelect');
    if (ls) ls.addEventListener('change', function (e) {
      applyLang(e.target.value);
      updateWaLinks(e.target.value);
    });

    /* mobile menu */
    var nav = document.getElementById('nav');
    var mt = document.getElementById('menuToggle');
    if (nav && mt) {
      mt.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        mt.setAttribute('aria-expanded', open);
      });
      nav.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () { nav.classList.remove('open'); mt.setAttribute('aria-expanded', 'false'); });
      });
    }

    /* routing */
    showView(currentView());
    window.addEventListener('hashchange', function () { showView(currentView()); });
  });
})();
