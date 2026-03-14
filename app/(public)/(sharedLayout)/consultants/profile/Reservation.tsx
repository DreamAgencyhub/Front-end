"use client";
import { IconMetroCalendar } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Modal from "@/app/components/ui/modal/Modal";
import { useModal } from "@/app/components/ui/modal/ModalContext";
import { useForm } from "react-hook-form";

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
        from: "18:00",
        to: "19:00",
      },
      {
        from: "19:00",
        to: "20:00",
        reserved: true,
      },
      {
        from: "20:00",
        to: "21:00",
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

const reservationTerms = [
  "There will not be a refund if you do not present at the specified time",
  "If you cancel the reservation at least 1 hour before there will be a 20% deduction of total payment",
  "If you be late the lost time will not be considered",
  "All your information and privacy will be reserved",
];

export default function Reservation() {
  const {
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: "all",
  });

  const { close } = useModal();

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
                  <div className="w-full md:w-92 py-4">
                    <p className=" text-base pb-3 font-semibold ">
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
                      <Modal.Open
                        key={Math.random() * index * 10}
                        opens={`${reservation.day}_${reservation.date}_${item.from}_${item.to}`}
                      >
                        <span
                          className={`${
                            !item.reserved
                              ? "bg-default-color cursor-pointer hover:shadow-md"
                              : "bg-accent-500 text-gray-50 cursor-not-allowed shadow-md shadow-accent-300/80 dark:shadow-rose-900/50"
                          } py-4 px-2  rounded-xl text-sm  text-center   transition-all ease-in-out font-semibold`}
                        >
                          {" "}
                          from: {item.from} to: {item.to}
                        </span>
                      </Modal.Open>
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

      {reservations.map((reservation) =>
        reservation.visitsTimes.map((item) => (
          <Modal.Window
            key={`${reservation.day}_${reservation.date}_${item.from}_${item.to}`}
            name={`${reservation.day}_${reservation.date}_${item.from}_${item.to}`}
          >
            <Modal>
              <Modal.Header>
                <div className="w-full md:w-92 border-b-2 pb-2 border-text-muted/30">
                  <h3 className="text-lg font-semibold pb-2">
                    Reservation Process
                  </h3>
                  <p className="text-xs text-text-muted font-semibold">
                    To Complete your reservation fill out the fields below.
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body>
                <form className="flex flex-col gap-5">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    register={register("fullName", {
                      required: "* This field is required.",
                      maxLength: {
                        value: 50,
                        message:
                          "* Your full name cannot be more than 50 characters.",
                      },
                      minLength: {
                        value: 2,
                        message: "* Please enter a valid full name.",
                      },
                    })}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    register={register("phoneNumber", {
                      required: "* This field is required.",
                      maxLength: {
                        value: 50,
                        message: "* Phone number cannot be more than 50 digits",
                      },
                      minLength: {
                        value: 9,
                        message: "* Phone number cannot be less than 9 digits",
                      },
                    })}
                    errors={errors}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    register={register("email", {
                      required: "* This field is required.",
                      validate: (value) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                        "* Invalid email address.",
                    })}
                    errors={errors}
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <div className="flex flex-row items-center gap-4">
                  <Button
                    onClick={() => {
                      reset();
                      close();
                    }}
                    className="font-semibold text-sm w-full"
                    variant="secondary"
                    size="medium"
                  >
                    Cancel
                  </Button>

                  <Modal.Open opens={`final_step`}>
                    <Button
                      className="font-semibold text-sm w-full"
                      variant="primary"
                      size="medium"
                    >
                      Continue
                    </Button>
                  </Modal.Open>
                </div>
              </Modal.Footer>
            </Modal>
          </Modal.Window>
        )),
      )}

      <Modal.Window name="final_step">
        <Modal>
          <Modal.Header>
            <div className="w-full md:w-92 ">
              <h3 className="text-lg font-semibold pb-2">
                Reservation Process
              </h3>
              <p className="text-xs text-text-muted font-semibold">
                Please read the terms below carefully!
              </p>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className="md:w-98">
              <ul className="">
                {reservationTerms.map((text) => (
                  <li
                    key={text}
                    className=" odd:bg-default-color rounded-lg py-2 px-3 flex flex-row items-center font-semibold text-xs gap-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-primary-500 border-2 border-secondary-default outline-2 outline-primary-500 "></span>
                    <span>{text}</span>
                  </li>
                ))}

                <li className="flex items-center gap-2 py-2">
                  <input
                    className="checked:bg-primary-500 "
                    id="acceptedTerms"
                    type="checkbox"
                  />
                  <label
                    className="text-sm font-semibold "
                    htmlFor="acceptedTerms"
                  >
                    {` I've read carefully the terms and I accept them all.`}{" "}
                  </label>
                </li>
              </ul>
              <div className="bg-primary-400 rounded-xl text-gray-50 py-3 mt-6 px-2 text-center text-sm font-semibold shadow-lg shadow-primary-500/30">
                <span>
                  Dear Hamid Hassani your reservation will be on Saturday
                  3/4/2026 at 16:00
                </span>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className="flex flex-row items-center gap-4">
              <Button
                onClick={() => {
                  reset();
                  close();
                }}
                className="font-semibold text-sm w-full"
                variant="secondary"
                size="medium"
              >
                Cancel
              </Button>

              <Button
                className="font-semibold text-sm w-full"
                variant="primary"
                size="medium"
              >
                Continue
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Modal.Window>
    </div>
  );
}
