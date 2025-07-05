import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "~/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const url = request.nextUrl;
  const path = url.pathname;

  const isAuthRoute = ["/login", "/register"].includes(path);
  const isProtectedRoute = ["/home", "/results", "/contributors"].includes(
    path,
  );

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/home"],
};
