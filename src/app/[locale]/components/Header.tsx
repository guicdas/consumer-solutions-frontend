import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import LanguageButton from "./LanguageButton";
import { useTranslations } from "next-intl";

export default function Header() {
	const t = useTranslations();
	const Links = [
		{ name: t("services"), url: "/services" },
		{ name: t("certifications"), url: "/certifications" }
	];


	return (
		<header
			className="relative flex flex-col bg-white pt-12 pb-6 px-24 portrait:px-6"
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
						<div
							style={{ marginBottom: "2px" }}
							className="text-lg portrait:text-sm"
						>
							Intermediário de crédito em Portugal
						</div>
						<div className="text-sm portrait:text-xs" style={{ color: "gray" }}>
							Your mortgage broker
						</div>
						<div className="text-sm portrait:text-xs" style={{ color: "gray" }}>
							Votre courtier en crédit
						</div>
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
