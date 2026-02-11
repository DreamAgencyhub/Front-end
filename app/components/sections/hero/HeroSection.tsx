import Image from "next/image";
import heroImage from "@/public/assets/images/HeroImage.png";
import { HeroSectionWave } from "@/app/components/icons";
import InfoWidget from "./InfoWidget";
import { infoWidgetsData } from "./heroSectoinData";

export default function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
        <div className="">
          <h1 className=" text-4xl/13  [font-family:var(--font-space-grotesk)] md:text-5xl/16 xl:text-6xl font-black text-primary-500">
            Build Your Dream Business with Us!
          </h1>
          <p className=" border-l-3 border-primary-600 border-dashed mt-8 text-text-default font-semibold  pl-3">
            Tired of spinning your wheels trying to grow your business? Want to
            build your own venture from the ground up or take it to the next
            level? We’re a team of seasoned entrepreneurs ready to back you up
            with the expertise you need to turn your dream business into a
            reality. Our practical, all-in-one training courses will help you
            hit your business goals in no time.
          </p>
        </div>

        <div className="relative w-full h-120 ">
          <Image
            className="object-contain "
            placeholder="blur"
            src={heroImage}
            fill
            alt="a-successful-businessman"
          />
        </div>
        <div className="col-span-full h-screen ">
          <HeroSectionWave className="absolute -z-10 -left-2 -right-2 lg:-right-4 lg:-left-4 scale-250 md:scale-100   " />
          <div className=" absolute lg:relative lg:left-auto lg:right-auto left-0 right-0 flex flex-col gap-8 md:gap-18 2xl:mt-48 items-center my-14 lg:flex-row lg:justify-center bg-primary-500 md:mt-30 xl:mt-38 lg:bg-transparent">
            <InfoWidget data={infoWidgetsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
