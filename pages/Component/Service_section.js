import Image from "next/image";
import img from "../../public/images/img-1.png";
import img_bg from "../../public/images/services-bg.png";
import style from "../../public/css/global.module.css";
const service = () => {
  return (
    <div
      className="service-container mt-5 pt-5"
      style={{
        background: `url(${img_bg.src}) no-repeat`,
        backgroundSize: "100%",
      }}
    >
      <div className="container d-flex justify-content-between mt-5 flex-column flex-lg-row">
        <div className="text col-lg-6 col-10">
          <h2
            className={`text-uppercase fw-bold position-relative ${style.cBorder}`}
          >
            welcome to financial services
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it
          </p>
          <button
            type="button"
            className={`mt-3 btn border-2 border-primary rounded-5 p-3 px-5 ${style.Btn} text-primary`}
          >
            Read More
          </button>
        </div>
        <Image alt="icon" src={img} className="col-lg-6 col-10 mt-3" />
      </div>
    </div>
  );
};

export default service;
