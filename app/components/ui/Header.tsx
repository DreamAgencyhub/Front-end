import { navigationRoutesItems } from "../../data/navigationItems";
import Button from "./Button";
import Cookies from "js-cookie";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ShoppingCart from "./ShoppingCart";
import ThemeMode from "./ThemeMode";
import UserAvatar from "./UserAvatar";
import { cookies } from "next/headers";

export default async function Header() {
  const cookieStore = await cookies();

  const theme = cookieStore.get("themeMode")?.value as
    | "dark"
    | "light"
    | undefined;

  return (
    <div className="bg-secondary-default">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 lg:grid-cols-10 w-full py-4 items-center text-text-default">
          <HamburgerMenu className={"lg:hidden"} />
          <Navigation
            key={"Nav"}
            navigationItems={navigationRoutesItems}
            className={
              "hidden lg:flex lg:items-center lg:justify-center lg:order-1 lg:col-span-6  lg:flex-row  lg:text-lg lg:self-center text-xl font-semibold"
            }
          />
          <Logo />
          <ThemeMode
            initialTheme={theme}
            className="lg:order-3 place-self-center "
          />
          {/* <Button
            className={"lg:order-last font-semibold text-sm"}
            directTo="/auth/login"
            variant="primary"
            size="medium"
          >
            Sing in
          </Button> */}

          <UserAvatar />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
