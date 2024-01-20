import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";
import "../app/styles/styles.css";

import EmailForm from "../utils/Form";

const ContactPage = () => {
  return (
    <div id="contact" className="mobile-contact ">
      <Navbar />
      <div
        className="max-container picture-height"
        style={{
          position: "relative",
          width: "100%",
          height: "40vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/contact.jpg"
          alt="contact"
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-40 padding-container">
        <div className="flex ">
          <div className="w-1/2 mr-40 custom-images ">
            <h1 className="regular-40 bold-32 mr-10 mb-10">
              ČESTO POSTAVLJENA PITANJA
            </h1>

            <p className="bold-18 mb-3">
              Kako poslovni planovi doprinose razvoju mog biznisa?
            </p>
            <p className="medium-14">
              Poslovni planovi su ključni jer pružaju jasne smernice za
              ostvarivanje poslovnih ciljeva, postavljajući temelj za efikasno
              upravljanje resursima i postizanje operativne efikasnosti.
            </p>
            <br />

            <p className="bold-18 mb-3">
              Kako mogu implementirati ISO 9001 standard u svojoj organizaciji?
            </p>
            <p className="medium-14">
              Implementacija ISO 9001 standarda podrazumeva uspostavljanje
              sistema menadžmenta kvaliteta radi poboljšanja efikasnosti i
              zadovoljstva klijenata. Naš stručni tim pruža podršku u ovom
              procesu redovnim revizijama procesa i usklađivanjem sa standardima
              kvaliteta.
            </p>
            <br />

            {/* <p className="bold-18 mb-3">
              Kako ISO 45001 doprinosi bezbednosti zaposlenih?
            </p>
            <p className="medium-14">
              ISO 45001 doprinosi bezbednosti zaposlenih kroz sprovođenje
              redovnih procena rizika i implementaciju mera zaštite,
              obezbeđujući sigurno i zdravo radno okruženje.
            </p>
            <br /> */}

            <p className="bold-18 mb-3">
              Kako društveni marketing može pomoći mom brendu da postane
              prepoznatljiv?
            </p>
            <p className="medium-14">
              Društveni marketing pomaže brendu da postane prepoznatljiv kroz
              strategijsko planiranje kampanja, kreiranje edukativnih sadržaja i
              korišćenje društvenih medija za širenje informacija.
            </p>
            <br />

            <p className="bold-18 mb-3">
              Koje korake treba preduzeti za on-page optimizaciju za SEO?
            </p>
            <p className="medium-14">
              On-page optimizacija za SEO uključuje prilagođavanje sadržaja na
              sajtu, uključujući naslove, meta opise i slike, radi poboljšanja
              vidljivosti na internetu i privlačenja organskog saobraćaja.
            </p>
            <br />

            <p className="bold-18 mb-3">
              Šta sve obuhvata proces izrade web sajtova kod nas?
            </p>
            <p className="medium-14 mb-5">
              Naš proces izrade web sajtova uključuje korišćenje najnovijih
              tehnologija poput React-a i Next.js, responsive design za
              prilagođavanje mobilnim uređajima, upotrebu najboljih servera i
              baza podataka, te implementaciju sigurnosnih mehanizama za zaštitu
              sajta od potencijalnih pretnji.
            </p>
            <br />
          </div>

          <EmailForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
