import { Oswald } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale: Locale) => ({ locale }));
}

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	variable: "--font-oswald",
});

type RootLayoutProps = {
	children: React.ReactNode;
} & PageProps<"/[locale]">;

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Consumer Solutions</title>
				<meta name="description" content="website about our mortgage broker" />
				<meta property="og:title" content="Consumer Solutions" />
				<meta property="og:image" content="/cs.avif" />
			</head>
			<body className={`${oswald.className} antialiased`}>
				<NextIntlClientProvider locale={locale}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
