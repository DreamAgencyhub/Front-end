import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeMode from "./ThemeMode";

export default function Header() {
  return (
    <div className=" grid grid-cols-4 lg:grid-cols-10 w-full p-4 items-center bg-secondary-default text-text-default  ">
      <HamburgerMenu className={"lg:hidden"} />
      <Navigation className={"hidden lg:flex lg:order-1 lg:col-span-6"} />
      <Logo />
      <ThemeMode />
      <Button
        className={"lg:order-9"}
        directTo="/auth/login"
        variant="primary"
        size="medium"
      >
        Sing in
      </Button>
    </div>
  );
}
