// Heading reads "<role> - <name>" in every locale; fall back to the whole line as the name.
export function splitFounderHeading(heading: string) {
	const split = heading.lastIndexOf(" - ");
	return split > 0 ? { role: heading.slice(0, split), name: heading.slice(split + 3) } : { role: null, name: heading };
}
