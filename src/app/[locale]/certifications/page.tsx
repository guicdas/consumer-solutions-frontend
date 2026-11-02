import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Link } from "@/src/i18n/navigation";
import Button from "../components/Button";
import Card from "../components/Card";
import PageShell from "../components/PageShell";
import { KICKER } from "../components/styles";
import { pageMetadata } from "../metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/certifications">): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "certifications" });
	return pageMetadata(locale, "/certifications", t("title"), t("freeBody"));
}

function PointsCard({ id, title, items }: { id: string; title: string; items: string[] }) {
	return (
		<Card id={id} title={title.replace(/\s*:$/, "")}>
			<ul className="space-y-6">
				{items.map((item) => (
					<li key={item} className="flex gap-4 text-base leading-[1.8] text-neutral-700 sm:text-lg">
						<span className="mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-accent-strong" aria-hidden />
						{item}
					</li>
				))}
			</ul>
		</Card>
	);
}

export default function Certifications({ params }: PageProps<"/[locale]/certifications">) {
	const { locale } = use(params);
	setRequestLocale(locale);
	const t = useTranslations("certifications");

	return (
		<PageShell>

			<header className="relative border-b-2 border-accent/40 px-5 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20">
				<div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
					<div className="space-y-6">
						<p className={KICKER}>
							{t("kicker")}
						</p>
						<h1 className="max-w-[42rem] text-[clamp(2.25rem,7vw,4.25rem)] font-normal leading-[0.98] tracking-[-0.038em]">
							{t("title")}
						</h1>
					</div>
					<div className="overflow-hidden rounded-2xl shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.5)]">
						<Image
							alt={t("imageAlt")}
							src="/transparency.avif"
							width={1000}
							height={600}
							className="h-full w-full object-cover"
							priority
						/>
					</div>
				</div>
			</header>

			<div className="relative mx-auto flex w-full max-w-[90rem] flex-col gap-14 px-5 py-14 sm:px-8 sm:py-16 md:gap-20 md:px-12 md:py-20 lg:px-16">
				<section
					aria-labelledby="free-heading"
					className="relative overflow-hidden rounded-2xl bg-panel dark:ring-1 dark:ring-accent/30 px-7 py-12 text-zinc-100 sm:px-10 sm:py-14"
				>
					<div
						className="pointer-events-none absolute inset-0"
						aria-hidden
						style={{ background: "radial-gradient(ellipse 100% 80% at 100% 0%, var(--panel-glow), transparent 55%)" }}
					/>
					<div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
						<h2 id="free-heading" className="text-[clamp(1.75rem,3.8vw,2.65rem)] leading-tight tracking-[-0.03em] text-white">
							{t("freeTitle")}
						</h2>
						<p className="border-t border-zinc-600/50 pt-8 text-base font-light leading-[1.85] text-zinc-300 sm:text-lg lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
							{t("freeBody")}
						</p>
					</div>
				</section>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
					<PointsCard id="mandate-heading" title={t("mandateTitle")} items={t.raw("mandateItems") as string[]} />
					<PointsCard id="interests-heading" title={t("interestsTitle")} items={t.raw("interestsItems") as string[]} />
				</div>

				<div className="flex justify-center border-t border-neutral-900/[0.08] pt-12">
					<Link href="/about">
						<Button str={t("button")} type={2} />
					</Link>
				</div>
			</div>
		</PageShell>
	);
}
