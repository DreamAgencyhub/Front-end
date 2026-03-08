import Button from "@/app/components/ui/Button";

export default function BoxPrice() {
  return (
    <div className="rounded-3xl bg-secondary-default flex flex-col items-center gap-4 p-4 md:shrink-0 md:w-58 h-fit lg:w-82">
      <div className="flex flex-row justify-between items-center w-full md:gap-2 md:flex-col-reverse">
        <p className="text-2xl font-bold "> $ 98.00 </p>
        <div className="flex items-center  gap-4">
          <span className="text-gray-50 bg-accent-500 rounded-lg py-1 px-2 text-xs font-semibold">
            20%
          </span>
          <span className=" text-xl text-text-muted line-through font-semibold">
            $ 159.00
          </span>
        </div>
      </div>
      <Button
        className="w-full mt-4 md:mt-0 text-xl md:text-base font-semibold  "
        variant="primary"
        size="large"
      >
        Enroll Now
      </Button>
    </div>
  );
}
