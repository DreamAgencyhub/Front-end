import { redirect, RedirectType } from "next/navigation";

export default function page() {
  redirect("/profile/courses", RedirectType.replace);
}
