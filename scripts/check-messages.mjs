// Fails when fr/pt are missing a translation key that en has (or have extra ones).
// The TypeScript check in src/global.d.ts only covers en.json.
import { readFileSync } from "node:fs";

const keys = (obj, prefix = "") =>
	Object.entries(obj).flatMap(([k, v]) => {
		const path = prefix ? `${prefix}.${k}` : k;
		return v && typeof v === "object" && !Array.isArray(v) ? keys(v, path) : [path];
	});

const load = (l) => new Set(keys(JSON.parse(readFileSync(new URL(`../messages/${l}.json`, import.meta.url)))));
const en = load("en");
let failed = false;

for (const l of ["fr", "pt"]) {
	const other = load(l);
	const missing = [...en].filter((k) => !other.has(k));
	const extra = [...other].filter((k) => !en.has(k));
	if (missing.length || extra.length) {
		failed = true;
		console.error(`${l}.json — missing: ${missing.join(", ") || "none"}; extra: ${extra.join(", ") || "none"}`);
	}
}

if (failed) process.exit(1);
console.log("Translation keys match across en, fr, pt.");
