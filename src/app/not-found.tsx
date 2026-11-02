import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

// Cloudflare Pages serves this (out/404.html) for any unknown URL. It sits outside [locale], so it shows all three languages.
const LANGS = [
	{ href: "/en", title: "Page not found", link: "Go to the homepage" },
	{ href: "/fr", title: "Page introuvable", link: "Aller à l'accueil" },
	{ href: "/pt", title: "Página não encontrada", link: "Ir para a página inicial" },
];

// The root layout only passes children through, so this page brings its own <html>.
export default function NotFound() {
	return (
		<html lang="en">
			<body className={`${oswald.className} antialiased`}>
				<main className="flex min-h-screen items-center justify-center bg-page px-5 py-16 text-neutral-950">
					<div className="w-full max-w-xl">
						<p className="mb-6 text-[clamp(4rem,14vw,7rem)] font-extralight leading-none tracking-[-0.04em] text-accent">404</p>
						<ul className="divide-y divide-neutral-900/[0.08] rounded-2xl border-2 border-neutral-900/[0.08] bg-surface">
							{LANGS.map((l) => (
								<li key={l.href} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-5">
									<span className="text-xl tracking-[-0.01em]">{l.title}</span>
									<a href={l.href} className="text-sm text-accent underline decoration-accent/35 underline-offset-[0.22em] hover:decoration-accent">
										{l.link}
									</a>
								</li>
							))}
						</ul>
					</div>
				</main>
			</body>
		</html>
	);
}
