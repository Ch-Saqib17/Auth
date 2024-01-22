// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const pathName = request.nextUrl.pathname;
//   const { NEXTAUTH_SECRET } = process.env;
//   const session = await getToken({
//     req: request,
//     secret: NEXTAUTH_SECRET,
//   });
//   console.log("🚀 ~ middleware ~ session:", session);
//   console.log("🚀 ~ middleware ~ pathName:", pathName);
//   if (pathName.startsWith("/dashboard")) {
//     if (session) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/auth/login", request.url));
//     }
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/client-route/:path*", "/dashboard/:path*"],
// };

import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const session = false;
  console.log(pathName);
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
