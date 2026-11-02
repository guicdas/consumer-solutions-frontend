import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import Services from "./ServicesPage";
import { pageMetadata } from "../metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });
	return pageMetadata(locale, "/services", t("heroTitle"), t("heroLead"));
}

export default function Page({ params }: PageProps<"/[locale]/services">) {
	const { locale } = use(params);
	setRequestLocale(locale);
	return <Services />;
}
