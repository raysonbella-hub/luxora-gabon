// Animations LUXORA — reveal au scroll + micro-interactions
// Respecte prefers-reduced-motion : désactive les animations si l'utilisateur le demande.

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Reveal au scroll (purement décoratif, ne cache jamais le contenu) ---------- */
function initScrollReveal(){
  // Le contenu est visible par défaut (voir CSS). On ajoute un léger mouvement
  // uniquement si l'utilisateur n'a pas demandé de réduire les animations,
  // et seulement pour les éléments déjà proches de l'écran — jamais de risque de contenu caché.
  if(REDUCED_MOTION) return;
  const items = document.querySelectorAll("[data-reveal]");
  items.forEach(el => {
    el.classList.add("will-animate");
    requestAnimationFrame(() => el.classList.add("in-view"));
  });
}

/* ---------- Bouton "ajouté" avec état de succès ---------- */
function pulseSuccess(btn, successText){
  if(!btn) return;
  const original = btn.textContent;
  btn.classList.add("btn-success-pulse");
  btn.textContent = successText || "Ajouté ✓";
  btn.disabled = true;
  setTimeout(() => {
    btn.classList.remove("btn-success-pulse");
    btn.textContent = original;
    btn.disabled = false;
  }, 1400);
}

/* ---------- Petit "bump" visuel sur un élément (ex: quantité modifiée) ---------- */
function bumpElement(el){
  if(!el || REDUCED_MOTION) return;
  el.classList.remove("bump");
  void el.offsetWidth; // force reflow pour rejouer l'animation
  el.classList.add("bump");
}

/* ---------- Fondu d'entrée de page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");
  initScrollReveal();
});
