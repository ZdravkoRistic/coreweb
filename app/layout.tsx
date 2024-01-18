import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "QAZA - Digitalni Marketing | Konsalting",
  description:
    "QAZA Agencija - Specijalizovana za digitalni marketing  i marketing na društvenim mrežama kao i izrada web sajtova,vođenje društvenih mreža,SEO optimizacije,ISO Standarda, QAZA Agency - Specialized in digital and social media marketing as well as creating websites,management of social networks, SEO optimization, ISO Standards. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="relative overflow-hidden">{children}</div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
