// Panier LUXORA — stocké en localStorage (site déployé en dehors de l'aperçu artifact, localStorage fonctionne normalement)
const CART_KEY = "luxora_cart";

function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
  showToast();
}

function setQty(id, qty){
  const cart = getCart();
  if(qty <= 0){ delete cart[id]; } else { cart[id] = qty; }
  saveCart(cart);
}

function removeFromCart(id){
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
  if(typeof renderCartPage === "function") renderCartPage();
}

function cartCount(){
  const cart = getCart();
  return Object.values(cart).reduce((a,b) => a+b, 0);
}

function cartTotal(){
  const cart = getCart();
  let total = 0;
  Object.keys(cart).forEach(id => {
    const p = LUXORA_PRODUCTS[id];
    if(p) total += p.price * cart[id];
  });
  return total;
}

function updateCartBadge(){
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = cartCount();
    if(typeof bumpElement === "function") bumpElement(el);
  });
}

function showToast(){
  const toast = document.getElementById("added-toast");
  if(!toast) return;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function buildWhatsAppLink(customMessage){
  let message;
  if(customMessage){
    message = customMessage;
  } else {
    const cart = getCart();
    const ids = Object.keys(cart);
    if(ids.length === 0){
      message = "Bonjour LUXORA, je souhaite passer une commande.";
    } else {
      let lines = ["Bonjour LUXORA, je souhaite commander :"];
      ids.forEach(id => {
        const p = LUXORA_PRODUCTS[id];
        if(p) lines.push(`- ${p.name} x${cart[id]} (${formatFCFA(p.price * cart[id])})`);
      });
      lines.push(`Total : ${formatFCFA(cartTotal())}`);
      message = lines.join("\n");
    }
  }
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

// Initialise le badge du panier sur chaque page au chargement
document.addEventListener("DOMContentLoaded", updateCartBadge);
