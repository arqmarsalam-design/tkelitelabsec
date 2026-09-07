// =========================================================
// TK ELITE LAB — CATÁLOGO INTERACTIVO
// =========================================================

const products = [
  {
    id: "creatina",
    title: "Creatina Monohidrato",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/creatina.webp",
    featured: true,
    directPurchase: true,
    price: 40,
    discountPercent: 10,
    generalLabel: "BENEFICIOS",
    hook: "Uno de los suplementos con mayor respaldo científico para fuerza, potencia y rendimiento de alta intensidad.",
    whatIs: "La creatina monohidrato es uno de los compuestos más estudiados dentro de la nutrición deportiva. Se encuentra naturalmente en el organismo y participa en la producción rápida de energía durante esfuerzos de alta intensidad.",
    general: "Su principal función está relacionada con el aumento de las reservas musculares de fosfocreatina, favoreciendo la regeneración de ATP. Su uso junto con entrenamiento de fuerza se ha asociado con mejoras en rendimiento, potencia, fuerza y desarrollo de masa muscular.",
    characteristics: "Creatina monohidrato · Amplio respaldo científico · Enfocada en rendimiento y entrenamiento de alta intensidad · Fácil integración dentro de programas de nutrición deportiva.",
    presentation: "300 g.",
    storage: "Mantener bien cerrado en un lugar fresco y seco, protegido de humedad, calor excesivo y luz directa.",},
  {
    id: "cardarine",
    title: "Cardarine TK / GW-501516",
    category: "research",
    categoryLabel: "Research",
    image: "images/cardarine-tk-30caps.webp",
    featured: false,
    directPurchase: false,
    price: 60,
    discountPercent: 0,
    hook: "Compuesto de investigación estudiado por su interacción con vías relacionadas con metabolismo energético.",
    whatIs: "GW-501516, conocido como Cardarine, es un compuesto de investigación que actúa sobre el receptor PPAR-δ, una vía relacionada con el metabolismo energético y la utilización de ácidos grasos.",
    general: "Su investigación se ha centrado principalmente en procesos vinculados con metabolismo lipídico, utilización de energía, actividad mitocondrial y adaptación metabólica.",
    characteristics: "Compuesto de investigación · Agonista del receptor PPAR-δ · Estudiado dentro del área de metabolismo energético · Su mecanismo es diferente al de los SARM.",
    presentation: "30 cápsulas.",
    storage: "Mantener en un lugar fresco, seco y protegido de la luz directa.",},
  {
    id: "lipodren",
    title: "Lipodren",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/lipodren-50ml.webp",
    featured: true,
    directPurchase: false,
    price: 80,
    discountPercent: 0,
    hook: "Formulación especializada orientada al segmento de composición corporal, definición y rendimiento.",
    whatIs: "Lipodren es una formulación especializada orientada al segmento de composición corporal, definición y rendimiento.",
    general: "Su formulación ha sido desarrollada dentro del área de apoyo metabólico y composición corporal. Las características específicas del producto dependen de la combinación y concentración de sus componentes activos.",
    characteristics: "Fórmula especializada · Presentación líquida · Enfoque asociado a composición corporal y definición · Fórmula concentrada de 50 ml.",
    presentation: "50 ml.",
    storage: "Mantener protegido de la luz y del calor excesivo, siguiendo las condiciones indicadas en el envase.",},
  {
    id: "bpc157",
    title: "BPC-157 TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/bpc-157-tk-5mg.webp",
    featured: false,
    directPurchase: false,
    price: 120,
    discountPercent: 0,
    hook: "Péptido de investigación de interés en procesos relacionados con reparación tisular y señalización biológica.",
    whatIs: "BPC-157 es un péptido sintético estudiado principalmente dentro de áreas relacionadas con reparación tisular, respuesta inflamatoria y mecanismos de recuperación.",
    general: "La investigación experimental sobre BPC-157 ha explorado su interacción con diferentes procesos celulares relacionados con tejidos, sistema gastrointestinal, vasos sanguíneos y mecanismos de reparación.",
    characteristics: "Péptido de investigación · Estudiado principalmente en modelos experimentales · Interés científico en procesos de recuperación y reparación tisular · Formulación especializada.",
    presentation: "5 mg.",
    storage: "Mantener de acuerdo con las condiciones específicas del fabricante. La conservación puede variar según el estado y formulación del producto.",},
  {
    id: "amino",
    title: "Grow Factor Amino TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/amino-tk-100ml.webp",
    featured: true,
    directPurchase: false,
    price: 70,
    discountPercent: 0,
    hook: "Formulación especializada basada en aminoácidos, compuestos fundamentales en múltiples procesos fisiológicos.",
    whatIs: "Grow Factor Amino TK es una formulación especializada basada en aminoácidos, compuestos esenciales dentro de múltiples procesos relacionados con síntesis proteica, metabolismo y recuperación.",
    general: "Los aminoácidos participan en numerosos procesos fisiológicos y son componentes fundamentales de las proteínas. Las propiedades específicas de Grow Factor Amino TK dependen de los aminoácidos y concentraciones presentes en su formulación.",
    characteristics: "Fórmula basada en aminoácidos · Presentación líquida · Orientada al segmento de nutrición y rendimiento · Fórmula concentrada de 100 ml.",
    presentation: "100 ml.",
    storage: "Mantener de acuerdo con las indicaciones especificadas en el envase.",},
  {
    id: "berberine",
    title: "Berberine TK",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/berberine-tk-250mg-30caps.webp",
    featured: false,
    directPurchase: true,
    price: 30,
    discountPercent: 0,
    generalLabel: "BENEFICIOS",
    hook: "Compuesto bioactivo de origen vegetal ampliamente estudiado en el contexto del metabolismo.",
    whatIs: "La berberina es un compuesto bioactivo de origen vegetal perteneciente al grupo de los alcaloides y presente naturalmente en diferentes especies botánicas.",
    general: "La berberina ha sido ampliamente estudiada por su relación con diferentes procesos metabólicos, incluyendo metabolismo de glucosa, lípidos y señalización energética celular.",
    characteristics: "Compuesto de origen vegetal · Amplia investigación en metabolismo · 250 mg según presentación · Formato en cápsulas.",
    presentation: "30 cápsulas de 250 mg.",
    storage: "Mantener en un lugar fresco, seco y protegido de humedad y luz directa.",},
  {
    id: "chkcu",
    title: "GHK-Cu TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/chk-cu-tk-100mg.webp",
    featured: false,
    directPurchase: false,
    price: 140,
    discountPercent: 0,
    hook: "Complejo peptídico con cobre estudiado en investigación dermatológica y regenerativa.",
    whatIs: "GHK-Cu es un complejo formado por el tripéptido GHK —glicil-L-histidil-L-lisina— unido a cobre.",
    general: "Ha sido objeto de investigación por su participación en diferentes procesos celulares relacionados con matriz extracelular, colágeno, señalización celular y mecanismos de reparación y remodelación de tejidos.",
    characteristics: "Complejo peptídico unido a cobre · Área de interés en investigación dermatológica y regenerativa · Relacionado con diferentes procesos de señalización celular · Formulación especializada.",
    presentation: "100 mg.",
    storage: "Mantener conforme a las condiciones específicas indicadas por el fabricante.",},
  {
    id: "clen",
    title: "CLEN TK",
    category: "pharma",
    categoryLabel: "Farmacéutico",
    image: "images/clen-tk-40mcg-50caps.webp",
    featured: false,
    directPurchase: false,
    price: 45,
    discountPercent: 0,
    hook: "Compuesto farmacológicamente activo con acción sobre vías beta-adrenérgicas.",
    whatIs: "El clenbuterol es un compuesto farmacológicamente activo perteneciente al grupo de los agonistas beta-2 adrenérgicos.",
    general: "Su actividad sobre los receptores beta-adrenérgicos está relacionada con diferentes respuestas fisiológicas, incluyendo broncodilatación, estimulación del sistema simpático y modificaciones en el gasto energético.",
    characteristics: "Agonista beta-2 adrenérgico · Compuesto farmacológicamente activo · Acción relacionada con vías del sistema simpático · Presentación en cápsulas.",
    presentation: "40 mcg · 50 cápsulas.",
    storage: "Mantener protegido de humedad, luz directa y temperaturas extremas.",},
  {
    id: "clomid",
    title: "Clomid 50 TK",
    category: "pharma",
    categoryLabel: "Farmacéutico",
    image: "images/clomid-50-tk-10tabs.webp",
    featured: false,
    directPurchase: false,
    price: 20,
    discountPercent: 0,
    hook: "Modulador selectivo de receptores de estrógeno con acción relacionada con regulación hormonal.",
    whatIs: "El citrato de clomifeno es un modulador selectivo de los receptores de estrógeno, conocido como SERM.",
    general: "Su mecanismo está relacionado con la modulación de la señal estrogénica a nivel del eje hipotálamo-hipófisis, influyendo sobre procesos asociados con la liberación de gonadotropinas.",
    characteristics: "Modulador selectivo de receptores de estrógeno · Compuesto farmacológicamente activo · Acción relacionada con regulación hormonal · Presentación oral.",
    presentation: "50 mg · 10 tabletas.",
    storage: "Mantener en un lugar fresco, seco y protegido de la luz.",},
  {
    id: "mixingwater",
    title: "Mixing Water",
    category: "accessory",
    categoryLabel: "Accesorio",
    image: "images/mixing-water-10ml.webp",
    featured: false,
    directPurchase: false,
    price: 30,
    discountPercent: 0,
    hook: "Solución especializada para procesos de preparación o reconstitución de productos compatibles.",
    whatIs: "Mixing Water es una solución diseñada para procesos de preparación o reconstitución de productos compatibles.",
    general: "Los diluyentes permiten preparar determinadas formulaciones antes de su utilización. Su compatibilidad depende de las características y especificaciones del producto que vaya a ser reconstituido.",
    characteristics: "Solución líquida · Presentación especializada para reconstitución · Envase de 10 ml · Uso sujeto a compatibilidad con la formulación correspondiente.",
    presentation: "10 ml.",
    storage: "Mantener bajo las condiciones especificadas en la etiqueta del producto.",},
  {
    id: "nitrotest",
    title: "Nitrotest",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/nitrotest-60caps.webp",
    featured: false,
    directPurchase: true,
    price: 60,
    discountPercent: 0,
    generalLabel: "BENEFICIOS",
    hook: "Fórmula de nutrición deportiva que combina citrulina, arginina, zinc y magnesio.",
    whatIs: "Nitrotest es una fórmula de nutrición deportiva que combina aminoácidos y minerales relacionados con diferentes procesos vinculados al rendimiento físico.",
    general: "La citrulina y la arginina participan en rutas relacionadas con la producción de óxido nítrico, mientras que el zinc y el magnesio intervienen en numerosos procesos metabólicos y enzimáticos.",
    characteristics: "Citrulina · Arginina · Zinc · Magnesio · Fórmula orientada a nutrición deportiva.",
    presentation: "60 cápsulas.",
    storage: "Mantener bien cerrado en un lugar fresco, seco y protegido de la humedad.",},
  {
    id: "ipamorelin",
    title: "Ipamorelin TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/ipamorelin-tk-10mg.webp",
    featured: false,
    directPurchase: false,
    price: 120,
    discountPercent: 0,
    hook: "Péptido de investigación estudiado por su actividad sobre vías relacionadas con la secreción de hormona de crecimiento.",
    whatIs: "Ipamorelin es un péptido sintético perteneciente al grupo de secretagogos de hormona de crecimiento.",
    general: "Su investigación se ha centrado en su interacción con el receptor GHSR y en mecanismos relacionados con la señalización involucrada en la secreción de hormona de crecimiento.",
    characteristics: "Péptido de investigación · Secretagogo de hormona de crecimiento · Actividad relacionada con el receptor de ghrelina/GHSR · Formulación especializada.",
    presentation: "10 mg.",
    storage: "Mantener según las especificaciones indicadas para la formulación correspondiente.",},
  {
    id: "retatrutide",
    title: "Retatrutide TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/retatrutide-tk-10mg.webp",
    featured: true,
    directPurchase: false,
    price: 350,
    discountPercent: 20,
    hook: "Molécula peptídica de gran interés actual en investigación metabólica.",
    whatIs: "Retatrutide es una molécula peptídica investigada por su actividad simultánea sobre tres receptores relacionados con regulación metabólica: GIP, GLP-1 y glucagón.",
    general: "Su investigación clínica se ha centrado en procesos relacionados con regulación del apetito, metabolismo energético, glucosa y composición corporal. Su acción triple la diferencia de otras moléculas que actúan sobre una o dos de estas vías.",
    characteristics: "Triple agonista GIP / GLP-1 / glucagón · Molécula en investigación clínica · Área principal de investigación: metabolismo y composición corporal · Formulación peptídica especializada.",
    presentation: "10 mg.",
    storage: "Mantener de acuerdo con las condiciones especificadas para la formulación correspondiente.",},
  {
    id: "klow",
    title: "KLOW TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/klow-tk-80mg.webp",
    featured: false,
    directPurchase: false,
    price: 180,
    discountPercent: 0,
    hook: "Formulación especializada del segmento de productos de investigación TK.",
    whatIs: "KLOW TK es una formulación especializada desarrollada dentro del segmento de productos de investigación de TK.",
    general: "Sus características y áreas específicas de interés dependen de la combinación de principios activos y concentraciones presentes en la formulación.",
    characteristics: "Fórmula especializada · Presentación concentrada · Producto del segmento de investigación TK · 80 mg según presentación.",
    presentation: "80 mg.",
    storage: "Mantener siguiendo las condiciones indicadas específicamente en el envase.",}
];

