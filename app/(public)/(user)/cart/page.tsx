import CartItem from "./CartItem";

export default function page() {
  return (
    <div className="min-h-[56vh] flex flex-col justify-center items-start py-10 gap-4 md:flex-row">
      <div className="flex flex-col gap-4 justify-center">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
