import profilePic from "@/public/assets/images/testing-profile.jpg";
import Image from "next/image";
import Button from "../../ui/Button";

export default function ConsultantsCard() {
  return (
    <div className="relative shrink-0 rounded-3xl bg-gray-50 1 w-60 h-full overflow-hidden">
      <div className="relative h-24 bg-gray-50 shadow-md" />

      <div className="relative bg-[#2A2A2A] dark:bg-secondary-default pt-20 pb-6 px-4 text-center h-full">
        <div className="bg-gray-50 absolute left-0 right-0 -top-18 h-20"></div>
        <div className="absolute -top-8 left-0 w-14 h-20 bg-[#2A2A2A] dark:bg-secondary-default rounded-t-4xl"></div>
        <div className="absolute -top-8 right-0 w-14 h-20 bg-[#2A2A2A] dark:bg-secondary-default rounded-t-4xl"></div>

        <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-white font-bold text-lg">Maria Smith</h3>
            <p className="text-gray-400 text-sm mt-2">
              Entrepreneurship and business improvement consulting
            </p>
          </div>
          <Button
            directTo="/"
            variant="primary"
            size="medium"
            className="shadow-none font-semibold text-xs"
          >
            Click for more...
          </Button>
        </div>
      </div>
    </div>
  );
}
