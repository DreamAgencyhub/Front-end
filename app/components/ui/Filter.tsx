import { IconAwesomeSortAmountUp } from "../icons";

export default function Filter() {
  return (
    <form className=" relative rounded-3xl shadow-xl bg-secondary-default py-3 px-3 flex flex-row items-center w-68">
      <div className="border-r-2 border-gray-400 dark:border-gray-300 p-2 h-full ">
        <IconAwesomeSortAmountUp className="text-xl fill-gray-400 dark:fill-gray-300  stroke-0 " />
      </div>
      <div className="flex flex-row justify-between text-sm font-semibold text-text-default w-full px-2  cursor-pointer">
        <span>Sort by</span>
      </div>
      <ul className=" absolute bg-secondary-default top-14 left-0 right-0 rounded-b-3xl text-text-default font-semibold text-sm w-full px-3 flex flex-col gap-4 items-start p-6  focus:outline-none  ">
        <li value="mostPopular">Most Popular</li>
        <li value="newest">Newest</li>
        <li value="oldest">Oldest</li>
      </ul>
    </form>
  );
}
