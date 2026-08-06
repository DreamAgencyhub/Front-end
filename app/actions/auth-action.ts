"use server";
import { cookies } from "next/headers";
import UseCallAPI from "../utilities/CallAPI";
import { DREAM_AGENCY_SESSION_KEY } from "../constants/session";
import { encryptSession } from "../utilities/session";
import { UserSession } from "../types/session";

interface AuthModel {
  fullName?: string;
  email: string;
  password: string;
}

const Auth = UseCallAPI();

export async function signUp({ fullName, email, password }: AuthModel) {
  const response = await Auth.POST(
    "/auth/signup",
    { fullName, email, password },
    "include",
  );

  if (!response.ok) {
    const err = await response.json();

    return {
      success: false,
      err,
    };
  }

  const data = await response.json();

  await setAuthCookiesAction(data);

  return {
    success: true,
  };
}

export async function login({ email, password }: AuthModel) {
  const response = await Auth.POST(
    "/auth/login",
    { email, password },
    "include",
  );

  if (!response.ok) {
    const err = await response.json();

    return {
      success: false,
      err,
    };
  }

  const data = await response.json();

  await setAuthCookiesAction(data);

  return {
    success: true,
  };
}

export async function setAuthCookiesAction(session: UserSession) {
  const cookieStore = await cookies();

  const encryptedSession = await encryptSession(session);

  cookieStore.set(DREAM_AGENCY_SESSION_KEY, encryptedSession, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

// export async function getCurrentUser() {
//   const res = await fetch(`${API_BASE_URL}/auth/getMe`, {
//     credentials: "include",
//   });

//   const data = await res.json();

//   if (data.status === "Failed") throw new Error({ ...data });

//   return data;
// }
