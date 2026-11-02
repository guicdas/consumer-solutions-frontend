type ButtonProps = { str: string; type: number; classname?: string };

// Looks like a button but is a <span>: always wrap it in a <Link> or <a>,
// which gives the click and keyboard behaviour (a <button> inside a link is invalid HTML).
export default function Button({ str, type, classname }: ButtonProps) {
	return (
		<span
			className={`relative inline-block text-center
				${
					type === 1
						? "w-fit whitespace-nowrap p-2 bg-[#368867] hover:bg-green-700 text-white dark:bg-accent-strong dark:hover:bg-accent-strong/85"
						: "border border-accent w-60 p-2 text-accent hover:bg-accent-strong hover:text-white"
				} ${classname}`}
		>
			{str}
		</span>
	);
}
