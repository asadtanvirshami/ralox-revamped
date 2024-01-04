import React, { memo, Fragment, useState } from "react";
import dynamic from "next/dynamic";

const NavHeader = dynamic(() => import("../Header/Header"));
const AccessAuth = dynamic(() => import("../../layout/Auth/Auth"));

const Layout = ({ children }) => {



  return (
    <Fragment>
      <NavHeader/>
      {children}
      <AccessAuth />
    </Fragment>
  );
};

export default memo(Layout);
