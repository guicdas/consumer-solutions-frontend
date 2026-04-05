import Link from "next/link";
import Button from "./components/Button";
import CtaWithDescription from "./components/CTA";
import { Links, Pages } from "./utils/utils";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
			<main className="flex w-full flex-col items-center bg-white dark:bg-black">
				<div
					className="flex flex-col w-full items-center"
					style={{ height: "120vh" }}
				>
					<video
						src={"/house.mp4"}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							objectPosition: "center center",
						}}
						crossOrigin="anonymous"
						playsInline
						preload="auto"
						muted
						autoPlay
						loop
					>
						<source src="/house	.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="absolute flex flex-col w-full h-fit bg-[hsl(100_100_100/0.6)] text-black bottom-0 py-16">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1vh",
								textAlign: "center",
								alignItems: "center",
							}}
						>
							<h1 className="text-6xl font-bold">
								Unlock Your Dream Home in Portugal?
							</h1>
							<h2 className="text-6xl w-[60%] font-extralight">
								Expert Mortgage Brokerage for International Investors.
							</h2>
							<h4 className="mb-10 font-serif font-bold">
								We Simplify Portuguese Real Estate Financing for Global
								Investors
							</h4>
						</div>
						<div className="relative flex w-full flex-col gap-8 items-center">
							<Link href={Pages.Services}>
								<Button str="Explore our Services" type={1} />
							</Link>

							{/* <button
								type="button"
								className="relative bg-green-800 border-50%	w-[80%] text-white hover:bg-green-700 p-2"
								style={{ borderRadius: "20px" }}
							>
								Investment destinations in Portugal -{">"}
							</button>
							<button
								type="button"
								style={{ borderRadius: "20px" }}
								className="relative bg-blue-800 text-white w-[80%] hover:bg-blue-700 p-2"
							>
								Legal and tax implications in Portugal -{">"}
							</button> */}
						</div>
					</div>
				</div>
				<CtaWithDescription />
			</main>
		</div>
	);
}
