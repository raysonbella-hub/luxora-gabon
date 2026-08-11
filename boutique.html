// Envoi des commandes vers Google Sheets (via le Google Form connecté au compte raysonbella01@gmail.com).
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScmjmv6wGk2DqYkm9vEvlx8dATQ4JvVQJpi9_GFe0pjJOHXeg/formResponse";
const GOOGLE_FORM_ENTRIES = {
  nom: "entry.1780618026",
  telephone: "entry.1622544462",
  ville: "entry.1540502171",
  commande: "entry.2077554945"
};

function submitOrder(fields){
  return new Promise((resolve) => {
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
