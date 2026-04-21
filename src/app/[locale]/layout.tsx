import { Oswald } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return [
		{ locale: 'en' },
		{ locale: 'pt' },
		{ locale: 'fr' },
	];
}

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	variable: "--font-oswald",
});

type RootLayoutProps = {
	children: React.ReactNode;
	params: Promise<{ locale: string; }>;
};

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = await params;
	const messages = await getMessages();

	console.log(routing.locales, "-", locale);



	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Consumer Solutions</title>
				<meta
					name="description"
					content="website for information about our mortgage broker"
				/>
				<meta property="og:title" content="Consumer Solutions" />
				<meta property="og:image" content="/guicdas/cs.avif" />
			</head>
			<body className={`${oswald.className} antialiased`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
