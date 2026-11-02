import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://www.cpcdsconsumersolutions.pt",
	output: "static",
	// "file" emits en/services.html, so URLs stay /en/services (no trailing slash) as with the old Next export.
	build: { format: "file" },
	trailingSlash: "never",
	vite: { plugins: [tailwindcss()] },
});
