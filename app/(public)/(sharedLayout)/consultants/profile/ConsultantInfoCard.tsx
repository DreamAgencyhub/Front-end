import Image from "next/image";
import consultantPic from "@/public/assets/images/testing-profile.jpg";
import Button from "@/app/components/ui/Button";
import SvgIconMaterialLocationOn from "@/app/components/icons/IconMaterialLocationOn";

export default function ConsultantInfoCard() {
  return (
    <div className="relative w-88 bg-secondary-default rounded-4xl flex flex-col items-center shrink-0  h-fit pb-4 border-b-3 border-primary-500 md:grid md:grid-cols-[100px_1fr] md:w-[720px]">
      <div className=" relative w-full bg-default-color h-16 md:w-82 md:h-30 z-10 md:rotate-90 md:-left-26">
        <div className=" absolute right-1/2 translate-x-1/2  bg-default-color flex items-center justify-center w-36 h-36 rounded-full md:top-10  ">
          <div className="relative w-32 h-32 rounded-full overflow-hidden md:-rotate-90  ">
            <Image src={consultantPic} alt="consultants_profile" />
          </div>
        </div>
        <div className=" absolute right-0 -bottom-20 md:bottom-3 md:-right-4  bg-secondary-default rounded-3xl w-26 h-26"></div>
        <div className=" absolute left-0 -bottom-20 md:bottom-1 bg-secondary-default rounded-3xl w-26 h-26"></div>
      </div>

      <div className=" mt-20 md:mt-6 flex flex-col bg-secondary-default py-2  px-6 md:grid md:grid-cols-1 md:grid-rows-[60px_1fr_100px] z-40">
        <div className="border-b border-dashed border-text-muted pb-4 md:pb-0  text-center md:text-start ">
          <h3 className="text-xl font-semibold ">Maria Smith</h3>
          <span className="text-xs text-text-muted">
            Entrepreneurship and business improvement consulting
          </span>
        </div>

        <div className=" text-xs text-primary-500 text-center mt-3 font-semibold flex flex-col gap-3 md:grid md:grid-cols-2 ">
          <div className="bg-primary-500/10 rounded-2xl py-4 px-2">
            <p>There is no any online consultation visit</p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-4 px-2">
            <p>There is a few in person consultation visit </p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-4 px-2 flex items-center justify-start gap-3 ">
            <SvgIconMaterialLocationOn className="fill-primary-500 text-base stroke-none " />
            <p>Here is gonna be address</p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-4 px-2">
            <p>Here is gonna be the visit cost per hour </p>
          </div>

          <Button className="text-sm" variant="primary" size="large">
            Reserve now
          </Button>
          <Button className="text-sm" variant="primary" size="large">
            Let me know about reservation
          </Button>
        </div>
        <div className="bg-accent-100/80 rounded-2xl py-4 px-3 font-semibold mt-4">
          <p className="text-accent-500">
            Here is gonna be an important message for clients that should
            consider some important factors!
          </p>
        </div>
      </div>
    </div>
  );
}
