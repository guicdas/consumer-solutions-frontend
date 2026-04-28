import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/src/i18n/routing";
import Homepage from "./Homepage";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default function Home({ params }: PageProps<"/[locale]">) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return <Homepage />;
}
