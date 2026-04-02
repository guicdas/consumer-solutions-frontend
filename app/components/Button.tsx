type ButtonProps = { str: string; type: number };

export default function Button({ str, type }: ButtonProps) {
	return (
		<button
			className={`relative ${type === 1 ? "w-fit whitespace-nowrap p-2 bg-green-800 hover:bg-green-700" : "border border-green-800 w-60 p-2 text-green-800 hover:bg-green-700 hover:text-white mb-12"}`}
			type="button"
		>
			{str}
		</button>
	);
}
