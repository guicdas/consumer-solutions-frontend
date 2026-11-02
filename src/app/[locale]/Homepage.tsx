import { useLocale, useTranslations } from "next-intl";
import CtaWithDescription from "./components/CTA";
import { Link } from "@/src/i18n/navigation";
import Button from "./components/Button";
import LinkTile from "./components/LinkTile";
import { KICKER_BASE } from "./components/styles";
import { REGISTRATION_NO } from "./services/ServicesPage";
import { preload } from "react-dom";
import JsonLd from "./components/JsonLd";
import { SITE_URL } from "./metadata";

const VIDEO_MEDIA = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export default function Homepage() {
	const t = useTranslations();
	const locale = useLocale();
	// The poster is the first thing painted on the homepage, so fetch it before the CSS and fonts.
	preload("/house-poster.avif", { as: "image", fetchPriority: "high" });

	const tiles = [
		{ href: "/services", name: t("links.services"), desc: t("services.heroTitle") },
		{ href: "/certifications", name: t("links.certifications"), desc: t("certifications.title") },
	];

	return (
		<main className="relative isolate w-full overflow-hidden bg-page text-neutral-950">
			{/* shortcut: street address is repeated here in structured form; update it with services.address in messages/*.json. */}
			<JsonLd
				data={{
					"@type": "FinancialService",
					"@id": `${SITE_URL}/#business`,
					name: "Consumer Solutions",
					legalName: "CPCDS Consumer Solutions — Unipessoal, Lda",
					description: t("home.metaDescription"),
					url: `${SITE_URL}/${locale}`,
					logo: `${SITE_URL}/csol.png`,
					image: `${SITE_URL}/csol.png`,
					telephone: t("services.phone").replace(/\s/g, ""),
					email: t("services.email"),
					address: {
						"@type": "PostalAddress",
						streetAddress: "Av. Elias Garcia, 144, 3.º Esq.",
						postalCode: "1050-101",
						addressLocality: "Lisboa",
						addressCountry: "PT",
					},
					areaServed: { "@type": "Country", name: "Portugal" },
					knowsLanguage: ["en", "fr", "pt"],
					identifier: { "@type": "PropertyValue", propertyID: "Banco de Portugal credit intermediary registration", value: REGISTRATION_NO },
					sameAs: ["https://x.com/CONSUMSOLUTION", "https://www.linkedin.com/company/cpcdsconsumersolutions"],
				}}
			/>
			{/* Video hero */}
			<section className="relative flex min-h-[38rem] items-end h-[92vh]">
				{/* Sources only match on wider screens with motion allowed; phones and reduced-motion get the poster and download no video. */}
				<video
					poster="/house-poster.avif"
					className="absolute inset-0 h-full w-full object-cover"
					playsInline
					muted
					autoPlay
					loop
				>
					<source src="/house.webm" type="video/webm; codecs=av01.0.08M.10" media={VIDEO_MEDIA} />
					<source src="/house.mp4" type="video/mp4" media={VIDEO_MEDIA} />
					{t("home.videoError")}
				</video>
				<div
					className="absolute inset-0"
					aria-hidden
					style={{ background: "linear-gradient(to top, oklch(0.14 0.032 158 / 0.92) 0%, oklch(0.14 0.032 158 / 0.55) 45%, transparent 80%)" }}
				/>
				<div className="relative mx-auto w-full max-w-[90rem] px-5 pb-14 sm:px-10 sm:pb-20 md:px-14 lg:px-20">
					<div className="max-w-[48rem] space-y-6">
						<p className={`${KICKER_BASE} border-[oklch(0.88_0.04_150)] text-[oklch(0.88_0.04_150)]`}>{t("meta.title")}</p>
						<h1 className="text-[clamp(2.5rem,7vw,4.75rem)] font-normal leading-[0.96] tracking-[-0.038em] text-white">
							{t("home.title")}
						</h1>
						<p className="text-lg font-extralight leading-[1.5] text-zinc-200 sm:text-2xl">{t("home.subtitle")}</p>
						<div className="pt-4">
							<Link href="/services">
								<Button str={t("home.services-button")} type={1} classname="px-6 py-3 text-lg" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Explore */}
			<div
				className="pointer-events-none absolute -left-[25%] top-[60%] h-[60%] w-[90%] rotate-[10deg]"
				aria-hidden
				style={{ background: "linear-gradient(145deg, var(--glow) 0%, transparent 58%)" }}
			/>
			<section aria-labelledby="explore-heading" className="relative mx-auto w-full max-w-[90rem] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
				<h2 id="explore-heading" className="mb-10 max-w-[40ch] text-[clamp(1.65rem,3.5vw,2.35rem)] leading-tight tracking-[-0.025em]">
					{t("home.text")}
				</h2>
				<ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
					{tiles.map((tile) => (
						<li key={tile.href}>
							<LinkTile {...tile} />
						</li>
					))}
				</ul>
			</section>

			<CtaWithDescription />
		</main>
	);
}
