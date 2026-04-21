"use client";

import Comment from "@/app/components/ui/Comment";
import ModalProvider from "@/app/components/ui/modal/ModalContext";
import { comments } from "@/app/data/testData";

export default function TicketsSection() {
  return (
    <ModalProvider>
      <div className="py-4 flex flex-col lg:ml-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </ModalProvider>
  );
}
