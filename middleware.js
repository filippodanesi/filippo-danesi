export default function middleware(request) {
  const url = new URL(request.url);

  // Ignora tutte le richieste per le risorse statiche e la cartella /favicons
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|webmanifest)$/) || url.pathname.startsWith("/favicons/")) {
    return; // Continua a servire la risorsa dal dominio attuale
  }

  // Reindirizza tutte le altre pagine
  if (url.pathname !== "/") {
    return Response.redirect(`https://serp-secrets.com${url.pathname}`, 301);
  }
}
