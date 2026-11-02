import type en from "../messages/en.json";

// Makes `tsc` / `next build` fail on a wrong translation key, e.g. t("links.About").
// Note: a top-level array in messages/*.json breaks this typing, so nest arrays in an object.
declare module "next-intl" {
	interface AppConfig {
		Messages: typeof en;
	}
}
