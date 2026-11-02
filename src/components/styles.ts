// Small green label above page titles. Tighter tracking on phones so long labels wrap inside the screen.
export const KICKER_BASE = "inline-block max-w-full text-balance border-b-2 pb-2 text-[0.68rem] font-bold uppercase leading-relaxed tracking-[0.18em] sm:text-xs sm:tracking-[0.42em]";
export const KICKER = `${KICKER_BASE} border-accent text-accent`;

// Link on the dark green panels.
export const LINK_DARK = "font-medium text-[oklch(0.88_0.04_150)] underline decoration-white/35 underline-offset-[0.22em] transition hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-200";

// Quiet text link on light backgrounds (footer, contact list).
export const LINK_MUTED = "text-neutral-700 transition hover:text-accent focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
