import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import pt from "../../messages/pt.json";
import { routing, type Locale } from "./routing";

type Messages = typeof en;
const MESSAGES: Record<Locale, Messages> = { en, fr, pt };

// Every valid key as a dotted path ("services.phone"); arrays and strings are leaves. A typo fails `astro check`.
type Path<T> = {
	[K in keyof T & string]: T[K] extends readonly unknown[] ? K : T[K] extends object ? `${K}.${Path<T[K]>}` : K;
}[keyof T & string];

type Vars = Record<string, string | number>;
export type RichPart = { text: string; tag?: string };

function lookup(obj: unknown, key: string): unknown {
	const value = key.split(".").reduce<unknown>((o, k) => (o as Record<string, unknown> | undefined)?.[k], obj);
	if (value === undefined) throw new Error(`Missing translation key: ${key}`);
	return value;
}

const fill = (s: string, vars: Vars = {}) => s.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));

function translator<T>(scope: unknown) {
	const t = (key: Path<T>, vars?: Vars) => fill(lookup(scope, key) as string, vars);
	// Arrays / objects as stored in the JSON (lists, FAQ items).
	t.raw = (key: Path<T>) => lookup(scope, key);
	// "a <link>b</link> c" -> [{text:"a "}, {text:"b", tag:"link"}, {text:" c"}]; the page renders tagged parts as links.
	t.rich = (key: Path<T>, vars?: Vars): RichPart[] => {
		// split() with two groups yields [text, tag, inner, text, tag, inner, ..., text]
		const pieces = fill(lookup(scope, key) as string, vars).split(/<(\w+)>(.*?)<\/\1>/);
		const parts: RichPart[] = [];
		for (let i = 0; i < pieces.length; i += 3) {
			if (pieces[i]) parts.push({ text: pieces[i] });
			if (i + 2 < pieces.length) parts.push({ text: pieces[i + 2], tag: pieces[i + 1] });
		}
		return parts;
	};
	return t;
}

export function getT(locale: Locale): ReturnType<typeof translator<Messages>>;
export function getT<NS extends keyof Messages>(locale: Locale, ns: NS): ReturnType<typeof translator<Messages[NS]>>;
export function getT(locale: Locale, ns?: keyof Messages) {
	const messages = MESSAGES[locale];
	return translator(ns ? messages[ns] : messages);
}

// Locale-prefixed internal link, e.g. localHref("fr", "/services") -> "/fr/services".
export const localHref = (locale: Locale, path: string) => `/${locale}${path === "/" ? "" : path}`;

export const isLocale = (value: string | undefined): value is Locale => routing.locales.includes(value as Locale);
