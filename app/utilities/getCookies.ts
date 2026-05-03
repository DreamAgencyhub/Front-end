import { cookies } from "next/headers";

export async function getCookies(cookieName: string) {
  const cookiesStore = await cookies();
  const result = cookiesStore.get(cookieName)?.value;

  return result;
}
