import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;
  // const token = cookies(request).get("__Secure-next-auth.session-token"); //__Secure- for deployment on vercel
  const token = cookies(request).get("next-auth.session-token"); //__Secure- for deployment on vercel

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
