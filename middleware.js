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
    "/en/blog/how-to-use-ai-in-seo-forecasting/": "https://www.serp-secrets.com/posts/how-to-use-ai-in-seo-forecasting/",
    "/en/blog/generative-ai-and-predictive-ai-what-they-are/": "https://www.serp-secrets.com/posts/generative-ai-and-predictive-ai/",
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
    "/categoria/local-seo/",
    "/categorie/seo-tecnica/",
    "/categoria/mobile-seo/",
    "/categoria/aggiornamenti-google/",
    "/categoria/link-building/",
    "/categorie/mobile-seo/",
    "/categorie/mobile-seo",
    "/categoria/seo-on-page/",
    "/categoria/seo-per-wordpress/",
    "/en/category/mobile-seo/",
    "/en/category/local-seo/",
    "/en/category/technical-seo/",
    "/en/category/google-updates/",
    "/categoria/seo-per-web-dev/",
    "/en/category/seo-for-wordpress/",
    "/en/category/seo-on-page/",
    "/blog/lintelligenza-artificiale-sostituira-lessere-umano/",
    "/en/category/seo-for-web-dev/",
    "/blog/come-chatgpt-sta-cambiando-la-seo/",
    "/blog/adattarsi-allera-dellhelpful-content-di-google/",
    "/blog/la-storia-degli-aggiornamenti-di-google/",
    "/blog/come-utilizzare-lai-nella-seo-forecasting/",
    "/blog/strumenti-essenziali-per-ottimizzare-la-seo/",
    "/blog/ai-e-ml-quali-sono-le-differenze/",
    "/blog/la-seo-semantica-e-limportanza-delle-entita/",
    "/blog/google-bard-e-ai-progetti-futuri-e-seo/",
    "/blog/calo-di-traffico-al-sito-web-i-vari-motivi/",
    "/blog/gpt-3-gpt-3-5-e-gpt-4-quali-sono-le-differenze/",

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
