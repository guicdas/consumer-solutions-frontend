export const Links = [
	"Services",
	"Certifications",
	// "Investments",
	// "Destinations in Portugal",
	// "About Us",
	// "Testimonials",
	// "Contact Us",
];

export enum Pages {
	Services = "Services",
}

export const getBaseProdPath = () => {
	return process.env.NODE_ENV === "production"
		? "/consumer-solutions-frontend"
		: "";
};
