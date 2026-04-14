import { getRequestConfig } from "next-intl/server";

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import pt from "../locales/pt.json";

const messages: any = { en, fr, pt };

export default getRequestConfig(async ({ locale }) => {
	return {
		locale: locale ?? "en",
		messages: messages[locale ?? "en"],
	};
});
