import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Homepage from './Homepage';
import { routing } from "@/src/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}
type HomeProps = {
	params: Promise<{ locale: string; }>;
};

export default function Home({ params }: HomeProps) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return <Homepage />;
}