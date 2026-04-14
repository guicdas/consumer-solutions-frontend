import dynamic from "next/dynamic";
import { routing } from "@/i18n/routing";
import Founder from "./Founder";

const Faqs = dynamic(() => import("./Faqs"));

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
