import style from "../../public/css/global.module.css";
const Contact = () => {
  return (
    <div className="container mt-5 pt-5 d-flex flex-column justify-content-center align-items-center text-center">
      <h2
        className={`text-uppercase fw-bold position-relative mb-3 ${style.cMBorder}`}
      >
        Contact Us
      </h2>
      <p className="mb-5">
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore
      </p>
      <div className="row col-12 flex-lg-row flex-column ">
        <div className="col-lg-6 col-12 d-flex flex-column">
          <input
            type="text"
            className="form-control border-0 border-bottom mb-4"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control border-0 border-bottom mb-4"
            placeholder="Phone Number"
          />
          <input
            type="email"
            className="form-control border-0 border-bottom mb-4"
            placeholder="Email"
          />
          <textarea
            type="text"
            className="form-control border-0 border-bottom mb-4 pb-5"
            placeholder="Message"
          />
          <button
            type="button"
            className="ms-lg-3 my-3 col-10 col-sm-4 col-md-5 btn border-2 border-0 rounded-5 p-md-3 px-md-5 p-3 px-3 text-uppercase text-white"
            style={{ backgroundColor: "#ff5a58" }}
          >
            Send
          </button>
        </div>
        <div className="col-lg-6 col-12">
          <iframe
            src="https://maps.googleapis.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Tiaret+Algeria"
            className="col-12 mt-3 m-lg-0 "
            style={{ height: "400px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
