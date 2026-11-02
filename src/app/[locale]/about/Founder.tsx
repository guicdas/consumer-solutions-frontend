import { useTranslations } from "next-intl";

import { KICKER } from "../components/styles";

// Heading reads "<role> - <name>" in every locale; fall back to the whole line as the name.
export function splitFounderHeading(heading: string) {
	const split = heading.lastIndexOf(" - ");
	return split > 0 ? { role: heading.slice(0, split), name: heading.slice(split + 3) } : { role: null, name: heading };
}

export default function Founder() {
	const [heading, ...rest] = useTranslations("about").raw("founder") as string[];
	const closing = rest.at(-1);
	const body = rest.slice(0, -1);
	const { role, name } = splitFounderHeading(heading);
	const initials = name.split(" ").filter(Boolean).map((w) => w[0]).filter((c) => c === c.toUpperCase()).slice(0, 2).join("");

	return (
		<>
			<header className="relative border-b-2 border-accent/40 px-5 py-16 sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20">
				<div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
					<div className="space-y-6">
						{role && <p className={KICKER}>{role}</p>}
						<h1 className="max-w-[42rem] text-balance text-[clamp(2.1rem,8vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.038em]">
							{name}
						</h1>
					</div>
					<div className="flex items-center gap-6 rounded-2xl border-2 border-neutral-900/[0.08] bg-surface p-7 shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.4)] sm:p-9">
						<span
							className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-panel dark:ring-1 dark:ring-accent/30 text-2xl tracking-[0.04em] text-[oklch(0.88_0.04_150)]"
							aria-hidden
						>
							{initials}
						</span>
						<p className="text-base font-light leading-[1.6] text-neutral-700 sm:text-lg">{body[0]}</p>
					</div>
				</div>
			</header>

			<section className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 lg:px-16">
				<div className="max-w-[62ch] space-y-8 border-l-2 border-accent/30 pl-6 sm:pl-10">
					{body.slice(1).map((p) => (
						<p key={p} className="text-base font-light leading-[2] text-neutral-700 sm:text-[1.15rem]">
							{p}
						</p>
					))}
				</div>
				{closing && (
					<blockquote className="relative self-start overflow-hidden rounded-2xl bg-panel dark:ring-1 dark:ring-accent/30 px-7 py-10 sm:px-10 sm:py-12">
						<div
							className="pointer-events-none absolute inset-0"
							aria-hidden
							style={{ background: "radial-gradient(ellipse 100% 80% at 100% 0%, var(--panel-glow), transparent 55%)" }}
						/>
						<p className="relative text-[clamp(1.35rem,2.6vw,1.85rem)] leading-snug tracking-[-0.02em] text-white">
							{closing}
						</p>
					</blockquote>
				)}
			</section>
		</>
	);
}
