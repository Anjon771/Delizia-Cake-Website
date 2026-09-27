/*==========================================================================
  DELIZIA HAUTE PÂTISSERIE — INTERACTIVE STOREFRONT CONTROLLER
==========================================================================*/

const PRODUCTS = [
  // Strawberry
  {
    id: 'straw-1',
    category: 'strawberry',
    categoryLabel: 'Strawberry',
    name: 'Strawberry Shortcake',
    servings: '8–10 Servings',
    price: 28.00,
    img: 'assets/img/product-strawberry-1.png',
    desc: 'Macerated Huaral valley strawberries layered with Madagascar vanilla bean chantilly and tender almond genoise.'
  },
  {
    id: 'straw-2',
    category: 'strawberry',
    categoryLabel: 'Strawberry',
    name: 'Fresh Strawberry Cream',
    servings: '10–12 Servings',
    price: 32.00,
    img: 'assets/img/product-strawberry-2.png',
    desc: 'Whipped mascarpone diplomate cream, wild strawberry compote, and light buttermilk sponge brushed with berry syrup.'
  },
  {
    id: 'straw-3',
    category: 'strawberry',
    categoryLabel: 'Strawberry',
    name: 'Strawberry Delight Cake',
    servings: '12–14 Servings',
    price: 34.00,
    img: 'assets/img/product-strawberry-3.png',
    desc: 'Ruby strawberry mirror glaze over strawberry mousseline, pistachio biscuit, and crisp white chocolate pearls.'
  },
  // Vanilla
  {
    id: 'van-1',
    category: 'vanilla',
    categoryLabel: 'Vanilla',
    name: 'Classic Vanilla Bean Cake',
    servings: '8–10 Servings',
    price: 26.00,
    img: 'assets/img/product-vanilla-1.png',
    desc: 'Infused with double-fold Madagascar Bourbon vanilla pods, silky Swiss meringue buttercream, and golden crumb.'
  },
  {
    id: 'van-2',
    category: 'vanilla',
    categoryLabel: 'Vanilla',
    name: 'Vanilla Buttercream Cake',
    servings: '10–12 Servings',
    price: 30.00,
    img: 'assets/img/product-vanilla-2.png',
    desc: 'Cultured pasture butter frosting, caramelized white chocolate ganache drip, and toasted almond financier base.'
  },
  {
    id: 'van-3',
    category: 'vanilla',
    categoryLabel: 'Vanilla',
    name: 'Soft Vanilla Sponge Cake',
    servings: '8–10 Servings',
    price: 27.50,
    img: 'assets/img/product-vanilla-3.png',
    desc: 'Cloud-light Japanese-style soufflé sponge with Tahiti vanilla bean custard and delicate powdered sugar finish.'
  },
  // Chocolate
  {
    id: 'choc-1',
    category: 'chocolate',
    categoryLabel: 'Chocolate',
    name: 'Chocolate Fudge Cake',
    servings: '10–12 Servings',
    price: 33.00,
    img: 'assets/img/product-chocolate-1.png',
    desc: '70% Quillabamba single-origin dark chocolate ganache, moist espresso-kissed cacao sponge, and fudge ribbons.'
  },
  {
    id: 'choc-2',
    category: 'chocolate',
    categoryLabel: 'Chocolate',
    name: 'Dark Chocolate Velvet Cake',
    servings: '12–14 Servings',
    price: 36.00,
    img: 'assets/img/product-chocolate-2.png',
    desc: 'Velvety dark chocolate crémeux, hazelnut feuilletine crunch, and hand-tempered dark chocolate curls.'
  },
  {
    id: 'choc-3',
    category: 'chocolate',
    categoryLabel: 'Chocolate',
    name: 'Triple Chocolate Cake',
    servings: '12–16 Servings',
    price: 38.00,
    img: 'assets/img/product-chocolate-3.png',
    desc: 'Three distinct tiers of dark, milk, and caramelized blonde chocolate mousses over flourless cacao biscuit.'
  },
  // Dried fruit & Nut
  {
    id: 'nut-1',
    category: 'dried-fruit',
    categoryLabel: 'Dried Fruit & Nut',
    name: 'Peanut And Banana Cake',
    servings: '8–10 Servings',
    price: 29.00,
    img: 'assets/img/product-dried-fruit-1.png',
    desc: 'Caramelized organic Isla banana sponge, roasted peanut praline buttercream, and dark cacao nibs.'
  },
  {
    id: 'nut-2',
    category: 'dried-fruit',
    categoryLabel: 'Dried Fruit & Nut',
    name: 'Filled Walnut Cake',
    servings: '10–12 Servings',
    price: 31.50,
    img: 'assets/img/product-dried-fruit-2.png',
    desc: 'Toasted walnut dacquoise layered with aged rum-plumped golden raisins and brown butter mousseline.'
  },
  {
    id: 'nut-3',
    category: 'dried-fruit',
    categoryLabel: 'Dried Fruit & Nut',
    name: 'Glazed Pecan Cake',
    servings: '10–12 Servings',
    price: 34.50,
    img: 'assets/img/product-dried-fruit-3.png',
    desc: 'Candied Ica pecans, warm spiced maple caramel glaze, and tender brown-sugar pecan crumb.'
  },
  // Others / Petit & Citrus
  {
    id: 'oth-1',
    category: 'others',
    categoryLabel: 'Petit & Citrus',
    name: 'Chocolate Brownie',
    servings: '6–8 Servings',
    price: 19.50,
    img: 'assets/img/product-others-1.png',
    desc: 'Fudgy single-estate cacao torte crowned with whipped dulcede leche ganache and flaky Maras sea salt.'
  },
  {
    id: 'oth-2',
    category: 'others',
    categoryLabel: 'Petit & Citrus',
    name: 'Cream Cupcake',
    servings: 'Box of 6',
    price: 22.00,
    img: 'assets/img/product-others-2.png',
    desc: 'Assorted artisanal cupcakes piped with Madagascar vanilla chantilly, berry compote centers, and edible petals.'
  },
  {
    id: 'oth-3',
    category: 'others',
    categoryLabel: 'Petit & Citrus',
    name: 'Lemon Cake',
    servings: '8–10 Servings',
    price: 27.00,
    img: 'assets/img/product-others-3.png',
    desc: 'Zesty Meyer lemon curd, olive-oil citrus sponge, and torched Italian meringue rosettes.'
  }
];

