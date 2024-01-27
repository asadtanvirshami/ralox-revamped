import React, { memo} from "react";

import DashboardLayout from "@/components/shared/DashboardLayout/DashboardLayout";
import Projects from "./Projects/index";

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <Projects />
    </DashboardLayout>
  );
};

export default memo(UserDashboard);

