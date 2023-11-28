export default function middleware(request) {
  const url = new URL(request.url);

  // Ignora tutte le richieste per le risorse statiche
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|webmanifest)$/)) {
    return; // Continua a servire la risorsa dal dominio attuale
  }

  // Reindirizza tutte le altre pagine
  if (url.pathname !== "/") {
    return Response.redirect(`https://serp-secrets.com${url.pathname}`, 301);
  }
}
