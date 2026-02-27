import {
  IconAwesomeInstagram,
  IconAwesomePhone,
  IconMaterialEmail,
  IconMaterialLocationOn,
} from "@/app/components/icons";
import ContactForm from "@/app/components/ui/ContactForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "",
};

const contactInfo = [
  {
    label: "+1 3054449525",
    icon: <IconAwesomePhone className="fill-gray-50 stroke-none text-lg " />,
    href: "mailto:dreamagencyteamm@gmail.com",
  },
  {
    label: "@dreamAgency",
    icon: (
      <IconAwesomeInstagram className="fill-gray-50 stroke-none text-lg " />
    ),
    href: "https://www.instagram.com",
  },
  {
    label: "dreamagencyteamm@gmail.com",
    icon: <IconMaterialEmail className="fill-gray-50 stroke-none text-lg " />,
    href: "mailto:dreamagencyteamm@gmail.com",
  },
  {
    label: "1 E 2nd St, New York, NY 10003, USA",
    icon: (
      <IconMaterialLocationOn className="fill-gray-50 stroke-none text-lg " />
    ),
    href: "https://maps.app.goo.gl/21t2fTsHToGesSXS9",
  },
];

export default function page() {
  return (
    <div className=" relative grid grid-cols-1 py-10 font-semibold gap-10 md:grid-cols-8  ">
      <div className="bg-primary-500 rounded-4xl md:rounded-r-[60px]  flex flex-col gap-4 p-6  md:col-span-5">
        <div className="md:w-100 lg:ml-10 flex flex-col gap-4 py-8">
          <h1 className="text-2xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-50 ">
            If you have any questions or inquiries, please feel free to contact
            us. We are here to assist you and provide the information you need.
          </p>
          <p className="text-gray-50">
            You can reach us through the following channels:
          </p>
          <ul className="text-gray-50 flex flex-col gap-2">
            {contactInfo.map(({ label, icon: Icon, href }) => (
              <li
                className="flex flex-row gap-2 items-center py-2 rounded-2xl odd:bg-primary-400 px-4 md:w-3/4"
                key={label}
              >
                {Icon}
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className=" aspect-video w-full md:w-80 lg:w-110 rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1797.8817557208324!2d-73.99341478344387!3d40.725398386608695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851feb0517%3A0x91bfa97cf8994912!2s1%20E%202nd%20St%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2suk!4v1771995488850!5m2!1sen!2suk"
              width="100%"
              height="100%"
              className="border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
