import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // const theme = request.cookies.get("theme")?.value || "light";

  // const response = NextResponse.next();

  // response.cookies.set("theme", theme);

  return NextResponse.next();
}
