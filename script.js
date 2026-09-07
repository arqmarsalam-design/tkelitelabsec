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
    whatIs: "La creatina monohidrato es un compuesto utilizado ampliamente en nutrición deportiva. Aumenta las reservas musculares de creatina y fosfocreatina, que participan en la regeneración rápida de ATP durante esfuerzos de alta intensidad.",
    general: "La evidencia respalda su capacidad para mejorar el rendimiento en ejercicios repetidos de alta intensidad y favorecer aumentos de fuerza y masa magra cuando se combina con entrenamiento de resistencia.",
    characteristics: "Creatina monohidrato · Formato en polvo · Una de las formas de creatina con mayor respaldo científico en nutrición deportiva.",
    presentation: "300 g.",
    storage: "Mantener el envase bien cerrado, en un lugar fresco y seco, protegido de humedad, calor excesivo y luz directa.",
    restriction: "Suplemento nutricional. Revisa siempre la etiqueta, ingredientes, advertencias y compatibilidad con tus necesidades."
  },
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
    hook: "Compuesto experimental investigado por su interacción con vías relacionadas con metabolismo energético.",
    whatIs: "GW-501516, conocido como Cardarine, es un compuesto experimental que actúa sobre el receptor PPAR-δ, relacionado con procesos de metabolismo energético y oxidación de ácidos grasos.",
    general: "Fue investigado por su posible influencia sobre el metabolismo lipídico y la utilización de energía, pero su desarrollo clínico fue abandonado y no es un medicamento aprobado para uso terapéutico.",
    characteristics: "Compuesto de investigación de tipo agonista PPAR-δ. No es un SARM, aunque frecuentemente se comercializa dentro del mismo mercado.",
    presentation: "30 cápsulas.",
    storage: "Mantener en lugar fresco, seco y protegido de la luz, siguiendo la información técnica del fabricante.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables antes de adquirirlo."
  },
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
    hook: "Formulación líquida orientada al segmento de definición y composición corporal.",
    whatIs: "Lipodren es una formulación orientada al segmento de definición y composición corporal, presentada en formato líquido de 50 ml.",
    general: "Sus propiedades dependen directamente de los ingredientes activos y sus concentraciones. Para describir científicamente su mecanismo deben revisarse la composición completa y las cantidades declaradas por el fabricante.",
    characteristics: "Presentación líquida · 50 ml · La valoración del producto debe basarse en su etiqueta completa y ficha técnica.",
    presentation: "50 ml.",
    storage: "Conservar según las indicaciones del fabricante y proteger de luz y calor excesivos.",
    restriction: "Consulta disponibilidad y revisa la composición completa, el etiquetado y los requisitos aplicables."
  },
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
    hook: "Péptido experimental de interés en investigación preclínica sobre reparación tisular y señalización biológica.",
    whatIs: "BPC-157 es un péptido sintético investigado principalmente en modelos preclínicos relacionados con reparación tisular, inflamación y sistema gastrointestinal.",
    general: "Gran parte de las afirmaciones difundidas sobre BPC-157 proceden de estudios celulares y animales. La evidencia clínica en humanos continúa siendo limitada y no permite presentar sus efectos como beneficios terapéuticos demostrados.",
    characteristics: "Péptido de investigación · 5 mg · Su perfil clínico, eficacia y seguridad continúan siendo objeto de estudio.",
    presentation: "5 mg.",
    storage: "Debe conservarse según las especificaciones del fabricante y de la presentación concreta del producto.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables."
  },
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
    hook: "Formulación especializada de aminoácidos cuya valoración depende de su composición y concentraciones declaradas.",
    whatIs: "Grow Factor Amino TK es una formulación de aminoácidos cuyo perfil depende de la combinación y concentración específica declarada en el producto.",
    general: "Los aminoácidos cumplen funciones fundamentales en síntesis proteica, metabolismo y recuperación de tejidos, pero los efectos concretos de esta formulación dependen de su composición completa.",
    characteristics: "Fórmula líquida de aminoácidos · La descripción de efectos específicos requiere verificar ingredientes y concentraciones.",
    presentation: "100 ml.",
    storage: "Conservar según la información técnica y las indicaciones de la etiqueta del fabricante.",
    restriction: "Consulta disponibilidad y documentación técnica antes de adquirirlo."
  },
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
    hook: "Alcaloide de origen vegetal ampliamente estudiado en el contexto del metabolismo de glucosa y lípidos.",
    whatIs: "La berberina es un alcaloide de origen vegetal presente en diversas especies del género Berberis y otras plantas.",
    general: "Ensayos clínicos y revisiones han descrito mejoras modestas en algunos marcadores metabólicos en determinadas poblaciones. No sustituye tratamientos médicos y puede interactuar con medicamentos.",
    characteristics: "Berberine TK · 250 mg según etiqueta · Compuesto vegetal estudiado en metabolismo de glucosa y lípidos.",
    presentation: "250 mg · 30 cápsulas.",
    storage: "Mantener el frasco cerrado, protegido de humedad, luz directa y calor excesivo.",
    restriction: "Suplemento. Verifica ingredientes, concentración, advertencias e interacciones antes de utilizarlo."
  },
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
    hook: "Complejo peptídico con cobre estudiado en investigación regenerativa y dermatológica.",
    whatIs: "GHK-Cu es un complejo formado por el tripéptido GHK —glicil-L-histidil-L-lisina— y cobre.",
    general: "La investigación preclínica ha estudiado su participación en remodelación de matriz extracelular, síntesis de colágeno, procesos de reparación y señalización celular. La evidencia clínica humana de alta calidad sigue siendo limitada.",
    characteristics: "Péptido unido a cobre de interés en investigación regenerativa y dermatológica.",
    presentation: "100 mg.",
    storage: "Seguir exclusivamente las condiciones indicadas en la documentación técnica del fabricante.",
    restriction: "Producto de investigación. Consulta disponibilidad, composición, documentación y requisitos aplicables."
  },
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
    hook: "Compuesto farmacológicamente activo cuya información requiere especial cautela y contexto profesional.",
    whatIs: "El clenbuterol es un agonista beta-2 adrenérgico con efectos broncodilatadores y estimulantes.",
    general: "Puede aumentar la actividad simpática y producir efectos cardiovasculares y neurológicos relevantes. No debe presentarse como un suplemento deportivo ni como un producto inocuo para definición corporal.",
    characteristics: "CLEN TK · Clenbuterol 40 mcg según etiqueta · Compuesto de acción beta-adrenérgica.",
    presentation: "40 mcg · 50 cápsulas.",
    storage: "Conservar conforme a la información del fabricante y mantener fuera del alcance de niños.",
    restriction: "Producto sujeto a regulación. Consulta disponibilidad y requisitos aplicables; puede requerir evaluación o prescripción profesional."
  },
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
    hook: "Medicamento de acción hormonal que requiere contexto clínico y supervisión profesional.",
    whatIs: "El citrato de clomifeno es un modulador selectivo de los receptores de estrógeno —SERM— utilizado en contextos médicos específicos relacionados con la función reproductiva.",
    general: "Actúa modificando la retroalimentación estrogénica a nivel hipotalámico, lo que puede alterar la liberación de gonadotropinas. No debe presentarse como suplemento deportivo ni asegurar resultados hormonales universales.",
    characteristics: "Clomid 50 TK · Clomiphene Citrate 50 mg según etiqueta · Medicamento de acción hormonal.",
    presentation: "50 mg · 10 tabletas.",
    storage: "Mantener protegido de humedad, calor y luz, según las especificaciones del producto.",
    restriction: "Medicamento sujeto a regulación y prescripción donde corresponda. Consulta disponibilidad y requisitos aplicables."
  },
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
    hook: "Insumo de reconstitución cuya compatibilidad depende del producto y de la formulación específica.",
    whatIs: "Solución destinada a procesos de reconstitución o preparación, de acuerdo con las características indicadas por el fabricante.",
    general: "La compatibilidad de cualquier diluyente depende del producto que vaya a ser reconstituido. No debe asumirse que una solución es adecuada para cualquier compuesto sin revisar su identificación y ficha técnica.",
    characteristics: "Presentación líquida para reconstitución · Verificar en la etiqueta si corresponde a agua bacteriostática, estéril u otra formulación.",
    presentation: "10 ml.",
    storage: "Seguir las condiciones indicadas en su etiqueta y documentación técnica.",
    restriction: "Consulta disponibilidad, identificación del diluyente, documentación y requisitos aplicables."
  },
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
    hook: "Combinación de citrulina, arginina, zinc y magnesio orientada a nutrición deportiva.",
    whatIs: "Fórmula de nutrición deportiva que combina aminoácidos relacionados con la producción de óxido nítrico y minerales esenciales.",
    general: "La citrulina participa indirectamente en la síntesis de óxido nítrico al elevar la disponibilidad de arginina. Zinc y magnesio participan en numerosos procesos enzimáticos y fisiológicos. Los resultados sobre rendimiento dependen de las cantidades reales presentes en la fórmula y del estado nutricional de la persona.",
    characteristics: "Citrulina · Arginina · Zinc · Magnesio según etiqueta · 60 cápsulas.",
    presentation: "60 cápsulas.",
    storage: "Mantener el envase cerrado en un lugar fresco y seco.",
    restriction: "Suplemento. Consulta la tabla nutricional completa, cantidades por porción y advertencias antes de utilizarlo."
  },
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
    whatIs: "Ipamorelin es un péptido sintético perteneciente al grupo de secretagogos de hormona de crecimiento y actúa principalmente mediante el receptor de ghrelina/GHSR.",
    general: "Se ha investigado por su capacidad para estimular la liberación de hormona de crecimiento. Esto no equivale a demostrar beneficios garantizados sobre ganancia muscular, pérdida de grasa, rejuvenecimiento o recuperación en personas sanas.",
    characteristics: "Péptido de investigación con actividad sobre vías relacionadas con la secreción de hormona de crecimiento.",
    presentation: "10 mg.",
    storage: "La estabilidad depende de la forma del producto y las instrucciones del fabricante. Seguir la ficha técnica correspondiente.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables."
  },
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
    hook: "Molécula investigacional de gran interés actual en investigación metabólica.",
    whatIs: "Retatrutide es una molécula experimental desarrollada como agonista triple de los receptores GIP, GLP-1 y glucagón.",
    general: "Ha sido estudiada en ensayos clínicos para obesidad y otras enfermedades metabólicas. La existencia de resultados de investigación no equivale a aprobación para uso general; continúa siendo un fármaco investigacional.",
    characteristics: "Triple agonista GIP / GLP-1 / glucagón · Compuesto actualmente en investigación clínica.",
    presentation: "10 mg.",
    storage: "Las condiciones deben corresponder a la formulación específica y a las instrucciones técnicas del fabricante.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables."
  },
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
    hook: "Formulación especializada cuya descripción responsable requiere confirmar su composición real.",
    whatIs: "KLOW TK es una formulación especializada presentada en 80 mg. Su descripción específica debe basarse en los principios activos y concentraciones declaradas por el fabricante.",
    general: "Para describir correctamente su mecanismo y características es necesario verificar primero la composición exacta del producto y su documentación técnica.",
    characteristics: "Presentación especializada · 80 mg · Composición específica pendiente de verificación documental.",
    presentation: "80 mg.",
    storage: "Seguir las instrucciones técnicas del fabricante.",
    restriction: "Consulta disponibilidad, composición, documentación y requisitos aplicables."
  }
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
const modalRestriction = document.getElementById("modalRestriction");

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

  const generalTab = modalTabs.find(tab => tab.dataset.tab === "general");
  if (generalTab) generalTab.textContent = product.generalLabel || "INFORMACIÓN GENERAL";

  modalRestriction.textContent = product.restriction;
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
  delete cart[productId];
  quantities[productId] = 0;

  const cardValue = document.querySelector(`[data-quantity-value="${productId}"]`);
  if (cardValue) cardValue.textContent = "0";
  if (currentProductId === productId) modalQuantityValue.textContent = "0";

  saveCart();
  renderCart();
  updateProductActionState(productId);
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

  if (unitCount === 0) {
    sendCartWhatsApp.setAttribute("aria-disabled", "true");
    sendCartWhatsApp.setAttribute("href", "#");
  } else {
    sendCartWhatsApp.setAttribute("aria-disabled", "false");
    sendCartWhatsApp.setAttribute("href", buildCartWhatsAppUrl());
  }
}

