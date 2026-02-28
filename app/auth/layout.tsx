import { ReactNode } from "react";
import { CloseXSvgrepoCom } from "@/app/components/icons";
import Link from "next/link";
import Logo from "@/app/components/ui/Logo";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 z-100 bg-default-color flex flex-col items-center  lg:flex-row bg-linear-65 from-primary-500/30 via-primary-500/10 to-primary-500/60 dark:from-primary-900/30 dark:via-primary-900/10 dark:to-primary-900/60 ">
      <div className=" fixed top-0 w-full flex flex-row justify-between items-center px-10 h-fit py-7 ">
        <Logo />
        <Link className="lg:hidden" href={"/"}>
          <CloseXSvgrepoCom className="text-3xl fill-text-default stroke-none " />
        </Link>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/4 flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
}
