/* =========================================================
   DZLaptops — per-page population (icons, brands, contact)
   Runs after components.js (ICON/BRANDS/SHOP) and i18n.js,
   before main.js applies translations.
   ========================================================= */
(function () {
  /* Fill inline SVG icons by name */
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (ICON[name]) el.innerHTML = ICON[name];
  });

  /* Map buttons */
  document.querySelectorAll('#mapBtn, [data-map]').forEach((a) => {
    a.setAttribute('href', SHOP.map);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  /* WhatsApp prefill helper */
  function waLink(number, brand) {
    const lang = (document.documentElement.getAttribute('lang')) || 'en';
    const msg = {
      en: brand ? `Hi DZLaptops, do you have ${brand} laptops available?` : 'Hi DZLaptops, I would like some information.',
      fr: brand ? `Bonjour DZLaptops, avez-vous des PC portables ${brand} disponibles ?` : 'Bonjour DZLaptops, je souhaite quelques informations.',
      ar: brand ? `مرحباً DZLaptops، هل تتوفر لديكم حواسيب ${brand}؟` : 'مرحباً DZLaptops، أرغب في بعض المعلومات.',
    }[lang];
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  /* Brand cards (preview = first 5, full = all) */
  function renderBrands(container, list) {
    container.innerHTML = list
      .map(
        (b) => `
      <a class="brand-card" href="${waLink(SHOP.wa1, b)}" target="_blank" rel="noopener" data-brand="${b}">
        <div class="brand-logo">${ICON.laptop}</div>
        <div class="brand-name">${b}</div>
        <div class="brand-sub" data-i18n="brands.cta">Laptops</div>
      </a>`
      )
      .join('');
  }

  const preview = document.getElementById('brandPreview');
  if (preview) renderBrands(preview, BRANDS.slice(0, 5));

  const full = document.getElementById('brandGrid');
  if (full) renderBrands(full, BRANDS);

  /* Contact page cards */
  const contactGrid = document.getElementById('contactGrid');
  if (contactGrid) {
    const cards = [
      { icon: 'phone', label: 'contact.phone1', value: SHOP.phone1, href: `tel:${SHOP.phone1}` },
      { icon: 'phone', label: 'contact.phone2', value: SHOP.phone2, href: `tel:${SHOP.phone2}` },
      { icon: 'whatsapp', label: 'contact.wa', value: SHOP.phone1, href: waLink(SHOP.wa1) },
      { icon: 'whatsapp', label: 'contact.wa', value: SHOP.phone2, href: waLink(SHOP.wa2) },
      { icon: 'instagram', label: 'contact.ig', value: '@dzlaptops', href: SHOP.instagram },
      { icon: 'facebook', label: 'contact.fb', value: '@dzlaptops', href: SHOP.facebook },
    ];
    contactGrid.innerHTML = cards
      .map(
        (c) => `
      <a class="card contact-card" href="${c.href}" ${c.href.startsWith('tel:') ? '' : 'target="_blank" rel="noopener"'}>
        <div class="perk-icon">${ICON[c.icon]}</div>
        <div class="c-body">
          <span class="c-label" data-i18n="${c.label}">${c.label}</span>
          <span class="c-value">${c.value}</span>
        </div>
      </a>`
      )
      .join('');
  }
})();
