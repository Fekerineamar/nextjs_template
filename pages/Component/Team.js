import style from "../../public/css/global.module.css";
import Image from "next/image";
import img_1 from "../../public/images/img-7.png";
import img_2 from "../../public/images/img-9.png";
import img_3 from "../../public/images/img-10.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const Work = () => {
  return (
    <div className="container mt-5 pt-5 d-flex flex-column justify-content-center align-items-center text-center">
      <div>
        <h2
          className={`text-uppercase fw-bold position-relative mb-3 ${style.cMBorder}`}
        >
          our team and experts
        </h2>
        <p className="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div
            className={`text-center d-flex align-items-center justify-content-center flex-column p-2`}
          >
            <Image src={img_1} alt={"img"} width={271} height={271} />
            <div className="card-body mt-3">
              <h5 className="card-title mb-3">Readable</h5>
              <h5
                className="card-text"
                style={{
                  color: "#ff5a58",
                  marginBottom: "20px",
                }}
              >
                Follow us
              </h5>

              <AiFillFacebook
                style={{
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillTwitterCircle
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillLinkedin
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="text-center d-flex align-items-center justify-content-center flex-column p-2">
            <Image src={img_2} alt={"img"} width={271} height={271} />
            <div className="card-body mt-3">
              <h5 className="card-title mb-3">Content</h5>
              <h5
                className="card-text"
                style={{
                  color: "#ff5a58",
                  marginBottom: "20px",
                }}
              >
                Follow us
              </h5>

              <AiFillFacebook
                style={{
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillTwitterCircle
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillLinkedin
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className={`text-center d-flex align-items-center justify-content-center flex-column p-2`}
          >
            <Image src={img_3} alt={"img"} width={271} height={271} />
            <div className="card-body mt-3">
              <h5 className="card-title mb-3">Readable</h5>
              <h5
                className="card-text"
                style={{
                  color: "#ff5a58",
                  marginBottom: "20px",
                }}
              >
                Follow us
              </h5>

              <AiFillFacebook
                style={{
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillTwitterCircle
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillLinkedin
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className={`text-center d-flex align-items-center justify-content-center flex-column p-2`}
          >
            <Image src={img_1} alt={"img"} width={271} height={271} />
            <div className="card-body mt-3">
              <h5 className="card-title mb-3">Content</h5>
              <h5
                className="card-text text-capitalize "
                style={{
                  color: "#ff5a58",
                  marginBottom: "20px",
                }}
              >
                Follow us
              </h5>

              <AiFillFacebook
                style={{
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillTwitterCircle
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />

              <AiFillLinkedin
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#306a98",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
