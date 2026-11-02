"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageButton() {
	type languageType = {
		language: string,
		flag: string;
	};
	const langs: languageType[] = [
		{ language: "en", flag: "GBR" },
		{ language: "fr", flag: "FRA" },
		{ language: "pt", flag: "PT" },
	];
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Close on a press outside the switcher or on Escape.
	useEffect(() => {
		if (!open) return;
		const onPointer = (e: PointerEvent) => {
			if (!ref.current?.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				aria-haspopup="true"
				className="flex items-center gap-2 rounded-full border border-neutral-900/[0.12] px-3 py-1.5 text-sm font-medium transition hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				<Image src={`/${langs.find(l => l.language === locale)?.flag || "GBR"}.png`} alt="" height={17} width={27} className="rounded-[2px]" />
				{locale.toUpperCase()}
				<span className={`h-1.5 w-1.5 rotate-45 border-b-[1.5px] border-r-[1.5px] border-accent transition-transform ${open ? "translate-y-0.5 -rotate-[135deg]" : "-translate-y-0.5"}`} aria-hidden />
			</button>
			{open && (
				<div className="absolute right-0 z-50 mt-2 overflow-hidden rounded-xl border-2 border-neutral-900/[0.08] bg-surface shadow-[0_24px_64px_-28px_oklch(0.32_0.1_158_/_0.5)]">
					{langs.map(({ language, flag }: languageType) => (
						<button
							type="button"
							key={language}
							aria-current={language === locale ? "true" : undefined}
							className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-tint ${language === locale ? "font-semibold text-accent" : "text-neutral-800"}`}
							onClick={() => {
								if (language !== locale) router.replace(pathname, { locale: language });
								setOpen(false);
							}}
						>
							<Image src={`/${flag}.png`} alt="" height={17} width={27} className="rounded-[2px]" />
							{language.toUpperCase()}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
