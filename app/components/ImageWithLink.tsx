import Image from "next/image";

type ImageWithLinkProps = {
	href: string;
	src: string;
	size: number;
	alt: string;
};

export default function ImageWithLink({
	href,
	src,
	size = 20,
	alt = "image",
}: ImageWithLinkProps) {
	return (
		<a href={href} referrerPolicy="no-referrer">
			<Image src={src} height={size} width={size} alt={alt} />
		</a>
	);
}
