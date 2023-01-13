import img from "../../public/images/img-12.png";
import style from "../../public/css/global.module.css";
import Script from "next/script";
import {
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="mt-5 p-5 bg-dark">
      <div className="container">
        <div className={`row position-relative ${style.Fborder}`}>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-12 text-white">
            <div className="card-title h3">About Financial</div>
            <div className="card-body mt-3 d-flex flex-column justify-content-between align-items-start">
              <div className="pe-2 my-2">
                <IoLocationOutline className="me-3 h4" />
                Locations
              </div>
              <div className="pe-2 my-2">
                <IoPhonePortraitOutline className="me-3 h4" />
                +01 9876543210
              </div>
              <div className="pe-2 my-2">
                <IoMailOutline className="me-3 h4" />
                demo@gmail.com
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-12 text-white">
            <div className="card-title h3">About Financial</div>
            <div className="card-body mt-3 d-flex flex-column justify-content-between align-items-start">
              <p>ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
              <p>sed do eiusmod tempor </p>
              <p>incididunt</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-12 text-white">
            <div className="card-title h3">Instagram</div>
            <div className="card-body mt-3 d-flex flex-column justify-content-between align-items-start">
              <div className="pe-2 my-2">
                <Image src={img} className="me-3 h4" alt="img" />
                <Image src={img} className="me-3 h4" alt="img_1" />
              </div>
              <div className="pe-2 my-2">
                <Image src={img} className="me-3 h4" alt="img_2" />
                <Image src={img} className="me-3 h4" alt="img_3" />
              </div>
              <div className="pe-2 my-2">
                <Image src={img} className="me-3 h4" alt="img_4" />
                <Image src={img} className="me-3 h4" alt="img_5" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-12 text-white">
            <div className="card-title h3">Newsletter</div>
            <div className="card-body mt-3 d-flex flex-column justify-content-between align-items-start">
              <div className="pe-2 my-2">
                <input
                  className="p-3"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="pe-2 my-2">
                <button
                  className="btn text-uppercase py-2 px-4 text-white"
                  style={{
                    backgroundColor: "#ff5a58",
                  }}
                >
                  subscribe
                </button>
              </div>
              <div className="pe-2 my-2">
                <Link href={"#"} className="text-white">
                  <IoLogoFacebook className="me-3 h4" />
                </Link>
                <Link href={"#"} className="text-white">
                  <IoLogoTwitter className="me-3 h4" />
                </Link>
                <Link href={"#"} className="text-white">
                  <IoLogoLinkedin className="me-3 h4" />
                </Link>
                <Link href={"#"} className="text-white">
                  <IoLogoYoutube className="me-3 h4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="text-center text-white d-block mt-5">
          &copy; Copyright 2023 Designed By Free html Templates & Maded with
          <span className="text-danger h4 mx-2">&hearts;</span> by
          <a
            href="https://github.com/Fekerineamar"
            className="text-decoration-none mx-2 text-info"
          >
            Cody4code
          </a>
        </span>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      />
    </div>
  );
};

export default Footer;
