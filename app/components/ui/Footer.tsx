import Link from "next/link";
import {
  navigationRoutesItems,
  navigationSocialMedia,
} from "../../data/navigationItems";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <div className=" bg-secondary-default rounded-t-4xl pt-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
          <div className="flex flex-col p-4 gap-2 ">
            <h3 className="text-primary-500 text-2xl font-black [font-family:var(--font-space-grotesk)] ">
              Dream Agency
            </h3>
            <Navigation
              className="font-medium"
              navigationItems={navigationRoutesItems}
              bulletPoint
            />
          </div>
          <div className="flex flex-col p-4 gap-2">
            <h3 className="text-primary-500 text-2xl font-black [font-family:var(--font-space-grotesk)] ">
              Social Media
            </h3>
            <Navigation
              className="font-medium"
              navigationItems={navigationSocialMedia}
            />
          </div>
        </div>
      </div>
      <div className=" border-t border-primary-500 p-4 flex flex-col md:flex-row gap-4 items-center justify-around">
        <p className="flex flex-row items-center gap-1">
          Designed and developed by{" "}
          <Link
            className="text-primary-500 font-bold"
            href={"https://github.com/hamit19"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hamid Hassani
          </Link>{" "}
          with <span className="text-rose-700 text-2xl">&hearts;</span>
        </p>
        <p>
          <span className="text-primary-500 font-bold ">&copy;</span> All rights
          reserved
        </p>
      </div>
    </div>
  );
}
