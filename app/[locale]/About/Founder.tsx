export default function Founder() {
	const paragraphs = [
		"Meet Our Founder and Finance Expert - Conceição Caldeira da Silva",
		"Conceição Caldeira da Silva, the driving force behind our mortgage brokerage, brings over two decades of finance expertise to our mission. Her journey began within the walls of a multinational bank, where she dedicated 15 years to helping families secure their dreams of homeownership.",
		"In her career's evolution, Conceição specialized in crafting tailored financial solutions for premium partners, where her skills in bespoke financial strategies truly flourished. Today, she stands as a seasoned finance professional with in-depth knowledge of bank financing products. With Conceição at the helm, you can expect nothing less than excellence and expertise when you choose our brokerage.",
		"Welcome to a world of financial wisdom and tailored solutions. Welcome to Consumer Solutions."
	];

	return (
		<div style={{
			width: "100%",
			backgroundColor: "hsl(0 0 70)",
			height: "fit-content",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			padding: "10vh",
		}}>
			{paragraphs.map((p: string, i) =>
				<div
					key={i + 1}
					style={{
						width: "100%",
						backgroundColor: "hsl(0 0 98)",
						color: "black"
					}}>
					<div
						style={{
							width: "100%",
							display: "flex",
							alignContent: "left",
							justifyContent: "left",
							padding: "16px 20px",
							border: "none",
							cursor: "pointer",
							backgroundColor: "hsl(0 0 85)",
							fontWeight: i === 0 ? "500" : "200"
						}}
					>
						{p}
					</div>
				</div>
			)}
		</div >

	);
}