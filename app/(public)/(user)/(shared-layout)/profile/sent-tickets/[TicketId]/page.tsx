import Header from "../../Header";
import TicketsSection from "../TicketsSection";

// %% ===> These are test data %%
const nowDate = new Date();
nowDate.setDate(nowDate.getDate() - 10);
const headerTestData = {
  id: "kkkkk2",
  date: new Date(nowDate.toISOString().split("T")[0]),
  subject: "This is first test to make sure the UI is working and is okay :) ",
  status: "InProcess",
};

function page() {
  return (
    <div className=" lg:mt-14">
      <Header
        date={headerTestData.date}
        status={headerTestData.status}
        subject={headerTestData.subject}
      />

      <TicketsSection />
    </div>
  );
}

export default page;
