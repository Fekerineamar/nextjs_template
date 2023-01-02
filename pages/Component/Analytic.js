import style from "../../public/css/global.module.css";
import Image from "next/image";
import ico1 from "../../public/images/icon-2.png";
import ico2 from "../../public/images/icon-4.png";
import ico3 from "../../public/images/icon-3.png";
import ico4 from "../../public/images/icon-1.png";

const Analytic = () => {
  return (
    <div className={`row ${style.bg} m-0 p-0 p-3 mt-5 align-items-start`}>
      <div
        className="col-sm-3 text-center text-white fw-bold p-3"
        style={{ height: "210px" }}
      >
        <Image src={ico3} />
        <h1 className="m-3 fw-bold">1000+</h1>
        <p className="fs-5">Years of Business</p>
      </div>
      <div
        className="col-sm-3 text-center text-white fw-bold p-3"
        style={{ height: "210px" }}
      >
        <Image src={ico2} />
        <h1 className="m-3 fw-bold">20000+</h1>
        <p className="fs-5">Projects Delivered</p>
      </div>
      <div
        className="col-sm-3 text-center text-white fw-bold p-3"
        style={{ height: "210px" }}
      >
        <Image src={ico1} />
        <h1 className="m-3 fw-bold">10000+</h1>
        <p className="fs-5">Satisfied Customers</p>
      </div>
      <div
        className="col-sm-3 text-center text-white fw-bold p-3"
        style={{ height: "210px" }}
      >
        <Image src={ico4} />
        <h1 className="m-3 fw-bold">1500+</h1>
        <p className="mt-4 pt-1 fs-5">Services</p>
      </div>
    </div>
  );
};

export default Analytic;
