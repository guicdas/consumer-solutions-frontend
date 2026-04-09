"use client";

import { useState } from "react";

export default function AboutUs() {
	const items: {
		title: string;
		body: string;
	}[] = [
			{ title: "What is the role of a mortgage broker in Portugal?", body: "A mortgage broker in Portugal acts as an intermediary between borrowers and lenders. Their role is to help clients secure the best mortgage terms by evaluating their financial situation, comparing loan offers from various banks, and guiding them through the application process." },
			{ title: "Why should I use a mortgage broker instead of going directly to a bank?", body: "Mortgage brokers offer several advantages. They have access to a wide range of loan products and can provide expert guidance on the best options for your specific needs. Brokers can often secure more favorable terms and help streamline the application process, saving you time and money." },
			{ title: "How do mortgage brokers get paid in Portugal?", body: "Mortgage brokers in Portugal typically earn a commission from the lending institution when a client's mortgage application is successful. This fee is usually a percentage of the loan amount. Clients generally do not pay brokers directly for their services." },
			{ title: "Are mortgage brokers regulated in Portugal?", body: "Yes, mortgage brokers in Portugal are regulated by the Bank of Portugal (Banco de Portugal). To operate legally, brokers must hold a valid license issued by this regulatory authority. This ensures that brokers adhere to professional standards and ethical practices." },
			{ title: "What factors affect mortgage interest rates in Portugal?", body: "Mortgage interest rates in Portugal can be influenced by various factors, including the Eurozone's monetary policy, the property's location, the loan-to-value ratio, the borrower's creditworthiness, and market competition among lenders." },
			{ title: "How can I improve my chances of getting a mortgage in Portugal?", body: "To increase your likelihood of mortgage approval, maintain a strong credit score, save for a sizable down payment, provide accurate financial documentation, and work with a mortgage broker to identify lenders that match your financial profile." },
			{ title: "What is the maximum loan-to-value (LTV) ratio for mortgages in Portugal?", body: "The LTV ratio can vary, but it's common for lenders to offer mortgages with an LTV of up to 80% of the property's value. However, specific terms may vary based on your financial situation and the lending institution." },
			{ title: "Can I get a mortgage in Portugal as a foreign investor or non-resident?", body: "Yes, Portugal welcomes foreign investors, and non-residents can typically secure mortgages for property purchases. The requirements may vary, so it's advisable to work with a mortgage broker experienced in handling international clients." },
			{ title: "How long does the mortgage approval process in Portugal usually take?", body: "The mortgage approval process can take several weeks in Portugal. It involves property appraisal, credit checks, and documentation verification. Timelines may vary depending on the complexity of the application and the lender's efficiency." },
		];

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

	return (
		<div style={{
			width: "100%",
			backgroundColor: "grey",
			height: "fit-content",
			display: "flex",
			justifyContent: "center",
			padding: "10vh",
		}}>
			<div style={{
				width: "100%",
				backgroundColor: "hsl(0 0 98)",
				color: "black",

			}}>
				<div
					style={{
						width: "100%",
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
						padding: "16px 20px",
						border: "none",
						cursor: "pointer",
						backgroundColor: "hsl(0 0 90)"
					}}
				>
					FAQ's
				</div>
				{items.map((item, i) => (
					<div
						key={i}
						style={{
							borderBottom: i < items.length - 1 ? "0.5px solid #e0e0e0" : "none"
						}}
					>
						<button
							type="button"
							onClick={() => toggle(i)}
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								padding: "16px 20px",
								border: "none",
								cursor: "pointer",
								textAlign: "left",
							}}
						>
							{item.title}
							<span style={{
								transition: "all 100ms ease",
								translate: openIndex === i ? "0 2px" : "0 -2px",
								width: "8px",
								height: "8px",
								borderLeft: "solid 2px black",
								borderTop: "solid 2px black",
								rotate: openIndex === i ? "45deg" : "-135deg"
							}} />
						</button>

						<div style={{
							transition: "all 70ms ease",
							opacity: openIndex === i ? "1" : "0",
							height: openIndex === i ? "fit-content" : "0",
							padding: "0 20px 16px",
							fontSize: 14,
							color: "#666"
						}}>
							{item.body}
						</div>

					</div>
				))}
			</div>
		</div>
	);
}