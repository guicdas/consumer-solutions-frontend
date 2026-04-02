import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
			<main className="flex w-full flex-col items-center bg-white dark:bg-black">
				<div className="flex flex-col w-full h-200 items-center ">
					<Image alt="body" src={"/home.gif"} width={1400} height={1400} />
					<div className="absolute bg-white w-full h-130 opacity-50 bottom-1"></div>
					<div className="absolute flex flex-col w-[70%] h-130 text-black bottom-1 text-center items-center">
						<h1 className="text-7xl font-bold">
							Unlock Your Dream Home in Portugal?
						</h1>
						<h2 className="text-5xl ">
							Expert Mortgage Brokerage for International Investors.
						</h2>
						<h4 className="mb-10">
							We Simplify Portuguese Real Estate Financing for Global Investors
						</h4>
						<div className="flex w-full flex-col gap-8 items-center">
							<Button str="Explore our Services" type={1} />

							<button
								type="button"
								className="bg-green-800 border-50%	w-[80%] text-white hover:bg-green-700 p-2"
								style={{ borderRadius: "20px" }}
							>
								Investment destinations in Portugal -{">"}
							</button>
							<button
								type="button"
								style={{ borderRadius: "20px" }}
								className="bg-blue-800 text-white w-[80%] hover:bg-blue-700 p-2"
							>
								Legal and tax implications in Portugal -{">"}
							</button>
						</div>
					</div>
				</div>
				<div
					className="flex w-full h-70  justify-center"
					style={{ backgroundColor: "hsl(0 0 9)" }}
				>
					<div className="flex w-[70%] flex-col h-full justify-center gap-10">
						<div className="flex flex-row gap-10">
							<h2 className="text-2xl">
								Experience the Power of Expert Mortgage Brokerage for Global
								Investors
							</h2>
							<Button str="Get Started" type={1} />
						</div>
						<a href="/" style={{ textDecoration: "underline" }}>
							Portugal Property Financing - Regulatory Compliance: We are proud
							to be registered with the Bank of Portugal, the regulatory
							authority for the banking and financial sector. This registration
							demonstrates our commitment to compliance, ethical business
							practices, and providing our clients with the highest level of
							financial services.
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