const categoryLabels = {
  all: "Todos",
  supplement: "Suplementos",
  research: "Research",
  pharma: "Farmacéuticos",
  accessory: "Accesorios"
};

const tabTitles = {
  whatIs: "¿Qué es?",
  general: "Información general",
  characteristics: "Características",
  presentation: "Presentación",
  storage: "Conservación"
};

const quantities = Object.fromEntries(products.map(product => [product.id, 0]));

let activeFilter = "all";
let searchTerm = "";
let currentProductId = null;
let lastModalTrigger = null;
const WHATSAPP_NUMBER = "593993046766";
const CART_STORAGE_KEY = "tkEliteLabCart";

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}


let cart = {};
try {
  const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
  cart = Object.fromEntries(
    Object.entries(savedCart).filter(([productId, quantity]) =>
      getProduct(productId) && Number.isFinite(Number(quantity)) && Number(quantity) > 0
    ).map(([productId, quantity]) => [productId, Math.min(99, Math.floor(Number(quantity)))])
  );
} catch (error) {
  cart = {};
}

// Mantener la selección visual sincronizada con el carrito guardado.
Object.entries(cart).forEach(([productId, quantity]) => {
  if (Object.prototype.hasOwnProperty.call(quantities, productId)) {
    quantities[productId] = Number(quantity);
  }
});

