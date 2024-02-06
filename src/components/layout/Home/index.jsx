/* eslint-disable react/no-unescaped-entities */
import React, { memo, useEffect } from "react";
import AOS from "aos";

import { Divider } from "@nextui-org/react";


import ContactForm from "@/components/shared/ContactForm/ContactForm";
import SystematicProcess from "./SystematicProcess/SystematicProcess";
import Slider from "../../shared/Slider/Slider";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import InfoSection from "./InfoSection/InfoSection";
import ShowCase from "./ShowCase/ShowCase";
import Hero from "./Hero/Hero";
import Testamonials from "./Testamonials/Testamonials";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [{ id: 0, name: "John Casey", tag: "" }];

  return (
    <React.Fragment>
      <div className="">
        {/* Top Section Carousel and Slider */}
        <div className="relative bg-gradient-to-br from-black via-black to-black w-full overflow-hidden h-min">
          <Hero />
        </div>
        {/* SLIDER SECTION */}
        <div className=" bg-gradient-to-r  from-slate-400 via-slate-100 to-slate-400 w-full">
          <Slider />
        </div>
        {/* WHY CHOOSE US SECTION */}
        <div className="w-full overflow-hidden align-middle flex items-center justify-center mx-auto">
          <WhyChooseUs />
        </div>
        {/* SHOWCASE SECTION */}
        <ShowCase />
        {/* INFO SECTION */}
        <div className="w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400   overflow-hidden align-middle flex items-center justify-center mx-auto">
          <InfoSection />
        </div>
        {/* TESTMONIALS SECTION */}
        <Testamonials />
        {/* SYSTEMATIC PROCESS SECTION */}
        <div className="w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400   overflow-hidden align-middle flex items-center justify-center mx-auto">
          <SystematicProcess />
        </div>
        <div>
          {/* SERVICES SECTION */}
          <div className="w-full mt-8 mb-8 bg-black   overflow-hidden align-middle flex items-center justify-center mx-auto">
            <ServicesSection />
          </div>
        </div>
        <div className="bg-white">
          <Divider></Divider> {/* CONTACT FORM SECTION */}
          <div className="w-fit bg-white overflow-hidden align-middle flex items-center justify-center mx-auto">
            <div data-aos={"fade-up"} className="container mx-auto py-12 mt-5">
              <div className="row justify-center  lg:flex">
                <ContactForm
                  text={
                    "We love coming up with fresh ideas to increase conversions!"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Home);
