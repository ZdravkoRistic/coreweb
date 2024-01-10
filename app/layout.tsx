import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoreWeb - Digitalni i Društveni Medija Marketing",
  description:
    "CoreWeb Agencija - Specijalizovani za digitalni i društveni medija marketing.",
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
