import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { Link } from "@/src/i18n/navigation";
import Card from "../components/Card";
import ContactList from "../components/ContactList";
import PageShell from "../components/PageShell";
import { LINK_DARK } from "../components/styles";

const LINK_LIGHT = "font-medium text-accent underline decoration-accent/35 underline-offset-[0.22em] transition hover:decoration-accent focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const H2 = "text-[clamp(1.65rem,3.5vw,2.35rem)] leading-tight tracking-[-0.025em]";

const BANKS = [
	"BANCO BPI, SA",
	"BANCO BIC PORTUGUÊS, SA",
	"ABANCA CORPORACIÓN BANCARIA, SA, SUCURSAL EM PORTUGAL",
	"BANCO CTT, SA",
	"NOVO BANCO, SA",
	"BANKINTER, SA - SUCURSAL EM PORTUGAL",
	"UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ESTABLECIMIENTO FINANCIERO DE CRÉDITO (SOCIEDAD UNIPERSONAL) - SUCURSAL EM PORTUGAL",
];
// Single source for both numbers: the key-facts card and the translated sentences read them from here.
export const REGISTRATION_NO = "0006380";
const POLICY_NO = "2524519";
const BP_PORTAL = "https://www.bportugal.pt/page/listagem-intermediarios-de-credito";
const ADR_LISBON = "http://www.centroarbitragemlisboa.pt";
const ADR_CNIACC = "https://www.cniacc.pt/pt/";

function external(href: string) {
	return function ExternalLink(chunks: ReactNode) {
		return (
			<a href={href} className={LINK_LIGHT} rel="noopener noreferrer" target="_blank">
				{chunks}
			</a>
		);
	};
}

