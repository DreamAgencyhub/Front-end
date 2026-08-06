import { JWTPayload, SignJWT } from "jose";
import { UserSession } from "../types/session";

const encodedSessionKey = new TextEncoder().encode(
  process.env.MY_JWT_TOKEN_KEY,
);

export async function encryptSession(session: UserSession) {
  return await new SignJWT(session as unknown as JWTPayload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .sign(encodedSessionKey);
}
