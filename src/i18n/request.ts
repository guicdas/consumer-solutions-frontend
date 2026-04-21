import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	let locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	type supportedLocales = "en" | "fr" | "pt";

	if (!locale || !routing.locales.includes(locale as supportedLocales)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
