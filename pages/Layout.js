import { Fragment } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
