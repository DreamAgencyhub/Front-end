import Image from "next/image";
import TempImage from "@/public/assets/images/testing-profile.jpg";
import Button from "@/app/components/ui/Button";

export default function CartItem() {
  return (
    <div className="relative bg-secondary-default rounded-3xl px-4 py-3 flex flex-row items-center gap-4 lg:w-lg lg:justify-between">
      <div className="rounded-2xl w-12 aspect-square overflow-hidden relative ">
        <Image src={TempImage} alt="Items-cover" width={100} height={100} />
      </div>
      <div>
        <p className="font-semibold text-sm">Maria Smith</p>
        <p className="text-xs text-text-muted">(Appointment / In-Person)</p>
      </div>
      <div>
        <p className="text-sm font-semibold">$99.00</p>
      </div>
      <Button
        className="bg-accent-500! text-gray-50!  "
        variant="danger"
        size="small"
      >
        Discard
      </Button>
    </div>
  );
}
