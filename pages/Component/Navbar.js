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
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav
            class="collapse navbar-collapse m-4"
            id="navbarSupportedContent"
            style={{ transition: ".2s" }}
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark active"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Routes/About"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Routes/Services"
                >
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Routes/Team"
                >
                  Team
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link text-uppercase text-dark"
                  href="/Routes/Contact"
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
