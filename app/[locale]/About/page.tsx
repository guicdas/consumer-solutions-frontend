import dynamic from "next/dynamic";
import Founder from "./Founder";

const Faqs = dynamic(() => import("./Faqs"));

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default function AboutUs() {
	return (
		<>
			<Founder />
			<Faqs />
		</>
	);
}
