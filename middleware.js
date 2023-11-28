export default function middleware(request) {
  const url = new URL(request.url);

  // Mappa degli URL per i reindirizzamenti 301
  const redirects301 = {
    "/en/": "https://www.serp-secrets.com",
    "/en/blog/": "https://www.serp-secrets.com/archive",
    "/en/privacy-policy/": "https://www.serp-secrets.com/privacy-policy",
    "/en/cookie-policy/": "https://www.serp-secrets.com/cookie-policy",
    "/en/contact-me/": "https://www.serp-secrets.com/about/",
    "/en/about-me/": "https://www.serp-secrets.com/about/",
    "/en/category/artificial-intelligence/": "https://www.serp-secrets.com/tags/#artificial-intelligence",
    "/en/category/seo-news/": "https://www.serp-secrets.com/tags/#seo-news",
    "/en/category/seo-strategies/": "https://www.serp-secrets.com/tags/#seo-strategies",
    "/en/blog/ai-and-ml-what-are-the-differences/": "https://www.serp-secrets.com/ai-and-ml-what-are-the-differences/",
    "/en/blog/how-to-use-ai-in-seo-forecasting/": "https://www.serp-secrets.com/how-to-use-ai-in-seo-forecasting/",
    "/en/blog/generative-ai-and-predictive-ai-what-they-are/": "https://www.serp-secrets.com/generative-ai-and-predictive-ai/",
    // altri reindirizzamenti 301 come da immagine
  };

  // Elenco degli URL che restituiranno un 410 Gone
  const gonePaths = [
    "/blog/",
    "/contatti/",
    "/pagina/2/",
    "/cookie-policy/",
    "/privacy-policy/",
    "/chi-sono/",
    // altri percorsi per il codice 410 come da immagine
  ];

  // Se la richiesta è per la home page, non fare nulla
  if (url.pathname === "/") {
    return;
  }

  // Controlla se l'URL è nella mappa dei reindirizzamenti 301
  if (redirects301.hasOwnProperty(url.pathname)) {
    return Response.redirect(redirects301[url.pathname], 301);
  }

  // Controlla se l'URL deve restituire un 410 Gone
  if (gonePaths.includes(url.pathname)) {
    return new Response('Gone', { status: 410 });
  }

  // Gestione delle risorse statiche
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|webmanifest)$/)) {
    return; // Continua a servire la risorsa dal dominio attuale
  }
}
