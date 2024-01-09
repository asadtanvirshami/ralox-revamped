import React, { memo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
  CircularProgress,
} from "@nextui-org/react";

const ProjectCard = ({ data, primaryClick}) => {
  return (
    <Card className="max-w-[350px] h-[250px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={data.progress}
            color={
              data.progress < 20
                ? "danger"
                : data.progress < 30
                ? "danger"
                : data.progress < 50
                ? "warning"
                : data.progress < 60
                ? "secondary"
                : data.progress == 100
                ? "success"
                : data.status === "In progress"
                ? "primary"
                : data.status === "Paused"
                ? "danger"
                : "default"
            }
            showValueLabel={true}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-md font-semibold leading-none text-default-600">
              {data.title}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          disabled={true}
          color="warning"
          radius="full"
          size="sm"
          variant={"flat"}
        >
          <p className="text-[14px] font-semibold"># {data.code}</p>
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-md text-white">
        <p>{data.description}</p>
        <div className="mt-4">
          <p>
            <strong>Stage: </strong>
            {data.stage}
          </p>
          <div className="mt-2" />
          <p>
            <strong>Status: </strong>
            <Chip
              variant="dot"
              color={
                data.status === "Pending"
                  ? "warning"
                  : data.status === "Completed"
                  ? "success"
                  : data.status === "In progress"
                  ? "secondary"
                  : data.status === "Paused"
                  ? "danger"
                  : "default"
              }
            >
              {data.status}
            </Chip>
          </p>
        </div>
      </CardBody>
      <CardFooter className="gap-3 justify-end">
        <div className="flex gap-3">
          <Button variant="flat" color="warning">
            View Info
          </Button>
          <Button onClick={primaryClick} variant="solid" color="secondary">
            Boost Project
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default memo(ProjectCard);
