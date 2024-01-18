import "../app/globals.css";
import "../app/styles/styles.css";

const EmailForm = () => {
  return (
    <section className=" flex flex-col justify-center items-center max-container mobile-form">
      <p className="text-center mb-1   bold-18 ">ZA SVE INFORMACIJE</p>
      <p className="text-center text-2xl  bold-20">KONTAKTIRAJTE NAS</p>
      <div className="flex justify-center items-center">
        <form
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ width: "600px" }}
          action="https://formspree.io/f/xkndgpvr"
          method="POST"
        >
          <div className="mb-3">
            <div className="mb-5">
              <div className="text-md  font-bold mb-3  ">Vaš email</div>
              <input
                type="email"
                name="Email"
                className="form-input mt-1 block w-full  py-3 rounded-full mb-3"
              />
            </div>

            <div className="mb-5">
              <div className="text-md  font-bold mb-3  ">Tema</div>
              <input
                type="text"
                name="Naslov"
                className="form-input mt-1 block w-full  py-3 rounded-full mb-3"
              />
            </div>

            <div>
              <div className="text-md font-bold mb-3 ">Poruka</div>
              <textarea
                name="Poruka"
                className="form-input mt-1 block w-full  py-6 rounded-full"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              style={{ backgroundColor: "#00308F" }}
              className="text-white px-6 py-4 rounded-full "
            >
              <span>Pošaljite poruku</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
