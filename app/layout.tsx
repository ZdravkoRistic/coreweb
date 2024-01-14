import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoreWeb - Digitalni Marketing | Izrada Web Sajtova",
  description:
    "CoreWeb Agencija - Specijalizovana za digitalni marketing  i marketing na društvenim mrežama kao i izrada web sajtova, CoreWeb Agency - Specialized in digital and social media marketing as well as creating websites. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
