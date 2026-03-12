"use client";

import SvgIconFeatherPlusCircle from "@/app/components/icons/IconFeatherPlusCircle";
import Button from "@/app/components/ui/Button";
import Comment from "@/app/components/ui/Comment";
import Modal from "@/app/components/ui/modal/Modal";
import ModalProvider from "@/app/components/ui/modal/ModalContext";
import Pagination from "@/app/components/ui/Pagination";
import Textarea from "@/app/components/ui/Textarea";
import { comments } from "@/app/data/testData";
import { useForm } from "react-hook-form";

export default function AskQuestionsSection() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <ModalProvider>
      <div className=" rounded-3xl bg-secondary-default py-6 px-4">
        <div className="flex flex-row justify-between pb-2 border-b border-text-default/20 ">
          <h3 className="text-xl font-bold pt-1 text-primary-500 ">
            Your questions
          </h3>
          <Modal.Open opens="ask-question">
            <Button
              className="text-xs flex gap-2 items-center  font-semibold"
              variant="primary"
              size="medium"
            >
              Ask a question
              <SvgIconFeatherPlusCircle className="stroke-gray-50 " />
            </Button>
          </Modal.Open>
        </div>
        <div className="py-4 flex flex-col lg:ml-6">
          {comments.map((comment) => (
            <Comment
              background="bg-default-color!"
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>

        <div className="flex w-full items-center justify-center py-4 mt-20">
          <Pagination background="bg-default-color!" />
        </div>
      </div>

      <Modal.Window name="ask-question">
        <Modal>
          <Modal.Header>
            <div className=" w-82 border-b pb-2 border-text-default/30">
              <h3 className="text-sm font-semibold">Ask your questions</h3>
              <p className="text-xs font-semibold text-text-muted mt-1">
                If you have any thing on your mind just ask us.
              </p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="w-full py-2 flex flex-col gap-5">
              <Textarea
                name="comment"
                id="comment"
                placeholder="Your question..."
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
    </ModalProvider>
  );
}
