import type { MetadataRoute } from "next";
import { routing } from "@/src/i18n/routing";
import { SITE_URL } from "./[locale]/metadata";

export const dynamic = "force-static";

const BASE = SITE_URL;

const pages: { path: string; changeFrequency: "yearly" | "monthly" | "weekly"; priority: number }[] = [
	{ path: "", changeFrequency: "yearly", priority: 1 },
	{ path: "/services", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/about", changeFrequency: "yearly", priority: 0.7 },
	{ path: "/certifications", changeFrequency: "yearly", priority: 0.6 },
	{ path: "/terms-conditions", changeFrequency: "weekly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
	return pages.map(({ path, ...rest }) => ({
		url: `${BASE}/${routing.defaultLocale}${path}`,
		...rest,
		alternates: {
			languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE}/${l}${path}`])),
		},
	}));
}
