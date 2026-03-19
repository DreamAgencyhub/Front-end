import Avatar from "@/app/components/ui/Avatar";
import Button from "@/app/components/ui/Button";

export default function UserInfoCard() {
  return (
    <div className=" relative rounded-3xl bg-secondary-default h-92 w-87 flex flex-col gap-2 items-center scale-90">
      <Avatar noRotate />
      <div className="mt-18 py-2 text-center">
        <h3 className="text-xl font-bold">Mohammad Alizadeh </h3>
        <p className="text-sm font-semibold text-text-muted mt-2 ">
          mohammadrezaalizadeh@gmail.com
        </p>
      </div>
      <div className="px-4 pb-6 w-full mt-auto">
        <Button
          size="medium"
          variant="primary"
          className="w-full font-semibold "
        >
          Edit your profile
        </Button>
      </div>
    </div>
  );
}
