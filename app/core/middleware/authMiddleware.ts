import { DREAM_AGENCY_SESSION_KEY } from "@/app/constants/session";
import { UserSession } from "@/app/types/session";
import { decryptSession } from "@/app/utilities/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function authMiddleware(request: NextRequest) {
  const session = request.cookies.get(DREAM_AGENCY_SESSION_KEY)?.value || "";

  const authRotes = ["/auth/login", "/auth/signup"];
  const protectedRoute = [
    "/profile/courses",
    "/profile/reservations",
    "/profile/sent-tickets",
    "/profile/support",
  ];
  const { nextUrl } = request;

  const isAuthRoute = authRotes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoute.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  if (!session) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  try {
    const decryptedSession = (await decryptSession(
      session,
    )) as unknown as UserSession;
    const now = Date.now();
    const hasSessionExpired = decryptedSession.exp < now;

    if (hasSessionExpired && isProtectedRoute) {
      const cookieStore = await cookies();
      cookieStore.delete(DREAM_AGENCY_SESSION_KEY);

      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (!hasSessionExpired && isAuthRoute) {
      return NextResponse.redirect(new URL("/profile/courses", request.url));
    }
  } catch (err) {
    console.log(err);
  }

  return null;
}
