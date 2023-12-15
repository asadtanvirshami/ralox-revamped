import React, { Fragment } from "react";

import NavHeader from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavHeader />
      {children}
      <Footer/>
    </Fragment>
  );
};

export default Layout;
