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

  const { data } = await response.json();

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

  const { data } = await response.json();

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

export async function signOutAction() {
  (await cookies()).delete(DREAM_AGENCY_SESSION_KEY);
  return {
    success: true,
  };
}

export async function forgotPassword(email: string) {
  const res = await Auth.POST("/auth/forgotPassword", { email });

  if (!res.ok) {
    const err = await res.json();

    return {
      success: false,
      err,
    };
  }

  const data = await res.json();

  return {
    success: true,
    data,
  };
}

export async function resetPassword(resetToken: string, newPassword: string) {
  const res = await Auth.PATCH(`/auth/resetPassword/${resetToken}`, {
    password: newPassword,
  });

  if (!res.ok) {
    const err = await res.json();

    return {
      success: false,
      err,
    };
  }

  const data = await res.json();

  return {
    success: true,
    data,
  };
}
