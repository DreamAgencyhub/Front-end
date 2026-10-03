import { DREAM_AGENCY_SESSION_KEY } from "@/app/constants/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const res = cookieStore.delete(DREAM_AGENCY_SESSION_KEY);

  if (!res.get(DREAM_AGENCY_SESSION_KEY)) {
    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json({
    success: false,
    message: "Something went wrong! please try again.",
  });
}
