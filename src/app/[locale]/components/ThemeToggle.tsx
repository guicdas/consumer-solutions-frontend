"use client";

// Icons swap via the dark: variant, so the button needs no state and renders the same on server and client.
export default function ThemeToggle({ label }: { label: string }) {
	function toggle() {
		const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {}
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={label}
			title={label}
			className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		>
			<svg viewBox="0 0 24 24" className="h-[18px] w-[18px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
				<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
			</svg>
			<svg viewBox="0 0 24 24" className="hidden h-[18px] w-[18px] dark:block" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
			</svg>
		</button>
	);
}
