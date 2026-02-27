import {
  IconAwesomeInstagram,
  IconAwesomeTelegramPlane,
  IconMaterialEmail,
} from "@/app/components/icons";

export const navigationRoutesItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Consultants",
    href: "/consultants",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const navigationSocialMedia = [
  {
    label: "dreamagencyteamm@gmail.com",
    href: "mailto:dreamagencyteamm@gmail.com",
    icon: (
      <IconMaterialEmail className="fill-primary-500 stroke-none text-xl " />
    ),
  },
  {
    label: "dreamAgency",
    href: "https://www.instagram.com",
    icon: (
      <IconAwesomeInstagram className="fill-primary-500 stroke-none text-xl " />
    ),
  },
  {
    label: "dreamAgencyChannel",
    href: "tg://resolve?domain=Hamit2002",
    icon: (
      <IconAwesomeTelegramPlane className="text-primary-500 text-xl stroke-none" />
    ),
  },
];
