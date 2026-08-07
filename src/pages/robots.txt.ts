import type { APIRoute } from "astro";

const siteUrl = import.meta.env.SITE || 'https://baiblog.vip';

const robotsTxt = `

User-agent: *
Disallow: /_astro/

Sitemap: ${siteUrl}/sitemap-index.xml
Sitemap: ${siteUrl}/sitemap.xml
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};