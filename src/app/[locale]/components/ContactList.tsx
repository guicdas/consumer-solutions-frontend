import { useTranslations } from "next-intl";
import { LINK_DARK, LINK_MUTED } from "./styles";

const ICONS = {
	address: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
	phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
	email: "M3 6h18v12H3zM3 6l9 7 9-7",
};

function Icon({ d, dark }: { d: string; dark: boolean }) {
	return (
		<span
			className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${dark ? "bg-white/10 text-[oklch(0.88_0.04_150)]" : "bg-tint text-accent"}`}
			aria-hidden
		>
			<svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<path d={d} />
			</svg>
		</span>
	);
}

// Address, phone and email of the firm; `dark` styles it for the dark green panels, `className` sets the layout.
export default function ContactList({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
	const t = useTranslations("services");
	const link = dark ? LINK_DARK : LINK_MUTED;

	return (
		<address className={`not-italic ${className}`}>
			<div className="flex items-center gap-4">
				<Icon d={ICONS.address} dark={dark} />
				<span className={`leading-relaxed ${dark ? "text-zinc-300" : "text-neutral-700"}`}>{t("address")}</span>
			</div>
			<div className="flex items-center gap-4">
				<Icon d={ICONS.phone} dark={dark} />
				<a className={link} href={`tel:${t("phone").replace(/\s/g, "")}`}>
					{t("phone")}
				</a>
			</div>
			<div className="flex items-center gap-4">
				<Icon d={ICONS.email} dark={dark} />
				<a className={`${link} break-all`} href={`mailto:${t("email")}`}>
					{t("email")}
				</a>
			</div>
		</address>
	);
}
