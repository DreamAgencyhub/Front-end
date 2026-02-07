import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Dream Agency | %s",
    default: "Dream Agency",
  },

  description:
    "Dream Agency is a platform that connects consultants with clients. We provide a wide range of services to help consultants grow their business and reach more clients. and everyone can find business online courses to grow their knowledge and business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans bg-default-color  text-primary-500 `}
      >
        <main className=""> {children} </main>
      </body>
    </html>
  );
}
