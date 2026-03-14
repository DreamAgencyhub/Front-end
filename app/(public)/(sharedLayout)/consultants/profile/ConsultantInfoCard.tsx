import Button from "@/app/components/ui/Button";
import SvgIconMaterialLocationOn from "@/app/components/icons/IconMaterialLocationOn";
import Avatar from "@/app/components/ui/Avatar";

export default function ConsultantInfoCard() {
  return (
    <div className="relative w-88 bg-secondary-default rounded-3xl flex flex-col items-center shrink-0  h-fit pb-4 border-b-3 border-primary-500 md:grid md:grid-cols-[100px_1fr] md:w-full lg:w-4xl">
      <Avatar responsive />

      <div className=" mt-20 md:mt-6 flex flex-col bg-secondary-default py-2  px-6 md:grid md:grid-cols-1 md:grid-rows-[60px_1fr_auto] z-40">
        <div className="border-b border-dashed border-text-muted pb-4 md:pb-0  text-center md:text-start ">
          <h3 className="text-xl font-semibold ">Maria Smith</h3>
          <span className="text-xs text-text-muted">
            Entrepreneurship and business improvement consulting
          </span>
        </div>

        <div className=" text-xs text-primary-500 text-center mt-3 font-semibold flex flex-col gap-3 md:grid md:grid-cols-2 ">
          <div className="bg-primary-500/10 rounded-2xl py-5 px-2">
            <p>There is no any online consultation visit</p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-5 px-2">
            <p>There is a few in person consultation visit </p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-5 px-2 flex items-center justify-start gap-3 ">
            <SvgIconMaterialLocationOn className="fill-primary-500 text-base stroke-none " />
            <p>Here is gonna be address</p>
          </div>
          <div className="bg-primary-500/10 rounded-2xl py-5 px-2">
            <p>Here is gonna be the visit cost per hour </p>
          </div>

          <Button className="text-sm py-5" variant="primary" size="large">
            Reserve now
          </Button>
          <Button className="text-sm py-5" variant="primary" size="large">
            Let me know about reservation
          </Button>
        </div>
        <div className="bg-accent-300/20 rounded-2xl py-5 px-3 font-semibold text-sm mt-4">
          <p className="text-accent-500">
            Here is gonna be an important message for clients that should
            consider some important factors!
          </p>
        </div>
      </div>
    </div>
  );
}
