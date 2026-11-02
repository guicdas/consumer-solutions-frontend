import type { ReactNode } from "react";

// Tinted page background with the soft wave glow, shared by the inner pages.
export default function PageShell({ children }: { children: ReactNode }) {
	return (
		<article className="relative isolate w-full overflow-hidden bg-page text-neutral-950">
			{/* Fixed height: a % height would resize (and visibly jump) whenever the page height changes. */}
			<div
				className="pointer-events-none absolute -left-[25%] top-[-15%] h-[70rem] w-[90%] rotate-[10deg]"
				aria-hidden
				style={{ background: "linear-gradient(145deg, var(--glow) 0%, transparent 58%)" }}
			/>
			{children}
		</article>
	);
}
