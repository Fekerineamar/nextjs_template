import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Image src={Logo} alt="logo" className="navbar-brand h-auto" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav
            className="collapse navbar-collapse m-4"
            id="navbarSupportedContent"
            style={{ transition: ".2s" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark active"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Component/Service_section"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Component/Work_section"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Component/Team"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Component/Contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
