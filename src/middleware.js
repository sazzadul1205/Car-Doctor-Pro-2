import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;
  const token = cookies(request).get("next-auth.session-token");

  // Exclude `/Services` but include its subpaths
  if (pathname === "/Services") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/Login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/MyBookings/:path*",
    "/Services/:path*", // Matches all subpaths under /Services
    "/Checkout/:path*",
  ],
};
