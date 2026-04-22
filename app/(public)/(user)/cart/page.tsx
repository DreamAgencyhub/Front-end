import CartItem from "./CartItem";
import Receipt from "./Receipt";

export default function page() {
  return (
    <div className="min-h-[57vh] flex flex-col justify-start py-10 gap-10 md:flex-row lg:justify-center">
      <div className="flex flex-col gap-4 ">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <Receipt />
    </div>
  );
}
