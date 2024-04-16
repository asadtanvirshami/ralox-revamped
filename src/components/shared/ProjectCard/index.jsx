import React, { memo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
  CircularProgress,
  Switch,
} from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProjectCard = ({
  array,
  data,
  primaryClick,
  secondaryClick,
  onClickEdit,
}) => {
  const user = useSelector((state) => state.user.user);

  return (
    <Card className="max-w-[350px] h-[250px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={data.ProjectDetail.progress}
            color={
              data.ProjectDetail.progress < 20
                ? "danger"
                : data.ProjectDetail.progress < 30
                ? "danger"
                : data.ProjectDetail.progress < 50
                ? "warning"
                : data.ProjectDetail.progress < 60
                ? "secondary"
                : data.ProjectDetail.progress == 100
                ? "success"
                : data.ProjectDetail.status === "In progress"
                ? "primary"
                : data.ProjectDetail.status === "Paused"
                ? "danger"
                : "default"
            }
            showValueLabel={true}
          />
          <div className="flex flex-col gap-1 items-start justify-center ">
            <h4 className="text-md font-semibold leading-none text-default-600 ">
              {data.title}
            </h4>
            <h5 className="text-small tracking-tight text-orange-300">
              {data.ProjectDetail.approved == false ? "Unapproved" : "Approved"}
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
          <p className="text-[14px] font-semibold">
            # {data.ProjectDetail.code}
          </p>
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-md text-white scrollable-content">
        <p>{data.description}</p>
        <div className="mt-4">
          <p>
            <strong>Stage: </strong>
            {data.ProjectDetail.stage}
          </p>
          <div className="mt-2" />
          <p>
            <strong>Status: </strong>
            <Chip
              variant="dot"
              color={
                data.ProjectDetail.status === "Pending"
                  ? "warning"
                  : data.ProjectDetail.status === "Completed"
                  ? "success"
                  : data.ProjectDetail.status === "In progress"
                  ? "secondary"
                  : data.ProjectDetail.status === "Paused"
                  ? "danger"
                  : "default"
              }
            >
              {data.ProjectDetail.status}
            </Chip>
          </p>
          <div className="mt-2" />
          {user.isAdmin && (
            <p className="items-center flex gap-2">
              <strong>Activated: </strong>
              <Switch
                onClick={() => secondaryClick(array, data.ProjectDetail)}
                isSelected={data.ProjectDetail.active === false ? false : true}
                color={
                  data.ProjectDetail.active === false ? "warning" : "success"
                }
                size="sm"
              />
            </p>
          )}
        </div>
      </CardBody>
      <CardFooter className="gap-3 justify-end">
        <div className="flex gap-3">
          <Button variant="flat" color="warning">
            <Link href={`/project/${data.id}`}>View Info</Link>
          </Button>
          {user.isAdmin && (
            <Button
              onClick={() => onClickEdit(data.ProjectDetail)}
              variant="solid"
              className="text-white"
              color={"warning"}
            >
              Edit
            </Button>
          )}
          {user.isAdmin && (
            <Button
              onClick={() => primaryClick(array, data.ProjectDetail)}
              variant="solid"
              className="text-white"
              color={
                data.ProjectDetail.approved === false ? "danger" : "success"
              }
            >
              {data.ProjectDetail.approved === false ? "Approve" : "Unapprove"}
            </Button>
          )}

          {!user.isAdmin && (
            <Button
              data-cy={"boost-btn"}
              onClick={primaryClick}
              variant="solid"
              color="secondary"
            >
              Boost Project
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
export default memo(ProjectCard);