// =========================================================
// ELEMENTOS
// =========================================================

const productsGrid = document.getElementById("productsGrid");
const resultCount = document.getElementById("resultCount");
const productSearch = document.getElementById("productSearch");
const filters = [...document.querySelectorAll(".filter")];
const clearFilters = document.getElementById("clearFilters");
const featuredGrid = document.getElementById("featuredGrid");

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalProductImage = document.getElementById("modalProductImage");
const modalBadge = document.getElementById("modalBadge");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalHook = document.getElementById("modalHook");
const modalPrice = document.getElementById("modalPrice");
const modalInfoTitle = document.getElementById("modalInfoTitle");
const modalInfoContent = document.getElementById("modalInfoContent");
const modalTabs = [...document.querySelectorAll(".modal-tab")];
const modalQuantityValue = document.getElementById("modalQuantityValue");
const modalCta = document.getElementById("modalCta");

const toast = document.getElementById("toast");

const openCartButton = document.getElementById("openCart");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartButton = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCartButton = document.getElementById("clearCart");
const sendCartWhatsApp = document.getElementById("sendCartWhatsApp");
const cartCustomerForm = document.getElementById("cartCustomerForm");
const cartCustomerStatus = document.getElementById("cartCustomerStatus");
const cartLeadSelection = document.getElementById("cartLeadSelection");
const cartLeadTotal = document.getElementById("cartLeadTotal");
const cartInterestProduct = document.getElementById("cartInterestProduct");

