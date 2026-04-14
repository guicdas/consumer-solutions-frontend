import { routing } from "@/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default function Contacts() {
	return (
		<>
			<p>consumer.solutions@outlook.com</p>
			<p>+351 968 457 788</p>
		</>
	);
}
