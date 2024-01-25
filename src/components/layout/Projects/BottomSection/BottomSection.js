import React from "react";
import { Card } from "@nextui-org/react";
import { HiOutlineDocumentText } from "react-icons/hi";

const BottomSection = ({ project }) => {
  return (
    <div className="grid lg:grid xl:flex w-full lg:grid-cols-2  md:grid-cols-2  xl:grid-cols-3 mt-5 gap-4  align-middle">
      <Card className="bg-gray-800 h-[270px] p-3 lg:-w-full  xl:w-full rounded-xl">
        <div className="">
          <h1 className="text-2xl font-bold">Payments</h1>

          {project.Payments.length > 0 && (
            <div>
              {project.Payments.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className="flex m-2 items-center gap-2  rounded-lg  p-2 bg-slate-500"
                  >
                    <span>
                      <HiOutlineDocumentText className="text-3xl text-orange-300" />
                    </span>
                    <span>{item.Service.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          {project.Payments.length === 0 && (
            <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
              <span className=" text-orange-300 font-semibold text-md">
                No Payments to Show.
              </span>
            </div>
          )}
        </div>
      </Card>
      {project.ProjectDetail.paymentType === "milestone" && (
        <Card className="bg-gray-800 h-[270px] p-3 lg:-w-full  xl:w-full rounded-xl">
          <div className="">
            <h1 className="text-2xl font-bold">Milestones</h1>

            {project.Milestones.length > 0 && (
              <div>
                {project.Milestones.map((item, index) => {
                  console.log(item);
                  return (
                    <div
                      key={index}
                      className="flex m-2 items-center gap-2  rounded-lg  p-2 bg-slate-500"
                    >
                      <span>
                        <HiOutlineDocumentText className="text-3xl text-orange-300" />
                      </span>
                      <span>{item.Service.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
            {project.Milestones.length === 0 && (
              <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
                <span className=" text-orange-300 font-semibold text-md">
                  No Milestones to Show.
                </span>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default BottomSection;
