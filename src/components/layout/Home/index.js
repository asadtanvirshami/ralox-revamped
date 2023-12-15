import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useSnapshot } from "valtio";
import AOS from "aos"; // You can also use <link> for styles
import state from "@/store";
import Icon from "../../../../public/a_white.png";
import gif from "../../../../public/images/2D/bulb.jpg";
import logo from "../../../../public/white.png";
import ban from "../../../../public/banner.jpg";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import FiveGridCard from "@/components/shared/CardsGroup/FiveGridCard";
import Count from "@/components/shared/CountUp";
import Slider from "../../shared/Slider";

const Home = () => {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="relative bg-gradient-to-br from-black via-black to-black w-full overflow-hidden h-min">
        <div className="relative w-full overflow-hidden">
          <div className="relative  w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
            <Image
              src={ban}
              className="object-cover w-full h-[62rem] md:h-[70rem] lg:h-[73rem]  opacity-60"
              alt="banner"
            />
            <div
              data-aos="fade-down-right"
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
            >
              <div data-aos="fade-down">
                <Image
                  style={{ width: "100%", height: "90%" }}
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="text-center mx-4" data-aos="fade-up">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <h1 className=" font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                    WE BUILD ROBUST SOFTWARES.
                  </h1>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    We work relentlessly to provide and serve you the
                    <strong> out class and optimized</strong> applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 w-full">
        <Slider />
      </div>
      <div className="w-fit  overflow-hidden align-middle flex items-center justify-center mx-auto">
        <div
          data-aos={"fade-up"}
          className="w-2/3 gap-3 grid grid-cols-12 m-3 justify-center align-middle grid-rows-2 mt-6 mb-6"
        >
          <Image
            style={{ width: "30%", height: "20%" }}
            src={Icon}
            alt="logo"
          />
          <h1
            data-aos={"fade-down"}
            className=" text-large font-brand lg:text-5xl md:text-4xl xl:text-7xl mb-5 text-gray-300"
          >
            CONSULT {'-'} CREATE {'-'} COMPLY
          </h1>
          <div className="row lg:flex">
            <div
              className=" lg:col-7 p-4 lg:p-6 rounded-2xl "
              data-aos="fade-right"
            >
              <h1 className="font-body  lg:text-5xl mb-5 text-gray-300 ">
                Why Choose Raloxsoft?
              </h1>
              <p className="font-oswald lg:text-xl text-gray-300 text-justify">
                Our specialized team of developers and QA professionals possess
                extensive expertise in diverse technologies, ensuring top-notch
                solutions and flawless user experiences. We thrive on
                innovation, staying ahead of industry trends to deliver
                forward-thinking and future-proof software solutions. Your
                success is our priority. We collaborate closely with clients to
                understand their goals, ensuring our solutions align with their
                business objectives. From web and mobile applications to CRM,
                ERP, CMS, SaaS products, and QA, we provide end-to-end solutions
                to meet your business needs. Transform your digital landscape
                with Raloxsoft. Contact us today to embark on a journey of
                unparalleled software development, innovation, and quality
                assurance excellence.
              </p>
            </div>
            <div className="lg:col-5" data-aos="fade-up-left">
              <Card className="w-full md:w-full lg:w-full sm:col-span-4 ">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  src={gif}
                  className="z-0 w-12 h-[32rem] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos={"fade-in"}
        className="w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400  align-middle flex items-center justify-center mx-auto"
      >
        <FiveGridCard animation={"fade-down-right"} />
      </div>

      <div className="w-fit  overflow-hidden align-middle flex items-center justify-center mx-auto">
        <div
          data-aos={"fade-up"}
          className="w-2/3 gap-3 grid grid-cols-12 m-3 justify-center align-middle grid-rows-2 mt-6 mb-6"
        >
          <Count />
          <div className="row lg:flex">
            <div className="lg:col-5" data-aos="fade-up-left">
              <Card className="w-full md:w-full lg:w-full sm:col-span-4 ">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  src={gif}
                  className="z-0 w-12 h-[32rem] object-cover"
                />
              </Card>
            </div>
            <div
              className=" lg:col-7 opacity-1 p-4 lg:p-6 rounded-2xl "
              data-aos="fade-right"
            >
              <h1 className="font-body  lg:text-5xl mb-5 text-gray-300 ">
                A Platform of Skilled Engineers
              </h1>
              <p className="font-oswald lg:text-xl text-gray-300 text-justify">
                RaloxSoft helps you reach your target audience and connect with
                them like never before. Every project we work on is created from
                scratch by our talented team of designers, Developers, and
                creatives. We can create anything your business needs to rise
                above the competition and make a real impact. Traditional ways
                are passe: Today's digital world requires unconventional designs
                that work across every platform and attract the customers you
                want to reach: Our creative team is well versed in the latest UX
                design trends and is ready to build the perfect experience for
                your brand. Create compelling experiences that turn your
                customers into raving fans. At RaloxSoft, we believe that
                experience is everything.
              </p>
            </div>
          </div>

          <div className="row lg:flex">
            <div
              className=" lg:col-7 p-4 lg:p-6 rounded-2xl "
              data-aos="fade-right"
            >
              <h1 className="font-body  lg:text-5xl mb-5 text-gray-300 ">
                Think of us as an extension of your organization, working
                tirelessly to give you the results that will take you to the
                top.
              </h1>
              <p className="font-oswald lg:text-xl text-gray-300 text-justify">
                Our branding studio fully understands the difficulty of putting
                the responsibility and the future of your company in the hands
                of another; that is why we pour all our skills, time, and
                expertise into every single project we get. We take pride in our
                highly affordable packages that are fully aligned with your
                business goals and keep ourselves up to date with the current
                market techniques so that we can provide result-driven business
                solutions that help your business grow and prosper. It’s a
                failure for us if we can’t get your business to the heights we
                promised.
              </p>
            </div>
            <div className="lg:col-5" data-aos="fade-up-left">
              <Card className="w-full md:w-full lg:w-full sm:col-span-4 ">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  src={gif}
                  className="z-0 w-12 h-[32rem] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
