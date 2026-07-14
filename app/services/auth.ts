import Error from "next/error";
import { API_BASE_URL } from "../utilities/Constants";

interface singUp {
  fullName: string;
  email: string;
  password: string;
}

export async function signUp({ fullName, email, password }: singUp) {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
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

  if (data.status === "Failed") throw new Error(data);

  return data;
}
