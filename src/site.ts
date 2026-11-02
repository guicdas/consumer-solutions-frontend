import { routing, type Locale } from "./i18n/routing";

export const SITE_URL = "https://www.cpcdsconsumersolutions.pt";
const OG_LOCALE: Record<Locale, string> = { en: "en_GB", fr: "fr_FR", pt: "pt_PT" };

// Head data for one page: canonical URL, the same page in the other languages (hreflang), and its share preview.
// path is "" for the homepage or "/services" etc.
export function pageMeta(locale: Locale, path: string) {
	return {
		canonical: `${SITE_URL}/${locale}${path}`,
		alternates: [
			...routing.locales.map((l) => ({ hreflang: l, href: `${SITE_URL}/${l}${path}` })),
			{ hreflang: "x-default", href: `${SITE_URL}/${routing.defaultLocale}${path}` },
		],
		ogLocale: OG_LOCALE[locale],
		ogAlternateLocales: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
		image: `${SITE_URL}/csol.png`,
	};
}

// Regulatory facts. Single source: the services page key facts and the translated sentences ({registration}, {policy}) read them.
export const REGISTRATION_NO = "0006380";
export const POLICY_NO = "2524519";
export const BANKS = [
	"BANCO BPI, SA",
	"BANCO BIC PORTUGUÊS, SA",
	"ABANCA CORPORACIÓN BANCARIA, SA, SUCURSAL EM PORTUGAL",
	"BANCO CTT, SA",
	"NOVO BANCO, SA",
	"BANKINTER, SA - SUCURSAL EM PORTUGAL",
	"UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ESTABLECIMIENTO FINANCIERO DE CRÉDITO (SOCIEDAD UNIPERSONAL) - SUCURSAL EM PORTUGAL",
];