/*=============== STATE ===============*/
let activeCategory = 'all';
let searchQuery = '';
let sortMode = 'featured';
let cart = [
  {
    key: 'straw-1__6" Classic (8–10 Guests)__',
    id: 'straw-1',
    name: 'Strawberry Shortcake',
    size: '6" Classic (8–10 Guests)',
    inscription: '',
    unitPrice: 28.00,
    qty: 1,
    img: 'assets/img/product-strawberry-1.png'
  }
];

let currentPdpProduct = PRODUCTS[0];
let currentPdpMultiplier = 1;
let currentPdpSizeLabel = '6" Classic (8–10 Guests)';
let currentPdpQty = 1;

const FREE_DELIVERY_THRESHOLD = 45.00;
const DELIVERY_FEE = 6.00;

/*=============== MOBILE NAVIGATION ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}
if (navClose && navMenu) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('show-menu');
  });
});

const openBespokeBtn = document.getElementById('open-bespoke-btn');
if (openBespokeBtn) {
  openBespokeBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  });
}

/*=============== HEADER & SCROLL UP ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;
  window.scrollY >= 30 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

const scrollUp = () => {
  const scrollUpEl = document.getElementById('scroll-up');
  if (!scrollUpEl) return;
  window.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll') : scrollUpEl.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== ACTIVE SECTION LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
    if (link) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SWIPER CAROUSELS ===============*/
