import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";
import "../app/styles/styles.css";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <section
        id="contact"
        className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-40"
      >
        <h1 className="flex flexCenter py-4 regular-40 bold-40 ">
          Stranica je u izradi
        </h1>
        <div className="mb-10 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            dui sapien eget mi. Tellus pellentesque eu tincidunt tortor aliquam
            nulla facilisi. Ipsum dolor sit amet consectetur. Dapibus ultrices
            in iaculis nunc sed augue. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus et. Posuere morbi leo
            urna molestie at elementum eu facilisis. Semper feugiat nibh sed
            pulvinar proin gravida hendrerit lectus. Nisl purus in mollis nunc.
            Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat.
            Morbi enim nunc faucibus a pellentesque. Tortor vitae purus faucibus
            ornare suspendisse sed nisi lacus sed. Egestas diam in arcu cursus
            euismod quis viverra nibh cras. Quam viverra orci sagittis eu
            volutpat. Eu consequat ac felis donec et odio pellentesque. Felis
            eget velit aliquet sagittis id consectetur purus. Habitasse platea
            dictumst quisque sagittis. Adipiscing vitae proin sagittis nisl
            rhoncus mattis.
          </p>
          <br />
          <p>
            Pellentesque diam volutpat commodo sed egestas egestas. Dui ut
            ornare lectus sit amet est. At auctor urna nunc id cursus. Tellus
            rutrum tellus pellentesque eu tincidunt. Tellus mauris a diam
            maecenas sed enim ut sem viverra. Nunc mi ipsum faucibus vitae
            aliquet nec ullamcorper. Euismod elementum nisi quis eleifend quam
            adipiscing vitae proin sagittis. Neque aliquam vestibulum morbi
            blandit cursus risus at ultrices mi. Tempus urna et pharetra
            pharetra. Ac orci phasellus egestas tellus rutrum tellus
            pellentesque eu. Phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt tortor. Posuere lorem ipsum dolor sit amet consectetur
            adipiscing. Curabitur gravida arcu ac tortor dignissim convallis
            aenean et. Varius duis at consectetur lorem donec. Libero volutpat
            sed cras ornare. Nulla aliquet enim tortor at auctor urna nunc id
            cursus. Mattis pellentesque id nibh tortor id aliquet lectus proin
            nibh. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. Quam quisque id diam vel quam elementum. Dui faucibus in
            ornare quam viverra orci sagittis eu. Pellentesque diam volutpat
            commodo sed egestas egestas. Dui ut ornare lectus sit amet est. At
            auctor urna nunc id cursus. Tellus rutrum tellus pellentesque eu
            tincidunt. Tellus mauris a diam maecenas sed enim ut sem viverra.
            Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Euismod
            elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
            Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.
            Tempus urna et pharetra pharetra. Ac orci phasellus egestas tellus
            rutrum tellus
          </p>
          <br />
          <p></p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;
