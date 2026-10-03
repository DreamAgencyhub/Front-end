import { DREAM_AGENCY_SESSION_KEY } from "@/app/constants/session";
import { decryptSession } from "@/app/utilities/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const encryptedSession = cookieStore.get(DREAM_AGENCY_SESSION_KEY)?.value;

  if (!encryptedSession) {
    return NextResponse.json(
      {
        err: "Session not found!",
        session: null,
      },
      { status: 400 },
    );
  }

  const session = await decryptSession(encryptedSession);

  return NextResponse.json(session);
}
