import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/guicdas",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
