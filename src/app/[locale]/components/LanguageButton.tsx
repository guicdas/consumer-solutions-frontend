"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { useState } from "react";

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

	return (
		<div className="absolute right-5 landscape:top-8 portrait:bottom-8 transition-all duration-150">
			<button type="button" onPointerDown={() => setOpen(!open)} >
				<Image src={`/${langs.find(l => l.language === locale)?.flag || "GBR"}.png`} alt={locale} height={17} width={27} />
			</button>
			{open && (
				<div className="absolute right-0 mt-1 bg-white border border-black rounded">
					{langs.map(({ language, flag }: languageType) => (
						<button
							type="button"
							key={language}
							className="flex items-center gap-2 px-3 py-2 hover:bg-orange-100 w-max"
							onClick={() => {
								if (language !== pathname) router.replace(pathname, { locale: language });
								setOpen(false);
							}}
						>
							<Image src={`/${flag}.png`} alt={language} height={17} width={27} style={{ position: "relative" }} />
							{language.toUpperCase()}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
