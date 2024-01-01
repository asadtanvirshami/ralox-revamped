import React, {memo, Fragment } from "react";
import dynamic from "next/dynamic";

const NavHeader = dynamic(() => import('../Header/Header'));

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavHeader />
      {children}

    </Fragment>
  );
};

export default memo(Layout);
