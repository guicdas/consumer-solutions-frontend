"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageButton() {

	const flags: Record<string, string> = {
		en: "🇬🇧",
		fr: "🇫🇷",
		pt: "🇵🇹",
	};

	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const next = e.target.value;
		const segments = pathname.split("/");
		segments[1] = next;
		router.push(segments.join("/"));
	};

	return (
		<select
			value={locale}
			onChange={onChange}
			className="absolute right-5 landscape:top-8 portrait:bottom-8 border border-black portrait:border-transparent bg-orange-100 h-10 portrait:h-fit px-2 rounded"
		>
			{Object.entries(flags).map(([lang, flag]) => (
				<option key={lang} value={lang}>
					{flag} {lang.toUpperCase()}
				</option>
			))}
		</select>

	);
}
/*<div className="absolute right-5 landscape:top-8 portrait:bottom-8 flex flex-row w-40 portrait:w-fit h-10 portrait:h-fit border-y border-black portrait:border-transparent">
	<div
		className="w-[50%] h-full border-l portrait:border-l-transparent border-l-black bg-orange-100"
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<Image src="GBR.png" alt="toggle english" height={17} width={27} />
	</div>
	<div
		className="w-[50%] h-full border-r border-r-black portrait:border-r-transparent"
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<Image src="FRA.png" alt="toggle french" height={17} width={27} />
	</div>
</div>*/