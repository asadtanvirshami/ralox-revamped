import React, { useState, memo, useEffect } from "react";

import { useQuery, useQueryClient } from "react-query";
import { HiPlusCircle } from "react-icons/hi";

import Tabs from "@/components/shared/Tabs/Tabs";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import ProjectCreate from "./Forms/ProjectCreate";
import ProjectCard from "@/components/shared/ProjectCard";

import {
  getAllProjects,
  getProjectbyStatus,
  updateProject,
  getProjectsByCode,
} from "@/api/Projects";
import { Input, Spinner } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [state, setState] = useState({
    createModal: false,
    value: {},
  });

  const [query, setQuery] = useState({ active: 0, status: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const {
    data: Projects,
    error,
    isLoading,
    refetch: refetchAllProjects,
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

  const {
    data: searchedProject,
    error: searchedError,
    isLoading: searchedLoading,
    refetch: refetchSearchProject,
  } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getProjectsByCode(searchTerm),
    enabled: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  const handleClick = (step, status) => {
    setQuery((prev) => ({
      ...prev,
      active: step,
      status: status,
    }));

    setIsInitialRender(false);
  };

  const handleActive = (array, data) => {
    if (array === undefined) {
      return null;
    }
    const Array = [...array.projects];
    let active = data.active === false ? true : false;
    let tempState = Array;
    let i = tempState.findIndex((item) => item.ProjectDetail.id === data.id);

    if (tempState[i] && tempState[i].ProjectDetail) {
      tempState[i].ProjectDetail.active = active;
      const projectActivated = updateProject(tempState[i].ProjectDetail);
      if (projectActivated) {
        queryClient.setQueryData(["projects"], { projects: tempState });
      }
    }
  };

  const handleApproval = (array, data) => {
    if (array === undefined) {
      return null;
    }

    let approved = data.approved === false ? true : false;
    let phase = data.approved === false ? "Confirmed" : "Confirmation";
    let status = data.approved === false ? "In progress" : "Pending";
    let stage = data.approved === false ? "Started" : "Approval";

    const Array = [...array.projects];
    let tempState = Array;

    let i = tempState.findIndex((item) => item.ProjectDetail.id === data.id);

    if (tempState[i] && tempState[i].ProjectDetail) {
      tempState[i].ProjectDetail.approved = approved;
      tempState[i].ProjectDetail.phase = phase;
      tempState[i].ProjectDetail.status = status;
      tempState[i].ProjectDetail.stage = stage;

      const projectApproved = updateProject(tempState[i].ProjectDetail);
      if (projectApproved) {
        queryClient.setQueryData(["projects"], { projects: tempState });
      }
    }
  };

  useEffect(() => {
    if (!isInitialRender) {
      if (
        query.active !== undefined &&
        query.active !== 0 &&
        query.status !== undefined &&
        query.status !== ""
      ) {
        refetchStatus();
      }
    }
  }, [query.active, query.status, refetchStatus, isInitialRender]);

  useEffect(() => {
    if (query.active === 0 && searchTerm === "") {
      refetchAllProjects();
    }
  }, [query.active]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      refetchSearchProject();
    }
  }, [searchTerm]);

  if (error || statusError || searchedError) {
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
            {query.active == 0 && (
              <Input
                placeholder="Search Code #3875"
                labelPlacement="outside"
                onChange={(e) => setSearchTerm(e.target.value)}
                endContent={
                  <MagnifyingGlassIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
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
        {searchedLoading && (
          <div class="flex justify-center mt-5 gap-4">
            <Spinner
              className="h-96"
              size="lg"
              label="Loading..."
              color="warning"
            />
          </div>
        )}
        {!isLoading && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4 justify-center">
              {Projects.projects.length > 0 &&
                !statusData &&
                query.active === 0 &&
                searchTerm === "" &&
                query.status === "" && (
                  <>
                    {Projects.projects.map((project, i) => (
                      <ProjectCard
                        key={i}
                        array={Projects}
                        secondaryClick={handleActive}
                        primaryClick={handleApproval}
                        onClickEdit={() => handleEdit(project)}
                        data={project}
                      />
                    ))}
                  </>
                )}
              {statusData && statusData.projects.length > 0 && (
                <>
                  {statusData.projects.map((project, i) => (
                    <ProjectCard
                      key={i}
                      array={statusData}
                      secondaryClick={handleActive}
                      primaryClick={handleApproval}
                      onClickEdit={() => handleEdit(project)}
                      data={project}
                    />
                  ))}
                </>
              )}
              {searchTerm != "" &&
                query.active === 0 &&
                searchedProject &&
                searchedProject?.projects?.length > 0 && (
                  <>
                    {searchedProject.projects.map((project, i) => (
                      <ProjectCard
                        key={i}
                        array={searchedProject}
                        secondaryClick={handleActive}
                        primaryClick={handleApproval}
                        onClickEdit={() => handleEdit(project)}
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
                  {/* ... (other error handling) */}
                </div>
              ))}
            {(!searchedProject && searchedProject == undefined) ||
              (searchedProject?.projects?.length === 0 &&
                searchTerm != "" &&
                query.active === 0 && (
                  <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                    <p className="text-2xl mr-2">
                      You have no projects with #{searchTerm}.
                    </p>
                    {/* ... (other error handling) */}
                  </div>
                ))}
            {Projects.projects.length == 0 && (
              <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                <p className="text-2xl mr-2">You have no started projects.</p>
                {/* ... (other error handling) */}
              </div>
            )}
          </div>
        )}
      </div>
      <Modal
        size={"full"}
        scrollBehavior={"inside"}
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
      >
        <ProjectCreate
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              createModal: !prevState.createModal,
            }));
          }}
          projects={state.value}
        />
      </Modal>
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
