import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://www.filippodanesi.it',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'GPTBot',
          disallow: '/',
        },
        {
          userAgent: 'CCBot',
          disallow: '/',
        },
        {
          userAgent: 'Google-Extended',
          disallow: '/',
        },
        {
          userAgent: 'anthropic-ai',
          disallow: '/',
        },
      ],
      sitemap: 'https://www.filippodanesi.it/sitemap-index.xml',
      transform(content) {
        const lastDisallowIndex = content.lastIndexOf('Disallow: /');
        return `${content.substring(0, lastDisallowIndex)}Disallow: /\n\n${content.substring(lastDisallowIndex + 11)}`;
      },
    }),
  ],
});
