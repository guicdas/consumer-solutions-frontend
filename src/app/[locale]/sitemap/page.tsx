"use client";

import { useTranslations } from "use-intl";

export default function Sitemap() {
	const t = useTranslations();
	const links = [
		{ name: t("links.services"), url: "services" },
		{ name: t("links.terms"), url: "terms-conditions" },
		{ name: t("links.About"), url: "about" }
	];

	return (
		<>
			<h2>Sitemap</h2>
			<ol>
				{links.map((l: { name: string, url: string; }) => (
					<a key={l.name} href={l.name}>
						<li>{l.url}</li>
					</a>
				))
				}
			</ol>
		</>
	);
}