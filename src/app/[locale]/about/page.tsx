import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import Faqs, { type FaqItem } from "./Faqs";
import Founder, { splitFounderHeading } from "./Founder";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../metadata";
import PageShell from "../components/PageShell";
import { pageMetadata } from "../metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "about" });
	const founder = t.raw("founder") as string[];
	return pageMetadata(locale, "/about", founder[0], founder[1]);
}

export default function AboutUs({ params }: PageProps<"/[locale]/about">) {
	const { locale } = use(params);
	setRequestLocale(locale);
	const t = useTranslations("about");
	const faqs = t.raw("faqs") as FaqItem[];
	const { name } = splitFounderHeading((t.raw("founder") as string[])[0]);

	return (
		<PageShell>
			<JsonLd
				data={{
					"@graph": [
						{ "@type": "FAQPage", inLanguage: locale, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.title, acceptedAnswer: { "@type": "Answer", text: f.body } })) },
						{ "@type": "Person", name, jobTitle: "Founder", worksFor: { "@id": `${SITE_URL}/#business` } },
					],
				}}
			/>
			<Founder />
			<Faqs title={t("faqTitle")} items={faqs} />
		</PageShell>
	);
}
