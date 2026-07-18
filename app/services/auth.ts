import Error from "next/error";
import { API_BASE_URL } from "../constants/api-base-url";

interface auth {
  fullName?: string;
  email: string;
  password: string;
}

export async function signUp({ fullName, email, password }: auth) {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  });

  const data = await res.json();

  if (data.status === "Failed") throw new Error({ ...data });

  return data;
}

export async function login({ email, password }: auth) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

  if (data.status === "Failed") throw new Error({ ...data });

  return data;
}

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE_URL}/auth/getMe`, {
    credentials: "include",
  });

  const data = await res.json();

  if (data.status === "Failed") throw new Error({ ...data });

  return data;
}
