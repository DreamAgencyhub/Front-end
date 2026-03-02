import { IconAwesomeComments } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Comment from "@/app/components/ui/Comment";

export default function CommentsSection() {
  return (
    <div className="flex flex-col w-full lg:max-w-4xl ">
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

      <div className="py-8">
        <Comment />
      </div>
    </div>
  );
}
