import Image from "next/image";

export default function LanguageButton() {
	return (
		<div className="flex flex-row w-40 h-10 border-t border-b border-black">
			<div
				className="w-[50%] h-full border-l border-l-black bg-orange-100"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image src="GBR.png" alt="toggle english" height={17} width={27} />
			</div>
			<div
				className="w-[50%] h-full border-r border-r-black"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image src="FRA.png" alt="toggle french" height={17} width={27} />
			</div>
		</div>
	);
}
