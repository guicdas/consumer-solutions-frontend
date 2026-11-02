import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import LanguageButton from "./LanguageButton";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";

export default function Header() {
	const t = useTranslations();
	const Links = [
		{ name: t("links.services"), url: "/services" },
		{ name: t("links.certifications"), url: "/certifications" },
		{ name: t("links.about"), url: "/about" },
	];

	return (
		<header className="relative z-50 border-b-2 border-accent/40 bg-surface text-neutral-950">
			<div className="mx-auto flex w-full max-w-[90rem] flex-wrap items-center justify-between gap-x-10 gap-y-5 px-5 py-5 sm:px-10 md:px-14 lg:px-20">
				<div className="flex items-center gap-4">
					<Link href="/" className="shrink-0 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
						<Image preload className="h-12 w-auto sm:h-14" alt="Consumer Solutions" height={105} width={230} src="/cs.avif" />
					</Link>
					<div className="hidden border-l border-neutral-900/[0.12] pl-4 sm:block">
						<p className="text-sm font-light leading-snug text-neutral-700">{t("header.tagline")}</p>
					</div>
				</div>

				<div className="flex items-center gap-6 sm:gap-8">
					<nav className="flex items-center gap-5 sm:gap-8">
						{Links.map((l) => (
							<Link
								key={l.url}
								href={l.url}
								className="relative py-1 text-base font-light text-neutral-800 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent-strong after:transition-transform hover:text-accent hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg"
							>
								{l.name}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2">
						<ThemeToggle label={t("header.theme")} />
						<LanguageButton />
					</div>
				</div>
			</div>
		</header>
	);
}
