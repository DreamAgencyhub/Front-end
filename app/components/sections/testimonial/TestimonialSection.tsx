import { Crown } from "../../icons";
import IconBox from "../../ui/IconBox";
import TestimonialCardsSlider from "./TestimonialCardsSlider";

export default function TestimonialSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-20">
      <IconBox
        icon={<Crown className="fill-white" />}
        title="What our users say"
        text="What our esteemed users are saying"
        className="place-self-center"
      />
      <TestimonialCardsSlider />
    </div>
  );
}
