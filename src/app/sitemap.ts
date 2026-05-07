import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.cpcdsconsumersolutions.pt/en",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
			alternates: {
				languages: {
					fr: "https://www.cpcdsconsumersolutions.pt/fr/",
					pt: "https://www.cpcdsconsumersolutions.pt/pt/",
				},
			},
		},
		{
			url: "https://www.cpcdsconsumersolutions.pt/en/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					fr: "https://www.cpcdsconsumersolutions.pt/fr/services",
					pt: "https://www.cpcdsconsumersolutions.pt/pt/services",
				},
			},
		},
		{
			url: "https://www.cpcdsconsumersolutions.pt/en/terms-conditions",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
			alternates: {
				languages: {
					fr: "https://www.cpcdsconsumersolutions.pt/fr/terms-conditions",
					pt: "https://www.cpcdsconsumersolutions.pt/pt/terms-conditions",
				},
			},
		},
	];
}
