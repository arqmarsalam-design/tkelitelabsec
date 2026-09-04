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
    hook: "Potencia cada sesión con uno de los suplementos más estudiados del rendimiento deportivo.",
    whatIs: "La creatina monohidratada es una forma de creatina utilizada como suplemento nutricional y ampliamente estudiada en el contexto del ejercicio de alta intensidad.",
    general: "La creatina participa en el sistema de fosfocreatina, relacionado con la disponibilidad rápida de energía durante esfuerzos breves e intensos. La respuesta puede variar según alimentación, entrenamiento y características individuales.",
    characteristics: "Creatina monohidratada · Formato en polvo · Micronizada · Sin sabor según presentación.",
    presentation: "300 g · 60 porciones, según la presentación mostrada.",
    storage: "Mantener el envase bien cerrado, en un lugar fresco y seco, protegido de humedad y calor directo.",
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
    hook: "Un compuesto experimental que despierta interés por su papel dentro de la investigación metabólica.",
    whatIs: "GW-501516 es un compuesto de investigación conocido como Cardarine. No debe interpretarse como un suplemento convencional ni como una terapia establecida.",
    general: "Se ha estudiado experimentalmente en vías relacionadas con metabolismo energético. La seguridad, eficacia y situación regulatoria deben verificarse antes de cualquier consideración de uso o comercialización.",
    characteristics: "Etiqueta frontal: Cardarine TK · GW-501516 · 30 cápsulas · 'Pharmaceutical Grade' según el empaque.",
    presentation: "30 cápsulas.",
    storage: "Conservar de acuerdo con la ficha técnica del fabricante, protegido de humedad y temperaturas extremas.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables antes de adquirirlo."
  },
  {
    id: "lipodren",
    title: "Lipodren",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/lipodren-50ml.webp",
    featured: false,
    directPurchase: false,
    price: 80,
    discountPercent: 0,
    hook: "Una presentación líquida que invita a revisar con detalle su fórmula antes de decidir.",
    whatIs: "Producto rotulado como Dietary Supplement en presentación líquida de 50 ml.",
    general: "La cara frontal del empaque no permite confirmar la fórmula completa. Antes de considerar un suplemento con enfoque estimulante o metabólico, conviene revisar ingredientes, cantidades, advertencias e interacciones.",
    characteristics: "Presentación líquida · 50 ml · Dietary Supplement según etiqueta.",
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
    featured: true,
    directPurchase: false,
    price: 120,
    discountPercent: 0,
    hook: "Uno de los péptidos experimentales más comentados dentro del ámbito de la investigación.",
    whatIs: "BPC-157 es un péptido experimental. La información disponible no debe presentarse como una terapia aprobada o como un beneficio clínico garantizado.",
    general: "Gran parte de la literatura se concentra en investigación preclínica. La calidad del producto, su estabilidad, documentación y estado regulatorio son aspectos esenciales al evaluar este tipo de compuesto.",
    characteristics: "Etiqueta: BPC-157 TK · 5 mg · 'Pharmaceutical Grade' según el empaque.",
    presentation: "5 mg.",
    storage: "La estabilidad depende de la forma del producto y de las instrucciones del fabricante. Seguir únicamente la ficha técnica correspondiente.",
    restriction: "Producto de investigación. Consulta disponibilidad, documentación y requisitos aplicables."
  },
  {
    id: "amino",
    title: "Grow Factor Amino TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/amino-tk-100ml.webp",
    featured: false,
    directPurchase: false,
    price: 70,
    discountPercent: 0,
    hook: "Una fórmula de perfil especializado que merece una ficha técnica clara antes de cualquier consideración.",
    whatIs: "Producto comercial rotulado como Grow Factor AMINO TK / Myostimulant.",
    general: "La imagen frontal contiene afirmaciones comerciales, pero no permite verificar la composición completa ni sustentar por sí sola resultados clínicos. La evaluación debe basarse en ingredientes, concentraciones, fabricante y documentación técnica.",
    characteristics: "Presentación líquida · 100 ml · Rotulado 'Myostimulant' y 'Pharmaceutical Grade' según empaque.",
    presentation: "100 ml.",
    storage: "Conservar según la información técnica del fabricante.",
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
    price: 70,
    discountPercent: 0,
    hook: "Un compuesto vegetal que ha ganado protagonismo en la conversación sobre metabolismo y nutrición.",
    whatIs: "La berberina es un alcaloide presente en distintas plantas y utilizado en productos de suplementación.",
    general: "Ha sido estudiada en distintos contextos metabólicos. Puede interactuar con medicamentos y no sustituye el tratamiento indicado por un profesional de salud.",
    characteristics: "Berberine TK · 250 mg según etiqueta · 30 cápsulas.",
    presentation: "250 mg · 30 cápsulas.",
    storage: "Mantener el frasco cerrado, protegido de humedad, luz directa y calor excesivo.",
    restriction: "Suplemento. Verifica ingredientes, concentración, advertencias e interacciones antes de utilizarlo."
  },
  {
    id: "chkcu",
    title: "Chk-CU TK",
    category: "research",
    categoryLabel: "Research",
    image: "images/chk-cu-tk-100mg.webp",
    featured: false,
    directPurchase: false,
    price: 140,
    discountPercent: 0,
    hook: "Un producto de catálogo especializado cuya composición debe confirmarse antes de interpretarlo.",
    whatIs: "Producto identificado en el empaque como Chk-CU TK 100 mg.",
    general: "El nombre comercial visible no permite confirmar con certeza el principio activo. Para describir usos, propiedades o riesgos se requiere la ficha técnica oficial del fabricante.",
    characteristics: "Caja blanca · Chk-CU TK · 100 mg · 'Pharmaceutical Grade' según etiqueta frontal.",
    presentation: "100 mg.",
    storage: "Seguir exclusivamente las condiciones indicadas en la documentación técnica del fabricante.",
    restriction: "Información limitada a identificación visual. Consulta disponibilidad y documentación técnica del producto."
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
    hook: "Información técnica primero: un compuesto farmacológico que exige especial cautela.",
    whatIs: "El clenbuterol es un agonista beta-adrenérgico. Sus usos permitidos y su disponibilidad para humanos varían según la regulación de cada país.",
    general: "Puede producir efectos cardiovasculares y neurológicos relevantes. No debe tratarse como un suplemento deportivo ni utilizarse sin evaluación profesional y cumplimiento de la normativa aplicable.",
    characteristics: "CLEN TK · Clenbuterol 40 mcg según etiqueta · 50 cápsulas.",
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
    hook: "Una ficha clara para un medicamento que requiere contexto clínico, no promesas comerciales.",
    whatIs: "El citrato de clomifeno es un medicamento utilizado en determinadas indicaciones médicas bajo supervisión profesional.",
    general: "Actúa sobre receptores estrogénicos y sus indicaciones, contraindicaciones, interacciones y seguimiento deben ser evaluados por un profesional de salud.",
    characteristics: "Clomid 50 TK · Clomiphene Citrate 50 mg según etiqueta · 10 tabletas.",
    presentation: "50 mg · 10 tabletas.",
    storage: "Conservar según el prospecto y las condiciones indicadas por el fabricante.",
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
    hook: "Un insumo de laboratorio cuya correcta identificación importa tanto como el producto principal.",
    whatIs: "Solución bacteriostática de 10 ml rotulada para fines de investigación según el envase.",
    general: "La compatibilidad, esterilidad y forma de uso dependen del producto concreto, del fabricante y de protocolos autorizados. La imagen no sustituye instrucciones técnicas.",
    characteristics: "TH Labs · 10 ml · Bacteriostatic Preservation · 'Research Only' según etiqueta.",
    presentation: "10 ml.",
    storage: "Seguir las indicaciones de almacenamiento incluidas por el fabricante.",
    restriction: "Producto rotulado para investigación. Consulta disponibilidad, documentación y requisitos aplicables."
  },
  {
    id: "nitrotest",
    title: "Nitrotest",
    category: "supplement",
    categoryLabel: "Suplemento",
    image: "images/nitrotest-60caps.webp",
    featured: false,
    directPurchase: true,
    price: 80,
    discountPercent: 0,
    hook: "Una combinación directa de aminoácidos y minerales orientada al contexto de nutrición deportiva.",
    whatIs: "Fórmula en cápsulas que declara citrulina, arginina, zinc y magnesio en su etiqueta frontal.",
    general: "Cada ingrediente cumple funciones diferentes en el organismo. Para valorar el producto correctamente se deben revisar cantidades por porción, ingredientes completos y advertencias del etiquetado.",
    characteristics: "Citrulina · Arginina · Zinc · Magnesio según etiqueta · 60 cápsulas.",
    presentation: "60 cápsulas.",
    storage: "Mantener el envase cerrado en un lugar fresco y seco.",
    restriction: "Suplemento. Consulta la tabla nutricional completa antes de utilizarlo."
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
    hook: "Un péptido de investigación que destaca dentro del estudio de la señalización hormonal.",
    whatIs: "Ipamorelin es un péptido conocido por su actividad como secretagogo de hormona de crecimiento en contextos de investigación.",
    general: "No debe presentarse como tratamiento establecido. La calidad, pureza, documentación y situación regulatoria del producto son fundamentales en cualquier evaluación.",
    characteristics: "Ipamorelin TK · 10 mg · 'Pharmaceutical Grade' según etiqueta.",
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
    hook: "Uno de los compuestos investigacionales que más atención ha generado en el campo metabólico.",
    whatIs: "Retatrutide es un compuesto investigacional estudiado en el área metabólica. Su estado regulatorio debe verificarse con fuentes oficiales y actualizadas.",
    general: "La existencia de investigación clínica no equivale a aprobación para uso general. No deben extrapolarse resultados ni asumir indicaciones fuera de marcos autorizados.",
    characteristics: "Retatrutide TK · 10 mg · 'Peptide / Pharmaceutical Grade' según etiqueta.",
    presentation: "10 mg.",
    storage: "Seguir exclusivamente las instrucciones técnicas del fabricante.",
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
    hook: "Una presentación de perfil especializado que exige conocer primero su composición real.",
    whatIs: "Producto rotulado como KLOW TK / Peptide en presentación de 80 mg.",
    general: "El frente del empaque no permite identificar con certeza la composición o el principio activo. La descripción responsable requiere documentación técnica del fabricante.",
    characteristics: "KLOW TK · 80 mg · 'Peptide' y 'Pharmaceutical Grade' según etiqueta.",
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

// =========================================================
// ELEMENTOS
// =========================================================

const productsGrid = document.getElementById("productsGrid");
const resultCount = document.getElementById("resultCount");
const productSearch = document.getElementById("productSearch");
const filters = [...document.querySelectorAll(".filter")];
const clearFilters = document.getElementById("clearFilters");

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

function ctaText(product) {
  return product && product.directPurchase ? "AGREGAR AL CARRITO" : "AGREGAR A CONSULTA";
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

  const cardCta = document.querySelector(`[data-add-cart="${productId}"]`);
  if (cardCta) {
    cardCta.disabled = quantities[productId] === 0;
  }

  if (currentProductId === productId) {
    modalQuantityValue.textContent = quantities[productId];
    modalCta.disabled = quantities[productId] === 0;
  }
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
          ${quantities[product.id] === 0 ? "disabled" : ""}
        >
          ${ctaText(product)}
        </button>
      </div>
    </article>
  `;
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

  modalRestriction.textContent = product.restriction;
  modalCta.textContent = ctaText(product);
  modalCta.classList.remove("restricted");
  modalCta.disabled = quantities[productId] === 0;

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

  modalInfoTitle.textContent = tabTitles[tabName] || "";
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
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
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

  const quantity = quantities[productId] ?? 0;
  if (quantity < 1) {
    showToast("Selecciona al menos 1 unidad.");
    return;
  }

  cart[productId] = Math.min(99, Number(cart[productId] || 0) + quantity);
  quantities[productId] = 0;

  const cardValue = document.querySelector(`[data-quantity-value="${productId}"]`);
  if (cardValue) cardValue.textContent = "0";

  const cardCta = document.querySelector(`[data-add-cart="${productId}"]`);
  if (cardCta) cardCta.disabled = true;

  if (currentProductId === productId) {
    modalQuantityValue.textContent = "0";
    modalCta.disabled = true;
  }

  saveCart();
  renderCart();
  showToast(`${product.title} agregado al carrito.`);
}

function updateCartItem(productId, delta) {
  if (!cart[productId]) return;

  const next = Number(cart[productId]) + delta;
  if (next <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = Math.min(99, next);
  }

  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  delete cart[productId];
  saveCart();
  renderCart();
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
          <span>${formatPrice(unitPrice)} c/u</span>
          <strong>${formatPrice(subtotal)}</strong>
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
  sendCartWhatsApp.disabled = unitCount === 0;
  clearCartButton.disabled = unitCount === 0;
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

function sendCartToWhatsApp() {
  const entries = Object.entries(cart)
    .map(([productId, quantity]) => [getProduct(productId), Number(quantity)])
    .filter(([product, quantity]) => product && quantity > 0);

  if (!entries.length) {
    showToast("Tu carrito está vacío.");
    return;
  }

  const lines = entries.map(([product, quantity]) => {
    const subtotal = discountedPrice(product) * quantity;
    return `• ${quantity} × ${product.title} (${product.presentation}) — ${formatPrice(subtotal)}`;
  });

  const message =
    `Hola, quisiera consultar disponibilidad de esta selección de TK Elite Lab:\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total estimado: ${formatPrice(cartEstimatedTotal())}\n\n` +
    `Por favor, confírmame disponibilidad y cualquier requisito aplicable.`;

  const url =
    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

  window.location.href = url;
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
  cart = {};
  saveCart();
  renderCart();
  showToast("Carrito vaciado.");
});

sendCartWhatsApp.addEventListener("click", sendCartToWhatsApp);

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

renderProducts();
renderCart();
