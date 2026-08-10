// Envoi des commandes vers Google Sheets (via un Google Form en arrière-plan).
// ⚠️ À COMPLÉTER : remplacer FORM_ACTION_URL et les entry.XXXX ci-dessous
// une fois le Google Form créé (voir instructions fournies).

const GOOGLE_FORM_ACTION = "REMPLACER_PAR_URL_FORMRESPONSE";
const GOOGLE_FORM_ENTRIES = {
  nom: "REMPLACER_entry_ID_NOM",
  telephone: "REMPLACER_entry_ID_TELEPHONE",
  ville: "REMPLACER_entry_ID_VILLE",
  commande: "REMPLACER_entry_ID_COMMANDE"
};

function submitOrder(fields){
  return new Promise((resolve) => {
    // Si la config n'est pas encore renseignée, on ne bloque pas le site — on log juste en console.
    if(GOOGLE_FORM_ACTION.startsWith("REMPLACER")){
      console.warn("Google Form non configuré — commande non envoyée.", fields);
      resolve();
      return;
    }

    const iframeName = "hidden_order_frame_" + Date.now();
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION;
    form.method = "POST";
    form.target = iframeName;
    form.style.display = "none";

    Object.entries(fields).forEach(([key, value]) => {
      const entryId = GOOGLE_FORM_ENTRIES[key];
      if(!entryId) return;
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entryId;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve();
    }, 900);
  });
}
