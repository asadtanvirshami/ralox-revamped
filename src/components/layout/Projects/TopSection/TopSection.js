import React from "react";
import { Card, Chip } from "@nextui-org/react";
import Progress from "@/components/shared/CircularProgress/CircularProgress";
import moment from "moment";

import { HiCurrencyDollar, HiOutlineClock } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiRadar } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";
import { HiHashtag } from "react-icons/hi";

const TopSection = ({ project }) => {
  console.log(project);
  return (
    <div className="grid md:grid lg:grid xl:flex lg:m-auto lg:justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mt-5 gap-4  lg:align-middle">
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Code</p>
          </span>
          <div className=" justify-end flex w-full">
            <HiHashtag className="text-2xl lg:text-3xl" />
          </div>
        </div>
        <div className="mt-2">
          <Chip
            color="warning"
            size="lg"
            className="text-xl lg:text-2xl"
            variant="flat"
          >
            #{project.ProjectDetail.code}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Deadline</p>
          </span>
          <div className=" justify-end flex w-full">
            <HiOutlineCalendar className="text-xl lg:text-3xl" />
          </div>
        </div>
        <div className="mt-2">
          <Chip color="danger" size="lg" variant="bordered">
            {moment(project.deadline).format("MMM D, YY")}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Status</p>
          </span>
          <div className=" justify-end flex w-full">
            <FiActivity
              color={
                project.ProjectDetail.status === "Pending"
                  ? "orange"
                  : project.ProjectDetail.status === "Completed"
                  ? "green"
                  : project.ProjectDetail.status === "In progress"
                  ? "purple"
                  : project.ProjectDetail.status === "Paused"
                  ? "orange"
                  : "default"
              }
              className="text-xl lg:text-3xl"
            />
          </div>
        </div>
        <div className="mt-2 ">
          <Chip
            color={
              project.ProjectDetail.status === "Pending"
                ? "warning"
                : project.ProjectDetail.status === "Completed"
                ? "success"
                : project.ProjectDetail.status === "In progress"
                ? "secondary"
                : project.ProjectDetail.status === "Paused"
                ? "danger"
                : "default"
            }
            size="lg"
            variant="dot"
          >
            {project.ProjectDetail.status}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Phase</p>
          </span>
          <div className=" justify-end flex w-full">
            <BiRadar className="text-xl lg:text-3xl" />
          </div>
        </div>
        <div className="mt-2 ">
          <Chip
            color={
              project.ProjectDetail.status === "Pending"
                ? "warning"
                : project.ProjectDetail.status === "Completed"
                ? "success"
                : project.ProjectDetail.status === "In progress"
                ? "secondary"
                : project.ProjectDetail.status === "Paused"
                ? "danger"
                : "default"
            }
            size="lg"
            variant="solid"
          >
            {project.ProjectDetail.phase}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Approval</p>
          </span>
          <div className=" justify-end flex w-full">
            <HiOutlineExclamationCircle className="text-xl lg:text-3xl" />
          </div>
        </div>
        <div className="mt-2 ">
          <Chip
            color={
              project.ProjectDetail.approved === true ? "success" : "warning"
            }
            size="lg"
            variant="flat"
          >
            {project.ProjectDetail.approved === true
              ? "Approved"
              : "Unapproved"}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Active</p>
          </span>
          <div className=" justify-end flex w-full">
            <HiOutlineClock className="text-xl lg:text-3xl" />
          </div>
        </div>
        <div className="mt-2 ">
          <Chip
            color={
              project.ProjectDetail.active === true ? "success" : "warning"
            }
            size="lg"
            variant="flat"
          >
            {project.ProjectDetail.active == true ? "Activated" : "Deactivated"}
          </Chip>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-gray-800 w-full lg:w-[200px]">
        <div className="flex w-full items-center">
          <span className="text-xl lg:text-2xl font-semibold mr-5 ">
            <p>Budget</p>
          </span>
          <div className=" justify-end flex w-full">
            <HiCurrencyDollar className="text-xl lg:text-3xl" />
          </div>
        </div>
        <p className="mt-2 md:text-xl lg:text-2xl font-bold">
          {project.budget}
        </p>
      </div>
    </div>
  );
};

export default TopSection;
