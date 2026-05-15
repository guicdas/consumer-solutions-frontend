import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import LanguageButton from "./LanguageButton";
import { useTranslations } from "next-intl";

export default function Header() {
	const t = useTranslations();
	const Links = [
		{ name: t("links.services"), url: "/services" },
		{ name: t("links.certifications"), url: "/certifications" }
	];
	const content = t.raw("header") as string[];


	return (
		<header
			className="relative z-50 flex flex-col bg-white pt-12 pb-6 px-24 portrait:px-6"
			style={{ color: "black" }}
		>
			<div
				className="flex flex-row justify-between italic border-b border-b-black"
				style={{ paddingBottom: "1vh" }}
			>
				<div className="flex flex-row items-center gap-2">
					<Link href={"/"}>
						<Image
							loading="lazy"
							className="portrait:w-26.25 portrait:h-12.5 w-32 h-15"
							alt="logo"
							height={105}
							width={230}
							src="/cs.avif"
						/>
					</Link>
					<div>
						{content.map((c: string, i) =>
							<div
								key={c}
								style={{ marginBottom: i === 0 ? "2px" : "0", color: i === 0 ? "black" : "gray" }}
								className={i === 0 ? "text-lg portrait:text-sm" : "text-sm portrait:text-xs"}
							>
								{c}
							</div>
						)}
					</div>
				</div>
				<LanguageButton />
			</div>
			<nav className="flex flex-row gap-4 mt-2">
				{Links.map((l) => (
					<Link
						key={l.name}
						className="hover:text-gray-500 text-lg font-extralight"
						href={l.url}
					>
						{l.name}
					</Link>
				))}
			</nav>
		</header>
	);
}
