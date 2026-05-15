"use client";

import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
	const t = useTranslations("tcs");
	const content = t.raw("content") as string[];

	return (
		<div
			style={{
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
				{t("title")}
			</div>

			{content.map((p, i) => (
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
		</div>
	);
}
