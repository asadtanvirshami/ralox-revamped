import React, { memo, useState } from "react";

import TopSection from "./TopSection";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className="md:m-12 lg:m-12">
      {/* Top Panel Section */}
      <TopSection />
      {/*Project Component Render */}
      <Projects />
    </div>
  );
};

export default memo(Dashboard);

