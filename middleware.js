export default function middleware(request) {
  const url = new URL(request.url);

  // Condizioni di reindirizzamento
  if (url.pathname !== "/") {
    return Response.redirect(`https://serp-secrets.com${url.pathname}`, 301);
  }
}
