import React, { memo, Fragment, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "../Footer/Footer";
import ChatModal from "../ChatModal";

const NavHeader = dynamic(() => import("../Header/Header"));
const AccessAuth = dynamic(() => import("../../layout/Auth/User/Auth"));

const Layout = ({ children }) => {
 
  return (
    <Fragment>
      <NavHeader />
      {children}
      <AccessAuth />
      <ChatModal/>
      <Footer/>
    </Fragment>
  );
};

export default memo(Layout);
