import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
	basePath:
		process.env.NODE_ENV === "production" ? "/consumer-solutions-frontend" : "",
	images: {
		unoptimized: true,
	},
};

export default withNextIntl(nextConfig);
