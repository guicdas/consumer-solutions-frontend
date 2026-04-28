import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/consumer-solutions-frontend",
	assetPrefix: "/consumer-solutions-frontend",
	/*process.env.NODE_ENV === "production" ? "/consumer-solutions-frontend" : "",*/
	images: {
		unoptimized: true,
	},
};

export default withNextIntl(nextConfig);
