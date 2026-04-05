import Button from "./Button";

export default function CtaWithDescription() {
	return (
		<div
			className="flex flex-col w-full h-full justify-center items-center gap-10 py-10 px-80 portrait:px-4"
			style={{ backgroundColor: "hsl(0 0 9)" }}
		>
			<div className="flex flex-row justify-around items-center gap-10">
				<h2 className="text-4xl w-[70%] portrait:text-xl">
					Experience the Power of Expert Mortgage Brokerage for Global Investors
				</h2>
				<Button str="Get Started" type={1} classname="h-fit" />
			</div>
			<span style={{ width: "90%" }} className="text-sm hover:underline">
				Portugal Property Financing - Regulatory Compliance:
				<br />
				We are proud to be registered with the Bank of Portugal, the regulatory
				authority for the banking and financial sector. This registration
				demonstrates our commitment to compliance, ethical business practices,
				and providing our clients with the highest level of financial services.
			</span>
		</div>
	);
}
