import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath:
		process.env.NODE_ENV === "production" ? "/consumer-solutions-frontend" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
