import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/src/i18n/routing";
import Homepage from "./Homepage";
import { pageMetadata } from "./metadata";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "home" });
	// The layout title template does not apply to a page in the same segment, so add the brand here.
	return pageMetadata(locale, "", `${t("metaTitle")} · Consumer Solutions`, t("metaDescription"));
}

export default function Home({ params }: PageProps<"/[locale]">) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return <Homepage />;
}
