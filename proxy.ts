import { NextRequest, NextResponse } from "next/server";
import themeMiddleware from "./app/core/middleware/themeMiddleware";
import authMiddleware from "./app/core/middleware/authMiddleware";

export function proxy(request: NextRequest) {
  const authResponse = authMiddleware(request);

  const themeResponse = themeMiddleware(request);

  if (authResponse) {
    return authResponse;
  }

  if (themeResponse) {
    return themeResponse;
  }

  NextResponse.next();
}
