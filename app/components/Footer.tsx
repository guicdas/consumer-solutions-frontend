import Image from "next/image";
import Link from "next/link";
import { Links } from "../utils/utils";
import Button from "./Button";

export default function Footer() {
	return (
		<footer className="flex flex-col bg-white h-80 text-black gap-5">
			<div className="flex flex-row justify-center pt-7">
				<nav>
					<Link
						className="border-r border-r-black pr-2  hover:text-gray-500"
						href="/"
					>
						Home
					</Link>
					{Links.map((l) => (
						<Link
							key={l}
							className="border-r border-r-black pr-2 pl-2 hover:text-gray-500"
							href={l}
						>
							{l}
						</Link>
					))}
					<Link className="pl-2 hover:text-gray-500" href="/">
						FAQ
					</Link>
				</nav>
			</div>
			<div className="flex flex-col gap-6 items-center">
				<Button str={`Request a Consultation >`} type={2} />
				<Image alt="redes" src={"/next.svg"} width={50} height={50} />
				<p>©2021 by Consumer Solutions.</p>
			</div>
		</footer>
	);
}
