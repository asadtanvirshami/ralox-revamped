/* eslint-disable react/no-unescaped-entities */
import React,{memo} from "react";
import InfoCard from "@/components/shared/InfoCard/InfoCard";

const Testamonials = () => {
  return (
    <div className="container mx-auto py-12 mt-5">
      <h2
        data-aos="fade-up"
        className="text-3xl text-center lg:text-6xl font-bold mb-6 text-slate-300 "
      >
        Echoes of Excellence from Those Who've Experienced Our Distinctive Touch
      </h2>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12">
        <InfoCard animation="fade-up-right" />
        <InfoCard animation="fade-up-right" />
        <InfoCard animation="fade-up-right" />
        <InfoCard animation="fade-up-right" />
        <InfoCard animation="fade-up-right" />
        <InfoCard animation="fade-up-right" />
      </div>
    </div>
  );
};

export default memo(Testamonials);
