import { Oswald } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { headers } from "next/headers";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	variable: "--font-oswald",
});


export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string; };
}>) {
	const headersList = await headers();
	const acceptLanguage = headersList.get("accept-language") ?? "";

	const supported = ["fr", "pt", "en"];
	const detected = supported.find(lang => acceptLanguage.toLowerCase().startsWith(lang)) ?? "en";

	const messages = await getMessages();

	return (
		<html lang={detected}>
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
			<body
				className={`${oswald.className} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
