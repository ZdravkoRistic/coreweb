const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3">MI SMO TU ZA VAS</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            STRUČNOST KOJA POKREĆE VAŠ BIZNIS
          </h2>
          <p className="regular-16 text-gray-900 xl:max-w-[720px]">
            Naša agencija se ističe kao posvećen partner, težimo prevazilaženju
            očekivanja naših poslovnih partnera. Sa impresivnim referencama u
            različitim sektorima, od malih preduzeća do velikih kompanija,
            instituta, fakulteta i ministarstava, stalno radimo na unapređenju
            poslovnih partnera. Naš tim, koji se dokazao na projektima u
            privredi, vladi, institutima i fakultetima, stoji vam na
            raspolaganju.
            <br />
            <br />
            Naša široka paleta usluga obuhvata implementaciju i unapređenje
            različitih sistema menadžmenta, uključujući QMS, EMS, ISMS, i druge,
            vođene stručnjacima iz oblasti poslovanja. Pružamo podršku u oceni
            usaglašenosti za energetiku, industriju, IKT, interne standarde, kao
            i praćenje i poboljšanje Intelektualnog kapitala. Posebno se
            ističemo u oblasti menadžmenta inovacija, kontrole kvaliteta,
            obezbeđenja kvaliteta i integracije menadžment sistema.
            <br />
            <br />
            Fokusirani smo na digitalni marketing, izradu biznis planova i
            strateško vođenje preduzeća, pružajući sveobuhvatno rešenje za
            organizacije koje teže vrhunskom poslovanju. Naša jasna vizija je
            podrška kvalitetnim i dinamičnim organizacijama. Strategija agencije
            usmerena je na podizanje kvaliteta poslovanja, menadžmenta,
            bezbednosti IKT, infrastrukture kvaliteta i drugih menadžmenata u
            organizacijama naših partnera. Vaš uspeh je naša predanost –
            očekujemo vašu suradnju!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full px-6">
        <div
          className="rounded-5xl"
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            overflow: "hidden",
          }}
        >
          <img
            src="/slika6.png"
            alt="boat"
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            // layout="fill"
            // objectFit="cover"
            // priority
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
