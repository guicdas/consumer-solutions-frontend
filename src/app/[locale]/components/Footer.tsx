import { Link } from "@/src/i18n/navigation";
import { footerLinks } from "../utils/utils";
import Button from "./Button";
import ImageWithLink from "./ImageWithLink";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center pb-16 pt-10 bg-white h-fit text-black gap-4">
			<a href="mailto:consumer.solutions@outlook.com?subject=Requesting Consultation">
				<Button str={`Request a Consultation >`} type={2} /></a>
			<div className="flex flex-row gap-5">
				<ImageWithLink
					href="https://www.facebook.com/"
					src="/fb.svg"
					alt="Facebook socials"
					size={17}
				/>
				<ImageWithLink
					href="https://x.com/CONSUMSOLUTION"
					src="/x.png"
					alt="X socials"
					size={17}
				/>
				<ImageWithLink
					href="https://www.linkedin.com/company/cpcdsconsumersolutions"
					src="/linkedin.svg"
					alt="LinkedIn socials"
					size={17}
				/>
			</div>
			<div className="flex flex-row justify-center py-8">
				<nav>
					{footerLinks.map((l: { name: string, url: string; }, i) => (
						<Link
							key={l.name}
							className={`${i !== footerLinks.length - 1 ? "border-r border-r-black" : ""} px-6 portrait:px-4 hover:text-gray-500`}
							href={`/${l.url}`}
						>
							{l.name}
						</Link>
					))}
				</nav>
			</div>
			<p>©2021 by Consumer Solutions.</p>
		</footer>
	);
}
