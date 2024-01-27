import React from "react";
import { useSelector } from "react-redux";

import UserDashboard from "../Dashboard/User/index";
import AdminDasboard from "../Dashboard/Admin/index";

const DashboardPanel = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <React.Fragment>
      {!user?.isAdmin && <UserDashboard />}
      {user?.isAdmin && <AdminDasboard />}
    </React.Fragment>
  );
};

export default DashboardPanel;
