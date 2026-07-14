import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { getCookies } from "./utilities/getCookies";
import QueryProvider from "./components/QueryProvider";
import ToastProvider from "./components/ToastProvider";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialThemeMode = await getCookies("theme");

  return (
    <html lang="en" data-theme={initialThemeMode} className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans bg-default-color  text-text-default `}
      >
        <QueryProvider>
          <ToastProvider />
          <Header />
          <main className="max-w-7xl px-4 mx-auto ">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
