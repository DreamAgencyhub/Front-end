import Button from "../../ui/Button";

export default function AboutCard() {
  return (
    <div className="bg-secondary-default rounded-3xl flex flex-col p-6">
      <div className="flex flex-row justify-between items-center border-b border-text-muted">
        <div className="[font-family:var(--font-space-grotesk)]">
          <h3 className="text-2xl font-black text-primary-500  ">
            Dream Agency
          </h3>
          <p className="text-text-muted my-2 text-sm font-semibold ">{`Dream Agency's expertise team`}</p>
        </div>

        <Button
          className="font-semibold text-primary-500 md:text-sm  "
          directTo="/about"
          size="small"
          variant="secondary"
        >
          About us
        </Button>
      </div>
      <p className="md:py-4 py-2 mt-2 font-semibold text-sm lg:text-base">
        The specialized and professional team of entrepreneurs is here to help
        you progress in your business or start your own business from scratch
        and achieve success by providing the best courses and consultations.
      </p>
    </div>
  );
}
