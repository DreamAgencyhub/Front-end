import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeMode from "./ThemeMode";

export default function Header() {
  return (
    <div className=" grid grid-cols-3 md:grid-cols-8 w-full p-4 items-center bg-secondary-default text-text-default md:flex-row-reverse ">
      <HamburgerMenu className={"md:hidden"} />
      <Navigation className={"hidden md:flex md:order-1 md:col-span-6"} />
      <Logo />
      <ThemeMode />
    </div>
  );
}
