import Button from "@/app/components/ui/Button";

export default function Receipt() {
  return (
    <div className="relative w-full h-fit bg-secondary-default rounded-t-3xl flex flex-col gap-4 pt-6 pb-10 px-4 lg:w-100 ">
      <h3 className="font-semibold">Shopping Receipt: </h3>
      <div className="bg-default-color rounded-2xl p-4 flex flex-row justify-between items-center text-sm font-semibold">
        <p>Total Price : </p>
        <p>$296.00</p>
      </div>
      <div className="bg-default-color rounded-2xl h-13 px-4 flex flex-row justify-between items-center text-sm font-semibold">
        <p> Discount Code : </p>
        <input
          type="text"
          className="bg-secondary-default rounded-xl py-2 px-4 text-sm  placeholder:text-xs! focus:outline-0 focus:ring-0 border-transparent border-2 focus:border-primary-500  "
          placeholder="Enter your discount code here..."
        />
      </div>
      <div className="bg-default-color rounded-2xl p-4 flex flex-row justify-between items-center text-sm font-semibold">
        <p>Discount amount : </p>
        <p>$00.00</p>
      </div>
      <div className="bg-default-color rounded-2xl p-4 flex flex-row justify-between items-center text-sm font-semibold">
        <p>Final Total : </p>
        <p>$296.00</p>
      </div>

      <Button variant="primary" size="medium">
        Pay Now
      </Button>

      <div
        className="absolute bg-secondary-default 
              top-full left-0 w-full h-3.75
              [--mask:conic-gradient(from_-45deg_at_bottom,#000_90deg,#0000_0)]
              [-webkit-mask-image:var(--mask)] mask-(--mask)
              mask-size-[20px_100%] [-webkit-mask-size:20px_100%]"
      ></div>
    </div>
  );
}
