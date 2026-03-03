import { IconAwesomeComments } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Comment from "@/app/components/ui/Comment";
import Pagination from "@/app/components/ui/Pagination";

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
  return (
    <div className="flex flex-col w-full lg:max-w-4xl  ">
      <div className="flex flex-row justify-between items-center py-4 border-b border-dashed border-gray-500 ">
        <h3 className="text-lg font-semibold ">Clients Comments</h3>
        <Button
          className="font-semibold text-sm flex items-center gap-2 "
          variant="primary"
          size="medium"
        >
          <IconAwesomeComments className="fill-white stroke-none text-2xl " />
          Leave a comment
        </Button>
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
  );
}
