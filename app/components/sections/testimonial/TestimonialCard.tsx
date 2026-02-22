import Image from "next/image";
import testimonialProfilePic from "@/public/assets/images/testimonialProfilePic.jpg";
import { Testimonial } from "./TestimonialCardsSlider";

export default function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <div className=" relative z-10 bg-secondary-default w-full h-full p-8  flex flex-col items-center gap-2 shadow-[0px_0px_30px_5px] shadow-gray-300 dark:shadow-gray-900 ">
      <div className="relative rounded-full overflow-hidden  w-20 h-20 lg:w-24 lg:h-24">
        <Image
          src={data?.avatar ? data.avatar : testimonialProfilePic}
          alt="users_avatar"
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <h3 className="text-xl font-bold">{data.name}</h3>
      <p className="text-sm text-text-muted font-semibold">{data.role}</p>
      <p className="text-sm">,, {data.content},,</p>
    </div>
  );
}