// =========================================================
// HELPERS
// =========================================================

function getProduct(productId) {
  return products.find(product => product.id === productId);
}

function categoryClass(category) {
  return `category-${category}`;
}

function discountedPrice(product) {
  const discount = Number(product.discountPercent || 0);
  if (!discount) return Number(product.price || 0);
  return Number(product.price || 0) * (1 - discount / 100);
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

function priceTemplate(product, context = "card") {
  const hasDiscount = Number(product.discountPercent || 0) > 0;
  const finalPrice = discountedPrice(product);
  const prefix = context === "modal" ? "modal-" : "";

  if (!hasDiscount) {
    return `
      <div class="${prefix}price-row">
        <span class="${prefix}price-current">${formatPrice(finalPrice)}</span>
      </div>
    `;
  }

  return `
    <div class="${prefix}price-row sale">
      <span class="${prefix}price-original">${formatPrice(product.price)}</span>
      <span class="${prefix}price-current">${formatPrice(finalPrice)}</span>
      <span class="${prefix}discount-pill">${product.discountPercent}% OFF</span>
    </div>
  `;
}

function selectedTotalTemplate(product, context = "card") {
  const quantity = Number(quantities[product.id] || 0);
  const total = discountedPrice(product) * quantity;
  const prefix = context === "modal" ? "modal-" : "";
  const visibleClass = quantity > 0 ? " visible" : "";

  return `
    <div class="${prefix}selected-total${visibleClass}" data-selected-total="${product.id}" aria-live="polite">
      <span>${quantity > 0 ? `${quantity} × ${formatPrice(discountedPrice(product))}` : "Selecciona una cantidad"}</span>
      <strong>${quantity > 0 ? `Total: ${formatPrice(total)}` : ""}</strong>
    </div>
  `;
}

function updateSelectedTotal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const quantity = Number(quantities[productId] || 0);
  const unitPrice = discountedPrice(product);
  const total = unitPrice * quantity;
  const elements = document.querySelectorAll(`[data-selected-total="${productId}"]`);

  elements.forEach(element => {
    element.classList.toggle("visible", quantity > 0);
    const label = element.querySelector("span");
    const value = element.querySelector("strong");
    if (label) label.textContent = quantity > 0 ? `${quantity} × ${formatPrice(unitPrice)}` : "Selecciona una cantidad";
    if (value) value.textContent = quantity > 0 ? `Total: ${formatPrice(total)}` : "";
  });
}

function ctaText(product) {
  const selectedQuantity = Number(quantities[product.id] || 0);
  const cartQuantity = Number(cart[product.id] || 0);

  if (cartQuantity > 0 && selectedQuantity === cartQuantity) {
    return "AGREGADO ✓";
  }

  if (cartQuantity > 0 && selectedQuantity === 0) {
    return "QUITAR DEL CARRITO";
  }

  if (cartQuantity > 0 && selectedQuantity !== cartQuantity) {
    return "ACTUALIZAR CARRITO";
  }

  return "AGREGAR AL CARRITO";
}

function updateProductActionState(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const label = ctaText(product);
  const cardButton = document.querySelector(`[data-add-cart="${productId}"]`);

  if (cardButton) {
    cardButton.textContent = label;
    cardButton.classList.toggle("added", label === "AGREGADO ✓");
    cardButton.classList.toggle("update", label === "ACTUALIZAR CARRITO");
    cardButton.classList.toggle("remove", label === "QUITAR DEL CARRITO");
  }

  if (currentProductId === productId && modalCta) {
    modalCta.textContent = label;
    modalCta.classList.toggle("added", label === "AGREGADO ✓");
    modalCta.classList.toggle("update", label === "ACTUALIZAR CARRITO");
    modalCta.classList.toggle("remove", label === "QUITAR DEL CARRITO");
  }
}

