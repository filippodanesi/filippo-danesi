export default function middleware(request) {
  const url = new URL(request.url);
  let destination = '';

  // Mappa degli URL per i reindirizzamenti 301
  const redirects301 = {
    "/en/": "https://www.serp-secrets.com",
    "/en/blog/": "https://www.serp-secrets.com/archive",
    "/en/privacy-policy/": "https://www.serp-secrets.com/privacy-policy",
    "/en/cookie-policy/": "https://www.serp-secrets.com/cookie-policy",
    "/en/contact-me/": "https://www.serp-secrets.com/about/",
    "/en/about-me/": "https://www.serp-secrets.com/about/",
    "/en/category/artificial-intelligence/": "https://www.serp-secrets.com/tags/#artificial-intelligence",
    "/en/category/mobile-seo/": "https://www.serp-secrets.com/tags/#mobile-seo",
    "/en/category/seo-news/": "https://www.serp-secrets.com/tags/#seo-news",
    "/en/category/seo-strategies/": "https://www.serp-secrets.com/tags/#seo-strategies",
    "/en/blog/ai-and-ml-what-are-the-differences/": "https://www.serp-secrets.com/ai-and-ml-what-are-the-differences/",
    "/en/blog/how-to-use-ai-in-seo-forecasting/": "https://www.serp-secrets.com/how-to-use-ai-in-seo-forecasting/",
    "/en/blog/generative-ai-and-predictive-ai-what-they-are/": "https://www.serp-secrets.com/generative-ai-and-predictive-ai/",
    // ... aggiungi altri reindirizzamenti 301 qui ...
  };

  // Elenco degli URL che restituiranno un 410 Gone
  const gonePaths = [
    "/blog/",
    "/contatti/",
    "/pagina/2/",
    "/cookie-policy/",
    "/privacy-policy/",
    "/chi-sono/",
    "/categoria/intelligenza-artificiale/",
    "/categoria/strategie-seo/",
    "/categoria/seo-news/",
    // ... aggiungi altri percorsi per il codice 410 qui ...
  ];

  // Controlla se l'URL è nella mappa dei reindirizzamenti 301
  if (redirects301[url.pathname]) {
    destination = redirects301[url.pathname];
    return Response.redirect(destination, 301);
  }

  // Controlla se l'URL deve restituire un 410 Gone
  if (gonePaths.includes(url.pathname)) {
    return new Response('Gone', { status: 410 });
  }

  // Gestione delle risorse statiche e della cartella /favicons
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|webmanifest)$/) || url.pathname.startsWith('/favicons/')) {
    return; // Continua a servire la risorsa dal dominio attuale
  }

  // Reindirizza tutte le altre pagine non specificate
  // Questa è una linea di base, commentala o rimuovila se non necessaria
  return Response.redirect('https://www.serp-secrets.com', 301);
}