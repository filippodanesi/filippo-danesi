export default function middleware(request) {
  const url = new URL(request.url);

  // Ignora le richieste per le risorse statiche come immagini, CSS, JS, ecc.
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js)$/)) {
    return; // Continua a servire la risorsa dal dominio attuale
  }

  // Reindirizza tutte le altre pagine
  if (url.pathname !== "/") {
    return Response.redirect(`https://serp-secrets.com${url.pathname}`, 301);
  }
}