import React, { CSSProperties } from "react";

const Hero = () => {
  const imageStyles: CSSProperties = {
    background: `url("/slika1.png")`,
    position: "absolute",
    right: 0,
    top: 0,
    height: "80vh",
    width: "50vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "-28px",
    marginTop: "-60px",
  };

  return (
    <section
      id="section1"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:mb-[50px]"
    >
      <div style={imageStyles} />

      <div className="relative z-20 flex flex-col  flex-1 xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">CoreWeb AGENCY</h1>
        <p className="regular-16 mt-6 text-gray-800 xl:max-w-[520px]">
          Digitalni mediji su nezaobilazan deo savremenog poslovnog sveta, a mi
          smo ponosni na to što se posebno ističemo u ovom dinamičnom okruženju.
          Naša stručnost u oblasti digitalnih medija predstavlja našu ključnu
          snagu. Kroz kreativnost i inovacije, naš tim ne samo da prati, već i
          postavlja trendove, stvarajući jedinstvene narative za naše klijente.
          <br></br>
          Naša agilnost u prilagođavanju strategija komunikacije specifičnim
          potrebama naših klijenata na mreži i društvenim medijima čini nas
          pouzdanim partnerom u izgradnji snažnog digitalnog prisustva. Bez
          obzira da li se radi o „marketingu na društvenim mrežama“, unapređenju
          online prisustva ili inoviranju digitalnih rešenja, naša prednost je u
          posvećenosti izvrsnosti i pažljivom sagledavanju potreba klijenata.
        </p>
      </div>

      <div className="relative flex flex-1 items-start"></div>
    </section>
  );
};

export default Hero;
