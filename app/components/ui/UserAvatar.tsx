import Link from "next/link";
import { IconFeatherUser } from "../icons";

export default function UserAvatar() {
  return (
    <Link
      href="/profile/courses"
      className="rounded-[20px] border-2 text-text-muted/60 flex items-center justify-center w-12 h-12 cursor-pointer "
    >
      <IconFeatherUser className="text-2xl stroke-[0.2px] fill-text-muted stroke-text-muted" />
    </Link>
  );
}
