export const routing = {
	locales: ["en", "fr", "pt"],
	defaultLocale: "en",
} as const;

export type Locale = (typeof routing.locales)[number];

// For getStaticPaths() of every page under src/pages/[locale]/.
export const localeStaticPaths = () => routing.locales.map((locale) => ({ params: { locale } }));
