"use client";
import { IconMetroCalendar } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/modal/Modal";

const reservations = [
  {
    day: "Saturday",
    date: "3/4/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
        reserved: true,
      },
      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
      {
        from: "17:00",
        to: "18:00",
        reserved: true,
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
  {
    day: "Sunday",
    date: "3/5/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
      },

      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
  {
    day: "Monday",
    date: "3/6/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
      },

      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
  {
    day: "Tuesday",
    date: "3/7/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
      },

      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
  {
    day: "Wednesday",
    date: "3/8/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
      },

      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
  {
    day: "Thursday",
    date: "3/9/2026",
    visitsTimes: [
      {
        from: "14:00",
        to: "15:00",
      },

      {
        from: "15:00",
        to: "16:00",
      },
      {
        from: "16:00",
        to: "17:00",
      },
      {
        from: "17:00",
        to: "18:00",
      },
    ],
  },
];

export default function Reservation() {
  return (
    <div className="flex flex-col w-full gap-4  lg:max-w-4xl ">
      <div className="bg-secondary-default py-2 rounded-3xl flex items-center gap-4 md:justify-between md:px-4">
        <div className="flex items-center gap-4  p-4">
          <IconMetroCalendar className="fill-primary-500 stroke-none text-xl" />
          <span className="text-sm font-semibold">Select day and hour</span>
        </div>
        <div className=" flex gap-4">
          <Button
            className="font-semibold text-xs rounded-xl "
            variant="primary"
            size="small"
          >
            Online
          </Button>
          <Button
            className="font-semibold text-xs rounded-xl "
            variant="secondary"
            size="small"
          >
            In person
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:max-w-4xl md:grid-cols-3 lg:grid-cols-4 mt-4">
        {reservations.map((reservation) => (
          <div key={reservation.day}>
            <Modal.Window name={reservation.day}>
              <Modal>
                <Modal.Header>
                  <div className="w-82 py-4">
                    <p className=" text-sm pb-3 font-semibold ">
                      Choose Your reservation time on{" "}
                    </p>
                    <div className="rounded-2xl bg-primary-500 py-4 text-gray-100 text-sm font-semibold text-center">
                      <h3 className="text-base font-semibold">
                        {reservation.day} : {reservation.date}
                      </h3>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <div className="grid grid-cols-2 gap-4 ">
                    {reservation.visitsTimes.map((item, index) => (
                      <span
                        key={index}
                        className={`${
                          !item.reserved
                            ? "bg-default-color cursor-pointer hover:shadow-md"
                            : "bg-accent-500 text-gray-50 cursor-not-allowed shadow-md shadow-accent-300/80"
                        } py-4 px-2  rounded-xl text-sm  text-center   transition-all ease-in-out font-semibold`}
                      >
                        {" "}
                        from: {item.from} to: {item.to}
                      </span>
                    ))}
                  </div>
                </Modal.Body>
              </Modal>
            </Modal.Window>

            <Modal.Open opens={reservation.day}>
              <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
                <span>
                  {reservation.day} : {reservation.date}
                </span>
              </div>
            </Modal.Open>
          </div>
        ))}
      </div>
    </div>
  );
}
