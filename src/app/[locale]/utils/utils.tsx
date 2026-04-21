export const Links = [
	"Services",
	"Certifications"
];

export const footerLinks = [
	"T&Cs",
	"Sitemap",
	"About",
];

export enum Pages {
	Services = "Services",
}

export const getBaseProdPath = () => {
	return process.env.NODE_ENV === "production"
		? "/consumer-solutions-frontend"
		: "";
};
