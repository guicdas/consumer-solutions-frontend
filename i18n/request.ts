import { getRequestConfig } from "next-intl/server";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import pt from "../locales/pt.json";

const locales = ["en", "fr", "pt"] as const;
type Locale = (typeof locales)[number];

const messagesMap: Record<Locale, any> = { en, fr, pt };

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;

	const locale: Locale = locales.includes(requested as Locale)
		? (requested as Locale)
		: "en";

	return {
		locale,
		messages: messagesMap[locale],
	};
});
