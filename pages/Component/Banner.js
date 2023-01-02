import Image from "next/image";
import banner from "../../public/images/banner-img.png";
import style from "../../public/css/global.module.css";

const Banner = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between">
      <div className="text col-10 col-sm-12 col-lg-6 m-4 p-sm-4 d-flex flex-column justify-content-between">
        <h1 className="text-uppercase fw-bold display-3">
          financial <br />
          Service
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          <br /> standard dummy text ever
        </p>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-3">
          <button
            type="button"
            className="btn border-2 mx-auto mx-sm-0 col-10 col-sm-8 col-md-6 border-danger rounded-5 px-5 p-3 fw-bold text-uppercase"
          >
            Read More
          </button>
          <button
            type="button"
            className={`ms-lg-3 my-3 mx-auto mx-sm-0 col-10 col-sm-8 col-md-6  btn border-2 border-primary rounded-5 p-3 px-5 fw-bold text-uppercase ${style.Btn}`}
          >
            Contact us
          </button>
        </div>
      </div>
      <Image
        src={banner}
        className={`col-10 col-sm-12 col-md-10 col-lg-6 position-relative h-50 mx-auto ${style.mdTop}`}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
