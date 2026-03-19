import {
  BooksSecond,
  CalendarClockSecond,
  Envelope,
  Envelopes,
  Exit,
  ShoppingBagSecond,
} from "@/app/components/icons";
import Nav from "./Nav";
import UserInfoCard from "./UserInfoCard";

const navigationInfo = [
  {
    label: "Dashboard",
    href: "/profile",
    icon: (
      <ShoppingBagSecond className="fill-primary-600 stroke-none text-xl  " />
    ),
  },
  {
    label: "Courses",
    href: "/profile/courses",
    icon: <BooksSecond className="fill-primary-600 stroke-none text-xl  " />,
  },
  {
    label: "Reservations",
    href: "/profile/reservations",
    icon: (
      <CalendarClockSecond className="fill-primary-600 stroke-none text-xl  " />
    ),
  },
  {
    label: "Sent Tickets",
    href: "/profile/sent-tickets",
    icon: <Envelopes className="fill-primary-600 stroke-none text-xl  " />,
  },
  {
    label: "Send Ticket",
    href: "/support",
    icon: <Envelope className="fill-primary-600 stroke-none text-xl  " />,
  },
  {
    label: "Log out",
    href: "/support",
    icon: <Exit className="fill-primary-600 stroke-none text-xl  " />,
    className: "bg-primary-500! text-gray-50!",
  },
];

export default function MobileSidebar() {
  return (
    <div className="fixed right-0 bottom-0 top-0  bg-default-color z-100 flex flex-col items-center py-10 px-4 shadow-xl rounded-l-4xl">
      <UserInfoCard />
      <div className="flex flex-col gap-4 w-full px-4">
        <Nav NavigationData={navigationInfo} />
      </div>
    </div>
  );
}
