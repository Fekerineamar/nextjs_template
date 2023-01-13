import { useEffect, useState } from "react";
import style from "../../public/css/global.module.css";
import Image from "next/image";
import img from "../../public/images/img-11.png";
import bg_1 from "../../public/images/round-1.png";
import bg_2 from "../../public/images/round-2.png";
const Client = () => {
  let [counter, setCounter] = useState(0);
  const colorChange = (e) => {
    const sp = document.querySelectorAll(".spans span");
    sp.forEach((span) => (span.style.backgroundColor = "#ff5a58"));
    e.target.style.backgroundColor = "#1b5a8d";
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        let sp = document.querySelectorAll(".spans span");
        sp.forEach((span) => (span.style.backgroundColor = "#ff5a58"));
        sp[counter].style.backgroundColor = "#1b5a8d";
        setCounter(counter + 1);
        counter >= 2 && setCounter(0);
      } catch (e) {
        e && clearInterval(timer);
      }
    }, 3500);
  }, [counter]);

  return (
    <div className="container mt-5 pt-5 d-flex flex-column justify-content-center align-items-center text-center">
      <div>
        <h2
          className={`text-uppercase fw-bold position-relative my-5 ${style.cMBorder}`}
        >
          what is says our Clients
        </h2>
      </div>
      <div className="row justify-content-center">
        <div>
          <div
            className={`text-center d-flex align-items-center justify-content-center flex-column p-2`}
          >
            <div className="d-inline-flex justify-content-between align-items-center col-sm-6 col-lg-4 col-12">
              <Image src={bg_1} alt={"bg1"} className="d-none d-sm-block" />
              <Image src={img} alt={"client-face"} className="mx-2" />
              <Image src={bg_2} alt={"bg2"} className="d-none d-sm-block" />
            </div>
            <div className="card-body my-4">
              <p className="card-text my-4 mx-auto w-75">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </p>
              <span className="d-block spans">
                <span
                  onClick={(e) => colorChange(e)}
                  style={{
                    backgroundColor: "#ff5a58",
                    marginLeft: "5px",
                    width: "60px",
                    height: "15px",
                    display: "inline-block",
                    borderRadius: "4px",
                    transition: ".3s",
                  }}
                ></span>
                <span
                  onClick={(e) => colorChange(e)}
                  style={{
                    backgroundColor: "#ff5a58",
                    marginLeft: "5px",
                    width: "60px",
                    height: "15px",
                    display: "inline-block",
                    borderRadius: "4px",
                    transition: ".3s",
                  }}
                ></span>
                <span
                  onClick={(e) => colorChange(e)}
                  style={{
                    backgroundColor: "#ff5a58",
                    marginLeft: "5px",
                    width: "60px",
                    height: "15px",
                    display: "inline-block",
                    borderRadius: "4px",
                    transition: ".3s",
                  }}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
