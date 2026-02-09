import Link from "next/link";
import {
  navigationRoutesItems,
  navigationSocialMedia,
} from "../data/navigationItems";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 bg-secondary-default md:grid-cols-2 lg:grid-cols-4 rounded-t-4xl ">
      <div className="flex flex-col p-4 ">
        <h3 className="text-primary-500 text-2xl font-black [font-family:var(--font-space-grotesk)] ">
          Dream Agency
        </h3>
        <Navigation
          className="font-medium"
          navigationItems={navigationRoutesItems}
          bulletPoint
        />
      </div>
      <div className="flex flex-col p-4 ">
        <h3 className="text-primary-500 text-2xl font-black [font-family:var(--font-space-grotesk)] ">
          Social Media
        </h3>
        <Navigation
          className="font-medium"
          navigationItems={navigationSocialMedia}
        />
      </div>
      <div className="col-span-full border-t border-primary-500 p-4 flex flex-col md:flex-row gap-4 items-center justify-around">
        <p className="flex flex-row items-center gap-1">
          Designed and developed by{" "}
          <Link
            className="text-primary-500 font-bold"
            href={"https://github.com/hamit19"}
          >
            Hamid Hassani
          </Link>{" "}
          with <span className="text-rose-700 text-2xl">&hearts;</span>
        </p>
        <p>
          All rights reserved{" "}
          <span className="text-primary-500 font-bold ">&copy;</span>
        </p>
      </div>
    </div>
  );
}
