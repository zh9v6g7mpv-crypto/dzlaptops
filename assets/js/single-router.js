/* =========================================================
   DZLaptops — single-file bundle logic
   (header/footer/views + router + theme + i18n glue)
   Depends on: I18N, applyLang, initLang (i18n.js) and
   ICON, SHOP, BRANDS (components.js constants).
   ========================================================= */
(function () {
  /* ---------- Chrome ---------- */
  function header() {
    const link = (view, key) =>
      `<a href="#${view}" data-view="${view}" data-i18n="nav.${key}">${key}</a>`;
    return `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a class="brand" href="#home" data-view="home" aria-label="DZLaptops home">
          ${ICON.laptop}<span>DZ<b>Laptops</b></span>
        </a>
        <div class="nav-links">
          ${link('home', 'home')}
          ${link('categories', 'categories')}
          ${link('contact', 'contact')}
        </div>
        <div class="nav-actions">
          <select class="lang-select" id="langSelect" aria-label="Language">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
          <button class="icon-btn" id="themeToggle" type="button" aria-pressed="false"
            data-i18n-aria="nav.theme" aria-label="Toggle theme">${ICON.sun}</button>
          <button class="icon-btn menu-toggle" id="menuToggle" type="button" aria-expanded="false"
            data-i18n-aria="nav.menu" aria-label="Menu">${ICON.menu}</button>
        </div>
      </div>
    </nav>`;
  }

  function footer() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="#home" data-view="home">${ICON.laptop}<span>DZ<b>Laptops</b></span></a>
            <p data-i18n="footer.about"></p>
            <div class="socials">
              <a href="${SHOP.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
              <a href="${SHOP.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a>
              <a href="https://wa.me/${SHOP.wa1}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.whatsapp}</a>
            </div>
          </div>
          <div>
            <h4 data-i18n="footer.links"></h4>
            <ul>
              <li><a href="#home" data-view="home" data-i18n="nav.home"></a></li>
              <li><a href="#categories" data-view="categories" data-i18n="nav.categories"></a></li>
              <li><a href="#contact" data-view="contact" data-i18n="nav.contact"></a></li>
              <li><a href="${SHOP.map}" target="_blank" rel="noopener" data-i18n="info.location.map"></a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="footer.contact"></h4>
            <ul>
              <li><a href="tel:${SHOP.phone1}">${SHOP.phone1}</a></li>
              <li><a href="tel:${SHOP.phone2}">${SHOP.phone2}</a></li>
              <li><a href="${SHOP.instagram}" target="_blank" rel="noopener">@dzlaptops</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="year"></span> DZLaptops · <span data-i18n="footer.rights"></span></span>
          <span>${ICON.pin} <span data-i18n="footer.made"></span></span>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- Reusable partials ---------- */
  const perksGrid = `
    <div class="grid grid-3">
      ${[
        ['shield', 'warranty'], ['clock', 'test'], ['truck', 'delivery'],
        ['bag', 'handbag'], ['plug', 'charger'], ['sparkles', 'authentic'],
      ].map(([icon, k]) => `
      <article class="card perk reveal">
        <div class="perk-icon" data-icon="${icon}"></div>
        <h3 data-i18n="perk.${k}.t"></h3>
        <p data-i18n="perk.${k}.d"></p>
      </article>`).join('')}
    </div>`;

  const hoursCard = (titleKey) => `
    <article class="card info-card reveal">
      <div class="perk-icon" data-icon="clock"></div>
      <h3 data-i18n="${titleKey}"></h3>
      <div class="hours-row"><span class="day" data-i18n="info.hours.days"></span><span class="time" data-i18n="info.hours.time"></span></div>
      <div class="hours-row"><span class="day" data-i18n="info.hours.friday"></span><span class="time badge-closed" data-i18n="info.hours.closed"></span></div>
    </article>`;

  const locationCard = (titleKey) => `
    <article class="card info-card reveal">
      <div class="perk-icon" data-icon="pin"></div>
      <h3 data-i18n="${titleKey}"></h3>
      <p style="font-size:1.15rem;font-weight:600;margin-bottom:6px;" data-i18n="info.location.city"></p>
      <p class="muted" data-i18n="info.location.d"></p>
      <a class="btn btn-ghost" style="margin-top:var(--space-4);" data-map>
        <span data-icon="pin" class="inline-icon"></span><span data-i18n="info.location.map"></span>
      </a>
    </article>`;

  const banner = `
    <section><div class="container"><div class="banner reveal">
      <h2 data-i18n="banner.title"></h2>
      <p data-i18n="banner.sub"></p>
      <div class="hero-cta">
        <a class="btn btn-primary btn-lg" href="#contact" data-view="contact" data-i18n="banner.cta1"></a>
        <a class="btn btn-ghost btn-lg" href="#categories" data-view="categories" data-i18n="banner.cta2"></a>
      </div>
    </div></div></section>`;

  /* ---------- Views ---------- */
  const VIEWS = {
    home: `
      <header class="hero">
        <div class="container">
          <p class="eyebrow" data-i18n="hero.eyebrow"></p>
          <h1><span data-i18n="hero.title1"></span><br><span class="hero-gradient-text" data-i18n="hero.title2"></span></h1>
          <p class="lead" data-i18n="hero.lead"></p>
          <div class="hero-cta">
            <a class="btn btn-primary btn-lg" href="#categories" data-view="categories" data-i18n="hero.cta1"></a>
            <a class="btn btn-ghost btn-lg" href="#contact" data-view="contact" data-i18n="hero.cta2"></a>
          </div>
          <div class="hero-visual reveal" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>
          </div>
        </div>
      </header>
      <section><div class="container">
        <div class="section-head reveal">
          <p class="eyebrow" data-i18n="perks.eyebrow"></p>
          <h2 data-i18n="perks.title"></h2>
          <p data-i18n="perks.sub"></p>
        </div>${perksGrid}
      </div></section>
      <section style="background:var(--bg-elevated);"><div class="container">
        <div class="section-head reveal">
          <p class="eyebrow" data-i18n="brands.eyebrow"></p>
          <h2 data-i18n="brands.title"></h2>
          <p data-i18n="brands.sub"></p>
        </div>
        <div class="brand-grid reveal" id="brandPreview"></div>
        <div style="text-align:center;margin-top:var(--space-6);">
          <a class="btn btn-primary" href="#categories" data-view="categories">
            <span data-i18n="brands.viewall"></span><span data-icon="arrow" class="inline-icon"></span>
          </a>
        </div>
      </div></section>
      <section><div class="container">
        <div class="section-head reveal"><p class="eyebrow" data-i18n="info.eyebrow"></p><h2 data-i18n="info.title"></h2></div>
        <div class="info-grid">${hoursCard('info.hours.t')}${locationCard('info.location.t')}</div>
      </div></section>
      ${banner}`,

    categories: `
      <header class="page-header"><div class="container">
        <p class="eyebrow" data-i18n="brands.eyebrow"></p>
        <h1 data-i18n="cat.title"></h1>
        <p data-i18n="cat.sub"></p>
      </div></header>
      <section style="padding-top:var(--space-4);"><div class="container">
        <div class="brand-grid reveal" id="brandGrid"></div>
        <p class="muted reveal" style="text-align:center;margin-top:var(--space-6);max-width:620px;margin-inline:auto;" data-i18n="cat.note"></p>
        <div style="text-align:center;margin-top:var(--space-5);">
          <a class="btn btn-primary" href="#contact" data-view="contact" data-i18n="hero.cta2"></a>
        </div>
      </div></section>
      ${banner}`,

    contact: `
      <header class="page-header"><div class="container">
        <p class="eyebrow" data-i18n="nav.contact"></p>
        <h1 data-i18n="contact.title"></h1>
        <p data-i18n="contact.sub"></p>
      </div></header>
      <section style="padding-top:var(--space-4);"><div class="container">
        <div class="contact-grid reveal" id="contactGrid"></div>
      </div></section>
      <section style="background:var(--bg-elevated);"><div class="container">
        <div class="info-grid">${locationCard('contact.visit.t')}${hoursCard('contact.hours.t')}</div>
      </div></section>
      <section><div class="container">
        <div class="section-head reveal"><p class="eyebrow" data-i18n="perks.eyebrow"></p><h2 data-i18n="perks.title"></h2></div>
        ${perksGrid}
      </div></section>`,
  };

  /* ---------- Dynamic population ---------- */
  function waLink(number, brand) {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const msg = {
      en: brand ? `Hi DZLaptops, do you have ${brand} laptops available?` : 'Hi DZLaptops, I would like some information.',
      fr: brand ? `Bonjour DZLaptops, avez-vous des PC portables ${brand} disponibles ?` : 'Bonjour DZLaptops, je souhaite quelques informations.',
      ar: brand ? `مرحباً DZLaptops، هل تتوفر لديكم حواسيب ${brand}؟` : 'مرحباً DZLaptops، أرغب في بعض المعلومات.',
    }[lang];
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  function brandCards(list) {
    return list.map((b) => `
      <a class="brand-card" href="${waLink(SHOP.wa1, b)}" target="_blank" rel="noopener" data-brand="${b}">
        <div class="brand-logo">${ICON.laptop}</div>
        <div class="brand-name">${b}</div>
        <div class="brand-sub" data-i18n="brands.cta"></div>
      </a>`).join('');
  }

  function populate(scope) {
    scope.querySelectorAll('[data-icon]').forEach((el) => {
      const n = el.getAttribute('data-icon');
      if (ICON[n]) el.innerHTML = ICON[n];
    });
    scope.querySelectorAll('[data-map]').forEach((a) => {
      a.setAttribute('href', SHOP.map); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener');
    });
    const preview = scope.querySelector('#brandPreview');
    if (preview) preview.innerHTML = brandCards(BRANDS.slice(0, 5));
    const full = scope.querySelector('#brandGrid');
    if (full) full.innerHTML = brandCards(BRANDS);
    const cg = scope.querySelector('#contactGrid');
    if (cg) {
      const cards = [
        { icon: 'phone', label: 'contact.phone1', value: SHOP.phone1, href: `tel:${SHOP.phone1}` },
        { icon: 'phone', label: 'contact.phone2', value: SHOP.phone2, href: `tel:${SHOP.phone2}` },
        { icon: 'whatsapp', label: 'contact.wa', value: SHOP.phone1, href: waLink(SHOP.wa1) },
        { icon: 'whatsapp', label: 'contact.wa', value: SHOP.phone2, href: waLink(SHOP.wa2) },
        { icon: 'instagram', label: 'contact.ig', value: '@dzlaptops', href: SHOP.instagram },
        { icon: 'facebook', label: 'contact.fb', value: '@dzlaptops', href: SHOP.facebook },
      ];
      cg.innerHTML = cards.map((c) => `
        <a class="card contact-card" href="${c.href}" ${c.href.startsWith('tel:') ? '' : 'target="_blank" rel="noopener"'}>
          <div class="perk-icon">${ICON[c.icon]}</div>
          <div class="c-body"><span class="c-label" data-i18n="${c.label}"></span><span class="c-value">${c.value}</span></div>
        </a>`).join('');
    }
  }

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('dz-theme', theme); } catch (e) {}
    const btn = document.getElementById('themeToggle');
    if (btn) { btn.setAttribute('aria-pressed', theme === 'dark'); btn.innerHTML = theme === 'dark' ? ICON.sun : ICON.moon; }
  }

  /* ---------- Router ---------- */
  const META = { home: 'meta.home', categories: 'meta.categories', contact: 'meta.contact' };
  function currentView() {
    const h = (location.hash || '#home').replace('#', '');
    return VIEWS[h] ? h : 'home';
  }
  function showView(name) {
    document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + name));
    document.querySelectorAll('.nav-links a[data-view]').forEach((a) =>
      a.classList.toggle('active', a.getAttribute('data-view') === name));
    const active = document.getElementById('view-' + name);
    if (active) {
      active.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      const dict = I18N[document.documentElement.getAttribute('lang') || 'en'];
      if (dict && dict[META[name]]) document.title = dict[META[name]];
    }
    window.scrollTo(0, 0);
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('site-header').innerHTML = header();
    const app = document.getElementById('app');
    app.innerHTML = Object.keys(VIEWS)
      .map((k) => `<section class="view" id="view-${k}">${VIEWS[k]}</section>`).join('');
    document.getElementById('site-footer').innerHTML = footer();

    populate(document);
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    /* theme + language */
    let theme;
    try { theme = localStorage.getItem('dz-theme'); } catch (e) {}
    if (!theme) theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(theme);
    initLang();

    document.getElementById('themeToggle').addEventListener('click', () => {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    document.getElementById('langSelect').addEventListener('change', (e) => {
      applyLang(e.target.value);
      populate(document);        // refresh WhatsApp prefills + icons for new language
      applyLang(e.target.value); // re-apply text to freshly rendered nodes
    });

    /* mobile menu */
    const nav = document.getElementById('nav');
    const mt = document.getElementById('menuToggle');
    mt.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      mt.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('.nav-links a').forEach((a) =>
      a.addEventListener('click', () => { nav.classList.remove('open'); mt.setAttribute('aria-expanded', 'false'); }));

    /* router */
    showView(currentView());
    window.addEventListener('hashchange', () => showView(currentView()));
  });
})();
