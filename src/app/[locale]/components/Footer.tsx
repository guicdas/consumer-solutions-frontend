import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import Button from "./Button";
import ContactList from "./ContactList";
import ImageWithLink from "./ImageWithLink";
import { LINK_MUTED } from "./styles";
import { useTranslations } from "next-intl";

const COL_TITLE = "mb-5 text-xs font-bold uppercase tracking-[0.28em] text-accent";

export default function Footer() {
	const t = useTranslations();

	const footerLinks = [
		{ name: t("links.services"), url: "/services" },
		{ name: t("links.certifications"), url: "/certifications" },
		{ name: t("links.about"), url: "/about" },
		{ name: t("links.terms"), url: "/terms-conditions" },
	];

	return (
		<footer className="border-t-2 border-accent/40 bg-surface text-neutral-950">
			<div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-12 px-5 py-14 sm:px-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,1fr)] md:px-14 lg:px-20">
				<div className="space-y-6">
					<Image className="h-12 w-auto" alt="Consumer Solutions" height={105} width={230} src="/cs.avif" />
					<p className="max-w-[36ch] text-base font-light leading-[1.6] text-neutral-600">{t("header.tagline")}</p>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
						<a href={`mailto:${t("services.email")}?subject=${encodeURIComponent(t("footer.mailSubject"))}`} className="inline-block">
							<Button str={t("footer.consultation")} type={1} classname="px-5 py-2.5" />
						</a>
						<a href={`mailto:${t("services.email")}`} className="text-sm font-light text-neutral-600 underline decoration-neutral-900/20 underline-offset-[0.22em] transition hover:text-accent hover:decoration-accent">
							{t("footer.mailNote")}
						</a>
					</div>
				</div>

				<nav aria-label={t("links.sitemap")}>
					<p className={COL_TITLE}>{t("links.sitemap")}</p>
					<ul className="space-y-3">
						{footerLinks.map((l) => (
							<li key={l.url}>
								<Link className={LINK_MUTED} href={l.url}>
									{l.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div>
					<p className={COL_TITLE}>{t("services.contactTitle")}</p>
					<ContactList className="space-y-3" />
					<div className="mt-6 flex items-center gap-3">
						{[
							{ href: "https://x.com/CONSUMSOLUTION", src: "/x.png", alt: "X socials", dark: "dark:[&_img]:invert" },
							{ href: "https://www.linkedin.com/company/cpcdsconsumersolutions", src: "/linkedin.svg", alt: "LinkedIn socials", dark: "" },
						].map((s) => (
							<span key={s.href} className={`flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/[0.12] transition hover:border-accent/50 ${s.dark}`}>
								<ImageWithLink href={s.href} src={s.src} alt={s.alt} />
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-neutral-900/[0.08]">
				<p className="mx-auto w-full max-w-[90rem] px-5 py-6 text-sm text-neutral-500 sm:px-10 md:px-14 lg:px-20">© 2021 Consumer Solutions</p>
			</div>
		</footer>
	);
}
