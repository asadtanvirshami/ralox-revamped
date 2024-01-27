import React from "react";

import { Divider } from "@nextui-org/react";

import moment from "moment";
import { useSelector } from "react-redux";

const DashboardLayout = ({children}) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="md:m-12 lg:m-12 ">
      <div className="mt-5 ">
        <div className="md:flex lg:flex ">
          <div>
            <h1 className="font-bold text-4xl">Welcome, {user?.username}</h1>
            <h1 className="font-semibold text-xl text-orange-200">
              {user?.email}
            </h1>
          </div>
          <div className=" ml-auto ">
            <h1 className="font-semibold text-xl">
              {moment().format("MMMM Do YYYY")}
            </h1>
            <h1 className="font-semibold text-xl">{moment().format("dddd")}</h1>
          </div>
        </div>
        <Divider className="mt-5" />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
