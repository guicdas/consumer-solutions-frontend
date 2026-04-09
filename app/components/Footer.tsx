import Link from "next/link";
import { getBaseProdPath, Links } from "../utils/utils";
import Button from "./Button";
import ImageWithLink from "./ImageWithLink";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center pb-16 pt-10 bg-white h-fit text-black gap-4">
			<Button str={`Request a Consultation >`} type={2} />
			<div className="flex flex-row gap-5">
				<ImageWithLink
					href="https://www.facebook.com/"
					src={`${getBaseProdPath()}/fb.svg`}
					alt="Facebook socials"
					size={17}
				/>
				<ImageWithLink
					href="https://x.com/CONSUMSOLUTION"
					src={`${getBaseProdPath()}/x.png`}
					alt="X socials"
					size={19}
				/>
				<ImageWithLink
					href="https://www.linkedin.com/company/cpcdsconsumersolutions"
					src={`${getBaseProdPath()}/linkedin.svg`}
					alt="LinkedIn socials"
					size={17}
				/>
			</div>
			<div className="flex flex-row justify-center py-8">
				<nav>
					<Link
						className="border-r border-r-black pr-6 portrait:pr-4 hover:text-gray-500"
						href="/"
					>
						Home
					</Link>
					{Links.map((l) => (
						<Link
							key={l}
							className="border-r border-r-black px-6 portrait:px-4 hover:text-gray-500"
							href={l}
						>
							{l}
						</Link>
					))}
					<Link className="pl-6 portrait:pl-4 hover:text-gray-500" href="/About">
						FAQ
					</Link>
				</nav>
			</div>
			<p>©2021 by Consumer Solutions.</p>
		</footer>
	);
}
