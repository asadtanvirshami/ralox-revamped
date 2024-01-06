import React, { useState, memo, Suspense } from "react";

import { HiPlusCircle } from "react-icons/hi";
import { GoStack } from "react-icons/go";

import Tabs from "@/components/shared/Tabs/Tabs";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import ProjectCreate from "./Forms/ProjectCreate";
import ProjectCardSkeleton from "@/components/shared/Skeleton/Card";
import ProjectCard from "@/components/shared/ProjectCard";

import { getProjectsByStatus } from "@/api/Projects";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

const Projects = () => {
  const [active, setActive] = useState(0);

  const userID = useSelector((state) => state.user.user);

  const { data, error, isLoading } = useQuery(
    ["projects", userID.loginId],
    () => getProjectsByStatus(userID.loginId)
  );

  const [state, setState] = useState({ createModal: false });

  const handleClick = (step, type) => {
    setActive(step);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div class="grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
        <ProjectCardSkeleton />
      </div>
    );
  }

  return (
    <>
      <div>
        {/* Tabs Section */}
        <div className="mt-5 mb-5 md:flex lg:flex">
          <div>
            {data.length > 0 && (
              <Tabs tabs={tabs} step={active} handleClick={handleClick} />
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

        {!isLoading && (
          <div>
            <div class="grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
              <Suspense fallback={<Spinner />}>
                {data.length > 0 && (
                  <div>
                    {data.map((project) => (
                      <ProjectCard />
                    ))}
                  </div>
                )}
              </Suspense>
            </div>
            {data.length == 0 && (
              <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                <p className="text-2xl mr-2">You have no ongoing projects.</p>
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
        title={"Project Creation"}
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
        <ProjectCreate />
      </Modal>
    </>
  );
};

export default memo(Projects);

const tabs = [
  {
    id: 0,
    key: "All",
    title: "All Projects",
  },
  {
    id: 1,
    key: "Completed",
    title: "Completed Projects",
  },
  {
    id: 2,
    key: "Ongoing",
    title: "Ongoing Projects",
  },
  {
    id: 3,
    key: "Paused",
    title: "Paused Projects",
  },
];
