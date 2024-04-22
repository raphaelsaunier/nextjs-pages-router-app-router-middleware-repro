import { NextRequest, NextResponse } from "next/server";

const SKIP_MIDDLEWARE = false;

const LOCALHOST = "localhost:3000";

// Compute domain based on host (irrelevant for repro example)
const getDomain = (host: string) => "www";

/**
 * Multi-tenant middleware inspired by Vercel platforms example
 * @see https://github.com/vercel/platforms
 */
export default async function middleware(req: NextRequest) {
  if (SKIP_MIDDLEWARE) {
    console.log("Skipping middleware execution");
    return NextResponse.next();
  }

  const { nextUrl: url } = req;
  const domain = getDomain(req.headers.get("host")!);
  let { pathname } = url;

  if (pathname.startsWith(`/domains`)) {
    url.pathname = `/404`;
    console.log(`Blocking direct access to ${pathname}`);
    return NextResponse.rewrite(url);
  }

  const rewrittenPathname = `/domains/${domain}${
    pathname === "/" ? "" : pathname
  }`;
  url.pathname = rewrittenPathname;

  console.log(`Rewriting ${pathname} to ${rewrittenPathname}`);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * - /api routes
     * - /_next (Next.js internals)
     * - /_static (inside /public)
     * - static files inside /subdir
     * - all root files inside /public (e.g. /favicon.ico)
     */
    "/", // Required for i18n to work
    "/((?!api/|_next/|_static/|_vercel|fonts|images|favicon|icons|img|[\\w-]+\\.\\w+).*)",
  ],
};
