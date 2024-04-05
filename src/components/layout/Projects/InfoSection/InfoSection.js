import React from "react";
import moment from "moment";

import Progress from "@/components/shared/CircularProgress/CircularProgress";
import { Card } from "@nextui-org/react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiPhotograph } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";


const InfoSection = ({ project }) => {
  console.log(project.ProjectDetail.ProjectDocuments);
  return (
    <div className="grid lg:grid xl:flex w-full lg:grid-cols-2  md:grid-cols-2  xl:grid-cols-3 mt-5 gap-4  align-middle">
      <Progress
        title={project.ProjectDetail.phase}
        percentage={project.ProjectDetail.progress}
      />
      <Card className="bg-gray-800 p-3 lg:-w-full  xl:w-full rounded-xl">
        <div className="">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p>{project.description.slice(0, 99)}...</p>
        </div>
        <div className="flex h-full items-end mt-3">
          <label className="mr-3 font-bold">Project Manager: </label>
          <p className="font-bold"> {project.ProjectDetail.manager}</p>
        </div>
        <div className="flex items-end ">
          <label className="mr-3 font-bold">Manager No: </label>
          <p className="font-bold"> {project.ProjectDetail.managerNo}</p>
        </div>
        <div className=" items-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  p-4">
          <div className=" bg-blue-400 bg-opacity-30 border-blue-600 border-opacity-60  border border-solid p-3 rounded-lg m-1">
            <label className="mr-3 font-semibold text-md">Start Date: </label>
            <p className="font-semibold text-[12px]">
              {moment(project.ProjectDetail.startDate).format("MMMM D, YYYY")}
            </p>
          </div>
          <div className=" bg-red-400 bg-opacity-30 border-red-600 border-opacity-60  border border-solid p-3 rounded-lg m-1">
            <label className="mr-3 font-semibold text-md">End Date: </label>
            <p className="font-semibold text-[12px]">
              {project.ProjectDetail.endDate === "Not-ended"
                ? "Not ended"
                : moment(project.ProjectDetail.endDate).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
      </Card>
      <Card className="bg-gray-800 h-[270px] p-3 lg:-w-full  xl:w-full rounded-xl">
        <div className="">
          <h1 className="text-2xl font-bold">Services</h1>

          {project.ProjectDetail.ProjectServices.length > 0 && (
            <div>
              {project.ProjectDetail.ProjectServices.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex m-2 items-center gap-2  rounded-lg  p-2 bg-slate-500"
                  >
                    <span>
                      <MdOutlineMiscellaneousServices className="text-3xl text-orange-300" />
                    </span>
                    <span>{item.Service.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          {project.ProjectDetail.ProjectServices.length === 0 && (
            <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
              <span className=" text-orange-300 font-semibold text-md">
                No project services to show.
              </span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default InfoSection;
