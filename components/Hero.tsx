import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:mb-[250px]">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-col  flex-1 xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">CoreWeb AGENCY</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Digitalni mediji su naša jača strana. Naš kreativni tim se ističe u
          kreiranju jedinstvenih narativa za klijente, prilagođavajući
          strategije komunikacije njihovom prisustvu na mreži i društvenim
          medijima. Bilo da se radi o „marketingu na društvenim mrežama“,
          poboljšanju prisustva na mreži ili inoviranju digitalnih rešenja, mi
          dajemo prednost izvrsnosti i potrebama klijenata. Mala preduzeća,
          korporacije i organizacije javnog sektora nam veruju.
        </p>
      </div>

      <div className="relative flex flex-1 items-start"></div>
    </section>
  );
};

export default Hero;
