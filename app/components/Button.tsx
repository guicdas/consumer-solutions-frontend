type ButtonProps = { str: string; type: number; classname?: string };

export default function Button({ str, type, classname }: ButtonProps) {
	return (
		<button
			className={`relative
				${
					type === 1
						? "w-fit whitespace-nowrap p-2 bg-[#368867] hover:bg-green-700 text-white"
						: "border border-green-800 w-60 p-2 text-green-800 hover:bg-green-700 hover:text-white"
				} ${classname}`}
			type="button"
		>
			{str}
		</button>
	);
}
