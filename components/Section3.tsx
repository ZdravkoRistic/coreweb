const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3">MI SMO TU ZA VAS</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Kvalitet testiran na konkurenciji
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            U svetu digitalnog i socijalnog marketinga, naša posvećenost
            kvalitetu i inovacijama odražava se kroz širok spektar usluga koje
            smo stvorili kako bismo zadovoljili potrebe kako naših internih
            procesa, tako i zahteva naših klijenata. Naša stručnost i iskustvo
            omogućavaju nam da kreiramo usluge koje nisu samo relevantne, već i
            prepoznatljive po svojoj efikasnosti u savladavanju izazova na
            konkurentnom tržištu. Nastojimo da ostanemo korak ispred, pa tako
            naša usluga prolazi kroz testove konkurencije i tržišnih dinamika,
            postavljajući standarde koji nadmašuju očekivanja. Uz pažljiv
            pristup i fokus na individualnim potrebama, sigurni smo da naše
            usluge predstavljaju ne samo rešenje, već i ključ za uspeh u
            digitalnom i socijalnom marketingu.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
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
