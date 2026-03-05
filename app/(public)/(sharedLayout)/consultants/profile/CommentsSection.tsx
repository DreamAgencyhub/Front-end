"use client";

import { IconAwesomeComments } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Comment from "@/app/components/ui/Comment";
import Modal from "@/app/components/ui/modal/Modal";
import Pagination from "@/app/components/ui/Pagination";
import Textarea from "@/app/components/ui/Textarea";
import { useForm } from "react-hook-form";

const comments = [
  {
    id: "1112c",
    content: "First Comment ",
    replies: [
      {
        id: "1113c",
        content: "First Comments reply1 ",
        repliedTo: "first comment",
        replies: undefined,
      },
      {
        id: "1114c",
        content: "First Comments reply2 ",
        repliedTo: "first comment",
        replies: [
          {
            id: "1117c",
            content: "First Comments reply2 ",
            repliedTo: "first comments reply2",
            replies: [
              {
                id: "1118c",
                content: "First Comments reply2 ",
                repliedTo: "first comments reply2 ",
                replies: undefined,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "1115c",
    content: "Second Comment ",
    replies: undefined,
  },
];

export default function CommentsSection() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <>
      <Modal.Window name="comment">
        <Modal>
          <Modal.Header>
            <div className="w-80 pb-3 font-semibold border-b  border-gray-400">
              <p className="text-base mb-1 text-text-default">
                New comment & question{" "}
              </p>
              <p className="text-xs text-text-muted">
                Leave a comment or ask a question
              </p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="w-full py-2 flex flex-col gap-5">
              <label className="text-sm font-semibold" htmlFor="comment">
                Enter your text{" "}
                <span className="text-accent-600 text-sm ">*</span>
              </label>

              <Textarea
                name="comment"
                id="comment"
                register={register("comment", {
                  minLength: {
                    value: 5,
                    message: "* Your text should be at least 5 characters ",
                  },
                  maxLength: {
                    value: 150,
                    message: "* Your text should less than 150 characters",
                  },
                })}
                errors={errors}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="w-full font-semibold "
              variant="primary"
              size="medium"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Modal.Window>

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
