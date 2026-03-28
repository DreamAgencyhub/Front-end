import Nav from "./Nav";
import UserInfoCard from "./UserInfoCard";
import {
  BooksSecond,
  CalendarClockSecond,
  Envelope,
  Envelopes,
  Exit,
  ShoppingBagSecond,
} from "@/app/components/icons";

const navigationInfo = [
  {
    label: "Dashboard",
    href: "/profile",
    icon: (
      <ShoppingBagSecond className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
  {
    label: "Courses",
    href: "/profile/courses",
    icon: (
      <BooksSecond className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
  {
    label: "Reservations",
    href: "/profile/reservations",
    icon: (
      <CalendarClockSecond className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
  {
    label: "Sent Tickets",
    href: "/profile/sent-tickets",
    icon: (
      <Envelopes className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
  {
    label: "Send Ticket",
    href: "/support",
    icon: (
      <Envelope className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
  {
    label: "Log out",
    href: "/support",
    icon: (
      <Exit className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
    className: "bg-primary-500! text-gray-50! ",
  },
];

export default function Sidebar() {
  return (
    <>
      <UserInfoCard />
      <div className="flex flex-col gap-4 w-full px-4">
        <Nav NavigationData={navigationInfo} />
      </div>
    </>
  );
}
