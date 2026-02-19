import TestimonialCards from "./TestimonialCards";

export default function TestimonialCardsSlider() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <TestimonialCards />
        <div className="bg-secondary-default w-100 h-110 p-8  rounded-4xl absolute top-0 -left-8 z-0 -rotate-10"></div>
      </div>
    </div>
  );
}
