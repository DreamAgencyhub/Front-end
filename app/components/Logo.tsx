import Image from "next/image";
import logo from "../../public/DreamAgency-Logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className=" relative  w-12 h-12 md:order-0 place-self-center lg:place-self-start "
    >
      <Image
        className="object-cover"
        fill
        src={logo}
        alt={"Dream_Agency_logo"}
      />
    </Link>
  );
}
