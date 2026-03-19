"use client";

import {
  ArrowIcon,
  BooksSecond,
  CalendarClockSecond,
  Envelope,
  Envelopes,
  Exit,
  ShoppingBagSecond,
} from "@/app/components/icons";
import Nav from "./Nav";
import UserInfoCard from "./UserInfoCard";
import { useState } from "react";

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
    className: "bg-primary-500! text-gray-50! ",
  },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        fixed  bottom-0 top-0 ${
          !isOpen ? " -right-[92%]" : "right-0 "
        } bg-default-color z-100 flex flex-col items-center py-10 px-4 shadow-xl rounded-l-4xl transition-all ease-in-out duration-400 `}
    >
      <div
        onClick={handleClick}
        className="absolute -left-8 top-90 px-4 py-0.5 rounded-xl  bg-primary-500"
      >
        <ArrowIcon
          className={`text-2xl ${!isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <UserInfoCard />
      <div className="flex flex-col gap-4 w-full px-4">
        <Nav NavigationData={navigationInfo} />
      </div>
    </div>
  );
}
