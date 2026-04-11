import Image from "next/image";

type ImageWithLinkProps = {
	href: string;
	src: string;
	size: number;
	alt: string;
	className?: string;
};

export default function ImageWithLink({
	href,
	src,
	size = 20,
	alt = "image",
	className = "",
}: ImageWithLinkProps) {
	return (
		<a
			href={href}
			referrerPolicy="no-referrer"
			className={`relative flex transition duration-300 ease-out motion-safe:hover:scale-110 motion-safe:hover:opacity-100 ${className}`}
			style={{
				height: size,
				width: size,
			}}
		>
			<Image src={src} height={size} width={size} alt={alt} className="h-full w-full opacity-90" />
		</a>
	);
}
