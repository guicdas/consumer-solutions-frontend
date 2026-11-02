import { Link } from "@/src/i18n/navigation";

// Compact clickable card with the green stripe and corner bracket; used on the homepage.
export default function LinkTile({ href, name, desc }: { href: string; name: string; desc: string }) {
	return (
		<Link
			href={href}
			className="group relative flex h-full items-center overflow-hidden rounded-2xl border-2 border-neutral-900/[0.08] bg-surface pb-7 pl-7 pr-12 pt-8 sm:pb-9 sm:pl-9 sm:pt-10 shadow-[0_24px_64px_-36px_oklch(0.32_0.1_158_/_0.4)] transition hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
		>
			<span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-accent-strong" aria-hidden />
			<span className="pointer-events-none absolute left-3 top-4 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-accent/45" aria-hidden />
			{/* Mirrored bracket in the opposite corner marks the tile as a link; it nudges out on hover. */}
			<span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-accent/45 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:border-accent" aria-hidden />
			<span className="min-w-0 space-y-2">
				<span className="block text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight tracking-[-0.02em] text-neutral-950">{name}</span>
				<span className="line-clamp-2 text-sm font-light leading-[1.55] sm:text-base text-neutral-600">{desc}</span>
			</span>
		</Link>
	);
}
