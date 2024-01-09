import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/shared/Form/Input/Input";
import TextArea from "@/components/shared/Form/TextArea/TextArea";
import DatePicker from "@/components/shared/Form/DatePicker/DatePicker";
import Label from "@/components/shared/Form/Label/Label";
import Button from "@/components/shared/Button/Button";

import { createProject } from "@/api/Projects"; // Import your API function
import { useSelector } from "react-redux";
import moment from "moment";

const SignupSchema = yup.object().shape({
  //Yup schema to set the values
  title: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.string(),
  budget: yup.number().required(),
  UserId: yup.string(),
});

const ProjectCreate = ({projects}) => {
  const [date, setDate] = useState();
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.user);

console.log('====================================');
console.log(projects);
console.log('====================================');

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

  console.log(createProjectMutation); 

  const submitProjectInfo = async (data) => {
    // Your form data
    const formData = {
      ...data,
      UserId: user.loginId,
      deadline: date,
      startDate: moment().format(),
      endDate: "-",
      manager: "none",
      progress: "0",
      manager_no: "none",
      stage: "Confirmation",
      status: "Pending",
    };

    await createProjectMutation.mutate(formData);
  };
  console.log();

  return (
    <div>
      <form onSubmit={handleSubmit(submitProjectInfo)}>
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
          <div className="mt-3" />
          <Label title={"Deadline of Project"} />
          <DatePicker date={date} setDate={setDate} />
          <div className="mt-3" />
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
          <div className="mt-3" />
          <Button
            title="Submit"
            startContent={null}
            loading={createProjectMutation.isLoading}
            variant="flat"
            color="warning"
            type="submit"
            size="md"
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectCreate;

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
