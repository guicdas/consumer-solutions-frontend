import { routing } from "../i18n/routing";
import { SITE_URL } from "../site";

const pages = [
	{ path: "", changefreq: "yearly", priority: 1 },
	{ path: "/services", changefreq: "monthly", priority: 0.8 },
	{ path: "/about", changefreq: "yearly", priority: 0.7 },
	{ path: "/certifications", changefreq: "yearly", priority: 0.6 },
	{ path: "/terms-conditions", changefreq: "yearly", priority: 0.5 },
];

// One <url> per page (default locale), with the other languages as hreflang alternates.
export function GET() {
	const urls = pages
		.map(({ path, changefreq, priority }) => {
			const alternates = routing.locales
				.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${path}" />`)
				.join("\n");
			return `<url>\n<loc>${SITE_URL}/${routing.defaultLocale}${path}</loc>\n${alternates}\n<changefreq>${changefreq}</changefreq>\n<priority>${priority}</priority>\n</url>`;
		})
		.join("\n");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
