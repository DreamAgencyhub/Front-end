import Link from "next/link";
import { IconFeatherUser } from "../icons";

export default function UserAvatar() {
  return (
    <Link
      href="/profile/courses"
      className="rounded-[17px] border-2 text-text-muted/60 flex items-center justify-center w-11 h-11 cursor-pointer justify-self-center lg:justify-self-end "
    >
      <IconFeatherUser className="text-2xl stroke-[0.2px] fill-text-muted stroke-text-muted" />
    </Link>
  );
}
