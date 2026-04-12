import {
  IconAwesomePhone,
  IconAwesomeUserClock,
  IconAwesomeUserTie,
  IconMaterialErrorOutline,
  IconMaterialLocationOn,
} from "@/app/components/icons";
import Avatar from "@/app/components/ui/Avatar";
import Button from "@/app/components/ui/Button";

export default function page() {
  return (
    <div className=" relative rounded-t-3xl bg-secondary-default w-88  h-fit mx-auto mt-14 flex flex-col pb-8 md:w-[90%] md:grid md:grid-cols-[100px_1fr_1fr] md:items-center md:rounded-l-3xl md:rounded-tr-none  shrink-0">
      <div className="relative md:top-10">
        <Avatar responsive />
      </div>

      <div className=" md:col-span-1 flex flex-col gap-3  mt-20 px-4  md:mt-10">
        <div className="border-b border-gray-500 border-dashed pb-3 text-center mt-2 md:text-left ">
          <h3 className="font-semibold text-xl"> Maria Smith</h3>
          <p className="text-text-muted text-xs mt-1">
            business improvement consulting
          </p>
        </div>

        <div className="flex flex-col gap-3 text-primary-500 font-semibold mt-2">
          <div className="rounded-3xl bg-primary-600/10 flex justify-between px-3 py-4.5 text-sm ">
            <div className="flex items-center gap-2">
              <IconAwesomeUserClock className="fill-primary-500 stroke-gray-50 stroke-[.2px] text-xl " />
              <span>8/20/2026</span>
            </div>
            <span>From: 16 To 16:45</span>
          </div>
          <div className="rounded-3xl bg-primary-600/10 flex justify-between px-3 py-4.5 text-sm ">
            <div className="flex items-center gap-2">
              <IconAwesomeUserTie className="fill-primary-500 stroke-gray-50 stroke-[.2px] text-xl " />
              <span>In person</span>
            </div>
            <span>45 minutes</span>
          </div>
          <div className="rounded-3xl bg-primary-600/10 flex items-center  px-3 py-4.5 text-sm ">
            <IconMaterialLocationOn className=" mr-2 fill-primary-500 stroke-gray-50 stroke-[.2px] text-xl " />
            <span>Here is gonna be address!...</span>
          </div>
        </div>
      </div>

      <div className=" md:col-span-1 flex flex-col gap-3  mt-6 px-4 md:mt-10 ">
        <div className="border-b border-gray-500 border-dashed pb-3 text-center mt-2 md:text-left">
          <h3 className="font-semibold text-xl"> John Jackson</h3>
          <p className="text-text-muted text-xs mt-1">Client</p>
        </div>

        <div className="flex flex-col gap-3 text-primary-500 font-semibold mt-2 ">
          <div className="rounded-3xl bg-primary-600/10 flex items-center px-3 py-4.5  ">
            <IconAwesomePhone className="fill-primary-500  stroke-none -scale-x-100 text-lg " />
            <p className="mx-auto font-bold ">+1 (000) 000 00</p>
          </div>
          <Button
            className="bg-accent-500! text-gray-50! text-sm py-3.5  rounded-3xl!"
            size="large"
            variant="danger"
          >
            Cancel your reservation
          </Button>
          <div className="rounded-3xl bg-accent-500/20 flex items-center text-accent-500  px-3 py-4.5 text-sm ">
            <IconMaterialErrorOutline className=" mr-2 fill-accent-500 stroke-gray-50 stroke-[.2px] text-xl " />
            <span className="md:text-xs md:font-bold">
              Cancellations are subject 20% fee.
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 w-full col-start-2 col-span-full">
        <div className="rounded-3xl bg-accent-500/20 flex items-center text-accent-500  px-3 py-4.5 text-sm ">
          <IconMaterialErrorOutline className=" mr-2 fill-accent-500 stroke-gray-50 stroke-[.2px] text-xl " />
          <span className="font-semibold">
            No shows are strictly non refundable.
          </span>
        </div>
      </div>

      <div
        className="absolute bg-secondary-default 
              top-full left-0 w-full h-3.75
              [--mask:conic-gradient(from_-45deg_at_bottom,#000_90deg,#0000_0)]
              [-webkit-mask-image:var(--mask)] mask-(--mask)
              mask-size-[20px_100%] [-webkit-mask-size:20px_100%]
              md:top-0 md:left-full md:w-3.75 md:h-full
              md:[--mask:conic-gradient(from_45deg_at_left,#000_90deg,#0000_0)]
              md:mask-size-[100%_20px] md:[-webkit-mask-size:100%_20px] md:-scale-x-100 "
      ></div>
    </div>
  );
}
