

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Services from "./ServicesPage";


export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });
	return {
		title: `${t("heroTitle")} · Consumer Solutions`,
		description: t("heroLead"),
	};
}

export default function Page() {
	return <Services />;
}