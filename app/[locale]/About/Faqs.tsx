"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { prata } from "../../fonts-display";

type FaqItem = { q: string; a: string };

export default function Faqs() {
	const t = useTranslations("faq");
	const items = t.raw("items") as FaqItem[];
	const baseId = useId();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (i: number) => {
		setOpenIndex((prev) => (prev === i ? null : i));
	};

	return (
		<section
			className="relative isolate w-full overflow-hidden bg-[oklch(0.985_0.014_152)] py-[clamp(3.5rem,10vw,9rem)] text-neutral-950"
			aria-labelledby={`${baseId}-heading`}
		>
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<div
					className="absolute -left-[15%] top-[-20%] h-[85%] w-[85%] rotate-[11deg] opacity-90"
					style={{
						background:
							"linear-gradient(135deg, oklch(0.91 0.045 162 / 0.42) 0%, transparent 55%)",
					}}
				/>
				<div
					className="absolute bottom-[-25%] right-[-10%] h-[70%] w-[65%] opacity-80"
					style={{
						background:
							"radial-gradient(ellipse at 70% 70%, oklch(0.88 0.07 158 / 0.38), transparent 62%)",
					}}
				/>
			</div>

			<div className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,min(100%,26rem))_minmax(0,1fr)] lg:gap-x-16 lg:gap-y-0 lg:px-12 xl:gap-x-24 xl:px-16">
				<header className="flex max-w-xl flex-col gap-5 lg:sticky lg:top-28 lg:self-start lg:gap-7">
					<p className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[#2a6b52] sm:text-xs sm:tracking-[0.45em]">
						{t("kicker")}
					</p>
					<h2
						id={`${baseId}-heading`}
						className={`${prata.className} text-[clamp(2.35rem,6.5vw,4.25rem)] font-normal leading-[0.98] tracking-[-0.035em] text-neutral-950`}
					>
						{t("heading")}
					</h2>
					<p className="text-lg font-extralight leading-relaxed text-neutral-700 sm:text-xl sm:leading-snug md:text-2xl md:leading-snug">
						{t("lead")}
					</p>
				</header>

				<div className="flex min-w-0 flex-col gap-4 md:gap-5">
					{items.map((item, i) => {
						const isOpen = openIndex === i;
						const panelId = `${baseId}-panel-${i}`;
						const btnId = `${baseId}-btn-${i}`;
						const staggerMs = Math.min(i * 55, 440);

						return (
							<div
								key={`faq-${btnId}`}
								className={`faq-row-entrance rounded-xl border-2 bg-[oklch(0.998_0.006_155_/_0.92)] shadow-[0_16px_48px_-28px_oklch(0.35_0.09_158_/_0.35)] transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none ${
									isOpen
										? "border-[oklch(0.52_0.1_160_/_0.55)] shadow-[0_20px_56px_-24px_oklch(0.38_0.1_158_/_0.42)]"
										: "border-neutral-900/[0.09] hover:border-[oklch(0.55_0.08_160_/_0.35)]"
								}`}
								style={{ animationDelay: `${staggerMs}ms` }}
							>
								<h3 className="m-0 text-lg font-medium md:text-xl">
									<button
										id={btnId}
										type="button"
										className="flex w-full items-start justify-between gap-4 px-5 py-6 text-left transition-colors duration-200 hover:bg-[oklch(0.97_0.02_155_/_0.65)] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2a6b52] sm:px-6 sm:py-7"
										aria-expanded={isOpen}
										aria-controls={panelId}
										onClick={() => toggle(i)}
									>
										<span className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
											<span
												className="select-none font-light tabular-nums text-[clamp(1.75rem,4vw,2.35rem)] leading-none tracking-[-0.04em] text-[#2a6b52]"
												aria-hidden
											>
												{String(i + 1).padStart(2, "0")}
											</span>
											<span className="min-w-0 pt-1 text-base font-medium leading-snug tracking-[-0.015em] text-neutral-950 sm:text-lg md:text-xl">
												{item.q}
											</span>
										</span>
										<span
											className={`mt-1.5 shrink-0 text-[#2a6b52] transition-transform duration-300 ease-out motion-reduce:transition-none ${
												isOpen ? "rotate-45" : "rotate-0"
											}`}
											aria-hidden
										>
											<svg
												width="26"
												height="26"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="square"
												aria-hidden
											>
												<path d="M12 5v14M5 12h14" />
											</svg>
										</span>
									</button>
								</h3>

								<div
									id={panelId}
									role="region"
									aria-labelledby={btnId}
									className="faq-panel"
									data-open={isOpen ? "true" : "false"}
									inert={isOpen ? undefined : true}
								>
									<div className="faq-panel-inner">
										<p className="border-t border-neutral-900/[0.07] px-5 pb-7 pt-5 text-sm leading-[1.8] text-neutral-700 sm:px-6 sm:pb-8 sm:text-base sm:leading-[1.85]">
											{item.a}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
