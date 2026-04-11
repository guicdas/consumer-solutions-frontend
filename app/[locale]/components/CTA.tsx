import { prata } from "../../fonts-display";
import Button from "./Button";

export default function CtaWithDescription() {
	return (
		<section
			className="relative flex w-full flex-col gap-14 overflow-hidden px-6 py-20 text-zinc-100 sm:px-10 sm:py-24 md:gap-16 md:px-12 md:py-28 lg:px-16 lg:py-32 xl:px-24"
			style={{
				backgroundColor: "oklch(0.14 0.02 155)",
				backgroundImage:
					"radial-gradient(ellipse 120% 80% at 100% 0%, oklch(0.22 0.05 160 / 0.45), transparent 55%), radial-gradient(ellipse 90% 60% at 0% 100%, oklch(0.18 0.03 150 / 0.5), transparent 50%)",
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.035]"
				aria-hidden
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>
			<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 portrait:flex-col portrait:gap-10 md:flex-row md:items-end md:justify-between md:gap-14 lg:gap-20">
				<h2
					className={`${prata.className} max-w-[65ch] flex-1 text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white portrait:text-2xl`}
				>
					Experience the Power of Expert Mortgage Brokerage for Global Investors
				</h2>
				<div className="shrink-0 portrait:w-full portrait:max-w-none md:w-auto">
					<Button
						str="Get Started"
						type={1}
						classname="h-fit px-10 py-3.5 text-base font-medium tracking-[0.12em] uppercase portrait:w-full"
					/>
				</div>
			</div>
			<p className="relative mx-auto w-full max-w-[65ch] text-base leading-[1.75] text-zinc-400 underline-offset-4 transition-colors duration-300 hover:text-zinc-300 hover:underline">
				<span className="font-medium text-[oklch(0.88_0.04_150)]">
					Portugal Property Financing - Regulatory Compliance:
				</span>
				<br />
				<span className="mt-3 inline-block">
					We are proud to be registered with the Bank of Portugal, the regulatory
					authority for the banking and financial sector. This registration
					demonstrates our commitment to compliance, ethical business practices,
					and providing our clients with the highest level of financial services.
				</span>
			</p>
		</section>
	);
}
