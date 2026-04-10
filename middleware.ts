// middleware.ts  ← at project root, next to app/
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	matcher: ["/((?!_next|.*\\..*).*)"],
};
