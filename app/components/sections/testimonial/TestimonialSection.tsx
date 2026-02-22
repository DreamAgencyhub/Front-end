import { Crown } from "../../icons";
import IconBox from "../../ui/IconBox";
import TestimonialCardsSlider, { Testimonial } from "./TestimonialCardsSlider";

const testData: Testimonial[] = [
  {
    id: 22,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maria Andersson",
    role: "Front-end developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, harum vitae. Tempora, ducimus nulla blanditiis vero dignissimos quae quas esse ullam laudantium neque mollitia, dolorem explicabo possimus aspernatur temporibus assumenda!1",
  },
  {
    id: 23,
    avatar:
      "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hamid Hassani",
    role: "Front-end developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, saepe aliquam itaque ducimus pariatur sapiente iure nobis dignissimos consequatur veritatis expedita dolores voluptates corrupti minima ea eaque optio voluptatem cumque?2",
  },
  {
    id: 24,
    avatar:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    role: "Front-end developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure, ullam beatae, culpa voluptatibus laudantium vel quis aut provident nobis unde quia blanditiis nihil cum minima, eligendi consequuntur accusamus sequi.!3",
  },
  {
    id: 25,
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Caroline Lee",
    role: "Front-end developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta corrupti voluptas mollitia saepe architecto repellat at quod. Magnam tempore natus ipsam vero nulla perferendis dolorum commodi est eligendi eius.!!4",
  },
  {
    id: 26,
    avatar:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Robert Johnson",
    role: "Front-end developer",
    content: "This is a test!!!!!!5",
  },
];

export default function TestimonialSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-20">
      <IconBox
        icon={<Crown className="fill-white" />}
        title="What our users say"
        text="What our esteemed users are saying"
        className="place-self-center"
      />
      <TestimonialCardsSlider data={testData} />
    </div>
  );
}
