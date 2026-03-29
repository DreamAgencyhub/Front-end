import Button from "@/app/components/ui/Button";

export default function Header() {
  return (
    <div className=" font-semibold bg-secondary-default rounded-3xl p-4 relative flex flex-row justify-between items-center ">
      <h3>Your Profile </h3>
      <Button className="py-3! rounded-2xl!" variant="primary" size="small">
        Welcome back %Name%
      </Button>
    </div>
  );
}
