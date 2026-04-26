import Link from "next/link";
import { ShoppingCart as ShoppingCartIcon } from "../icons";

export default function ShoppingCart() {
  return (
    <Link
      href="/cart"
      className="rounded-[17px] border-2 text-text-muted/60 flex  items-center justify-center w-11 h-11 cursor-pointer justify-self-center lg:justify-self-start lg:ml-4"
    >
      <ShoppingCartIcon className="text-2xl stroke-[0.2px] fill-text-muted/60 stroke-text-muted/60" />
    </Link>
  );
}
