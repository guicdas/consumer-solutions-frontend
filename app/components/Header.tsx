import Image from "next/image";
import Link from "next/link";
import { getBaseProdPath, Links } from "../utils/utils";
import LanguageButton from "./LanguageButton";

export default function Header() {
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
							className="portrait:w-[105px] portrait:h-[50px]"
							alt="logo"
							height={105}
							width={230}
							src={`${getBaseProdPath()}/cs.avif`}
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
						key={l}
						className="hover:text-gray-500 text-lg font-extralight"
						href={l}
					>
						{l}
					</Link>
				))}
			</nav>
		</header>
	);
}