if (typeof Swiper !== 'undefined') {
  const heroTitleEl = document.getElementById('hero-cake-title');
  const heroNoteEl = document.getElementById('hero-cake-note');
  const heroPriceEl = document.getElementById('hero-cake-price');
  const heroIndexEl = document.getElementById('hero-slide-index');
  const heroOrderBtn = document.getElementById('hero-order-btn');

  let activeHeroCake = {
    id: 'hero-1',
    name: 'Velvet Berry Couronne',
    price: 34.00,
    img: 'assets/img/home-cake-1.png'
  };

  const homeSwiper = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: '#hero-prev',
      nextEl: '#hero-next'
    },
    on: {
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        if (!activeSlide) return;
        const id = activeSlide.getAttribute('data-cake-id') || 'hero-1';
        const title = activeSlide.getAttribute('data-cake-title') || 'Velvet Berry Couronne';
        const note = activeSlide.getAttribute('data-cake-note') || '';
        const price = parseFloat(activeSlide.getAttribute('data-cake-price') || '34');
        const img = activeSlide.getAttribute('data-cake-img') || 'assets/img/home-cake-1.png';
        const realIdx = (this.realIndex ?? 0) + 1;

        activeHeroCake = { id, name: title, price, img };

        if (heroTitleEl) heroTitleEl.textContent = title;
        if (heroNoteEl) heroNoteEl.textContent = note;
        if (heroPriceEl) heroPriceEl.textContent = `$${price.toFixed(2)}`;
        if (heroIndexEl) heroIndexEl.textContent = `0${realIdx} / 04`;
      }
    }
  });

  if (heroOrderBtn) {
    heroOrderBtn.addEventListener('click', () => {
      addToCart({
        id: activeHeroCake.id,
        name: activeHeroCake.name,
        size: '8" Signature Centerpiece (10–12 Guests)',
        inscription: '',
        unitPrice: activeHeroCake.price,
        qty: 1,
        img: activeHeroCake.img
      });
      openCartDrawer();
    });
  }

  new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: '#new-next',
      prevEl: '#new-prev'
    }
  });
}

/*=============== RENDER PRODUCT CATALOG ===============*/
const productGrid = document.getElementById('product-grid');
const productEmpty = document.getElementById('product-empty');
const categoryButtons = document.querySelectorAll('.product__button');
const searchInput = document.getElementById('product-search-input');
const sortSelect = document.getElementById('product-sort-select');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

