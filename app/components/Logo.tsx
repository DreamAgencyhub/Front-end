import Image from "next/image";
import logo from "../../public/DreamAgency-Logo.png";

export default function Logo() {
  return (
    <div className=" relative place-self-center w-12 h-12 md:order-0">
      <Image
        className="object-cover"
        fill
        src={logo}
        alt={"Dream_Agency_logo"}
      />
    </div>
  );
}
