import BoxExpander from "@/app/components/ui/BoxExpander";
import CourseCardInfo from "../CourseCardInfo";
import BoxPrice from "../BoxPrice";
import Navigation from "@/app/components/ui/Navigation";
import AccordionGroup from "../Accordion";

const navItems = [
  {
    href: "/description",
    label: "Description",
  },
  {
    href: "/lectures",
    label: "Lectures",
  },
  {
    href: "/comments",
    label: "Comments",
  },
];

const accordionData = [
  {
    title: "Section 1: Introduction",
    content: [
      {
        title: "Welcome to this course.",
        duration: "5 min",
      },
      {
        title: "How to get through the sections.",
        duration: "7 min",
      },
      {
        title: "How to get help and ask questions.",
        duration: "9 min",
      },
      {
        title: "Required tools and apps.",
        duration: "5 min",
      },
    ],
  },
  {
    title: "Section 2: All about Markets",
    content: [
      {
        title: "Welcome to this course.",
        duration: "5 min",
      },
      {
        title: "How to get through the sections.",
        duration: "7 min",
      },
      {
        title: "How to get help and ask questions.",
        duration: "9 min",
      },
      {
        title: "Required tools and apps.",
        duration: "5 min",
      },
      {
        title: "Required tools and apps2.",
        duration: "5 min",
      },
    ],
  },
  {
    title: "Section 3: How to investigate",
    content: [
      {
        title: "Welcome to this course.",
        duration: "5 min",
      },
      {
        title: "How to get through the sections.",
        duration: "7 min",
      },
      {
        title: "How to get help and ask questions.",
        duration: "9 min",
      },
      {
        title: "Required tools and apps.",
        duration: "5 min",
      },
      {
        title: "Required tools and apps33.",
        duration: "5 min",
      },
    ],
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-8 py-10">
      <CourseCardInfo />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[230px_1fr] md:grid-rows-[70px_1fr] lg:grid-rows-[160px_1fr] lg:grid-cols-[340px_1fr]">
        <BoxPrice />
        <div className="sticky top-10 z-40 flex justify-center rounded-3xl bg-secondary-default p-4 shadow-lg h-fit md:col-start-2 md:row-start-1 lg:col-span-1 lg:row-start-2">
          <Navigation
            scroll
            className="flex flex-row font-medium"
            navigationItems={navItems}
          />
        </div>
        <div className=" md:col-start-2 md:row-start-2 lg:row-start-1 lg:row-end-3 ">
          <BoxExpander>
            <div id="description">
              <h3 className="text-xl font-bold pt-1 text-primary-500 ">
                More about course
              </h3>
              <p className="text-sm font-semibold py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus laborum consectetur optio culpa officia provident
                aspernatur accusantium, ex vero error cumque ratione odio illo.
                Incidunt eaque sequi et. Voluptas, corrupti. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Molestiae delectus rem
                tempora, quia, nesciunt illum quam tempore quidem quo, quisquam
                cumque ducimus mollitia ipsa minima? Mollitia harum nihil
                accusamus quisquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam magnam fugit mollitia eligendi!
                Maiores aliquam dolor autem numquam dolorum quidem, quasi, quam,
                ipsa ullam reprehenderit architecto quod fugiat omnis saepe?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus laborum consectetur optio culpa officia provident
                aspernatur accusantium, ex vero error cumque ratione odio illo.
                Incidunt eaque sequi et. Voluptas, corrupti. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Molestiae delectus rem
                tempora, quia, nesciunt illum quam tempore quidem quo, quisquam
                cumque ducimus mollitia ipsa minima? Mollitia harum nihil
                accusamus quisquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam magnam fugit mollitia eligendi!
                Maiores aliquam dolor autem numquam dolorum quidem, quasi, quam,
                ipsa ullam reprehenderit architecto quod fugiat omnis saepe?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus laborum consectetur optio culpa officia provident
                aspernatur accusantium, ex vero error cumque ratione odio illo.
                Incidunt eaque sequi et. Voluptas, corrupti. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Molestiae delectus rem
                tempora, quia, nesciunt illum quam tempore quidem quo, quisquam
                cumque ducimus mollitia ipsa minima? Mollitia harum nihil
                accusamus quisquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam magnam fugit mollitia eligendi!
                Maiores aliquam dolor autem numquam dolorum quidem, quasi, quam,
                ipsa ullam reprehenderit architecto quod fugiat omnis saepe?
              </p>
            </div>
          </BoxExpander>
        </div>
        <div className="md:col-start-2 ">
          <BoxExpander>
            <div id="lectures">
              <h3 className="text-xl font-bold pt-1 text-primary-500 ">
                Lectures
              </h3>
              <div className="py-4 flex flex-col gap-4 ">
                <AccordionGroup data={accordionData} />
              </div>
            </div>
          </BoxExpander>
        </div>
      </div>
    </div>
  );
}
