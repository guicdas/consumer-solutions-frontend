import Image from "next/image";
import Button from "../components/Button";

export default function Certifications() {
	return (
		<div className="flex  flex-col relative text-black bg-white items-center">
			<div className="relative">
				<Image alt="certs" src="/transparency.avif" width={1000} height={100} />
				<h1 className="absolute top-1/2 left-1/12 translate-y-[-50%] bg-white p-8">
					Our Commitment to Transparency and Client Benefits
				</h1>
			</div>
			<div className="flex flex-col gap-12 text-center pt-15">
				<h2>Mortgage Brokerage Portugal</h2>
				<h3 style={{ fontWeight: "bold" }}>
					Transparent Mortgage Brokerage: Free Services in Portugal
				</h3>
				<p>
					At Consumer Solutions, transparency is not just a principle; it's our
					commitment. Our mortgage brokerage services are entirely free for
					clients, a mandate set by the Bank of Portugal. This reflects our
					unwavering dedication to clients' best interests and financial
					well-being.
				</p>
				<h3 style={{ fontWeight: "bold" }}>Bank of Portugal's Mandate:</h3>
				<ul>
					<li>
						Our services align with the regulations of the Bank of Portugal,
						which require mortgage brokers not to charge clients for their
						assistance.
					</li>
					<li>
						We embrace this mandate as a testament to our client-centric
						approach and dedication to transparency.
					</li>
				</ul>
				<h3 style={{ fontWeight: "bold" }}>
					Your Best Interests, Our Priority:
				</h3>
				<ul>
					<li>
						When you choose Consumer Solutions, you're choosing a partner
						committed to your financial well-being.
					</li>
					<li>
						We prioritize your best interests, ensuring that you receive free,
						client-friendly mortgage brokerage services in Portugal.
					</li>
				</ul>
				<Button str="Meet the team" type={2} />
			</div>
		</div>
	);
}
