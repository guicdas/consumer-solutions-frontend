import Image from "next/image";
import Link from "next/link";
import { prata } from "../../fonts-display";
import { getBaseProdPath, Links } from "../utils/utils";
import LanguageButton from "./LanguageButton";

export default function Header() {
	return (
		<header className="relative z-20 border-b-2 border-[#2a6b52] bg-[oklch(0.99_0.014_155)] text-neutral-950">
			<div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-11 md:gap-10 md:px-12 md:py-14 lg:px-16">
				<div className="flex flex-col gap-8 border-b border-neutral-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
					<div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
						<Link
							href="/"
							className="shrink-0 transition duration-300 ease-out motion-safe:hover:opacity-85"
						>
							<Image
								loading="lazy"
								className="h-[50px] w-auto portrait:h-[44px]"
								alt="Consumer Solutions logo"
								height={105}
								width={230}
								src={`${getBaseProdPath()}/cs.avif`}
							/>
						</Link>
						<div className="flex min-w-0 flex-col gap-2">
							<p
								className={`${prata.className} text-[clamp(1.05rem,2.2vw,1.4rem)] leading-snug tracking-[-0.02em] text-neutral-900`}
							>
								Intermediário de crédito em Portugal
							</p>
							<p className="text-[0.7rem] font-medium uppercase leading-none tracking-[0.28em] text-[#2a6b52] sm:text-xs">
								Your mortgage broker
							</p>
							<p className="text-[0.65rem] font-extralight uppercase tracking-[0.22em] text-neutral-500 sm:text-[0.7rem]">
								Votre courtier en crédit
							</p>
						</div>
					</div>
					<LanguageButton />
				</div>
				<nav
					className="flex flex-wrap gap-x-10 gap-y-3"
					aria-label="Primary"
				>
					{Links.map((l) => (
						<Link
							key={l}
							href={l}
							className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 underline decoration-2 underline-offset-[0.35rem] decoration-transparent transition duration-300 ease-out hover:text-[#2a6b52] hover:decoration-[#2a6b52] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a6b52] sm:text-sm sm:tracking-[0.26em]"
						>
							{l}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
