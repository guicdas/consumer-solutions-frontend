import Link from "next/link";
import { getBaseProdPath, Links } from "../utils/utils";
import Button from "./Button";
import ImageWithLink from "./ImageWithLink";

const footerLinkClass =
	"text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 transition duration-300 ease-out hover:text-zinc-100 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-zinc-300 sm:text-sm sm:tracking-[0.22em]";

function FooterNavSeparator() {
	return (
		<span className="text-zinc-600" aria-hidden>
			·
		</span>
	);
}

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[oklch(0.15_0.028_158)] text-zinc-200">
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				aria-hidden
				style={{
					backgroundImage:
						"radial-gradient(ellipse 80% 50% at 20% 100%, oklch(0.45 0.12 160), transparent 60%)",
				}}
			/>
			<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 sm:px-10 sm:py-20 md:gap-16 md:px-12 lg:py-24">
				<div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
					<a href="mailto:consumer.solutions@outlook.com?subject=Requesting Consultation">
						<Button
							str="Request a Consultation >"
							type={2}
							classname="border-2 border-zinc-500/90 px-10 py-4 text-sm font-medium tracking-[0.16em] text-zinc-100 uppercase transition duration-300 ease-out hover:border-[#368867] hover:bg-[#368867] hover:text-white motion-safe:hover:scale-[1.02] portrait:w-full"
						/>
					</a>
				</div>

				<div className="flex flex-col gap-8 border-t border-zinc-600/40 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
					<div className="flex flex-row flex-wrap items-center gap-6 sm:gap-8">
						<ImageWithLink
							href="https://www.facebook.com/"
							src={`${getBaseProdPath()}/fb.svg`}
							alt="Facebook"
							size={20}
							className="brightness-0 invert"
						/>
						<ImageWithLink
							href="https://x.com/CONSUMSOLUTION"
							src={`${getBaseProdPath()}/x.png`}
							alt="X"
							size={20}
							className="opacity-90"
						/>
						<ImageWithLink
							href="https://www.linkedin.com/company/cpcdsconsumersolutions"
							src={`${getBaseProdPath()}/linkedin.svg`}
							alt="LinkedIn"
							size={20}
							className="brightness-0 invert"
						/>
					</div>
					<nav
						className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-5"
						aria-label="Footer"
					>
						<Link className={footerLinkClass} href="/TCs">
							T&amp;Cs
						</Link>
						<FooterNavSeparator />
						{Links.map((l) => (
							<span key={l} className="flex flex-wrap items-center gap-x-3 sm:gap-x-5">
								<Link className={footerLinkClass} href={l}>
									{l}
								</Link>
								<FooterNavSeparator />
							</span>
						))}
						<Link className={footerLinkClass} href="/About">
							FAQ
						</Link>
					</nav>
				</div>

				<p className="text-center text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
					© 2021 Consumer Solutions
				</p>
			</div>
		</footer>
	);
}
