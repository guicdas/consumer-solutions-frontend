import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
	basePath: "/consumer-solutions-frontend", //process.env.NODE_ENV === "production" ? "/consumer-solutions-frontend" : "",
	images: {
		unoptimized: true,
	},
};

export default withNextIntl(nextConfig);
