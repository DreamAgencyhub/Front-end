import BoxExpander from "@/app/components/ui/BoxExpander";
import CourseCardInfo from "../CourseCardInfo";
import BoxPrice from "../BoxPrice";
import Navigation from "@/app/components/ui/Navigation";
import AccordionGroup from "../Accordion";
import AskQuestionsSection from "../AskQuestionsSection";
import Avatar from "@/app/components/ui/Avatar";

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
    href: "/questions",
    label: "Questions",
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

const commonQuestionsData = [
  {
    question: `What's main gol of this course?`,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim deserunt atque fugit, suscipit ex nisi pariatur porro facere esse ipsum quod explicabo sapiente rerum,",
  },
  {
    question: `Do I need prerequisites?`,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim deserunt atque fugit, suscipit ex nisi pariatur porro facere esse ipsum quod explicabo sapiente rerum,",
  },
  {
    question: `How can I get help?`,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim deserunt atque fugit, suscipit ex nisi pariatur porro facere esse ipsum quod explicabo sapiente rerum,",
  },
  {
    question: `Does this course has a refund warranty?`,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim deserunt atque fugit, suscipit ex nisi pariatur porro facere esse ipsum quod explicabo sapiente rerum,",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-8 py-10  items-center ">
      <div className="px-3.5 md:px-0">
        <CourseCardInfo />
      </div>
      <div className="overflow-visible grid grid-cols-1 gap-4 md:grid-cols-[230px_1fr] lg:grid-cols-[340px_1fr] px-3.5 md:px-0 ">
        <div className=" sticky top-10 z-40 flex justify-center md:hidden  rounded-3xl bg-secondary-default p-4 shadow-lg h-fit ">
          <Navigation
            scroll
            className="flex flex-row font-medium"
            navigationItems={navItems}
          />
        </div>

        <div className="flex flex-col gap-4 col-span-1 lg:col-start-1 lg:row-start-1">
          <div className="md:row-start-1 md:row-end-3">
            <BoxPrice />
          </div>

          <div className=" sticky top-10 z-40 lg:flex justify-center hidden  rounded-3xl bg-secondary-default p-4 shadow-lg h-fit ">
            <Navigation
              scroll
              className="flex flex-row font-medium"
              navigationItems={navItems}
            />
          </div>

          <div className=" relative flex flex-col shrink-0 rounded-3xl bg-secondary-default h-fit md:row-start-3 md:row-end-5 ">
            <Avatar noRotate />
            <div className="mt-20 text-center">
              <h3 className="text-xl font-semibold ">Maria Smith</h3>
              <span className="text-xs text-text-muted">
                Entrepreneurship and business improvement consulting
              </span>
            </div>

            <div className="px-2 mt-4 pb-3">
              <p className="bg-default-color rounded-3xl py-3 px-4 text-sm  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam corrupti facilis architecto officia necessitatibus
                distinctio amet quas consequuntur facere dolore aliquam,
                blanditiis culpa ut libero maxime dolores dolorem voluptate
                illum.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-1 lg:row-start-1 lg:col-start-2 ">
          <div className="hidden sticky top-10 z-40 md:flex lg:hidden justify-center rounded-3xl bg-secondary-default p-4 shadow-lg h-fit ">
            <Navigation
              scroll
              className="flex flex-row font-medium"
              navigationItems={navItems}
            />
          </div>

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

          <div className="md:col-start-2 rounded-3xl bg-secondary-default py-6 px-4 md:row-start-5 ">
            <h3 className="text-xl font-bold pt-1 text-primary-500 ">
              Common Q&A
            </h3>
            <div className="py-4 flex flex-col gap-4 ">
              <AccordionGroup data={commonQuestionsData} />
            </div>
          </div>

          <div className="md:col-start-2 md:row-start-6 " id="questions">
            <AskQuestionsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
