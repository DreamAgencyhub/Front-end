"use client";

import { IconAwesomeComments } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Comment from "@/app/components/ui/Comment";
import Modal from "@/app/components/ui/modal/Modal";
import Pagination from "@/app/components/ui/Pagination";
import Textarea from "@/app/components/ui/Textarea";
import { comments } from "@/app/data/testData";
import { useForm } from "react-hook-form";

export default function CommentsSection() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <>
      <div className="flex flex-col w-full lg:max-w-4xl  ">
        <div className="flex flex-row justify-between items-center py-4 border-b border-dashed border-gray-500 ">
          <h3 className="text-lg font-semibold ">Clients Comments</h3>
          <Modal.Open opens="comment">
            <Button
              className="font-semibold text-sm flex items-center gap-2 "
              variant="primary"
              size="medium"
            >
              <IconAwesomeComments className="fill-white stroke-none text-2xl " />
              Leave a comment
            </Button>
          </Modal.Open>
        </div>

        <div className="py-4 flex flex-col ">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>

        <div className="flex w-full items-center justify-center py-4 mt-20">
          <Pagination />
        </div>
      </div>
    </>
  );
}
