export default function TermsAndConditions() {
	const paragraphs = [
		"The protection of confidentiality and integrity of our customers' data is considered by CPCDS CONSUMER SOLUTIONS as one of the fundamental pillars in the relationship of trust with people who use our services.",
		"CPCDS CONSUMER SOLUTIONS has an organization and an adequate process to protect your data against destruction, alteration, and unauthorized access.\nThe General Data Protection Regulation (RGPD) applies to the processing of personal data by fully or partially automated means, as well as to the processing by non-automated means of personal data contained in files.",
		"We comply with the confidentiality obligations arising from the activity of mortgage and loans brokers under the provisions of applicable national legislation and Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 - General Regulation on Data Protection (GDPR)."
	];

	return (
		<div style={{
			width: "100vw",
			backgroundColor: "hsl(0 0 85)",
			color: "black",
			height: "fit-content",
			display: "flex",
			flexDirection: "column",
			gap: "5vh",
			justifyContent: "center",
			alignItems: "center",
		}}
			className="portrait:text-[15px] landscape:text-[22px] py-18"
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					alignContent: "center",
					justifyContent: "center",
					border: "none",
				}}
			>
				DATA PROTECTION
			</div>

			{paragraphs.map((p: string, i) => (
				<p
					key={`p${i + 1}`}
					style={{
						width: "100%",
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
						border: "none",
						whiteSpace: "pre-line",
						fontWeight: i === 0 ? "400" : "200",
					}}
					className={`${i === 0 ? "portrait:px-16 landscape:px-44" : "portrait:px-8 landscape:px-28"}`}
				>
					{p}
				</p>
			))}
		</div >
	);
}