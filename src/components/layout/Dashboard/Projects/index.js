import React, { useState, memo, useEffect } from "react";

import { HiPlusCircle } from "react-icons/hi";
import { GoStack } from "react-icons/go";

import Tabs from "@/components/shared/Tabs/Tabs";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import ProjectCreate from "./Forms/ProjectCreate";
import ProjectCard from "@/components/shared/ProjectCard";

import { getProjectByStatus, getProjectsByUserID } from "@/api/Projects";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";


const Projects = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [state, setState] = useState({ createModal: false });

  const [query, setQuery] = useState({ active: 0, status: "" });
  const userID = useSelector((state) => state.user.user);

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects", userID.loginId],
    enabled: userID != null,
    queryFn: () => getProjectsByUserID(userID.loginId),
  });

  const {
    data: statusData,
    error: statusError,
    isLoading: statusLoading,
    refetch: refetchStatus,
  } = useQuery({
    queryKey: [query.status, userID],
    queryFn: () =>  getProjectByStatus(userID.loginId, query.status),
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
            {data.projects.length > 0 && (
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
              {((data.projects.length > 0 && !statusData) ||
                (query.active == 0 && query.status == "")) && (
                <>
                  {data.projects.map((project) => (
                    <ProjectCard data={project} />
                  ))}
                </>
              )}
              {statusData && statusData.projects.length > 0 && (
                <>
                  {statusData.projects.map((project) => (
                    <ProjectCard data={project} />
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
            {data.projects.length == 0 && (
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
        children={<ProjectCreate projects={data.projects} />}
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