export default function Services() {
	const t = useTranslations("services");
	const authorized = t.raw("authorizedItems") as string[];
	// The last item defines "advisory services" rather than listing a service, so it renders as a footnote.
	const services = authorized.slice(0, -1);
	const advisoryNote = authorized.at(-1);

	const facts = [
		{ label: t("registrationTitle"), value: REGISTRATION_NO },
		{ label: t("insuranceTitle"), value: POLICY_NO },
		{ label: t("banksTitle"), value: String(BANKS.length) },
	];

	return (
		<PageShell>
			{/* Hero + key facts */}
			<header className="relative border-b-2 border-accent/40 px-5 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20">
				<div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
					<div className="space-y-6">
						<h1 className="max-w-[42rem] text-[clamp(2.5rem,8vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.038em]">
							{t("heroTitle")}
						</h1>
						<p className="max-w-[60ch] text-lg font-extralight leading-[1.6] text-neutral-700 sm:text-xl">
							{t("heroLead")}
						</p>
					</div>
					<dl className="divide-y divide-neutral-900/[0.08] overflow-hidden rounded-2xl border-2 border-neutral-900/[0.08] bg-surface shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.4)]">
						{facts.map((f) => (
							<div key={f.label} className="flex items-center justify-between gap-6 px-7 py-6 sm:px-9">
								<dt className="text-sm font-medium leading-snug text-neutral-600 sm:text-base">{f.label}</dt>
								<dd className="text-[clamp(1.6rem,3vw,2.1rem)] font-normal tabular-nums tracking-[-0.02em] text-accent">
									{f.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</header>

			<div className="relative mx-auto flex w-full max-w-[90rem] flex-col gap-16 px-5 py-14 sm:px-8 sm:py-16 md:gap-24 md:px-12 md:py-20 lg:px-16">
				{/* Credentials */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
					<Card id="reg-heading" title={t("registrationTitle")}>
						<p className="text-base leading-[1.8] text-neutral-700 sm:text-lg">
							{t.rich("registrationBody", { registration: REGISTRATION_NO, bpportal: external(BP_PORTAL) })}
						</p>
					</Card>
					<Card id="ins-heading" title={t("insuranceTitle")}>
						<p className="text-base leading-[1.8] text-neutral-700 sm:text-lg">{t("insuranceMortgage", { policy: POLICY_NO })}</p>
					</Card>
				</div>

				{/* Authorised services */}
				<section aria-labelledby="auth-heading">
					<h2 id="auth-heading" className={`${H2} mb-10`}>
						{t("authorizedTitle")}
					</h2>
					<ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{services.map((item) => (
							<li
								key={item}
								className="flex gap-4 rounded-2xl border border-neutral-900/12 bg-tint p-6 sm:p-8"
							>
								<span className="mt-[0.45em] h-4 w-0.5 shrink-0 rounded-full bg-accent-strong/55" aria-hidden />
								<span className="text-base leading-[1.75] text-neutral-900 sm:text-[1.05rem]">{item}</span>
							</li>
						))}
					</ol>
					{advisoryNote && (
						<p className="mt-8 max-w-[90ch] border-l-2 border-accent pl-5 text-sm italic leading-[1.8] text-neutral-600 sm:text-base">
							{advisoryNote}
						</p>
					)}
				</section>

				{/* Partner banks */}
				<section
					aria-labelledby="banks-heading"
					className="relative overflow-hidden rounded-2xl bg-panel dark:ring-1 dark:ring-accent/30 px-7 py-12 text-zinc-100 sm:px-10 sm:py-14"
				>
					<div
						className="pointer-events-none absolute inset-0"
						aria-hidden
						style={{ background: "radial-gradient(ellipse 100% 80% at 100% 0%, var(--panel-glow), transparent 55%)" }}
					/>
					<div className="relative">
						<h2 id="banks-heading" className={`${H2} mb-10 text-white`}>
							{t("banksTitle")}
						</h2>
						<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{BANKS.map((b) => (
								<li
									key={b}
									className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[0.85rem] font-medium leading-snug tracking-[0.02em] text-zinc-200"
								>
									{b}
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Complaints & dispute resolution */}
				<section aria-labelledby="comp-heading" className="space-y-10">
					<div>
						<h2 id="comp-heading" className={`${H2} mb-6`}>
							{t("complaintsTitle")}
						</h2>
						<p className="max-w-[80ch] text-base leading-[1.85] text-neutral-700 sm:text-lg">{t("complaintsP1")}</p>
					</div>
					<div className="rounded-2xl border border-neutral-900/12 bg-tint p-6 sm:p-10">
						<h3 className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-accent">{t("adrTitle")}</h3>
						<p className="mb-6 max-w-[80ch] text-base leading-[1.8] text-neutral-700">{t("adrLead")}</p>
						<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<li className="rounded-xl border border-neutral-900/12 bg-surface p-5 text-base leading-relaxed text-neutral-800">
								{t.rich("adrLisbon", { adrlisbon: external(ADR_LISBON) })}
							</li>
							<li className="rounded-xl border border-neutral-900/12 bg-surface p-5 text-base leading-relaxed text-neutral-800">
								{t.rich("adrCniacc", { adrcniacc: external(ADR_CNIACC) })}
							</li>
						</ul>
					</div>
					<p className="flex gap-5 rounded-xl border-2 border-accent/35 bg-tint p-6 text-sm font-medium leading-[1.8] text-neutral-900 sm:p-8 sm:text-base">
						<span className="text-2xl leading-none text-accent" aria-hidden>§</span>
						{t("prohibitedNote")}
					</p>
				</section>

				{/* Contact */}
				<section
					aria-labelledby="contact-heading"
					className="relative overflow-hidden rounded-2xl bg-panel dark:ring-1 dark:ring-accent/30 px-7 py-12 text-zinc-200 sm:px-10 sm:py-14"
				>
					<h2 id="contact-heading" className={`${H2} mb-10 text-white`}>
						{t("contactTitle")}
					</h2>
					<ContactList dark className="grid grid-cols-1 gap-8 text-base md:grid-cols-3" />
					<p className="mt-10 border-t border-zinc-600/50 pt-8">
						<Link className={`${LINK_DARK} text-base`} href="/terms-conditions">
							{t("privacyLabel")}
						</Link>
					</p>
				</section>
			</div>
		</PageShell>
	);
}
