import { IconMetroSearch } from "../icons";

export default function Search() {
  return (
    <form className="rounded-3xl shadow-xl bg-secondary-default py-3 px-3 flex flex-row items-center w-68">
      <div className="border-r-2 border-gray-400 dark:border-gray-300 p-2 h-full ">
        <IconMetroSearch className="text-xl fill-gray-400 dark:fill-gray-300  stroke-0 " />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="text-text-default font-semibold px-2 focus:outline-none text-sm h-full"
      />
    </form>
  );
}
