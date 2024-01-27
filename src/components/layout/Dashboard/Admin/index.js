import React, { memo, useState } from "react";

import Projects from "./Projects";
import DashboardLayout from "@/components/shared/DashboardLayout/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
    <Projects />
  </DashboardLayout>
  );
};

export default memo(AdminDashboard);

