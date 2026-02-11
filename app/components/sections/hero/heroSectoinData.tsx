import {
  Discussion,
  ELearning,
  IdeaBusiness,
  Increase,
  OnlineSupport,
} from "../../icons";

export const infoWidgetsData = [
  {
    label: "Online Courses",
    href: "/courses",
    icon: (
      <ELearning className="  fill-text-default w-16 h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 " />
    ),
  },
  {
    label: "Business Ideas",
    href: "/consultants",
    icon: (
      <IdeaBusiness className="  fill-text-default w-16 h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 " />
    ),
  },
  {
    label: "F2F Consultation ",
    href: "/consultants",
    icon: (
      <Discussion className="  fill-text-default w-16 h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 " />
    ),
  },
  {
    label: "On Consultation",
    href: "/consultants",
    icon: (
      <OnlineSupport className="  fill-text-default w-16 h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 " />
    ),
  },
  {
    label: "Business Growth",
    href: "/courses",
    icon: (
      <Increase className="  fill-text-default w-16 h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 " />
    ),
  },
];
