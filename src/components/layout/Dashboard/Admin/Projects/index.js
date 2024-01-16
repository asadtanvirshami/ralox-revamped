import React, { useState, memo, useEffect } from "react";

import { HiPlusCircle } from "react-icons/hi";
import { GoStack } from "react-icons/go";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

import Tabs from "@/components/shared/Tabs/Tabs";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import ProjectCreate from "./Forms/ProjectCreate";
import ProjectCard from "@/components/shared/ProjectCard";
import ProjectBoost from "./ProjectBoost";

import {
  getAllProjects,
  getProjectbyStatus,
  updateProject,
} from "@/api/Projects";
import { Spinner } from "@nextui-org/react";

const Projects = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [state, setState] = useState({
    createModal: false,
    boostModal: false,
    value: {},
  });

  const [query, setQuery] = useState({ active: 0, status: "" });
  const queryClient = useQueryClient();

  const {
    data: Projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
  });

  const {
    data: statusData,
    error: statusError,
    isLoading: statusLoading,
    refetch: refetchStatus,
  } = useQuery({
    queryKey: [query.status],
    queryFn: () => getProjectbyStatus(query.status),
    enabled: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  const handleClick = (step, key, status) => {
    setQuery((prev) => ({
      ...prev,
      active: step,
      status: status,
    }));

    setIsInitialRender(false);
  };

  const handleActive = (data) => {
    let active = data.active === false ? true : false;
    let tempState = [...Projects.projects];
    let i = tempState.findIndex((item) => item.ProjectDetail.id === data.id);

    tempState[i].ProjectDetail.active = active;
    const projectActivated = updateProject(tempState[i].ProjectDetail);
    if (projectActivated) {
      queryClient.setQueryData(["projects"], { projects: tempState });
    }
  };

  const handleApproval = (data) => {
    let approved = data.approved === false ? true : false;
    let phase = data.approved === false ? "Confirmed" : "Confirmation";
    let status = data.approved === false ? "In progress" : "Pending";
    let stage = data.approved === false ? "Started" : "Approval";

    let tempState = [...Projects.projects];
    let i = tempState.findIndex((item) => item.ProjectDetail.id === data.id);

    tempState[i].ProjectDetail.approved = approved;
    tempState[i].ProjectDetail.phase = phase;
    tempState[i].ProjectDetail.status = status;
    tempState[i].ProjectDetail.stage = stage;

    const projectApproved = updateProject(tempState[i].ProjectDetail);
    if (projectApproved) {
      queryClient.setQueryData(["projects"], { projects: tempState });
    }
  };

  useEffect(() => {
    if (!isInitialRender) {
      if (query.active !== undefined && query.status !== undefined) {
        refetchStatus();
      }
    }
  }, [query.active, query.status, refetchStatus, isInitialRender]);

  if (error || statusError) {
    return <div>Error: {error.message || statusError}</div>;
  }

  if (isLoading || statusLoading) {
    return (
      <div class="flex justify-center mt-5 gap-4">
        <Spinner
          className="h-96"
          size="lg"
          label="Loading..."
          color="warning"
        />
      </div>
    );
  }

  return (
    <>
      <div>
        {/* Tabs Section */}
        <div className="mt-5 mb-5 md:flex lg:flex ">
          <div>
            {Projects.projects.length > 0 && (
              <Tabs tabs={tabs} step={query.active} handleClick={handleClick} />
            )}
          </div>
          <div className="ml-auto flex items-center align-middle mt-5 md:mt-0 lg:mt-0">
            <Button
              title={"Start Project"}
              startContent={null}
              loading={false}
              variant={"flat"}
              color={"warning"}
              type={"none"}
              size={"md"}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  createModal: !prevState.createModal,
                }))
              }
              endContent={<HiPlusCircle fontSize={22} />}
            />
          </div>
        </div>

        {(!isLoading || !statusLoading) && (
          <div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-5 gap-4 justify-center">
              {((Projects.projects.length > 0 && !statusData) ||
                (query.active == 0 && query.status == "")) && (
                <>
                  {Projects.projects.map((project) => (
                    <ProjectCard
                      secondaryClick={handleActive}
                      primaryClick={handleApproval}
                      onClickEdit={() =>
                        setState((prevState) => ({
                          ...prevState,
                          createModal: !prevState.createModal,
                          value: project,
                        }))
                      }
                      data={project}
                    />
                  ))}
                </>
              )}
              {statusData && statusData.projects.length > 0 && (
                <>
                  {statusData.projects.map((project) => (
                    <ProjectCard
                      primaryClick={() =>
                        setState((prevState) => ({
                          ...prevState,
                          boostModal: !prevState.boostModal,
                          value: project,
                        }))
                      }
                      data={project}
                    />
                  ))}
                </>
              )}
            </div>
            {(!statusData && statusData == undefined) ||
              (statusData.projects.length === 0 && query.status != "" && (
                <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                  <p className="text-2xl mr-2">
                    You have no projects on {query.status}.
                  </p>
                  <div className="mt-12 lg:mt-0 text-center flex items-center justify-center">
                    <GoStack fontSize={50} color="white" />
                  </div>
                  <></>
                </div>
              ))}
            {Projects.projects.length == 0 && (
              <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                <p className="text-2xl mr-2">You have no started projects.</p>
                <div className="mt-12 lg:mt-0 text-center flex items-center justify-center">
                  <GoStack fontSize={50} color="white" />
                </div>
                <></>
              </div>
            )}
          </div>
        )}
      </div>
      <Modal
        size={"full"}
        scrollBehavior={'inside'}
        show={state.createModal}
        footer={false}
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            createModal: !prevState.createModal,
          }))
        }
        Close={() =>
          setState((prevState) => ({
            ...prevState,
            createModal: !prevState.createModal,
          }))
        }
        primaryAction={null}
        secondayAction={null}
        primaryText={""}
        secondaryText={""}
        children={
          <ProjectCreate
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                createModal: !prevState.createModal,
              }));
            }}
            projects={state.value}
          />
        }
      />
    </>
  );
};

export default memo(Projects);

const tabs = [
  {
    id: 0,
    key: "All",
    status: "",
    title: "All Projects",
  },
  {
    id: 1,
    key: "Completed",
    status: "Completed",
    title: "Completed Projects",
  },
  {
    id: 2,
    key: "Ongoing",
    status: "In progress",
    title: "Ongoing Projects",
  },
  {
    id: 3,
    key: "Paused",
    status: "Paused",
    title: "Paused Projects",
  },
  {
    id: 4,
    key: "Approval",
    status: "Pending",
    title: "On Approval",
  },
];
