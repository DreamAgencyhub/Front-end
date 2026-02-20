import Image from "next/image";
import testimonialProfilePic from "@/public/assets/images/testimonialProfilePic.jpg";

export default function TestimonialCard() {
  return (
    <div className=" relative z-10 bg-secondary-default w-80 h-90 lg:w-100 lg:h-112 p-8  rounded-4xl flex flex-col items-center gap-2 shadow-[0px_0px_30px_5px] shadow-gray-300 dark:shadow-gray-900 ">
      <div className="relative rounded-full overflow-hidden  w-20 h-20 lg:w-24 lg:h-24">
        <Image
          src={testimonialProfilePic}
          alt="users_avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold">Parisa Moradi</h3>
      <p className="text-sm text-text-muted font-semibold">Sell Manager</p>
      <p className="text-sm">
        ,, Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia,
        expedita sunt quo vel natus ipsum porro possimus pariatur quisquam illum
        ipsam ut eaque quae. Aperiam nam ea beatae? Aut? ,,
      </p>
    </div>
  );
}
