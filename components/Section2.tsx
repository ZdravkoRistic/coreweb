import Image from "next/image";
import "../app/styles/styles.css";

interface CampProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  peopleJoined?: string;
  src?: string;
  className?: string;
}

const CampSite = ({ backgroundImage }: CampProps) => {
  return (
    <div
      className={`h-full w-full  ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
    ></div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className=" hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] px-6 ">
        <CampSite backgroundImage="bg-bg-img-1  " />

        <CampSite backgroundImage="bg-bg-img-2" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-800 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64  text-white">
            <strong>Osećaš se izgubljeno u digitalnom svetu? Bez brige!</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Mi smo tu da profesionalno transformišemo tvoj put. Posvećeni smo
            pružanju izuzetnih rešenja koja prevazilaze tvoja očekivanja.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            loading="lazy"
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