function getFilteredProducts() {
  let list = PRODUCTS.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (sortMode === 'price-asc') {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price-desc') {
    list = [...list].sort((a, b) => b.price - a.price);
  } else if (sortMode === 'name-asc') {
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

function renderCatalog() {
  if (!productGrid) return;
  const items = getFilteredProducts();

  if (items.length === 0) {
    productGrid.innerHTML = '';
    if (productEmpty) productEmpty.hidden = false;
    return;
  }

  if (productEmpty) productEmpty.hidden = true;

  productGrid.innerHTML = items.map(item => `
    <article class="product__card" data-id="${item.id}">
      <div class="product__image-wrap" data-quickview="${item.id}">
        <img src="${item.img}" alt="${item.name}" class="product__img" referrerpolicy="no-referrer">
        <span class="product__quickview-hint">Customize &amp; Inspect</span>
      </div>
      <div class="product__body">
        <div class="product__meta">
          <span>${item.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>${item.servings}</span>
        </div>
        <h3 class="product__name" data-quickview="${item.id}">${item.name}</h3>
        <p class="product__tasting">${item.desc}</p>
        <div class="product__footer">
          <span class="product__price">$${item.price.toFixed(2)}</span>
          <div class="product__actions">
            <button type="button" class="product__inspect-btn" data-quickview="${item.id}">
              Customize
            </button>
            <button type="button" class="product__cart" data-add-id="${item.id}" aria-label="Add ${item.name} to bag">
              <i class="ri-add-line"></i>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.getAttribute('data-category') || 'all';
    categoryButtons.forEach(b => {
      b.classList.remove('active-tab');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active-tab');
    btn.setAttribute('aria-selected', 'true');
    renderCatalog();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderCatalog();
  });
}

if (sortSelect) {
  sortSelect.addEventListener('change', e => {
    sortMode = e.target.value;
    renderCatalog();
  });
}

if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    activeCategory = 'all';
    searchQuery = '';
    sortMode = 'featured';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';
    categoryButtons.forEach(b => {
      const isAll = b.getAttribute('data-category') === 'all';
      b.classList.toggle('active-tab', isAll);
      b.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });
    renderCatalog();
  });
}

/*=============== PDP MODAL (QUICK VIEW & CUSTOMIZE) ===============*/
const pdpModal = document.getElementById('pdp-modal');
const pdpClose = document.getElementById('pdp-close');
const pdpImg = document.getElementById('pdp-img');
const pdpCategory = document.getElementById('pdp-category');
const pdpTitle = document.getElementById('pdp-title');
const pdpPrice = document.getElementById('pdp-price');
const pdpDesc = document.getElementById('pdp-desc');
const pdpSizeGroup = document.getElementById('pdp-size-group');
const pdpInscription = document.getElementById('pdp-inscription');
const pdpQtyMinus = document.getElementById('pdp-qty-minus');
const pdpQtyPlus = document.getElementById('pdp-qty-plus');
const pdpQtyVal = document.getElementById('pdp-qty-val');
const pdpAddBtn = document.getElementById('pdp-add-btn');

function updatePdpPriceDisplay() {
  if (!pdpPrice || !currentPdpProduct) return;
  const unit = +(currentPdpProduct.price * currentPdpMultiplier).toFixed(2);
  const total = (unit * currentPdpQty).toFixed(2);
  pdpPrice.textContent = `$${total}`;
}

function openPdpModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod || !pdpModal) return;

  currentPdpProduct = prod;
  currentPdpMultiplier = 1;
  currentPdpSizeLabel = '6" Classic (8–10 Guests)';
  currentPdpQty = 1;

  if (pdpImg) {
    pdpImg.src = prod.img;
    pdpImg.alt = prod.name;
  }
  if (pdpCategory) pdpCategory.textContent = prod.categoryLabel;
  if (pdpTitle) pdpTitle.textContent = prod.name;
  if (pdpDesc) pdpDesc.textContent = prod.desc;
  if (pdpInscription) pdpInscription.value = '';
  if (pdpQtyVal) pdpQtyVal.textContent = '1';

  if (pdpSizeGroup) {
    const sizeBtns = pdpSizeGroup.querySelectorAll('.pdp__size-btn');
    sizeBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === 0);
    });
  }

  updatePdpPriceDisplay();
  pdpModal.classList.add('is-open');
  pdpModal.setAttribute('aria-hidden', 'false');
}

function closePdpModal() {
  if (!pdpModal) return;
  pdpModal.classList.remove('is-open');
  pdpModal.setAttribute('aria-hidden', 'true');
}

if (pdpClose) pdpClose.addEventListener('click', closePdpModal);
if (pdpModal) {
  pdpModal.addEventListener('click', e => {
    if (e.target === pdpModal) closePdpModal();
  });
}

if (pdpSizeGroup) {
  pdpSizeGroup.addEventListener('click', e => {
    const btn = e.target.closest('.pdp__size-btn');
    if (!btn) return;
    pdpSizeGroup.querySelectorAll('.pdp__size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPdpMultiplier = parseFloat(btn.getAttribute('data-multiplier') || '1');
    currentPdpSizeLabel = btn.getAttribute('data-size-label') || '6" Classic';
    updatePdpPriceDisplay();
  });
}

if (pdpQtyMinus) {
  pdpQtyMinus.addEventListener('click', () => {
    if (currentPdpQty > 1) {
      currentPdpQty--;
      if (pdpQtyVal) pdpQtyVal.textContent = String(currentPdpQty);
      updatePdpPriceDisplay();
    }
  });
}

if (pdpQtyPlus) {
  pdpQtyPlus.addEventListener('click', () => {
    currentPdpQty++;
    if (pdpQtyVal) pdpQtyVal.textContent = String(currentPdpQty);
    updatePdpPriceDisplay();
  });
}

if (pdpAddBtn) {
  pdpAddBtn.addEventListener('click', () => {
    if (!currentPdpProduct) return;
    const unitPrice = +(currentPdpProduct.price * currentPdpMultiplier).toFixed(2);
    const inscription = pdpInscription ? pdpInscription.value.trim() : '';
    addToCart({
      id: currentPdpProduct.id,
      name: currentPdpProduct.name,
      size: currentPdpSizeLabel,
      inscription,
      unitPrice,
      qty: currentPdpQty,
      img: currentPdpProduct.img
    });
    closePdpModal();
    openCartDrawer();
  });
}

/*=============== DELEGATED PRODUCT GRID CLICKS ===============*/
if (productGrid) {
  productGrid.addEventListener('click', e => {
    const quickViewTrigger = e.target.closest('[data-quickview]');
    if (quickViewTrigger) {
      openPdpModal(quickViewTrigger.getAttribute('data-quickview'));
      return;
    }

    const addTrigger = e.target.closest('[data-add-id]');
    if (addTrigger) {
      const id = addTrigger.getAttribute('data-add-id');
      const prod = PRODUCTS.find(p => p.id === id);
      if (!prod) return;
      addToCart({
        id: prod.id,
        name: prod.name,
        size: '6" Classic (8–10 Guests)',
        inscription: '',
        unitPrice: prod.price,
        qty: 1,
        img: prod.img
      });
      addTrigger.classList.add('is-added');
      const span = addTrigger.querySelector('span');
      if (span) span.textContent = 'Added';
      setTimeout(() => {
        addTrigger.classList.remove('is-added');
        if (span) span.textContent = 'Add';
      }, 900);
    }
  });
}

/*=============== SEASONAL / NEW CREATIONS ADD TO BAG ===============*/
document.querySelectorAll('[data-add-new]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-add-new');
    const name = btn.getAttribute('data-name') || 'Seasonal Cake';
    const price = parseFloat(btn.getAttribute('data-price') || '36');
    const img = btn.getAttribute('data-img') || 'assets/img/new-cake-1.png';

    addToCart({
      id,
      name,
      size: '8" Seasonal Edition (12 Guests)',
      inscription: '',
      unitPrice: price,
      qty: 1,
      img
    });
    openCartDrawer();
  });
});

/*=============== BESPOKE CAKE CONFIGURATOR ===============*/
const bespokeForm = document.getElementById('bespoke-form');
const bespokeSize = document.getElementById('bespoke-size');
const bespokeFilling = document.getElementById('bespoke-filling');
const bespokeLivePrice = document.getElementById('bespoke-live-price');
const bespokeDate = document.getElementById('bespoke-date');
const bespokeFeedback = document.getElementById('bespoke-feedback');

if (bespokeDate) {
  const minDate = new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0];
  bespokeDate.min = minDate;
  bespokeDate.value = minDate;
}

function computeBespokePrice() {
  if (!bespokeSize) return 48;
  let base = parseFloat(bespokeSize.value || '48');
  if (bespokeFilling && bespokeFilling.value.includes('+$6')) {
    base += 6;
  }
  if (bespokeLivePrice) {
    bespokeLivePrice.textContent = `$${base.toFixed(2)}`;
  }
  return base;
}

if (bespokeSize) bespokeSize.addEventListener('change', computeBespokePrice);
if (bespokeFilling) bespokeFilling.addEventListener('change', computeBespokePrice);

if (bespokeForm) {
  bespokeForm.addEventListener('submit', e => {
    e.preventDefault();
    const occasion = document.getElementById('bespoke-occasion')?.value || 'Celebration';
    const selectedOpt = bespokeSize?.options[bespokeSize.selectedIndex];
    const sizeLabel = selectedOpt?.getAttribute('data-label') || '6" Classic Tier';
    const sponge = document.getElementById('bespoke-sponge')?.value || 'Vanilla Bean';
    const filling = bespokeFilling?.value.replace(' (+$6)', '') || 'Strawberry';
    const inscription = document.getElementById('bespoke-inscription')?.value.trim() || '';
    const dateVal = bespokeDate?.value || '';
    const price = computeBespokePrice();

    addToCart({
      id: `bespoke-${Date.now()}`,
      name: `Bespoke ${occasion} Cake`,
      size: `${sizeLabel} · ${sponge} · ${filling}${dateVal ? ` ·For ${dateVal}` : ''}`,
      inscription,
      unitPrice: price,
      qty: 1,
      img: 'assets/img/home-cake-1.png'
    });

    if (bespokeFeedback) {
      bespokeFeedback.textContent = 'Added custom tier to your bag ✓';
      setTimeout(() => { bespokeFeedback.textContent = ''; }, 3000);
    }
    openCartDrawer();
  });
}

/*=============== CART & CHECKOUT DRAWER ===============*/
const cartDrawer = document.getElementById('cart-drawer');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartCountEl = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const cartEmptyState = document.getElementById('cart-empty-state');
const cartShippingNote = document.getElementById('cart-shipping-note');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
const cartTotalEl = document.getElementById('cart-total');

const cartItemsView = document.getElementById('cart-items-view');
const cartCheckoutView = document.getElementById('cart-checkout-view');
const cartConfirmedView = document.getElementById('cart-confirmed-view');
const cartFooter = document.getElementById('cart-footer');
const cartProceedBtn = document.getElementById('cart-proceed-btn');
const cartBackToBag = document.getElementById('cart-back-to-bag');
const cartNewOrderBtn = document.getElementById('cart-new-order-btn');

function showCartStep(step) {
  if (!cartItemsView || !cartCheckoutView || !cartConfirmedView || !cartFooter) return;
  cartItemsView.hidden = step !== 'bag';
  cartCheckoutView.hidden = step !== 'checkout';
  cartConfirmedView.hidden = step !== 'confirmed';
  cartFooter.hidden = step === 'confirmed' || (step === 'bag' && cart.length === 0);
  if (cartProceedBtn) {
    cartProceedBtn.hidden = step !== 'bag';
  }
}

function openCartDrawer() {
  if (!cartDrawer) return;
  showCartStep('bag');
  renderCart();
  cartDrawer.classList.add('is-open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('is-open');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

if (cartToggle) cartToggle.addEventListener('click', openCartDrawer);
if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
if (cartDrawer) {
  cartDrawer.addEventListener('click', e => {
    if (e.target === cartDrawer) closeCartDrawer();
  });
}

function addToCart(entry) {
  const key = `${entry.id}__${entry.size}__${entry.inscription}`;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += entry.qty;
  } else {
    cart.push({ ...entry, key });
  }
  renderCart();
}

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  if (cartCountEl) cartCountEl.textContent = String(totalCount);

  const remainingForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  if (cartShippingNote) {
    cartShippingNote.textContent = remainingForFree === 0
      ? 'Complimentary refrigerated Lima courier unlocked'
      : `Add $${remainingForFree.toFixed(2)} more for complimentary refrigerated delivery`;
  }

  if (cart.length === 0) {
    if (cartItemsList) cartItemsList.innerHTML = '';
    if (cartEmptyState) cartEmptyState.hidden = false;
    if (cartFooter) cartFooter.hidden = true;
    return;
  }

  if (cartEmptyState) cartEmptyState.hidden = true;
  if (cartFooter && !cartItemsView?.hidden) cartFooter.hidden = false;

  if (cartItemsList) {
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart__item" data-key="${encodeURIComponent(item.key)}">
        <img src="${item.img}" alt="${item.name}" class="cart__item-img" referrerpolicy="no-referrer">
        <div>
          <h4 class="cart__item-title">${item.name}</h4>
          <p class="cart__item-meta">
            ${item.size}${item.inscription ? ` · “${item.inscription}”` : ''}
          </p>
          <div class="cart__item-controls">
            <button type="button" class="cart__step-btn" data-cart-action="dec" aria-label="Decrease quantity">−</button>
            <span class="cart__item-qty">${item.qty}</span>
            <button type="button" class="cart__step-btn" data-cart-action="inc" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <span class="cart__item-price">$${(item.unitPrice * item.qty).toFixed(2)}</span>
      </div>
    `).join('');
  }

  const deliveryCost = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const grandTotal = subtotal + deliveryCost;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (cartDeliveryFeeEl) {
    cartDeliveryFeeEl.textContent = deliveryCost === 0 ? 'Complimentary ($0.00)' : `$${deliveryCost.toFixed(2)}`;
  }
  if (cartTotalEl) cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

if (cartItemsList) {
  cartItemsList.addEventListener('click', e => {
    const btn = e.target.closest('[data-cart-action]');
    if (!btn) return;
    const row = btn.closest('.cart__item');
    if (!row) return;
    const key = decodeURIComponent(row.getAttribute('data-key') || '');
    const action = btn.getAttribute('data-cart-action');
    const idx = cart.findIndex(i => i.key === key);
    if (idx === -1) return;

    if (action === 'inc') {
      cart[idx].qty++;
    } else if (action === 'dec') {
      cart[idx].qty--;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
    }
    renderCart();
  });
}

if (cartProceedBtn) {
  cartProceedBtn.addEventListener('click', () => {
    showCartStep('checkout');
  });
}

if (cartBackToBag) {
  cartBackToBag.addEventListener('click', () => {
    showCartStep('bag');
  });
}

if (cartCheckoutView) {
  cartCheckoutView.addEventListener('submit', e => {
    e.preventDefault();
    const customerName = document.getElementById('checkout-name')?.value.trim() || 'Guest';
    const customerAddress = document.getElementById('checkout-address')?.value.trim() || 'Miraflores Salon';
    const paymentMethod = document.getElementById('checkout-payment')?.value || 'Cash on Delivery';

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
    const deliveryCost = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const total = subtotal + deliveryCost;
    const orderNum = Math.floor(1000 + Math.random() * 9000);

    const orderIdEl = document.getElementById('confirmed-order-id');
    const receiptBox = document.getElementById('confirmed-receipt-box');

    if (orderIdEl) {
      orderIdEl.textContent = `Order #DLZ-${orderNum} Confirmed — Preparing Shipment`;
    }
    if (receiptBox) {
      receiptBox.innerHTML = `
        <p><strong>Recipient:</strong> ${customerName}</p>
        <p><strong>Destination:</strong> ${customerAddress}</p>
        <p><strong>Payment:</strong> ${paymentMethod}</p>
        <p><strong>Total Due:</strong> $${total.toFixed(2)} (${cart.reduce((s, i) => s + i.qty, 0)} items)</p>
      `;
    }

    cart = [];
    renderCart();
    showCartStep('confirmed');
  });
}

if (cartNewOrderBtn) {
  cartNewOrderBtn.addEventListener('click', () => {
    closeCartDrawer();
  });
}

/*=============== INITIALIZE ===============*/
renderCatalog();
renderCart();
computeBespokePrice();
