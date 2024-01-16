import React, { memo } from "react";
import { LuCheckCircle } from "react-icons/lu";
import { GoRocket } from "react-icons/go";
import { Button } from "@nextui-org/react";

const ProjectBoost = () => {
  return (
    <>
      <h1 className="flex items-center text-3xl text-center font-semibold">
        Boost Up Your Project! <GoRocket color="orange" className="ml-3" />
      </h1>
      <div className="p-2">
        <h2 className="text-2xl">
          <strong>Perks</strong> of boosting project.
        </h2>
        <div className="mt-4">
          <ul>
            {Perks.map((perk, i) => {
              return (
                <li key={i} className="flex items-center text-xl mt-1">
                  <LuCheckCircle
                    color="orange"
                    className="mr-2"
                    fontSize={21}
                  />{" "}
                  {perk.title}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="p-2">
          <h2 className="text-2xl">
            <strong>Boost Up</strong>/Service:
            <ul>
              {data.project.ProjectDetail.ProjectServices.map((boost, i) => {
                return (
                  <div key={i} className="flex items-center text-xl mt-1">
                    <div>
                      <LuCheckCircle
                        color="orange"
                        className="mr-2"
                        fontSize={21}
                      />{" "}
                    </div>
                    <div>
                      {boost.Service.name} <br />
                      <strong className="text-md">${boost.Service.boostPrice}</strong>
                    </div>
                  </div>
                );
              })}
            </ul>
          </h2>
        </div> */}
        <hr className="mt-6"></hr>
        <div className="p-2 mt-5">
          <Button
            variant={"solid"}
            color={"warning"}
            className="w-full font-bold text-xl"
          >
            $750 Boost Now!
          </Button>
          <span>
            <small>
              Once you boost the project you won't be able to cancel.
            </small>
          </span>
        </div>
      </div>
    </>
  );
};

export default memo(ProjectBoost);

const Perks = [
  { id: 0, title: "Discounts on Future Services" },
  { id: 1, title: "Priority Project Completion" },
  { id: 2, title: "Priority Scheduling" },
  { id: 3, title: "Faster Progress Updates" },
  { id: 4, title: "Extended Support Hours" },
  { id: 5, title: "Dedicated Support" },
];
