// Catalogue LUXORA — source unique utilisée par la boutique, les pages produit et le panier
const LUXORA_PRODUCTS = {
  "pack-transformation": {
    name: "Pack Transformation",
    tagline: "Le rituel complet en 3 gestes",
    price: 22000,
    oldPrice: 39000,
    icon: "triptych"
  },
  "gummies-collagene": {
    name: "Gummies Collagène LUXORA",
    tagline: "La beauté qui se croque chaque matin",
    price: 15000,
    oldPrice: 19000,
    icon: "jar"
  },
  "serum-eclat": {
    name: "Sérum Éclat & Teint Uniforme",
    tagline: "Un teint plus lumineux, plus uniforme",
    price: 18000,
    oldPrice: 24000,
    icon: "dropper"
  },
  "complement-silhouette": {
    name: "Complément Silhouette LUXORA",
    tagline: "Accompagne votre routine minceur",
    price: 25000,
    oldPrice: 32000,
    icon: "pouch"
  }
};

const WHATSAPP_NUMBER = "24162396718";

function formatFCFA(n){
  return n.toLocaleString('fr-FR').replace(/,/g, ' ') + " FCFA";
}
