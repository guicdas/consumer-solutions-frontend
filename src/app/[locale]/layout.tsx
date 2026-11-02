import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { SITE_URL } from "./metadata";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "meta" });
	return {
		metadataBase: new URL(SITE_URL),
		title: { default: t("title"), template: `%s · ${t("title")}` },
		description: t("description"),
	};
}

// Oswald is a variable font: leaving out `weight` loads one file that covers every weight (200–700).
const oswald = Oswald({ subsets: ["latin"] });

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	setRequestLocale(locale);

	return (
		// suppressHydrationWarning: the head script sets data-theme before React hydrates.
		<html lang={locale} suppressHydrationWarning>
			<head>
				{/* Runs before paint so the page never flashes the wrong theme. */}
				<script
					dangerouslySetInnerHTML={{
						__html: `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`,
					}}
				/>
			</head>
			<body className={`${oswald.className} antialiased`}>
				{/* messages={null}: client components get only the locale; all texts are rendered on the server */}
				<NextIntlClientProvider locale={locale} messages={null}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
