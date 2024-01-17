import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const session = true;
  console.log("🚀 ~ middleware ~ pathName:", pathName);
  if (pathName.startsWith("/dashboard")) {
    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/client-route/:path*", "/dashboard/:path*"],
};
