import React from "react";
import { Input, Textarea } from "@nextui-org/react";

const ProjectCreate = () => {
  return (
    <div>
      <form>
        <div>
          <Input
            type="text"
            className=" text-gray-600"
            name="title"
            size="md"
            variant={"bordered"}
            label="title"
          />
          <Input
            type="date"
            className=" text-gray-600"
            name="deadline"
            size="md"
            placeholder="deadline"
            variant={"bordered"}
            label="Deadline"
          />
          <Input
            disabled
            type="text"
            className=" text-gray-600"
            name="title"
            size="md"
            variant={"bordered"}
            label="title"
          />
          <Input
            disabled
            type="text"
            className=" text-gray-600"
            name="title"
            size="md"
            variant={"bordered"}
            label="title"
          />
          <Input
            type="text"
            className=" text-gray-600"
            name="title"
            size="md"
            variant={"bordered"}
            label="title"
          />
          <Textarea
            label="Description"
            variant="bordered"
            placeholder="Enter your description"
            size="md"
            classNames={{
              base: "max-w-full",
              input: "resize-y min-h-[80px]",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectCreate;
