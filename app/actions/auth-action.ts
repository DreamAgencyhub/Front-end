"use server";
import UseCallAPI from "../utilities/CallAPI";

interface AuthModel {
  fullName?: string;
  email: string;
  password: string;
}

const Auth = UseCallAPI();

export async function signUp({ fullName, email, password }: AuthModel) {
  console.log("TEST", process.env.NODE_ENV);
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

  return {
    success: true,
    data,
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

  return {
    success: true,
    data,
  };
}

// export async function getCurrentUser() {
//   const res = await fetch(`${API_BASE_URL}/auth/getMe`, {
//     credentials: "include",
//   });

//   const data = await res.json();

//   if (data.status === "Failed") throw new Error({ ...data });

//   return data;
// }
