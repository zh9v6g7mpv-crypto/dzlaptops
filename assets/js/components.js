/* =========================================================
   DZLaptops — shared chrome (nav + footer) + shop data
   Injected into #site-header / #site-footer on each page.
   ========================================================= */

const SHOP = {
  phone1: '0552425776',
  phone2: '0558553652',
  wa1: '213552425776',
  wa2: '213558553652',
  instagram: 'https://instagram.com/dzlaptops',
  facebook: 'https://facebook.com/dzlaptops',
  map: 'https://goo.gl/maps/xFQfuoDeWHXN9hqJ9',
};

/* Laptop brands (name-based cards; models on request) */
const BRANDS = [
  'Lenovo', 'HP', 'Dell', 'Asus', 'Huawei',
  'MacBook', 'Microsoft', 'Samsung', 'MSI', 'Acer',
];

/* ---- SVG icon set (Lucide-style, currentColor) ---- */
const ICON = {
  laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h11v11H2z"/><path d="M13 8h4l4 4v4h-8"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2M15 8V2"/><path d="M18 8H6v3a6 6 0 0 0 12 0z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.7 1.8L21.5 17.5 19.7 18.2 19 20l-.7-1.8L16.5 17.5l1.8-.7z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.9 2z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.5-.3z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1 1 12 20z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
};

function buildHeader(active) {
  const link = (page, key, label) =>
    `<a href="${page}"${active === key ? ' class="active"' : ''} data-i18n="nav.${key}">${label}</a>`;

  return `
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a class="brand" href="index.html" aria-label="DZLaptops home">
        <span class="mark">${ICON.laptop}</span><span>DZ<b>Laptops</b></span>
      </a>
      <div class="nav-links">
        ${link('index.html', 'home', 'Home')}
        ${link('categories.html', 'categories', 'Brands')}
        ${link('contact.html', 'contact', 'Contact')}
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

function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html"><span class="mark">${ICON.laptop}</span><span>DZ<b>Laptops</b></span></a>
          <p data-i18n="footer.about">Premium laptops in Oran, Algeria.</p>
          <div class="socials">
            <a href="${SHOP.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
            <a href="${SHOP.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a>
            <a href="https://wa.me/${SHOP.wa1}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.whatsapp}</a>
          </div>
        </div>
        <div>
          <h4 data-i18n="footer.links">Explore</h4>
          <ul>
            <li><a href="index.html" data-i18n="nav.home">Home</a></li>
            <li><a href="categories.html" data-i18n="nav.categories">Brands</a></li>
            <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
            <li><a href="${SHOP.map}" target="_blank" rel="noopener" data-i18n="info.location.map">Open in Maps</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer.contact">Contact</h4>
          <ul>
            <li><a href="tel:${SHOP.phone1}">${SHOP.phone1}</a></li>
            <li><a href="tel:${SHOP.phone2}">${SHOP.phone2}</a></li>
            <li><a href="${SHOP.instagram}" target="_blank" rel="noopener">@dzlaptops</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> DZLaptops · <span data-i18n="footer.rights">All rights reserved.</span></span>
        <span>${ICON.pin} <span data-i18n="footer.made">Oran, Algeria</span></span>
      </div>
    </div>
  </footer>`;
}

/* Inject chrome immediately (script runs at end of <body>) */
(function injectChrome() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const active = document.body.getAttribute('data-page') || '';
  if (header) header.innerHTML = buildHeader(active);
  if (footer) footer.innerHTML = buildFooter();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
