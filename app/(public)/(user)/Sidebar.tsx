import Button from "@/app/components/ui/Button";
import Nav from "./(shared-layout)/profile/Nav";
import UserInfoCard from "./UserInfoCard";
import {
  BooksSecond,
  CalendarClockSecond,
  Envelope,
  Envelopes,
  Exit,
} from "@/app/components/icons";
import Modal from "@/app/components/ui/modal/Modal";

const navigationInfo = [
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
    label: "Send a New Ticket",
    href: "/profile/support",
    icon: (
      <Envelope className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl  " />
    ),
  },
];

export default function Sidebar() {
  return (
    <>
      <UserInfoCard />
      <div className="flex flex-col gap-4 w-full px-4">
        <Nav NavigationData={navigationInfo} />

        <Modal.Open opens="signout">
          <Button className="flex flex-row items-center" variant="primary">
            <Exit className="fill-primary-600 dark:fill-primary-50 stroke-none text-xl" />
            <span className="mx-auto">Log Out</span>
          </Button>
        </Modal.Open>
      </div>
    </>
  );
}
