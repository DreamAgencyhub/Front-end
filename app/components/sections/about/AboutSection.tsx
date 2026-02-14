import { GroupFill } from "../../icons";
import IconBox from "../../ui/IconBox";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  return (
    <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
      <div className="place-self-center flex lg:pl-3 w-[60%]">
        <IconBox
          title="About Us"
          text="All you need to know about us."
          icon={<GroupFill className="lg:text-5xl" />}
        />
      </div>
      <div className="">
        <AboutCard />
      </div>
    </div>
  );
}
