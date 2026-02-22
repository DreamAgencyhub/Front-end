import Image from "next/image";
import heroImage from "@/public/assets/images/HeroImage.png";
import InfoWidget from "./InfoWidget";
import { infoWidgetsData } from "./heroSectoinData";
import Button from "../../ui/Button";
import SvgIconAwesomeArrowDown from "../../icons/IconAwesomeArrowDown";

export default function HeroSection() {
  return (
    <div className="col-span-1">
      <div className=" relative grid grid-cols-1 pt-8 md:grid-cols-2">
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
        <Button
          directTo="#statistics"
          variant="primary"
          size="medium"
          className="rounded-full!  p-3! absolute bottom-0 -translate-x-1/2 left-1/2"
        >
          <SvgIconAwesomeArrowDown />
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-6 place-items-center  mt-8">
        <InfoWidget
          className="col-span-1  md:last:hidden lg:last:flex lg:col-span-1  last:col-span-2 lg:last:col-span-1 "
          data={infoWidgetsData}
        />
      </div>
    </div>
  );
}
