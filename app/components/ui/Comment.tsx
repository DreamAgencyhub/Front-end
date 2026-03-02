import Image from "next/image";
import { IconMaterialReply } from "../icons";
import Button from "./Button";
import userAvatar from "@/public/assets/images/CourseCover.jpg";

export default function Comment() {
  return (
    <div className="relative rounded-3xl px-4 py-6 bg-secondary-default ">
      <div className="flex flex-row items-center justify-between border-b border-gray-400 pb-2 ">
        <div className=" absolute left-1 top-1 flex items-center justify-center rounded-full bg-secondary-default w-22 h-22">
          <div className="rounded-full w-18 h-18 overflow-hidden absolute ">
            <Image
              className="object-cover"
              fill
              src={userAvatar}
              alt="users_avatar"
            />
          </div>
        </div>
        <div className="font-semibold text-center ml-20 ">
          <p className="text-sm font-bold"> John Jerry</p>
          <span className="text-xs text-text-muted">2 days ago</span>
        </div>
        <Button
          className=" rounded-xl! font-semibold flex items-center gap-2"
          variant="primary"
          size="small"
        >
          Reply
          <IconMaterialReply className="text-lg" />
        </Button>
      </div>
      <p className="text-sm py-6 px-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo commodi
        veritatis dolore exercitationem, ab excepturi ducimus repellendus
        consectetur odio laborum iste ut ex rerum accusamus possimus, fugiat,
        recusandae consequatur voluptate.
      </p>
    </div>
  );
}
