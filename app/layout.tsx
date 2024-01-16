import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "QAZA - Digitalni Marketing | Konsalting",
  description:
    "QAZA Agencija - Specijalizovana za digitalni marketing  i marketing na društvenim mrežama kao i izrada web sajtova, CoreWeb Agency - Specialized in digital and social media marketing as well as creating websites. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
