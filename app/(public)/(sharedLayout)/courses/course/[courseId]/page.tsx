import BoxExpander from "@/app/components/ui/BoxExpander";
import CourseCardInfo from "../CourseCardInfo";

export default function page() {
  return (
    <div className="flex flex-col gap-8 py-10">
      <CourseCardInfo />
      <BoxExpander>
        <h3 className="text-xl font-bold pt-1 text-primary-500 ">
          More about course
        </h3>
        <p className="py-2 mb-10 text-sm font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          laborum consectetur optio culpa officia provident aspernatur
          accusantium, ex vero error cumque ratione odio illo. Incidunt eaque
          sequi et. Voluptas, corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae delectus rem tempora, quia, nesciunt illum
          quam tempore quidem quo, quisquam cumque ducimus mollitia ipsa minima?
          Mollitia harum nihil accusamus quisquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam magnam fugit mollitia eligendi!
          Maiores aliquam dolor autem numquam dolorum quidem, quasi, quam, ipsa
          ullam reprehenderit architecto quod fugiat omnis saepe?
        </p>
      </BoxExpander>
    </div>
  );
}