function badgeText(product) {
  if (product.discountPercent) return `${product.discountPercent}% OFF`;
  if (product.featured) return "DESTACADO";
  if (product.category === "pharma") return "REGULADO";
  if (product.category === "research") return "INFO";
  return "";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function updateResultCount(count) {
  resultCount.textContent = `${count} ${count === 1 ? "producto" : "productos"}`;
}

function updateQuantity(productId, delta) {
  const current = quantities[productId] ?? 0;
  quantities[productId] = Math.min(99, Math.max(0, current + delta));

  const cardValue = document.querySelector(`[data-quantity-value="${productId}"]`);
  if (cardValue) {
    cardValue.textContent = quantities[productId];
  }

  if (currentProductId === productId) {
    modalQuantityValue.textContent = quantities[productId];
  }

  updateProductActionState(productId);
  updateSelectedTotal(productId);
}

// =========================================================
// RENDER PRODUCTOS
// =========================================================

function productCardTemplate(product) {
  const badge = badgeText(product);

  return `
    <article class="product-card ${categoryClass(product.category)}" data-product-card="${product.id}">
      <div class="product-media">
        <img
          src="${product.image}"
          alt="${product.title}"
          loading="lazy"
          decoding="async"
        >
        <span class="product-category-tag">${product.categoryLabel}</span>
        ${badge ? `<span class="product-badge">${badge}</span>` : ""}
      </div>

      <div class="product-body">
        <p class="product-kicker">${product.categoryLabel}</p>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-hook">${product.hook}</p>
        <p class="product-presentation">${product.presentation}</p>
        ${priceTemplate(product)}
        ${selectedTotalTemplate(product)}

        <div class="card-controls">
          <button
            class="info-button"
            type="button"
            data-info-product="${product.id}"
          >
            VER INFORMACIÓN
          </button>

          <div class="quantity-control" aria-label="Cantidad de ${product.title}">
            <button
              type="button"
              data-quantity-product="${product.id}"
              data-quantity-action="decrease"
              aria-label="Disminuir cantidad"
            >−</button>
            <span data-quantity-value="${product.id}">${quantities[product.id]}</span>
            <button
              type="button"
              data-quantity-product="${product.id}"
              data-quantity-action="increase"
              aria-label="Aumentar cantidad"
            >+</button>
          </div>
        </div>

        <button
          class="product-cta"
          type="button"
          data-add-cart="${product.id}"
        >
          ${ctaText(product)}
        </button>
      </div>
    </article>
  `;
}

function featuredCardTemplate(product) {
  return `
    <article class="featured-card">
      <div class="featured-card-media">
        <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async">
        <span>${badgeText(product) || "DESTACADO"}</span>
      </div>
      <div class="featured-card-body">
        <p>${product.categoryLabel}</p>
        <h3>${product.title}</h3>
        ${priceTemplate(product)}
        <button type="button" data-feature-product="${product.id}">VER INFORMACIÓN</button>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  if (!featuredGrid) return;
  const featuredProducts = products.filter(product => product.featured);
  featuredGrid.innerHTML = featuredProducts.map(featuredCardTemplate).join("");
}

function renderProducts() {
  const visible = products.filter(product => {
    const filterMatches = activeFilter === "all" || product.category === activeFilter;
    const searchable = `${product.title} ${product.categoryLabel} ${product.hook} ${product.presentation}`.toLowerCase();
    const searchMatches = searchable.includes(searchTerm.toLowerCase());
    return filterMatches && searchMatches;
  });

  if (!visible.length) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        No encontramos productos con esos criterios. Prueba otra búsqueda o restablece los filtros.
      </div>
    `;
  } else {
    productsGrid.innerHTML = visible.map(productCardTemplate).join("");
  }

  updateResultCount(visible.length);
}

// =========================================================
// FILTROS + BÚSQUEDA
// =========================================================

filters.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach(filter => filter.classList.toggle("active", filter === button));
    renderProducts();
  });
});

productSearch.addEventListener("input", () => {
  searchTerm = productSearch.value.trim();
  renderProducts();
});

clearFilters.addEventListener("click", () => {
  activeFilter = "all";
  searchTerm = "";
  productSearch.value = "";
  filters.forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  renderProducts();
});

document.querySelectorAll(".category-jump").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.targetFilter;
    const filterButton = filters.find(filter => filter.dataset.filter === target);
    if (filterButton) filterButton.click();
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  });
});

// =========================================================
// DELEGACIÓN DE EVENTOS DEL CATÁLOGO
// =========================================================

productsGrid.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity-product]");
  if (quantityButton) {
    const delta = quantityButton.dataset.quantityAction === "increase" ? 1 : -1;
    updateQuantity(quantityButton.dataset.quantityProduct, delta);
    return;
  }

  const infoButton = event.target.closest("[data-info-product]");
  if (infoButton) {
    openProductModal(infoButton.dataset.infoProduct, infoButton);
    return;
  }

  const addButton = event.target.closest("[data-add-cart]");
  if (addButton) {
    addSelectedQuantityToCart(addButton.dataset.addCart);
  }
});


if (featuredGrid) {
  featuredGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-feature-product]");
    if (!button) return;
    openProductModal(button.dataset.featureProduct, button);
  });
}

// =========================================================
// MODAL
// =========================================================

function openProductModal(productId, trigger) {
  const product = getProduct(productId);
  if (!product) return;

  currentProductId = productId;
  lastModalTrigger = trigger || document.activeElement;

  modalProductImage.src = product.image;
  modalProductImage.alt = product.title;
  modalBadge.textContent = badgeText(product) || product.categoryLabel;
  modalCategory.textContent = product.categoryLabel;
  modalTitle.textContent = product.title;
  modalHook.textContent = product.hook;
  modalPrice.innerHTML = priceTemplate(product, "modal");
  modalQuantityValue.textContent = quantities[productId];
  trackEvent("view_product", {
    product_id: product.id,
    product_name: product.title,
    category: product.categoryLabel,
    price: discountedPrice(product)
  });

  const generalTab = modalTabs.find(tab => tab.dataset.tab === "general");
  if (generalTab) generalTab.textContent = product.generalLabel || "INFORMACIÓN GENERAL";
  modalCta.textContent = ctaText(product);
  modalCta.classList.remove("restricted", "added", "update", "remove");
  updateProductActionState(productId);

  setModalTab("whatIs");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  window.setTimeout(() => closeModal.focus(), 20);
}

function setModalTab(tabName) {
  const product = getProduct(currentProductId);
  if (!product) return;

  modalTabs.forEach(tab => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  modalInfoTitle.textContent = tabName === "general" ? (product.generalLabel === "BENEFICIOS" ? "Beneficios" : "Información general") : (tabTitles[tabName] || "");
  modalInfoContent.textContent = product[tabName] || "Información pendiente de completar.";
}

function closeProductModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  const trigger = lastModalTrigger;
  currentProductId = null;
  lastModalTrigger = null;

  if (trigger && typeof trigger.focus === "function") {
    window.setTimeout(() => trigger.focus(), 10);
  }
}

