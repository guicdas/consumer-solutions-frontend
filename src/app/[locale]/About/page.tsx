import dynamic from "next/dynamic";
import { routing } from "@/src/i18n/routing";
import Founder from "./Founder";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

const Faqs = dynamic(() => import("./Faqs"));

type AboutProps = {
	params: Promise<{ locale: string; }>;
};

export default function AboutUs({ params }: AboutProps) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return (
		<>
			<Founder />
			<Faqs />
		</>
	);
}
