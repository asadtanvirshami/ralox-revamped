import React, { useState, memo } from "react";
import { useMutation, useQueryClient } from "react-query";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/shared/Form/Input/Input";
import TextArea from "@/components/shared/Form/TextArea/TextArea";
import DatePicker from "@/components/shared/Form/DatePicker/DatePicker";
import SelectService from "@/components/shared/SelectService/SelectService";
import Label from "@/components/shared/Form/Label/Label";
import Button from "@/components/shared/Button/Button";
import { Card, Divider } from "@nextui-org/react";

import { createProject } from "@/api/Projects"; // Import your API function
import { useSelector } from "react-redux";
import moment from "moment";
import RadioNext from "@/components/shared/Form/RadioGroup/RadioGroup";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

const SignupSchema = yup.object().shape({
  //Yup schema to set the values
  title: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.string(),
  budget: yup.number().required(),
  service: yup.string().required(),
  paymentType: yup.string().required(),
});

const ProjectCreate = ({ onClick, projects }) => {
  const [date, setDate] = useState();
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.user);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    //passing the props in the useForm yupResolver
    resolver: yupResolver(SignupSchema),
    defaultValues: "ds",
  });

  const createProjectMutation = useMutation(createProject, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("projects");
      reset();
    },
  });

  const submitProjectInfo = async (data) => {
    // Your form data
    const formData = {
      ...data,
      UserId: user.loginId,
      deadline: date,
      startDate: moment().format(),
    };

    await createProjectMutation.mutate(formData);
  };

  console.log(projects);

  return (
    <div>
      <form onSubmit={handleSubmit(submitProjectInfo)}>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="border border-solid border-whit p-3 lg:-w-full  xl:w-full rounded-xl">
            <div>
              <Label title={"Title of Project"} />
              <Input
                register={register}
                control={control}
                disabled={false}
                type="text"
                placeholder={"Title"}
                className="text-gray-600"
                name="title"
              />
              <div className="mt-2" />
              <Label title={"Deadline of Project"} />
              <DatePicker date={date} setDate={setDate} />
              <div className="mt-2" />
              <Label title={"Budget"} />
              <Input
                register={register}
                control={control}
                disabled={false}
                type="number"
                placeholder={"Budget"}
                className="text-gray-600"
                name="budget"
              />
              <div className="mt-3" />
              <RadioNext
                label={"Payment Type"}
                options={paymentTypes}
                orientation={"horizontal"}
                name={"paymentType"}
                register={register}
                control={control}
                color={"warning"}
              />
              <div className="mt-3" />
              <Label title={"Service"} />
              <SelectService register={register} control={control} />
              <div className="mt-2" />
              <Label title={"Description"} />
              <TextArea
                register={register}
                control={control}
                disabled={false}
                type="text"
                placeholder={"Description of a project..."}
                className="text-gray-600"
                name="description"
              />
            </div>
          </div>
          <div>
            <div className=" h-5 items-center">
              <div className="border border-solid border-white h-[300px] p-3 lg:-w-full  xl:w-full rounded-xl">
                <div className="">
                  <h1 className="text-2xl font-bold">Payments</h1>
                  {projects.Payments.length > 0 && (
                    <div>
                      {projects.Payments.map((item, index) => {
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
                  {projects.Payments.length === 0 && (
                    <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
                      <span className=" text-orange-300 font-semibold text-md">
                        No Payments to Show.
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {projects.ProjectDetail.paymentType === "milestone" && (
                <div className="border border-solid mt-5 border-white h-[300px] p-3 lg:-w-full  xl:w-full rounded-xl">
                  <div className="">
                    <h1 className="text-2xl font-bold">Milestones</h1>

                    {projects.Milestones.length > 0 && (
                      <div>
                        {projects.Milestones.map((item, index) => {
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
                    {projects.Milestones.length === 0 && (
                      <div className="flex m-2 items-center gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
                        <span className=" text-orange-300 font-semibold text-md">
                          No Milestones to Show.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="border border-solid mt-5 border-white h-[300px] p-3 lg:-w-full  xl:w-full rounded-xl">
                <div className="">
                  <h1 className="text-2xl font-bold">Services</h1>

                  {projects.ProjectDetail.ProjectServices.length > 0 && (
                    <div>
                      {projects.ProjectDetail.ProjectServices.map(
                        (item, index) => {
                          console.log(item);
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
                        }
                      )}
                    </div>
                  )}
                  {projects.ProjectDetail.ProjectServices.length === 0 && (
                    <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
                      <span className=" text-orange-300 font-semibold text-md">
                        No project services to show.
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="border border-solid mt-5 border-white h-[300px] p-3 lg:-w-full  xl:w-full rounded-xl">
                <div className="">
                  <h1 className="text-2xl font-bold">Documents & Images</h1>

                  {projects.ProjectDetail.ProjectDocuments.length > 0 && (
                    <div>
                      {projects.ProjectDetail.ProjectDocuments.map(
                        (item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex m-2 items-center gap-2  rounded-lg  p-2 bg-slate-500"
                            >
                              <span>
                                <HiOutlineDocumentText className="text-3xl text-orange-300" />
                              </span>
                              <span>File ETC 2nd Operation</span>
                              <small>File ETC 2nd Operation</small>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                  {projects.ProjectDetail.ProjectDocuments.length === 0 && (
                    <div className="flex m-2 items-center w-dull gap-2  rounded-lg h-full align-middle justify-center bg-warning-400 bg-opacity-30 border-warning-600 border-opacity-60  border border-solid p-3 ">
                      <span className=" text-orange-300 font-semibold text-md">
                        No documents or images to show.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2" />
        <Button
          title="Submit"
          startContent={null}
          loading={createProjectMutation.isLoading}
          variant="flat"
          color="warning"
          type="submit"
          size="md"
        />
        <span>
          <Button
            title="Cancel"
            startContent={null}
            disabled={createProjectMutation.isLoading}
            variant="flat"
            color="default"
            onClick={onClick}
            size="md"
          />
        </span>
      </form>
    </div>
  );
};

export default memo(ProjectCreate);

const paymentTypes = [
  {
    name: "One-Time (Full payment)",
    value: "full",
    description: "Full payment at once.",
  },
  {
    name: "Two-Milestone",
    value: "milestone",
    description: "half payment before and after completion.",
  },
];

// {
//   "title":"Web development",
//   "description":"Need a website for ecommerce business that should consist of a user admin and dashboard.",
//   "deadline":"10-12-23",
//   "stage":"Approval",
//   "status":"Approval",
//   "progress":"0",
//   "start_date":"10-12-23",
//   "manager":"",
//   "manager_no":"",
//   "end_date":"10-12-23",
//   "UserId":931799770025295873
//  }

// DataTypes.ENUM(
//   "Development",
//   "UI/UX",
//   "Q/A",
//   "Negative Q/A",
//   "Deployment",
//   "Creating Draft",
//   "Brand Creation",
//   "Publishing Campaign",
//   "Creating Campaign",
//   "Campaign Published",
//   "Analysis Of Results"
// ),