modalTabs.forEach(tab => {
  tab.addEventListener("click", () => setModalTab(tab.dataset.tab));
});

closeModal.addEventListener("click", closeProductModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeProductModal();
});

document.addEventListener("keydown", event => {
  if (!modal.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeProductModal();
    return;
  }

  if (event.key === "Tab") {
    const dialog = modal.querySelector(".modal-dialog");
    const focusable = [...dialog.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter(el => !el.hasAttribute("hidden"));

    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelector("[data-modal-quantity]").addEventListener("click", event => {
  const button = event.target.closest("[data-quantity-action]");
  if (!button || !currentProductId) return;

  const delta = button.dataset.quantityAction === "increase" ? 1 : -1;
  updateQuantity(currentProductId, delta);
});

modalCta.addEventListener("click", () => {
  if (!currentProductId) return;
  addSelectedQuantityToCart(currentProductId);
});

// =========================================================
// CARRITO / SELECCIÓN MÚLTIPLE
// =========================================================

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    // El carrito sigue funcionando aunque el navegador bloquee almacenamiento local.
    console.warn("No se pudo guardar el carrito localmente.", error);
  }
}

function cartUnitCount() {
  return Object.values(cart).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
}

function cartEstimatedTotal() {
  return Object.entries(cart).reduce((sum, [productId, quantity]) => {
    const product = getProduct(productId);
    if (!product) return sum;
    return sum + discountedPrice(product) * Number(quantity || 0);
  }, 0);
}

function addSelectedQuantityToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const quantity = Number(quantities[productId] ?? 0);
  const existingQuantity = Number(cart[productId] || 0);

  // Si el producto ya estaba en carrito y el selector quedó en 0, se interpreta como quitarlo.
  if (quantity < 1) {
    if (existingQuantity > 0) {
      delete cart[productId];
      saveCart();
      renderCart();
      updateProductActionState(productId);
      showToast(`${product.title} eliminado del carrito.`);
      return;
    }

    showToast("Selecciona al menos 1 unidad.");
    return;
  }

  // La cantidad seleccionada reemplaza la anterior: no se duplica al pulsar otra vez.
  cart[productId] = Math.min(99, quantity);

  saveCart();
  renderCart();
  updateProductActionState(productId);
  trackEvent("add_to_cart", {
    product_id: product.id,
    product_name: product.title,
    quantity: quantity,
    price: discountedPrice(product),
    cart_value: cartEstimatedTotal()
  });

  if (existingQuantity > 0) {
    showToast(`${product.title}: carrito actualizado a ${quantity} unidad${quantity === 1 ? "" : "es"}.`);
  } else {
    showToast(`${product.title} agregado al carrito ✓`);
  }
}

function updateCartItem(productId, delta) {
  if (!cart[productId]) return;

  const next = Number(cart[productId]) + delta;
  if (next <= 0) {
    delete cart[productId];
    quantities[productId] = 0;
  } else {
    cart[productId] = Math.min(99, next);
    quantities[productId] = cart[productId];
  }

  const cardValue = document.querySelector(`[data-quantity-value="${productId}"]`);
  if (cardValue) cardValue.textContent = quantities[productId] || 0;
  if (currentProductId === productId) modalQuantityValue.textContent = quantities[productId] || 0;

  saveCart();
  renderCart();
  updateProductActionState(productId);
  updateSelectedTotal(productId);
}

function removeCartItem(productId) {
  const product = getProduct(productId);
  const removedQuantity = Number(cart[productId] || 0);
  delete cart[productId];
  quantities[productId] = 0;

  const cardValue = document.querySelector(`[data-quantity-value="${productId}"]`);
  if (cardValue) cardValue.textContent = "0";
  if (currentProductId === productId) modalQuantityValue.textContent = "0";

  saveCart();
  renderCart();
  updateProductActionState(productId);
  if (product && removedQuantity > 0) {
    trackEvent("remove_from_cart", {
      product_id: product.id,
      product_name: product.title,
      quantity: removedQuantity,
      price: discountedPrice(product)
    });
  }
}

function cartItemTemplate(product, quantity) {
  const unitPrice = discountedPrice(product);
  const subtotal = unitPrice * quantity;

  return `
    <article class="cart-item" data-cart-item="${product.id}">
      <img src="${product.image}" alt="${product.title}" loading="lazy">
      <div class="cart-item-main">
        <p class="cart-item-category">${product.categoryLabel}</p>
        <h3>${product.title}</h3>
        <p class="cart-item-presentation">${product.presentation}</p>
        <div class="cart-item-price">
          <div class="cart-unit-price">
            <span>PRECIO UNITARIO</span>
            <strong>${formatPrice(unitPrice)}</strong>
          </div>
          <div class="cart-subtotal">
            <span>SUBTOTAL</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-control cart-quantity" aria-label="Cantidad de ${product.title} en el carrito">
            <button type="button" data-cart-action="decrease" data-cart-product="${product.id}" aria-label="Disminuir cantidad">−</button>
            <span>${quantity}</span>
            <button type="button" data-cart-action="increase" data-cart-product="${product.id}" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="cart-remove" type="button" data-cart-action="remove" data-cart-product="${product.id}">ELIMINAR</button>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const entries = Object.entries(cart)
    .map(([productId, quantity]) => [getProduct(productId), Number(quantity)])
    .filter(([product, quantity]) => product && quantity > 0);

  if (!entries.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>0 PRODUCTOS</span>
        <h3>Tu carrito está vacío.</h3>
        <p>Selecciona cantidades en el catálogo y agrega los productos que quieras consultar.</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = entries
      .map(([product, quantity]) => cartItemTemplate(product, quantity))
      .join("");
  }

  const unitCount = cartUnitCount();
  cartCount.textContent = unitCount;
  cartCount.classList.toggle("has-items", unitCount > 0);
  cartTotal.textContent = formatPrice(cartEstimatedTotal());
  clearCartButton.disabled = unitCount === 0;

  const customerReady = cartCustomerForm ? cartCustomerForm.checkValidity() : false;
  if (unitCount === 0 || !customerReady) {
    sendCartWhatsApp.setAttribute("aria-disabled", "true");
    sendCartWhatsApp.setAttribute("href", "#");
  } else {
    sendCartWhatsApp.setAttribute("aria-disabled", "false");
    sendCartWhatsApp.setAttribute("href", buildCartWhatsAppUrl(getCartCustomerData()));
  }

  syncCartLeadMetadata();
  suggestInterestFromCart();
}

function openCart() {
  trackEvent("open_cart", {
    item_count: cartUnitCount(),
    cart_value: cartEstimatedTotal()
  });
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
  window.setTimeout(() => closeCartButton.focus(), 20);
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function buildCartWhatsAppUrl(customer = {}) {
  const entries = Object.entries(cart)
    .map(([productId, quantity]) => [getProduct(productId), Number(quantity)])
    .filter(([product, quantity]) => product && quantity > 0);

  if (!entries.length) return "#";

  const lines = entries.map(([product, quantity]) => {
    const subtotal = discountedPrice(product) * quantity;
    return `• ${quantity} × ${product.title} (${product.presentation}) — ${formatPrice(subtotal)}`;
  });

  const customerLines = [
    customer.name ? `Cliente: ${customer.name}` : "",
    customer.email ? `Correo: ${customer.email}` : "",
    customer.productInterest ? `Producto de interés: ${customer.productInterest}` : "",
    customer.suggestions ? `Sugerencias: ${customer.suggestions}` : ""
  ].filter(Boolean);

  const message =
    `Hola, quisiera consultar disponibilidad de este pedido de TK Elite Lab:\n\n` +
    `${customerLines.join("\n")}\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total estimado: ${formatPrice(cartEstimatedTotal())}\n\n` +
    `Por favor, confírmame disponibilidad para continuar con el pedido.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getCartCustomerData() {
  if (!cartCustomerForm) return {};
  const data = new FormData(cartCustomerForm);
  return {
    name: String(data.get("nombre") || "").trim(),
    email: String(data.get("email") || "").trim(),
    productInterest: String(data.get("producto_interes") || "").trim(),
    suggestions: String(data.get("sugerencias") || "").trim(),
    consent: data.get("consentimiento_comunicaciones") === "si"
  };
}

function cartSelectionText() {
  return Object.entries(cart)
    .map(([productId, quantity]) => [getProduct(productId), Number(quantity)])
    .filter(([product, quantity]) => product && quantity > 0)
    .map(([product, quantity]) => `${quantity} × ${product.title} (${product.presentation})`)
    .join(" | ");
}

function syncCartLeadMetadata() {
  if (cartLeadSelection) cartLeadSelection.value = cartSelectionText();
  if (cartLeadTotal) cartLeadTotal.value = formatPrice(cartEstimatedTotal());
}

function suggestInterestFromCart() {
  if (!cartInterestProduct || cartInterestProduct.value) return;
  const firstEntry = Object.entries(cart).find(([productId, quantity]) => getProduct(productId) && Number(quantity) > 0);
  if (!firstEntry) return;
  const product = getProduct(firstEntry[0]);
  if (!product) return;
  const match = Array.from(cartInterestProduct.options).find(option => option.textContent.trim() === product.title.trim());
  if (match) cartInterestProduct.value = match.value || match.textContent;
}

async function saveCartLead() {
  if (!cartCustomerForm) throw new Error("Formulario de cliente no disponible.");
  syncCartLeadMetadata();
  const formData = new FormData(cartCustomerForm);
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  });
  if (!response.ok) throw new Error("No se pudo registrar la consulta.");
}

