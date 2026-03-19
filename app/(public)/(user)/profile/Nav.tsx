import Link from "next/link";

const navigationInfo = [
  {
    label: "Dashboard",
    href: "/profile",
    icon: "",
  },
  {
    label: "Courses",
    href: "/profile/courses",
    icon: "",
  },
  {
    label: "Reservations",
    href: "/profile/reservations",
    icon: "",
  },
  {
    label: "Sent Tickets",
    href: "/profile/sent-tickets",
    icon: "",
  },
  {
    label: "Support",
    href: "/support",
    icon: "",
  },
];

export default function Nav() {
  return (
    <div className="rounded-xl py-4 px-2 bg-secondary-default flex flex-row justify-center w-full font-semibold text-primary-500 ">
      <Link href={"/"}>Dashboard</Link>
    </div>
  );
}
