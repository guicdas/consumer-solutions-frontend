import { expect, test } from "bun:test";
import { getT, localHref } from "./t";

test("placeholders are filled", () => {
	expect(getT("en", "services")("insuranceMortgage", { policy: "123" })).toContain("policy no. 123 —");
});

test("rich text splits tagged links from plain text", () => {
	const parts = getT("en", "services").rich("registrationBody", { registration: "0006380" });
	expect(parts.filter((p) => p.tag)).toEqual([{ tag: "bpportal", text: "Bank of Portugal credit intermediaries portal" }]);
	expect(parts.map((p) => p.text).join("")).toContain("under no. 0006380. You can verify");
	expect(parts.at(-1)).toEqual({ text: "." });
});

test("raw returns arrays and full keys work without a namespace", () => {
	expect(getT("pt").raw("about.faqs")).toHaveLength(9);
	expect(getT("fr")("links.services")).toBe("Services");
});

test("missing key throws instead of rendering the key name", () => {
	// @ts-expect-error: invalid key on purpose
	expect(() => getT("en")("links.nope")).toThrow("Missing translation key: links.nope");
});

test("localHref", () => {
	expect(localHref("fr", "/services")).toBe("/fr/services");
	expect(localHref("pt", "/")).toBe("/pt");
});