function resetCartCustomerForm() {
  if (!cartCustomerForm) return;
  cartCustomerForm.reset();
  if (cartCustomerStatus) cartCustomerStatus.textContent = "";
}

function resetCartState(message = "Selección enviada. El carrito quedó listo para una nueva consulta.") {
  Object.keys(quantities).forEach(productId => {
    quantities[productId] = 0;
  });

  cart = {};
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    // La interfaz se reinicia aunque el almacenamiento local no esté disponible.
  }

  renderCart();
  renderProducts();
  renderFeaturedProducts();

  if (currentProductId) {
    modalQuantityValue.textContent = "0";
    updateSelectedTotal(currentProductId);
    updateProductActionState(currentProductId);
  }

  resetCartCustomerForm();
  closeCart();
  if (message) showToast(message);
}

async function sendCartToWhatsApp(event) {
  if (event) event.preventDefault();

  if (!cartUnitCount()) {
    showToast("Tu carrito está vacío.");
    return;
  }

  if (!cartCustomerForm || !cartCustomerForm.checkValidity()) {
    if (cartCustomerStatus) cartCustomerStatus.textContent = "Completa los campos obligatorios para continuar.";
    cartCustomerForm?.reportValidity();
    showToast("Completa tus datos antes de continuar a WhatsApp.");
    return;
  }

  const customer = getCartCustomerData();
  const whatsappUrl = buildCartWhatsAppUrl(customer);
  const originalText = sendCartWhatsApp.textContent;
  sendCartWhatsApp.setAttribute("aria-disabled", "true");
  sendCartWhatsApp.textContent = "REGISTRANDO...";
  if (cartCustomerStatus) cartCustomerStatus.textContent = "Guardando tus datos de consulta...";

  try {
    await saveCartLead();

    trackEvent("lead_signup", {
      source: "cart_whatsapp",
      product_interest: customer.productInterest,
      communications_consent: customer.consent ? "yes" : "no"
    });
    trackEvent("whatsapp_order_click", {
      item_count: cartUnitCount(),
      cart_value: cartEstimatedTotal(),
      product_interest: customer.productInterest
    });

    try {
      sessionStorage.setItem("tkEliteLabResetAfterWhatsApp", "1");
    } catch (error) {}

    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    resetCartState();
    if (!opened) window.location.href = whatsappUrl;
  } catch (error) {
    console.error(error);
    if (cartCustomerStatus) cartCustomerStatus.textContent = "No pudimos registrar tus datos. Inténtalo nuevamente.";
    showToast("No se pudo registrar la consulta.");
    sendCartWhatsApp.setAttribute("aria-disabled", "false");
  } finally {
    sendCartWhatsApp.textContent = originalText;
    renderCart();
  }
}

openCartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const productId = button.dataset.cartProduct;
  const action = button.dataset.cartAction;

  if (action === "increase") updateCartItem(productId, 1);
  if (action === "decrease") updateCartItem(productId, -1);
  if (action === "remove") removeCartItem(productId);
});

clearCartButton.addEventListener("click", () => {
  if (!cartUnitCount()) return;
  resetCartState("Carrito vaciado.");
});

sendCartWhatsApp.addEventListener("click", sendCartToWhatsApp);

if (cartCustomerForm) {
  ["input", "change"].forEach(eventName => {
    cartCustomerForm.addEventListener(eventName, () => {
      if (cartCustomerStatus) cartCustomerStatus.textContent = "";
      renderCart();
    });
  });
}

window.addEventListener("pageshow", () => {
  try {
    if (sessionStorage.getItem("tkEliteLabResetAfterWhatsApp") === "1") {
      sessionStorage.removeItem("tkEliteLabResetAfterWhatsApp");
      resetCartState("");
    }
  } catch (error) {
    // Sin acción: el carrito ya fue limpiado antes de abrir WhatsApp.
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && cartDrawer.classList.contains("active")) {
    closeCart();
  }
});


// =========================================================
// ANALÍTICA DE CONTACTO Y REGISTRO
// =========================================================

[document.getElementById("generalWhatsApp"), document.getElementById("floatingWhatsApp")].forEach(link => {
  if (!link) return;
  link.addEventListener("click", event => {
    event.preventDefault();
    trackEvent("whatsapp_click", {
      source: link.id === "floatingWhatsApp" ? "floating_button" : "contact_section",
      stage: "registration_required"
    });
    document.getElementById("registro")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => leadForm?.querySelector('input[name="nombre"]')?.focus(), 450);
    showToast("Completa tus datos para continuar a WhatsApp.");
  });
});

const leadForm = document.getElementById("leadForm");
const leadFormStatus = document.getElementById("leadFormStatus");

if (leadForm) {
  leadForm.addEventListener("submit", async event => {
    event.preventDefault();
    const submitButton = leadForm.querySelector("button[type=submit]");
    const formData = new FormData(leadForm);
    const name = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const productInterest = String(formData.get("producto_interes") || "").trim();
    const suggestions = String(formData.get("sugerencias") || "").trim();

    submitButton.disabled = true;
    submitButton.textContent = "REGISTRANDO...";
    leadFormStatus.textContent = "";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) throw new Error("No se pudo completar el registro.");

      trackEvent("lead_signup", {
        source: "general_whatsapp",
        product_interest: productInterest,
        communications_consent: "yes"
      });

      const details = [
        name ? `Cliente: ${name}` : "",
        email ? `Correo: ${email}` : "",
        productInterest ? `Producto de interés: ${productInterest}` : "",
        suggestions ? `Sugerencias: ${suggestions}` : ""
      ].filter(Boolean).join("\n");
      const message = `Hola, quisiera información de TK Elite Lab.\n\n${details}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      trackEvent("whatsapp_click", { source: "registered_lead", product_interest: productInterest });
      leadFormStatus.textContent = "Registro recibido. Abriendo WhatsApp...";
      const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      leadForm.reset();
      showToast("Registro recibido ✓");
      if (!opened) window.location.href = whatsappUrl;
    } catch (error) {
      console.error(error);
      leadFormStatus.textContent = "No pudimos completar el registro en este momento. Inténtalo nuevamente.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "REGISTRAR Y CONTINUAR A WHATSAPP";
    }
  });
}

// =========================================================
// MENÚ MÓVIL
// =========================================================

menuBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});


mainNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    mainNav.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// =========================================================
// INICIO
// =========================================================

renderFeaturedProducts();
renderProducts();
renderCart();
