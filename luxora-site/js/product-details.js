// Contenu détaillé de chaque produit, utilisé uniquement sur produit.html
// Descriptions enrichies à partir des informations réelles du fabricant (ingrédients, texture, mode d'emploi).
const LUXORA_PRODUCT_DETAILS = {
  "creme-collagene-mooyam": {
    description: "Une crème raffermissante à l'acide hyaluronique 7%, pensée pour le visage et le contour des yeux. Sa texture légère, comparée à une glace fondante, pénètre rapidement sans laisser de film gras. Convient aux femmes comme aux hommes, jour et nuit.",
    steps: [
      { title: "Activer le pot", text: "À la première utilisation, appuyez 1 à 2 fois sur la pompe pour activer l'emballage sous vide." },
      { title: "Matin", text: "Appliquer sur peau propre, en mouvements circulaires jusqu'à absorption complète." },
      { title: "Soir", text: "Renouveler l'application avant le coucher, en incluant le contour des yeux." }
    ],
    specs: [
      { label: "Marque", value: "MOOYAM (produit importé, sélectionné et distribué par LUXORA)" },
      { label: "Contenance", value: "50 ml / 1,7 fl.oz" },
      { label: "Ingrédient clé", value: "Acide hyaluronique 7%" },
      { label: "Texture", value: "Légère, non grasse, absorption rapide" },
      { label: "Fabriqué en", value: "Chine" },
      { label: "Convient à", value: "Tous types de peau, femmes et hommes — test préalable recommandé" }
    ]
  },
  "creme-anticicatrices-mooyam": {
    description: "Une crème à base d'extraits de plantes (beurre de karité, squalane, centella asiatica), pensée pour accompagner l'apparence de la peau au niveau des marques cutanées. Texture légère, à absorption rapide, sans effet gras.",
    steps: [
      { title: "Nettoyage", text: "Nettoyer et sécher la zone concernée avant application." },
      { title: "Application", text: "Appliquer une fine couche en massant délicatement jusqu'à absorption." },
      { title: "Régularité", text: "Utilisation quotidienne recommandée, matin et/ou soir selon la zone." }
    ],
    specs: [
      { label: "Marque", value: "MOOYAM (produit importé, sélectionné et distribué par LUXORA)" },
      { label: "Contenance", value: "30g / 1.06 fl.oz" },
      { label: "Ingrédients clés", value: "Beurre de karité, squalane, centella asiatica" },
      { label: "Fabriqué en", value: "Chine" },
      { label: "Convient à", value: "Usage externe uniquement — test préalable recommandé" }
    ]
  },
  "serum-eclat-mooyam": {
    description: "Un sérum concentré à la niacinamide, à appliquer en usage ciblé sur les zones où vous souhaitez un teint plus uniforme. Formule légère à absorption rapide, conditionnée en flacon compte-gouttes.",
    steps: [
      { title: "Préparation", text: "Nettoyer et sécher la zone concernée." },
      { title: "Application", text: "Appliquer 1 à 2 gouttes en mouvements circulaires jusqu'à absorption." },
      { title: "Fréquence", text: "Application le soir uniquement, en usage régulier." }
    ],
    specs: [
      { label: "Marque", value: "MOOYAM (produit importé, sélectionné et distribué par LUXORA)" },
      { label: "Contenance", value: "50 ml / 1,7 fl.oz" },
      { label: "Ingrédient clé", value: "Niacinamide" },
      { label: "Usage", value: "Externe uniquement, à l'abri de la lumière directe du soleil" },
      { label: "Fabriqué en", value: "Chine" },
      { label: "Convient à", value: "Test préalable recommandé avant la première utilisation" }
    ]
  },
  "creme-chaude-mooyam": {
    description: "Une crème à texture riche, formulée à l'extrait de piment, caféine, beurre de karité et huile de jojoba, qui procure une sensation de chaleur à l'application. Pensée pour accompagner un massage ou une routine sportive sur l'abdomen, la taille, les bras, les jambes ou les cuisses.",
    steps: [
      { title: "Application", text: "Masser en couche généreuse sur la zone souhaitée, sans rincer." },
      { title: "Sensation", text: "Une sensation de chaleur apparaît progressivement — normale et attendue." },
      { title: "Fréquence", text: "Deux fois par jour, matin et soir." }
    ],
    specs: [
      { label: "Marque", value: "MOOYAM (produit importé, sélectionné et distribué par LUXORA)" },
      { label: "Contenance", value: "100g / 3,5 fl.oz" },
      { label: "Ingrédients clés", value: "Extrait de piment, caféine, beurre de karité, huile de jojoba, centella asiatica, thé vert, réglisse, romarin" },
      { label: "Zones", value: "Abdomen, taille, bras, jambes, cuisses" },
      { label: "Fabriqué en", value: "Chine" },
      { label: "Convient à", value: "Test préalable recommandé — éviter le contact avec les yeux et les peaux lésées" }
    ]
  },
  "booster-fesses-mooyam": {
    description: "Un soin à texture veloutée, formulé avec de l'huile de macadamia, de la glycérine et de l'alcool cétéarylique, pensé pour un massage ciblé qui aide à hydrater la peau et à favoriser une sensation de fermeté au toucher. Convient aux femmes comme aux hommes.",
    steps: [
      { title: "Application", text: "Appliquer une quantité généreuse et masser doucement en posant les paumes sur les hanches." },
      { title: "Massage 1", text: "Presser en descendant de la taille vers les fesses, 10 fois." },
      { title: "Massage 2", text: "Masser en vagues des fesses vers les cuisses, 10 fois." }
    ],
    specs: [
      { label: "Marque", value: "MOOYAM (produit importé, sélectionné et distribué par LUXORA)" },
      { label: "Contenance", value: "100 ml" },
      { label: "Ingrédients clés", value: "Huile de macadamia, glycérine, alcool cétéarylique" },
      { label: "Convient à", value: "Tous types de peau, femmes et hommes" },
      { label: "Fabriqué en", value: "Chine" },
      { label: "Précaution", value: "Usage externe uniquement — éviter le contact avec les yeux" }
    ]
  }
};
