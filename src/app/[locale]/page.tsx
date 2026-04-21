import { routing } from '@/src/i18n/routing';
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Homepage from './Homepage';

export function generateStaticParams() {
	return [
		{ locale: 'en' },
		{ locale: 'pt' },
		{ locale: 'fr' },
	];
}

type HomeProps = {
	params: Promise<{ locale: string; }>;
};

export default function Home({ params }: HomeProps) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return <Homepage />;
}