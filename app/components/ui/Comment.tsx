"use client";

import Image from "next/image";
import { IconMaterialReply } from "../icons";
import Button from "./Button";
import userAvatar from "@/public/assets/images/CourseCover.jpg";
import { useState } from "react";

type CommentProps = {
  comment: {
    id: string;
    content: string;
    repliedTo?: string;
    replies?: {
      id: string;
      content: string;
      repliedTo?: string;
    }[];
  };
};

export default function Comment({ comment }: CommentProps) {
  const [showReplies, setShowReplies] = useState<boolean>(false);

  const toggleShowReplies = () => setShowReplies((prev) => !prev);

  const renderReplies = () => {
    if (!comment.replies || comment.replies.length <= 0) return null;

    return comment.replies.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <div className="">
      <div className="relative rounded-3xl px-4 py-6 bg-secondary-default md:w-120 h-fit mt-6 ">
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
        {comment.repliedTo && (
          <span className=" relative text-xs text-text-muted ">
            {" "}
            Replied to: {comment.repliedTo}
          </span>
        )}
        <p className="text-sm py-4 px-2">{comment.content}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div className="flex items-center gap-1 ">
            <span className="py-1 px-2 text-[8px] rounded-full bg-primary-500 text-gray-100  ">
              {comment.replies.length}
            </span>{" "}
            <button
              onClick={toggleShowReplies}
              className={`text-sm font-semibold cursor-pointer hover:text-text-muted ${
                !showReplies ? "text-text-default" : "text-text-muted"
              } `}
            >
              Replies
            </button>
          </div>
        )}
      </div>
      {comment.replies && comment.replies.length > 0 && showReplies && (
        <div className="flex flex-col ">{renderReplies()}</div>
      )}
    </div>
  );
}
