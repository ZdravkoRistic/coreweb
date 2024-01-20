import React, { CSSProperties } from "react";
import "../app/styles/styles.css";
import Button from "../utils/Button";
import Link from "next/link";

import "../app/styles/styles.css";

const Hero = () => {
  return (
    <section id="section1" className="custom-section">
      <div className="custom-image">
        <h1 className="custom-heading">QAZA AGENCY</h1>
        <p className="custom-paragraph mb-5">
          Naše konsultantske usluge u oblasti digitalnih medija predstavlja
          ključnu podršku klijentima u savladavanju izazova savremenog poslovnog
          sveta. Fokusirani na pružanje stručnih saveta, pomognemo
          organizacijama da optimizuju svoje digitalne strategije. Kroz analize
          i inovativne pristupe, stvaramo konkretne planove koji omogućavaju
          klijentima da ostvare održiv uspeh u digitalnom okruženju.
          <br />
          <br />
          Upravljanje digitalnim resursima zahteva agilan i strateški pristup.
          Naš menadžerski tim posvećen je vođenju online prisustva i inoviranju
          digitalnih rešenja. Prilagodljivi smo specifičnim potrebama klijenata,
          pružajući podršku u postizanju poslovnih ciljeva. Kroz precizno
          planiranje i pažljivo upravljanje resursima, obezbeđujemo efikasnost i
          uspeh na digitalnom tržištu.
        </p>
        <div className="flex  ">
          <Link href="/contact">
            <Button
              type="button"
              title="POŠALJITE UPIT"
              icon="/email.png"
              variant="btn_blue"
              iconStyle={{ marginRight: "10px" }}
              full
            />
          </Link>

          <Button
            type="button"
            title="+381 62 232 119"
            icon="/phone.png"
            variant="btn_blue"
            iconStyle={{ marginRight: "10px" }}
            full
          />
        </div>
      </div>

      <div className="additional-content"></div>
      <img src="/slika1.png" alt="Qaza AGENCY" className="custom-images" />
    </section>
  );
};

export default Hero;
