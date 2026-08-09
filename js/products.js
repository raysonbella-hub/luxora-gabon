// Catalogue LUXORA — source unique utilisée par la boutique, les pages produit et le panier
// Catalogue en cours de reconstruction avec les vrais produits (ajout progressif).
const LUXORA_PRODUCTS = {
  "creme-collagene-mooyam": {
    name: "Crème Raffermissante au Collagène",
    brand: "MOOYAM",
    tagline: "Visage & contour des yeux, jour et nuit",
    price: 24000,
    oldPrice: 32000,
    image: "images/products/creme-collagene-mooyam.jpg"
  },
  "creme-anticicatrices-mooyam": {
    name: "Crème Anti-Cicatrices",
    brand: "MOOYAM",
    tagline: "Aide à atténuer l'apparence des marques cutanées",
    price: 18000,
    oldPrice: 25000,
    image: "images/products/creme-anticicatrices-mooyam.jpg"
  },
  "serum-eclat-mooyam": {
    name: "Sérum Éclat & Teint Uniforme",
    brand: "MOOYAM",
    tagline: "Pour un teint plus uniforme, en usage ciblé",
    price: 16000,
    oldPrice: 22000,
    image: "images/products/serum-eclat-mooyam.jpg"
  },
  "creme-chaude-mooyam": {
    name: "Crème Chaude Raffermissante",
    brand: "MOOYAM",
    tagline: "Sensation de chaleur, texture ultra-hydratante",
    price: 20000,
    oldPrice: 27000,
    image: "images/products/creme-chaude-mooyam.jpg"
  },
  "booster-fesses-mooyam": {
    name: "Crème Booster Raffermissante",
    brand: "MOOYAM",
    tagline: "Soin ciblé, texture veloutée et hydratante",
    price: 27000,
    oldPrice: 35000,
    image: "images/products/booster-fesses-mooyam.jpg"
  }
};

const WHATSAPP_NUMBER = "24162396718";

function formatFCFA(n){
  return n.toLocaleString('fr-FR').replace(/,/g, ' ') + " FCFA";
}
