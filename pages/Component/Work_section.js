import style from "../../public/css/global.module.css";
import Image from "next/image";
import ico1 from "../../public/images/icon-1.png";
import ico2 from "../../public/images/icon-2.png";
import ico3 from "../../public/images/icon-3.png";
import ico4 from "../../public/images/icon-4.png";
const Work = () => {
  return (
    <div className="container mt-5 pt-5 d-flex flex-column justify-content-center align-items-center text-center">
      <div>
        <h2
          className={`text-uppercase fw-bold position-relative mb-3 ${style.cMBorder}`}
        >
          what we do
        </h2>
        <p className="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div
            className={`card text-center d-flex align-items-center justify-content p-4 rounded-3 ${style.Card}`}
            style={{
              backgroundColor: "#1b5a8d",
              color: "white",
              height: "330px",
            }}
          >
            <Image src={ico1} className="m-2" alt={"ACCOUNTING"} />
            <div className="card-body p-0">
              <h5 className="card-title text-uppercase mb-5">Accounting</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <button
                type="button"
                className="btn border-2 border-white text-white rounded-5"
                style={{
                  padding: "10px 30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div
            className="card text-center d-flex align-items-center justify-content p-4 rounded-3"
            style={{
              backgroundColor: "#ff5a58",
              color: "white",
              height: "330px",
            }}
          >
            <Image src={ico2} alt={"ADVISOR"} />
            <div className="card-body p-0">
              <h5 className="card-title text-uppercase mb-5">Advisor</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <button
                type="button"
                className="btn border-2 border-white text-white rounded-5"
                style={{
                  padding: "10px 30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div
            className={`card text-center d-flex align-items-center justify-content p-4 rounded-3 ${style.Card}`}
            style={{
              backgroundColor: "#1b5a8d",
              color: "white",
              height: "330px",
            }}
          >
            <Image src={ico3} alt={"INVESTMENT"} />
            <div className="card-body p-0">
              <h5 className="card-title text-uppercase mb-5">Investment</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <button
                type="button"
                className="btn border-2 border-white text-white rounded-5"
                style={{
                  padding: "10px 30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
          <div
            className={`card text-center d-flex align-items-center justify-content p-4 rounded-3 ${style.Card}`}
            style={{
              backgroundColor: "#1b5a8d",
              color: "white",
              height: "330px",
            }}
          >
            <Image src={ico4} alt={"FINANCIAL"} />
            <div className="card-body p-0">
              <h5 className="card-title text-uppercase mb-5">Financial</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <button
                type="button"
                className="btn border-2 border-white text-white rounded-5"
                style={{
                  padding: "10px 30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
