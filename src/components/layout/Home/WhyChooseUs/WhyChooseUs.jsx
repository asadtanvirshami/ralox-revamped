import React, { memo } from "react";
import Image from "next/image";

import MobileModel from "@/components/shared/3D/MobileModel";
import ButtonPrimary from "@/components/shared/Button/Button";
import SnippetCom from "@/components/shared/Snippet/Snippet";

import Icon from "../../../../../public/a_white.png";

const WhyChooseUs = () => {
  return (
    <div className="w-fit overflow-hidden container align-middle flex items-center justify-center mx-auto">
      <div
        data-aos={"fade-up"}
        className=" m-auto  h-full w-full justify-center align-middle  mt-6 mb-6"
      >
        <Image
          style={{ width: "35%", height: "80%" }}
          src={Icon}
          alt="logo"
          className="m-auto"
        />
        <div>
          <h1
            data-aos={"fade-down"}
            className=" text-md text-center font-brand lg:text-4xl md:text-3xl xl:text-[4rem] mb-8 text-gray-300"
          >
            CONSULT {"-"} CREATE {"-"} COMPLY
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 rounded-2xl" data-aos="fade-right">
            <h1 className="font-body text-1xl lg:text-4xl mb-5 font-semibold text-gray-300">
              Why Choose Algorim?
            </h1>
            <article className="font-oswald text-1xl mb-3 lg:text-[18px] text-gray-300 text-justify">
              Our specialized team of developers and QA professionals possess
              extensive expertise in diverse technologies, ensuring top-notch
              solutions and flawless user experiences. We thrive on innovation,
              staying ahead of industry trends to deliver forward-thinking and
              future-proof software solutions. Your success is our priority. We
              collaborate closely with clients to understand their goals,
              ensuring our solutions align with their business objectives. From
              web and mobile applications to CRM, ERP, CMS, SaaS products, and
              QA, we provide end-to-end solutions to meet your business needs.
              Transform your digital landscape with Algorim. Contact us today to
              embark on a journey of unparalleled software development,
              innovation, and quality assurance excellence.
            </article>
            <ButtonPrimary
              title={"Start Project"}
              color={"warning"}
              variant={"flat"}
              loading={false}
              type={"none"}
              size={"lg"}
            />
          </div>
          <div
            className="mt-5 w-full container lg:m-5  max-h-min bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-2xl"
            data-aos="fade-up-left"
          >
            <MobileModel />
          </div>
        </div>
        <div className="text-center m-6">
          <SnippetCom text={"npm run @algorim/trust"} />
        </div>
      </div>
    </div>
  );
};

export default memo(WhyChooseUs);
