import TestimonialCard from "./TestimonialCard";

export default function TestimonialCardsSlider() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <TestimonialCard />
        <div className="bg-secondary-default  w-80 h-90 lg:w-100 lg:h-112  rounded-4xl absolute top-0 -left-4 lg:-left-6 z-0 -rotate-10"></div>
      </div>
    </div>
  );
}
