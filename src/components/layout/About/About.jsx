/* eslint-disable react/no-unescaped-entities */
import React from "react";

import AOS from "aos";

import { FaHandshake } from "react-icons/fa";
import { HiChat } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";

const About = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" bg-white w-full h-screen">
      <div className="flex justify-center pt-[130px]">
        <h1
          data-aos="fade-up"
          className="font-brand text-black text-[5rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem]"
        >
          Algorim
        </h1>
      </div>
      <div className="container bg-white">
        <article className="text-black text-[18px] text-justify">
          Welcome to <strong>Algorim</strong>, a distinguished technology and
          business management solutions provider with an illustrious history of
          service excellence. Specializing in bespoke software development and
          cutting-edge solutions such as CMS, CRM, ERP, and POS, Algorim is
          dedicated to delivering innovation and unwavering quality. Excitingly,
          we are entering a new era with the introduction of our Software as a
          Service (SaaS) platform, showcasing our commitment to shaping the
          future of comprehensive management solutions. This platform is a
          testament to our dedication and marks a pivotal moment in our journey.
          At Algorim, we envision a future where management processes are
          revolutionized for businesses across the spectrum. Our mission is to
          empower organizations to thrive in a digital-first world, utilizing
          our innovative solutions for sustained success. In addition to our
          core services, we extend our expertise to encompass digital marketing,
          brand creation, cybersecurity, machine learning, AI, and cutting-edge
          research. We don't just offer services; we forge strategic
          partnerships in success. Join us on this transformative journey, where
          Algorim becomes more than a service provider – we become your
          dedicated strategic partners in redefining the future of technology
          and business management. Together, let's shape a digital landscape
          where possibilities are limitless.
        </article>
        <div className="mt-12 grid md:flex xl:flex  justify-center">
          <span className="p-12 w-fit bg-theme-700  rounded-full">
            <HiChat fontSize={52} color="white" />
          </span>
          <span className=" md:mx-12 lg:mx-12 xl:mx-12 w-fit p-12 bg-sky-300 rounded-full">
            <FaHandshake fontSize={52} color="white" />
          </span>
          <span className="p-12 w-fit bg-theme-700 rounded-full">
            <MdRocketLaunch fontSize={52} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
