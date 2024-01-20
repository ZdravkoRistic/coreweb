import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { SERVICES } from "../constants/index";
import "../app/globals.css";
import "../app/styles/styles.css";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <section
        id="contact"
        className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-40 mobile-services  "
        style={{
          backgroundImage: "url(' /bacground-services.png ')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="z-20 flex w-full flex-col lg:w-60%">
            <div className="relative ">
              <h2 className="bold-40 lg:bold-64 text-center">Naše Usluge</h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
              {SERVICES.map((service) => (
                <FeatureItem
                  key={service.title}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 ">
        <Image src={icon} alt="map" width={50} height={50} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <div
        className="regular-16 mt-5 bg-white/80 text-gray-800 lg:mt-[30px] lg:bg-none"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </li>
  );
};

export default ServicePage;
