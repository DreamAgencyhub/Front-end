import profilePic from "@/public/assets/images/testing-profile.jpg";
import Image from "next/image";

export default function ConsultantsCard() {
  return (
    <div className="rounded-4xl bg-gray-50  w-[235px] h-82  shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 relative w-full h-full ">
        <div className="rounded-full object-cover z-40 overflow-hidden  w-[45%] h-[32%]  absolute left-1/2 -translate-x-1/2 top-9  ">
          <Image src={profilePic} alt="profile" />
        </div>
        <div className=""></div>
        <div className="bg-secondary-default absolute z-10 border-none left-0 right-0 bottom-0 top-[20%]">
          <div className="bg-gray-50 absolute z-40 rounded-full w-[56%] h-[48%] -top-11 left-1/2 -translate-x-1/2 "></div>
          <div className="bg-gray-50  h-10 absolute z-20 -top-5 right-0 left-0"></div>
          <div className="bg-secondary-default absolute z-40 -top-5 w-[22%] h-32 right-0 rounded-t-3xl  "></div>
          <div className="bg-secondary-default absolute z-40 -top-5 w-[22%] h-32 left-0 rounded-t-3xl  "></div>
        </div>
      </div>
    </div>
  );
}
