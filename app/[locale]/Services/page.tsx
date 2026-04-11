import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { prata } from "../../fonts-display";

const BP_PORTAL = "https://www.bportugal.pt/intermediarios-credito/";
const ADR_LISBON = "http://www.centroarbitragemlisboa.pt";
const ADR_CNIACC = "https://www.cniacc.pt/pt/";

const linkClass =
	"font-medium text-[#2a6b52] underline decoration-[#2a6b52]/35 underline-offset-[0.22em] transition hover:decoration-[#2a6b52] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a6b52]";

const linkOnDark =
	"font-medium text-[oklch(0.88_0.04_150)] underline decoration-white/35 underline-offset-[0.22em] transition hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-200";

function entranceDelay(step: number) {
	return { animationDelay: `${Math.min(step * 78, 560)}ms` } as const;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });
	return {
		title: `${t("heroTitle")} · Consumer Solutions`,
		description: t("heroLead"),
	};
}

export default async function ServicesPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });
	const authorized = t.raw("authorizedItems") as string[];
	const banks = t.raw("banks") as string[];

	return (
		<article className="relative isolate w-full overflow-hidden bg-[oklch(0.982_0.014_152)] text-neutral-950">
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<div
					className="absolute -left-[25%] top-[-15%] h-[90%] w-[90%] rotate-[10deg] opacity-[0.85]"
					style={{
						background:
							"linear-gradient(145deg, oklch(0.88 0.06 162 / 0.38) 0%, transparent 58%)",
					}}
				/>
				<div
					className="absolute -right-[15%] bottom-[-20%] h-[75%] w-[80%] opacity-80"
					style={{
						background:
							"radial-gradient(ellipse 65% 55% at 75% 85%, oklch(0.86 0.08 158 / 0.42), transparent 62%)",
					}}
				/>
			</div>

			<header
				className="services-entrance relative border-b-2 border-[#2a6b52]/40 px-5 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20"
				style={entranceDelay(0)}
			>
				<div className="mx-auto w-full max-w-[90rem]">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 xl:gap-24">
						<div className="space-y-6">
							<p className="inline-block border-b-2 border-[#2a6b52] pb-2 text-[0.68rem] font-bold uppercase tracking-[0.42em] text-[#2a6b52] sm:text-xs sm:tracking-[0.48em]">
								{t("kicker")}
							</p>
							<h1
								className={`${prata.className} max-w-[min(100%,42rem)] text-[clamp(2.5rem,9vw,4.75rem)] font-normal leading-[0.96] tracking-[-0.038em] text-neutral-950`}
							>
								{t("heroTitle")}
							</h1>
						</div>
						<p className="text-lg font-extralight leading-[1.55] text-neutral-700 sm:text-xl md:text-2xl md:leading-snug">
							{t("heroLead")}
						</p>
					</div>
				</div>
			</header>

			<div className="relative mx-auto w-full max-w-[90rem] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16">
				<div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
					<section
						className="services-entrance relative overflow-hidden rounded-2xl border-2 border-neutral-900/[0.08] bg-[oklch(0.997_0.006_155)] p-7 shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.4)] sm:p-10"
						style={entranceDelay(1)}
						aria-labelledby="reg-heading"
					>
						<div
							className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[#2a6b52]"
							aria-hidden
						/>
						<h2
							id="reg-heading"
							className={`${prata.className} mb-6 text-[clamp(1.65rem,3.5vw,2.25rem)] tracking-[-0.025em] text-neutral-950`}
						>
							{t("registrationTitle")}
						</h2>
						<div className="max-w-[65ch] text-base leading-[1.8] text-neutral-700 sm:text-lg">
							{t.rich("registrationBody", {
								bpportal: (chunks) => (
									<a
										href={BP_PORTAL}
										className={linkClass}
										rel="noopener noreferrer"
										target="_blank"
									>
										{chunks}
									</a>
								),
							})}
						</div>
					</section>

					<section
						className="services-entrance rounded-2xl border border-neutral-900/12 bg-[oklch(0.96_0.022_155)] px-7 py-10 sm:px-10 sm:py-12"
						style={entranceDelay(2)}
						aria-labelledby="ins-heading"
					>
						<h2
							id="ins-heading"
							className={`${prata.className} mb-5 text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] text-neutral-950`}
						>
							{t("insuranceTitle")}
						</h2>
						<p className="max-w-[65ch] text-base font-light leading-relaxed text-neutral-800 sm:text-lg">
							{t("insuranceMortgage")}
						</p>
					</section>

					<section style={entranceDelay(3)} aria-labelledby="auth-heading">
						<h2
							id="auth-heading"
							className={`${prata.className} mb-10 text-[clamp(1.65rem,3.5vw,2.35rem)] tracking-[-0.02em] text-neutral-950`}
						>
							{t("authorizedTitle")}
						</h2>
						<ol className="list-[lower-alpha] space-y-7 pl-6 marker:font-semibold marker:text-[#2a6b52] sm:pl-10">
							{authorized.map((item, idx) => (
								<li
									key={`auth-${idx}`}
									className="border-b border-neutral-900/[0.06] pb-7 pl-2 text-[1.05rem] font-normal leading-[1.8] text-neutral-900 last:border-b-0 last:pb-0 sm:text-[1.1rem]"
								>
									{item}
								</li>
							))}
						</ol>
					</section>

					<section
						className="services-entrance relative overflow-hidden rounded-2xl bg-[oklch(0.14_0.032_158)] px-7 py-12 text-zinc-100 sm:px-10 sm:py-14"
						style={entranceDelay(4)}
						aria-labelledby="banks-heading"
					>
						<div
							className="pointer-events-none absolute inset-0 opacity-[0.07]"
							aria-hidden
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
							}}
						/>
						<div
							className="pointer-events-none absolute inset-0 opacity-90"
							aria-hidden
							style={{
								background:
									"radial-gradient(ellipse 100% 80% at 100% 0%, oklch(0.28 0.09 165 / 0.5), transparent 55%)",
							}}
						/>
						<div className="relative">
							<h2
								id="banks-heading"
								className={`${prata.className} mb-10 text-[clamp(1.75rem,3.8vw,2.65rem)] tracking-[-0.03em] text-white`}
							>
								{t("banksTitle")}
							</h2>
							<ul className="grid grid-cols-1 gap-x-12 gap-y-5 border-t border-zinc-600/50 pt-8 sm:grid-cols-2">
								{banks.map((b) => (
									<li
										key={b}
										className="text-[0.9rem] font-light leading-snug tracking-[0.01em] text-zinc-300 sm:text-[0.95rem]"
									>
										{b}
									</li>
								))}
							</ul>
						</div>
					</section>

					<section
						className="services-entrance space-y-12"
						style={entranceDelay(5)}
						aria-labelledby="comp-heading"
					>
						<div>
							<h2
								id="comp-heading"
								className={`${prata.className} mb-6 text-[clamp(1.65rem,3.2vw,2.25rem)] tracking-[-0.02em] text-neutral-950`}
							>
								{t("complaintsTitle")}
							</h2>
							<p className="max-w-[65ch] text-base leading-[1.85] text-neutral-700 sm:text-lg">
								{t("complaintsP1")}
							</p>
						</div>
						<div>
							<h3 className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#2a6b52]">
								{t("adrTitle")}
							</h3>
							<p className="mb-8 max-w-[65ch] text-base leading-[1.85] text-neutral-700 sm:text-lg">
								{t("adrLead")}
							</p>
							<ul className="max-w-[65ch] space-y-6 text-base leading-relaxed text-neutral-800 sm:text-lg">
								<li>
									{t.rich("adrLisbon", {
										adrlisbon: (chunks) => (
											<a
												href={ADR_LISBON}
												className={linkClass}
												rel="noopener noreferrer"
												target="_blank"
											>
												{chunks}
											</a>
										),
									})}
								</li>
								<li>
									{t.rich("adrCniacc", {
										adrcniacc: (chunks) => (
											<a
												href={ADR_CNIACC}
												className={linkClass}
												rel="noopener noreferrer"
												target="_blank"
											>
												{chunks}
											</a>
										),
									})}
								</li>
							</ul>
						</div>
						<p className="max-w-[65ch] rounded-xl border-2 border-[#2a6b52]/35 bg-[oklch(0.96_0.025_155)] p-6 text-sm font-medium leading-[1.8] text-neutral-900 sm:p-8 sm:text-base">
							{t("prohibitedNote")}
						</p>
					</section>

					<section
						className="services-entrance relative overflow-hidden rounded-2xl bg-[oklch(0.15_0.028_158)] px-7 py-12 text-zinc-200 sm:px-10 sm:py-14"
						style={entranceDelay(6)}
						aria-labelledby="contact-heading"
					>
						<div
							className="pointer-events-none absolute inset-0 opacity-[0.06]"
							aria-hidden
							style={{
								background:
									"radial-gradient(ellipse 80% 50% at 20% 100%, oklch(0.42 0.1 160 / 0.45), transparent 60%)",
							}}
						/>
						<div className="relative">
							<h2
								id="contact-heading"
								className={`${prata.className} mb-10 text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.02em] text-white`}
							>
								{t("contactTitle")}
							</h2>
							<address className="max-w-[65ch] not-italic">
								<ul className="space-y-4 text-base leading-relaxed sm:text-lg">
									<li className="text-zinc-300">{t("address")}</li>
									<li>
										<a
											className={linkOnDark}
											href={`tel:${t("phone").replace(/\s/g, "")}`}
										>
											{t("phone")}
										</a>
									</li>
									<li>
										<a
											className={linkOnDark}
											href={`mailto:${t("email")}`}
										>
											{t("email")}
										</a>
									</li>
								</ul>
							</address>
							<p className="mt-10 border-t border-zinc-600/50 pt-8">
								<Link className={`${linkOnDark} text-base`} href="/TCs">
									{t("privacyLabel")}
								</Link>
							</p>
						</div>
					</section>
				</div>
			</div>
		</article>
	);
}
