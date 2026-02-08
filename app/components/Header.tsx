import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className=" flex flex-row justify-between w-full p-4 items-center bg-secondary-default text-text-default">
      <Logo />
      <Navigation className={"hidden md:flex"} />
      <HamburgerMenu className={"md:hidden"} />
    </div>
  );
}
