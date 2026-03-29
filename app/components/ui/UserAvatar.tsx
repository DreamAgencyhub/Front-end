import { IconFeatherUser } from "../icons";

export default function UserAvatar() {
  return (
    <div className="rounded-[20px] border-2 text-text-muted/60 flex items-center justify-center w-12 h-12 ">
      <IconFeatherUser className="text-2xl stroke-[0.2px] fill-text-muted stroke-text-muted  " />
    </div>
  );
}
