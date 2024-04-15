import React, { useState, memo, useEffect } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { GoStack } from "react-icons/go";
import Tabs from "@/components/shared/Tabs/Tabs";
import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/shared/Button/Button";
import ProjectCreate from "./Forms/ProjectCreate";
import ProjectCard from "@/components/shared/ProjectCard";
import ProjectBoost from "./ProjectBoost";
import { getProjectsByUserID } from "@/api/Projects";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

const Projects = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [state, setState] = useState({
    createModal: false,
    boostModal: false,
    value: {},
  });
  const [query, setQuery] = useState({
    active: 0,
    status: "",
    page: 1,
    pageSize: 8,
  });
  const userID = useSelector((state) => state.user.user);

  const {
    data,
    error,
    isLoading,
    refetch: refetchStatus,
  } = useQuery({
    queryKey: [
      "projects",
      userID?.loginId,
      query.page,
      query.pageSize,
      query.status,
    ],
    enabled: userID != null,
    queryFn: () =>
      getProjectsByUserID(
        userID.loginId,
        query.page,
        query.pageSize,
        query.status
      ),
  });

  const totalPages = Math.ceil(data?.totalCount / query.pageSize);

  const handleClick = (step, status) => {
    setQuery((prev) => ({
      ...prev,
      active: step,
      status: status,
      page: 1,
    }));

    setIsInitialRender(false);
  };

  const handlePreviousPage = () => {
    if (query.page > 1) {
      setQuery((prev) => ({
        ...prev,
        page: prev.page - 1,
      }));
    }
  };

  const handleNextPage = () => {
    // Assuming there's always a next page
    setQuery((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  useEffect(() => {
    if (!isInitialRender) {
      if (query.active !== undefined && query.status !== undefined) {
        refetchStatus();
      }
    }
  }, [query.active, query.status, refetchStatus, isInitialRender]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getPagesToShow = () => {
    const currentPage = query.page;
    const totalPages = Math.ceil(data?.totalCount / query.pageSize);

    if (totalPages <= 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2];
    } else if (currentPage === totalPages) {
      return [totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const handlePageClick = (pageNumber, status) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setQuery((prev) => ({
        ...prev,
        page: pageNumber,
      }));
    }
  };

  const pagesToShow = getPagesToShow();

  if (!data) {
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

  if (isLoading) {
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
            {data && (
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

        {!isLoading && (
          <div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-5 gap-4 justify-center">
              {(data?.projects?.length > 0 ||
                (query.active === 0 && query.status === "")) && (
                <>
                  {data?.projects.map((project, i) => (
                    <ProjectCard
                      key={i}
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
            {data?.projects.length === 0 && query.status !== "" && (
              <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                <p className="text-2xl mr-2">
                  You have no projects on {query.status}.
                </p>
                <div className="mt-12 lg:mt-0 text-center flex items-center justify-center">
                  <GoStack fontSize={50} color="white" />
                </div>
                <></>
              </div>
            )}
            {data?.projects.length === 0 && query.status === "" && (
              <div className="mt-12 p-4 text-center lg:flex items-center justify-center ">
                <p className="text-2xl mr-2">You have no started projects.</p>
                <div className="mt-12 lg:mt-0 text-center flex items-center justify-center">
                  <GoStack fontSize={50} color="white" />
                </div>
                <></>
              </div>
            )}
            {data?.projects.length > 0 && (
              <div className="flex justify-center space-x-6 mt-[100px]">
                <Button
                  title="Previous Page"
                  variant="ghost"
                  color="danger"
                  size="md"
                  onClick={handlePreviousPage}
                  disabled={query.page === 1}
                />
                {pagesToShow.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(page)}
                    className={
                      page === data?.currentPage ? "font-bold text-white" : ""
                    }
                  >
                    {page}
                  </button>
                ))}
                <Button
                  title="Next Page"
                  variant="ghost"
                  color="danger"
                  size="md"
                  onClick={handleNextPage}
                  disabled={!data || query.page === totalPages}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <Modal
        size={"md"}
        scrollBehavior={""}
        mode={"dark"}
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
          projects={data.projects}
        />
      </Modal>
      <Modal
        size={"md"}
        mode={"dark"}
        scrollBehavior={""}
        show={state.boostModal}
        footer={false}
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            boostModal: !prevState.boostModal,
          }))
        }
        Close={() =>
          setState((prevState) => ({
            ...prevState,
            boostModal: !prevState.boostModal,
          }))
        }
        primaryAction={null}
        secondayAction={null}
        primaryText={""}
        secondaryText={""}
      >
        <ProjectBoost project={state.value} />
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
