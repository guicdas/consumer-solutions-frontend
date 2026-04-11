"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState } from "react";

export default function LanguageButton() {
	type languageType = {
		language: string;
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

	return (
		<div className="relative shrink-0 self-start sm:self-end">
			<button
				type="button"
				aria-expanded={open}
				aria-haspopup="listbox"
				aria-label="Change language"
				className="rounded-sm border-2 border-neutral-900/15 bg-white/80 px-2 py-1.5 transition duration-300 ease-out hover:border-[#2a6b52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a6b52] motion-safe:active:scale-[0.98]"
				onPointerDown={() => setOpen(!open)}
			>
				<Image
					src={`/${langs.find((l) => l.language === locale)?.flag || "GBR"}.png`}
					alt=""
					height={17}
					width={27}
				/>
			</button>
			{open && (
				<div
					className="absolute right-0 top-[calc(100%+0.5rem)] z-[100] min-w-[10rem] border border-neutral-900/12 bg-[oklch(0.995_0.01_155)] py-1 shadow-lg shadow-black/12"
					role="listbox"
				>
					{langs.map(({ language, flag }: languageType) => (
						<button
							type="button"
							key={language}
							role="option"
							aria-selected={language === locale}
							className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 transition duration-200 ease-out hover:bg-[oklch(0.94_0.04_155)] focus-visible:bg-[oklch(0.94_0.04_155)] focus-visible:outline-none"
							onClick={() => {
								if (language !== locale)
									router.replace(pathname, { locale: language });
								setOpen(false);
							}}
						>
							<Image
								src={`/${flag}.png`}
								alt=""
								height={17}
								width={27}
							/>
							{language}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