function openCart() {
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

function buildCartWhatsAppUrl() {
  const entries = Object.entries(cart)
    .map(([productId, quantity]) => [getProduct(productId), Number(quantity)])
    .filter(([product, quantity]) => product && quantity > 0);

  if (!entries.length) return "#";

  const lines = entries.map(([product, quantity]) => {
    const subtotal = discountedPrice(product) * quantity;
    return `• ${quantity} × ${product.title} (${product.presentation}) — ${formatPrice(subtotal)}`;
  });

  const message =
    `Hola, quisiera consultar disponibilidad de este pedido de TK Elite Lab:\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total estimado: ${formatPrice(cartEstimatedTotal())}\n\n` +
    `Por favor, confírmame disponibilidad para continuar con el pedido.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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

  closeCart();
  if (message) showToast(message);
}

function sendCartToWhatsApp(event) {
  if (event) event.preventDefault();

  if (!cartUnitCount()) {
    showToast("Tu carrito está vacío.");
    return;
  }

  const whatsappUrl = buildCartWhatsAppUrl();

  try {
    sessionStorage.setItem("tkEliteLabResetAfterWhatsApp", "1");
  } catch (error) {
    // Continuar aunque sessionStorage no esté disponible.
  }

  // Limpiar antes de salir garantiza que, al volver desde WhatsApp, la consulta anterior no reaparezca.
  resetCartState();

  const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.href = whatsappUrl;
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
