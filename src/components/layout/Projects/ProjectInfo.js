// components/ProjectInfo.js
import React, { memo } from "react";
import { Spinner } from "@nextui-org/react";

import TopSection from "./TopSection/TopSection";
import InfoSection from "./InfoSection/InfoSection";
import BottomSection from "./BottomSection/BottomSection";

const ProjectInfo = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner
          className="h-96"
          size="lg"
          label="Loading..."
          color="warning"
        />
      </div>
    );
  }

  const { projects } = data;
  const project = projects[0];

  return (
    <div className="container justify-center">
      <div className=" align-middle items-center justify-center  mt-9 w-full">
        <TopSection project={project} />
      </div>
      <div className="flex items-center justify-center mt-9 w-full">
        <InfoSection project={project} />
      </div>
      <div className="flex items-center justify-center mt-9 w-full">
        <BottomSection project={project} />
      </div>
    </div>
  );
};

export default memo(ProjectInfo);
