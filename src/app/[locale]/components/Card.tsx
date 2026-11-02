import type { ReactNode } from "react";

type CardProps = { id: string; title: string; children: ReactNode; className?: string };

// Light content card with the green top stripe used across the info pages.
export default function Card({ id, title, children, className = "" }: CardProps) {
	return (
		<section
			aria-labelledby={id}
			className={`relative overflow-hidden rounded-2xl border-2 border-neutral-900/[0.08] bg-surface p-7 shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.4)] sm:p-10 ${className}`}
		>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-accent-strong" aria-hidden />
			<div className="pointer-events-none absolute left-3 top-4 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent/45" aria-hidden />
			<h2 id={id} className="mb-6 text-[clamp(1.4rem,2.6vw,1.85rem)] leading-tight tracking-[-0.02em] text-neutral-950">
				{title}
			</h2>
			{children}
		</section>
	);
}
