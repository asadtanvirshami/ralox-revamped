import React, { Fragment } from "react";

import NavHeader from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavHeader />
      {children}
    </Fragment>
  );
};

export default Layout;
