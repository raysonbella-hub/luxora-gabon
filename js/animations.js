// Animations LUXORA — reveal au scroll + micro-interactions
// Respecte prefers-reduced-motion : désactive les animations si l'utilisateur le demande.

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Reveal au scroll ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll("[data-reveal]");
  if(items.length === 0) return;

  if(REDUCED_MOTION){
    items.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach((el, i) => {
    const group = el.closest("[data-reveal-group]");
    const delay = group ? (i % 6) * 80 : 0;
    el.style.transitionDelay = delay + "ms";
    observer.observe(el);
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
