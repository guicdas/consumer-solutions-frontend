"use client";

import Link from "next/link";
import { useTranslations } from "use-intl";
import { prata } from "../fonts-display";
import Button from "./components/Button";
import CtaWithDescription from "./components/CTA";
import { getBaseProdPath, Pages } from "./utils/utils";

export default function Home() {
	const t = useTranslations();

	return (
		<div className="flex min-h-screen flex-col bg-[oklch(0.985_0.008_145)] dark:bg-black">
			<main className="flex w-full flex-col bg-white dark:bg-black">
				<section className="relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden">
					<div
						className="pointer-events-none absolute inset-0 z-[1]"
						aria-hidden
						style={{
							background:
								"linear-gradient(115deg, oklch(0.22 0.04 165 / 0.72) 0%, oklch(0.35 0.06 155 / 0.28) 38%, transparent 62%)",
						}}
					/>
					<video
						className="absolute inset-0 size-full object-cover object-center"
						src={`${getBaseProdPath()}/house.mp4`}
						crossOrigin="anonymous"
						playsInline
						preload="metadata"
						muted
						autoPlay
						loop
					>
						<source src={`${getBaseProdPath()}/house.mp4`} type="video/mp4" />
						{t("videoError")}
					</video>
					<div className="relative z-10 mt-auto w-full">
						<div className="grid w-full grid-cols-1 lg:grid-cols-12 lg:items-end">
							<div
								className="flex flex-col gap-8 bg-[oklch(0.99_0.012_155_/_0.92)] px-5 py-12 text-neutral-950 sm:gap-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:col-span-7 lg:gap-12 lg:px-14 lg:py-20 xl:col-span-6 xl:px-16"
							>
								<div className="flex flex-col items-center gap-5 text-center sm:gap-6 lg:items-start lg:text-left">
									<h1
										className={`home-hero-enter ${prata.className} w-full max-w-[min(100%,42rem)] text-[clamp(2.75rem,10vw,5.75rem)] font-normal leading-[0.92] tracking-[-0.03em] portrait:text-[clamp(2.25rem,9vw,3.25rem)]`}
									>
										{t("title")}
									</h1>
									<h2 className="home-hero-enter home-hero-enter-delay-1 w-full max-w-[65ch] text-[clamp(1.35rem,3.6vw,2.9rem)] font-extralight leading-[1.12] tracking-[0.02em] text-neutral-800 portrait:text-2xl md:tracking-[0.04em]">
										Expert Mortgage Brokerage for International Investors.
									</h2>
									<p
										className={`home-hero-enter home-hero-enter-delay-2 ${prata.className} max-w-[36ch] text-[clamp(0.95rem,1.35vw,1.2rem)] font-normal uppercase leading-snug tracking-[0.22em] text-[#2a6b52] portrait:tracking-[0.16em]`}
									>
										We Simplify Portuguese Real Estate Financing for Global
										Investors
									</p>
								</div>
								<div className="home-hero-enter home-hero-enter-delay-3 flex justify-center lg:justify-start">
									<Link
										href={Pages.Services}
										className="rounded-sm outline-offset-4 transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a6b52] motion-safe:hover:-translate-y-0.5"
									>
										<Button
											str="Explore our Services"
											type={1}
											classname="px-10 py-3.5 text-base font-medium tracking-[0.12em] uppercase"
										/>
									</Link>
								</div>
							</div>
							<div
								className="hidden min-h-[12vh] lg:col-span-5 xl:col-span-6"
								aria-hidden
							/>
						</div>
					</div>
				</section>
				<CtaWithDescription />
			</main>
		</div>
	);
}
