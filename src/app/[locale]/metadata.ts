import type { Metadata } from "next";
import { routing } from "@/src/i18n/routing";

export const SITE_URL = "https://www.cpcdsconsumersolutions.pt";
const OG_LOCALE: Record<string, string> = { en: "en_GB", fr: "fr_FR", pt: "pt_PT" };

// Per-page metadata: canonical URL, the same page in the other languages (hreflang), and its own share preview.
// path is "" for the homepage or "/services" etc.
export function pageMetadata(locale: string, path: string, title: string, description: string): Metadata {
	const url = `/${locale}${path}`;
	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: {
				...Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
				"x-default": `/${routing.defaultLocale}${path}`,
			},
		},
		openGraph: {
			type: "website",
			siteName: "Consumer Solutions",
			title,
			description,
			url,
			locale: OG_LOCALE[locale],
			alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
			images: ["/csol.png"],
		},
	};
}
