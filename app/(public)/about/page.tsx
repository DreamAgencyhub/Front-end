import { Metadata } from "next";
import cover from "@/public/assets/images/about-us.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[57vh]">
      <div className="w-full  p-8">
        <h1 className="text-3xl font-bold text-primary-500  ">
          About Dream Agency
        </h1>
        <p className="py-4  text-sm font-semibold md:text-lg">
          Welcome to Dream Agency, your ultimate catalyst for business
          transformation and sustainable growth. We are more than just a
          Learning Management System, we are a dedicated hub where ambition
          meets actionable strategy. Through our premium online courses, we dive
          deep into the mechanics of sales, business expansion, and market
          leadership, equipping you with the practical tools you need to thrive
          in a competitive landscape. Beyond cutting-edge education, we offer an
          exclusive booking platform for personalized consultation
          sessions—available both online and in-person. Whether you are
          brainstorming a groundbreaking idea, seeking smart investment
          strategies, or looking to skyrocket your sales revenue, our expert
          advisors are here to guide you every step of the way. We believe that
          every great enterprise needs a solid blueprint, visionary thinking,
          and the right mentorship. Join us, and let’s turn your business vision
          into a measurable, thriving reality.
        </p>
      </div>
      <div className="relative rounded-3xl overflow-hidden mt-6 h-fit mb-16">
        <Image
          src={cover}
          alt={
            "abut us cover a satisfied man smiling at a Professional consultant woman"
          }
          className="object-cover"
        />
      </div>
    </div>
  );
}
