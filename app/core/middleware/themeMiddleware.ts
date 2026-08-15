import { NextRequest, NextResponse } from "next/server";

export default function themeMiddleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value || "light";

  const response = NextResponse.next();

  return response.cookies.set("theme", theme);
}
