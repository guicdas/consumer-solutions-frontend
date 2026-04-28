export const Links = [
	"services",
	"certifications"
];

export const footerLinks = [
	"T&Cs",
	"sitemap",
	"about",
];

export enum Pages {
	Services = "Services",
}

export const getBaseProdPath = () => {
	return process.env.NODE_ENV === "production"
		? "/consumer-solutions-frontend"
		: "";
};
