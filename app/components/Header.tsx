import Image from "next/image";
import Link from "next/link";
import { Links } from "../utils/utils";

export default function Header() {
	return (
		<header className="flex flex-col bg-white p-15 " style={{ color: "black" }}>
			<div className="flex flex-row justify-between italic border-b border-b-black">
				<div className="flex flex-row">
					<Image alt="logo" height={150} width={200} src={"/cs.avif"} />
					<div>
						<div>Intermediário de crédito em Portugal</div>
						<div className="text-sm" style={{ color: "gray" }}>
							Your mortgage broker
						</div>
						<div className="text-sm" style={{ color: "gray" }}>
							Votre courtier en crédit
						</div>
					</div>
				</div>
				<div className="flex flex-row w-50 h-12.5 border-t border-b border-black">
					<div className="w-[50%] h-full border-l border-l-black bg-orange-100" />
					<div className="w-[50%] h-full border-r border-r-black" />
				</div>
			</div>

			<nav className="flex flex-row gap-4">
				{Links.map((l) => (
					<Link key={l} className="hover:text-gray-500" href={l}>
						{l}
					</Link>
				))}
			</nav>
		</header>
	);
}
