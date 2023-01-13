import Image from "next/image";
import img_2 from "../../public/images/img-3.png";
import img_3 from "../../public/images/img-4.png";
import img_4 from "../../public/images/img-5.png";
import img_1 from "../../public/images/img-2.png";
import img_bg from "../../public/images/img-6.png";
import style from "../../public/css/global.module.css";
import search_bg from "../../public/images/search-icon.png";
const Project = () => {
  return (
    <div className="container d-block d-lg-flex flex-column flex-lg-row justify-content-between align-items-center mt-5 pt-5 ">
      <div className="position-relative m-5">
        <h2
          className={`text-uppercase fw-bold position-relative mb-3 ${style.cBorder}`}
        >
          our projects
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
        <button
          type="button"
          className={`my-3 btn border-2 border-primary rounded-5 p-3 px-5 ${style.Btn} text-primary`}
        >
          Read More
        </button>
        <Image
          src={img_bg}
          className="position-absolute mt-3"
          style={{ left: "-100px", zIndex: "-1" }}
          alt="Projectimage"
        />
      </div>
      <div className="d-inline-flex flex-column flex-wrap align-items-center mt-5 col-sm-12 col-12 col-md-6 col-lg-3 pe-md-3">
        <div
          className={`position-relative col-10 col-md-12 ${style.imgHover} mt-3`}
        >
          <Image
            alt="img"
            src={img_1}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div
            className={`position-absolute text-center`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transition: ".3s",
              zIndex: "2",
              opacity: "0",
            }}
          >
            <Image alt="icon2" src={search_bg} />
            <p className="mt-3">Established Fact</p>
          </div>
        </div>
        <div
          className={`position-relative col-10 col-md-12 ${style.imgHover} mt-3`}
        >
          <Image
            alt="chess_img"
            src={img_2}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div
            className={`position-absolute text-center`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transition: ".3s",
              zIndex: "2",
              opacity: "0",
            }}
          >
            <Image alt="cash_img" src={search_bg} />
            <p className="mt-3">Established Fact</p>
          </div>
        </div>
      </div>
      <div className="d-inline-flex flex-column flex-wrap align-items-center mt-5 col-sm-12 col-12 col-md-6 col-lg-3 ">
        <div
          className={`position-relative col-10 col-md-12 ${style.imgHover} mt-3`}
        >
          <Image
            alt="phone_image"
            src={img_3}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div
            className={`position-absolute text-center`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transition: ".3s",
              zIndex: "2",
              opacity: "0",
            }}
          >
            <Image alt="search_ico" src={search_bg} />
            <p className="mt-3">Established Fact</p>
          </div>
        </div>
        <div
          className={`position-relative col-10 col-md-12 ${style.imgHover} mt-3 `}
        >
          <Image
            alt="icon"
            src={img_4}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div
            className={`position-absolute text-center`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transition: ".3s",
              zIndex: "2",
              opacity: "0",
            }}
          >
            <Image alt="icon" src={search_bg} />
            <p className="mt-3">Established Fact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
