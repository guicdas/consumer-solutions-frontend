import Image from "next/image";

export default function LanguageButton() {
	return (
		<div className="absolute right-5 landscape:top-8 portrait:bottom-8 flex flex-row w-40 portrait:w-fit h-10 portrait:h-fit border-y border-black portrait:border-transparent">
			<div
				className="w-[50%] h-full border-l portrait:border-l-transparent border-l-black bg-orange-100"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image src="GBR.png" alt="toggle english" height={17} width={27} />
			</div>
			<div
				className="w-[50%] h-full border-r border-r-black portrait:border-r-transparent"
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
