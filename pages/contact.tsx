import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";
import "../app/styles/styles.css";

import EmailForm from "../utils/Form";

const ContactPage = () => {
  return (
    <div id="contact" className="mobile-navbar-contact-page-height">
      <Navbar />
      <section className="flexCenter relative  flex-col py-10 lg:mb-10 lg:py-20">
        <div className="flex">
          <div className="mx-20 custom-images ">
            <h1 className="regular-40 bold-32 mr-10 mb-10">
              ČESTO POSTAVLJENA PITANJA
            </h1>
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <br />
            <p className="bold-18 mb-3">LOREM IPSUM</p>
            <p className="medium-14 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
