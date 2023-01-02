import { Fragment } from "react";
import Analytic from "./Component/Analytic";
import Banner from "./Component/Banner";
import Project from "./Component/Project";
import Service_section from "./Component/Service_section";
import Work from "./Component/Work_section";
import Team from "./Component/Team";
import Client from "./Component/Our_client";
const index = () => {
  return (
    <Fragment>
      <Banner />
      <Service_section />
      <Work />
      <Project />
      <Analytic />
      <Team />
      <Client />
    </Fragment>
  );
};

export default index;
