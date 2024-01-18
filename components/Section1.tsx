import React, { CSSProperties } from "react";
import "../app/styles/styles.css";

import "../app/styles/styles.css";

const Hero = () => {
  return (
    <section id="section1" className="custom-section">
      <div className="custom-image">
        <h1 className="custom-heading">QAZA AGENCY</h1>
        <p className="custom-paragraph">
          Digitalni mediji su nezaobilazan deo savremenog poslovnog sveta, a mi
          smo ponosni na to što se posebno ističemo u ovom dinamičnom okruženju.
          Naša stručnost u oblasti digitalnih medija predstavlja našu ključnu
          snagu. Kroz kreativnost i inovacije, naš tim ne samo da prati, već i
          postavlja trendove, stvarajući jedinstvene narative za naše klijente.
          <br />
          <br />
          Naša agilnost u prilagođavanju strategija komunikacije specifičnim
          potrebama naših klijenata na mreži i društvenim medijima čini nas
          pouzdanim partnerom u izgradnji snažnog digitalnog prisustva. Bez
          obzira da li se radi o „marketingu na društvenim mrežama“, unapređenju
          online prisustva ili inoviranju digitalnih rešenja, naša prednost je u
          posvećenosti izvrsnosti i pažljivom sagledavanju potreba klijenata.
        </p>
        {/* <button className="btn_dark_green"></button> */}
      </div>

      <div className="additional-content"></div>
      <img src="/slika1.png" alt="Qaza AGENCY" className="custom-images" />
    </section>
  );
};

export default Hero;
