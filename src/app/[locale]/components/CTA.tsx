import { useTranslations } from "next-intl";
import Button from "./Button";

export default function CtaWithDescription() {
	const t = useTranslations();

	return (
		<section aria-labelledby="cta-heading" className="relative mx-auto w-full max-w-[90rem] px-5 pb-16 sm:px-8 md:px-12 md:pb-24 lg:px-16">
			<div className="relative overflow-hidden rounded-2xl bg-panel dark:ring-1 dark:ring-accent/30 px-7 py-12 text-zinc-200 sm:px-10 sm:py-14">
				<div
					className="pointer-events-none absolute inset-0"
					aria-hidden
					style={{ background: "radial-gradient(ellipse 100% 80% at 100% 0%, var(--panel-glow), transparent 55%)" }}
				/>
				<div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
					<h2 id="cta-heading" className="max-w-[30ch] text-[clamp(1.75rem,3.8vw,2.65rem)] leading-tight tracking-[-0.03em] text-white">
						{t("cta.title")}
					</h2>
					<a href={`mailto:${t("services.email")}?subject=${encodeURIComponent(t("footer.mailSubject"))}`} className="justify-self-start">
						<Button str={t("cta.button")} type={1} classname="px-8 py-3 text-lg" />
					</a>
				</div>
				<div className="relative mt-10 border-t border-zinc-600/50 pt-8">
					<h3 className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[oklch(0.88_0.04_150)]">
						{t("cta.complianceTitle").replace(/\s*:$/, "")}
					</h3>
					<p className="max-w-[90ch] text-base font-light leading-[1.8] text-zinc-300">{t("cta.complianceBody")}</p>
				</div>
			</div>
		</section>
	);
}
