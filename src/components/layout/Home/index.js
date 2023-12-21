/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import FiveGridCard from "@/components/shared/CardsGroup/FiveGridCard";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import ButtonPrimary from "@/components/shared/Button";

import Icon from "../../../../public/a_white.png";
import gif from "../../../../public/images/2D/bulb.jpg";
import logo from "../../../../public/algo.png";
import Count from "@/components/shared/CountUp";
import Slider from "../../shared/Slider";
import InfoCard from "@/components/shared/InfoCard";
import SnippetCom from "@/components/shared/Snippet";
import PlainCard from "@/components/shared/PlainCard";
import MobileModel from "@/components/shared/3D/MobileModel";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [{ id: 0, name: "John Casey" }];

  return (
    <React.Fragment>
      <div className="">
        {/* Top Section Carousel and Slider */}
        <div className="relative bg-gradient-to-br from-black via-black to-black w-full overflow-hidden h-min">
          <div className="relative w-full overflow-hidden">
            <div className="relative  w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
              <div
                className="bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 object-cover w-full h-[62rem] md:h-[70rem] lg:h-[74rem]  opacity-90"
                alt="banner"
              />
              <div
                data-aos="fade-down-right"
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
              >
                <div data-aos="fade-down">
                  <Image
                    className=""
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
                <MobileModel />
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER SECTION */}
        <div className=" bg-gradient-to-r  from-slate-400 via-slate-100 to-slate-400 w-full">
          <Slider />
        </div>
        {/* WHY CHOOSE US SECTION */}
        <div className="w-fit overflow-hidden align-middle flex items-center justify-center mx-auto">
          <div
            data-aos={"fade-up"}
            className="w-2/3 gap-3 h-full grid grid-cols-12  justify-center align-middle grid-rows-2 mt-6 mb-6"
          >
            <Image
              style={{ width: "30%", height: "20%" }}
              src={Icon}
              alt="logo"
            />
            <h1
              data-aos={"fade-down"}
              className=" text-md font-brand lg:text-5xl md:text-4xl xl:text-7xl mb-5 text-gray-300"
            >
              CONSULT {"-"} CREATE {"-"} COMPLY
            </h1>
            <div className="row lg:flex">
              <div
                className=" lg:col-7 lg:p-6 rounded-2xl "
                data-aos="fade-right"
              >
                <h1 className="font-body text-5xl text-center  lg:text-5xl mb-5 text-gray-300 ">
                  Why Choose Algorim?
                </h1>
                <p className="font-oswald text-1xl mb-3 lg:text-xl text-gray-300 text-justify">
                  Our specialized team of developers and QA professionals
                  possess extensive expertise in diverse technologies, ensuring
                  top-notch solutions and flawless user experiences. We thrive
                  on innovation, staying ahead of industry trends to deliver
                  forward-thinking and future-proof software solutions. Your
                  success is our priority. We collaborate closely with clients
                  to understand their goals, ensuring our solutions align with
                  their business objectives. From web and mobile applications to
                  CRM, ERP, CMS, SaaS products, and QA, we provide end-to-end
                  solutions to meet your business needs. Transform your digital
                  landscape with Algorim. Contact us today to embark on a
                  journey of unparalleled software development, innovation, and
                  quality assurance excellence.
                </p>
                <ButtonPrimary
                  title={"Start Project"}
                  color={"warning"}
                  variant={"flat"}
                  size={"lg"}
                />
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
            <SnippetCom text={"npm run @algorim/trust"} />
          </div>
        </div>
        {/* Grid of Five */}
        <div
          data-aos={"fade-in"}
          className="w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400  align-middle flex items-center justify-center mx-auto"
        >
          <FiveGridCard animation={"fade-down-right"} />
        </div>
        {/* Count and Grid Of  Two */}
        <div className="w-fit bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400   overflow-hidden align-middle flex items-center justify-center mx-auto">
          <div
            data-aos={"fade-up"}
            className="w-2/3 gap-3 grid grid-cols-12 m-3 justify-center align-middle grid-rows-2 mt-6 mb-6"
          >
            <Count />
            <div className="row lg:flex">
              <div className="lg:col-5" data-aos="fade-up-right">
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
                className=" mt-3 opacity-90 bg-black lg:mt-0 lg:col-7 opacity-1 p-4 lg:p-6 rounded-2xl "
                data-aos="fade-up-left"
              >
                <h1 className="font-body text-5xl text-center  lg:text-5xl mb-5 text-gray-300 ">
                  A Platform of Skilled Engineers
                </h1>
                <p className="font-oswald lg:text-xl  text-gray-300 text-justify">
                  Algorim helps you reach your target audience and connect with
                  them like never before. Every project we work on is created
                  from scratch by our talented team of designers, developers,
                  and creatives. We can create anything your business needs to
                  rise above the competition and make a real impact. Traditional
                  ways are passe: Today's digital world requires unconventional
                  designs that work across every platform and attract the
                  customers you want to reach: Our creative team is well versed
                  in the latest UX design trends and is ready to build the
                  perfect experience for your brand. Create compelling
                  experiences that turn your customers into raving fans. At
                  Algorim, we believe that experience is everything.
                </p>
              </div>
            </div>
            <div className="row lg:flex">
              <div
                className="mb-3 lg:mb-0 opacity-90 bg-black lg:col-7 p-4 lg:p-6 rounded-2xl "
                data-aos="fade-up-right"
              >
                <h1 className="font-body text-3xl text-left  md:text-2xl   lg:text-3xl mb-5 text-gray-300 ">
                  Think of us as an extension of your organization, working
                  tirelessly to give you the results that will take you to the
                  top.
                </h1>
                <p className="font-oswald lg:text-xl text-gray-300 text-justify">
                  Our years of experience in the software industry set us apart.
                  With a track record of successful projects and satisfied
                  clients, we bring a wealth of expertise to every endeavor.
                  Your needs are at the heart of everything we do. Our
                  customer-centric approach ensures that we not only meet but
                  exceed your expectations, delivering solutions that align
                  perfectly with your business goals. In the ever-evolving world
                  of technology, we stay ahead of the curve. Alogrim is
                  committed to innovation, always exploring new technologies and
                  methodologies to keep your business at the forefront of the
                  digital landscape.
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
        {/* TESTMONIALS SECTION */}
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
        <div className="w-fit bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400   overflow-hidden align-middle flex items-center justify-center mx-auto">
          <div
            data-aos={"fade-up"}
            className="w-2/3 gap-3 grid grid-cols-12 justify-center align-middle grid-rows-2 mt-8 mb-8"
          >
            <h1 className="text-3xl text-center lg:text-6xl font-bold mb-8 ">
              A Systematic Process That Delivers Excellence
            </h1>
            <div className="row lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"1. Understanding Client Needs"}
                description={
                  "Before embarking on any project, we engage in thorough discussions with our clients to understand their unique needs, goals, and expectations. We prioritize active listening and open communication to gain insights into the specific requirements and desired outcomes."
                }
                animation={"fade-up-right"}
              />
            </div>
            <div className="row justify-end lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"2. Strategic Planning"}
                description={
                  "Based on the information gathered, we develop a comprehensive and strategic plan that outlines the project scope, milestones, and deliverables.Our planning phase involves collaborative sessions with stakeholders to align project objectives with organizational goals."
                }
                animation={"fade-up-left"}
              />
            </div>
            <div className="row lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"3. Cross-Functional Collaboration"}
                description={
                  "We foster a culture of collaboration among cross-functional teams. Our approach involves bringing together diverse expertise to ensure a holistic perspective on projects. Collaboration encourages creativity, innovation, and the generation of unique solutions to complex challenges."
                }
                animation={"fade-up-right"}
              />
            </div>
            <div className="row justify-end  lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"4. Agile Development"}
                description={
                  "We adopt agile methodologies to ensure flexibility and adaptability throughout the project lifecycle. Regular feedback loops, incremental development, and iterative improvements allow us to respond swiftly to changing requirements and market dynamics."
                }
                animation={"fade-up-left"}
              />
            </div>
            <div className="row lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"5. Quality Assurance"}
                description={
                  "Our commitment to excellence is upheld through rigorous quality assurance processes. This includes thorough testing, code reviews, and continuous evaluation of project components. Quality assurance is embedded into every stage of development, ensuring that the final deliverables meet the highest standards."
                }
                animation={"fade-up-right"}
              />
            </div>
            <div className="row justify-end  lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"6. Client Involvement"}
                description={
                  "Clients are considered integral partners in the development process. We encourage active client involvement through regular updates, demos, and feedback sessions. Client input is valued, and adjustments are made promptly to align with evolving client expectations."
                }
                animation={"fade-up-left"}
              />
            </div>
            <div className="row lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"7. Continuous Improvement"}
                description={
                  "We believe in a culture of continuous improvement. Post-project evaluations, retrospectives, and lessons learned sessions contribute to refining our processes. Feedback from team members, clients, and stakeholders is analyzed to identify areas for enhancement and optimization."
                }
                animation={"fade-up-right"}
              />
            </div>

            <div className="row justify-end  lg:flex">
              <PlainCard
                withIcon={false}
                icon={null}
                mode={"dark"}
                title={"8. Client Satisfaction Surveys"}
                description={
                  "Upon project completion, we conduct client satisfaction surveys to gather valuable insights into the client's experience. Feedback obtained from clients is used to refine our processes, address areas for improvement, and enhance overall service delivery."
                }
                animation={"fade-up-right"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-fit bg-black   overflow-hidden align-middle flex items-center justify-center mx-auto">
            <div
              data-aos={"fade-up"}
              className="w-2/3 gap-3 grid grid-cols-12 justify-center align-middle grid-rows-2 mt-8 "
            >
              <h1 className="text-3xl text-center lg:text-6xl font-bold mb-6 text-slate-300">
              Masters of Our Craft: Here's What We Specialize In
              </h1>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Mobile Application Development"}
                  mode={"dark"}
                  description={
                    "In the realm of mobile application development, we specialize in crafting innovative and user-centric solutions that seamlessly integrate with today's dynamic digital landscape. Our approach involves leveraging the latest technologies to design and develop mobile apps for iOS and Android platforms. From conceptualization to deployment, our expert team ensures a smooth and intuitive user experience, coupled with robust backend functionality. Whether it's a native app or a cross-platform solution, we navigate the intricacies of mobile development to deliver applications that meet your business objectives and resonate with your target audience. Trust us to bring your mobile app ideas to life with cutting-edge technology and a focus on user satisfaction."
                  }
                  animation={"fade-up-left"}
                />
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"CMS Web Application Development"}
                  mode={"dark"}
                  description={
                    "In the domain of CMS (Content Management System) web application development, we specialize in empowering businesses with flexible and user-friendly digital platforms. Our approach involves creating bespoke solutions that enable effortless content creation, publishing, and management. From customizable templates to seamless collaboration tools, our expert team ensures the development of a robust CMS system tailored to meet your content needs. Whether it's a blog, e-commerce site, or corporate portal, we navigate the intricacies of CMS development to deliver a solution that enhances your online presence. Trust us to provide a cutting-edge CMS web application designed for efficiency, scalability, and a superior content management experience."
                  }
                  animation={"fade-up-left"}
                />
              </div>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"CRM Web Application Development"}
                  mode={"dark"}
                  description={
                    "In the realm of CRM web application development, we specialize in creating powerful tools to enhance customer relationships and drive business success. Our approach involves crafting intuitive and feature-rich solutions that streamline sales, marketing, and customer service processes. From seamless data integration to personalized user interfaces, our expert team ensures the development of a robust CRM system tailored to your unique needs. With a focus on scalability and user experience, we navigate the complexities of CRM development to deliver a solution that empowers your team, fosters customer loyalty, and fuels growth. Trust us to transform your customer interactions with a cutting-edge CRM web application."
                  }
                  animation={"fade-up-left"}
                />
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"ERP Web Application Development"}
                  mode={"dark"}
                  description={
                    "In the domain of ERP web application development, we bring a wealth of expertise to streamline and elevate your business processes. Our approach involves crafting tailored solutions that seamlessly integrate modules for finance, human resources, inventory, and more. Meticulous planning and execution ensure the creation of a scalable and efficient ERP system that aligns with your organizational goals. From user-friendly interfaces to robust backend functionality, our expert team navigates the intricacies of ERP development to deliver a comprehensive and cohesive solution, optimizing your business operations for success. Trust us to empower your organization with a cutting-edge ERP web application designed for efficiency and growth."
                  }
                  animation={"fade-up-left"}
                />
              </div>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Website Development"}
                  mode={"dark"}
                  description={
                    "In the dynamic landscape of website development, we specialize in creating innovative and user-centric digital experiences. Our approach involves a seamless blend of cutting-edge technologies and creative design, ensuring the development of visually stunning and highly functional websites. From responsive design to backend architecture, our expert team navigates the complexities of web development to deliver tailored solutions that resonate with your audience. Trust us to bring your online presence to life with websites that are not just visually appealing but also optimized for performance and user engagement."
                  }
                  animation={"fade-up-left"}
                />
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Quality Assurance Q/A"}
                  mode={"dark"}
                  description={
                    "In the field of Quality Assurance (Q/A), we excel in upholding the highest standards throughout the software development lifecycle. Our meticulous approach involves thorough testing and validation, guaranteeing the reliability and performance of your applications. With a dedicated team of QA experts, we ensure that every facet of your software meets stringent quality benchmarks, fostering confidence in the seamless functionality of your products. Rely on us for comprehensive Quality Assurance solutions that elevate the overall reliability and performance of your software."
                  }
                  animation={"fade-up-left"}
                />
              </div>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Cyber Security"}
                  mode={"dark"}
                  description={
                    "In the ever-evolving landscape of cybersecurity, we specialize in safeguarding digital assets. Our approach combines advanced technologies with proactive strategies, ensuring comprehensive protection against cyber threats. From threat detection to incident response, our dedicated team employs cutting-edge solutions to fortify your digital infrastructure. Trust us to keep your systems resilient and secure in the face of evolving cyber challenges"
                  }
                  animation={"fade-up-left"}
                />
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Artificial Intelligence Development"}
                  mode={"dark"}
                  description={
                    "In the realm of Artificial Intelligence (AI) development, we harness innovative technologies to craft intelligent solutions. Our approach involves meticulous planning and execution, ensuring the creation of robust and adaptive AI systems. From machine learning algorithms to neural network architectures, our expert team navigates the forefront of AI, delivering tailored solutions that empower businesses with smart and scalable capabilities. Trust us to propel your organization into the future with cutting-edge AI development."
                  }
                  animation={"fade-up-left"}
                />
              </div>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"POS Web Application Development"}
                  mode={"dark"}
                  description={
                    "In POS web application development, we prioritize precision and transparency, documenting every stage of the process. Our team conducts knowledge-sharing sessions, fostering continuous learning and innovation. Specializing in intuitive user experiences, we deliver tailored solutions for efficient and cutting-edge point-of-sale systems."
                  }
                  animation={"fade-up-left"}
                />
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"Digital Marketing"}
                  mode={"dark"}
                  description={
                    "As a holistic digital marketing service, we meticulously document strategies for PPC, SEO, content writing, and social media management, including Meta Business Suite. Our commitment to knowledge sharing fosters continuous learning, ensuring transparency and client success across these pivotal domains."
                  }
                  animation={"fade-up-left"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-fit bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 overflow-hidden align-middle flex items-center justify-center mx-auto">
            <div
              data-aos={"fade-up"}
              className="w-2/3 gap-3 grid grid-cols-12 justify-center align-middle grid-rows-2 mt-8 "
            >
              <h1 className="text-xl text-gray-300 flex m-5 lg:text-6xl font-semibold mb-7">
                What is the most important
              </h1>
              <div className="row justify-center  lg:flex">
                <PlainCard
                  withIcon={false}
                  icon={null}
                  title={"POS Web Application Development"}
                  mode={"dark"}
                  description={
                    "We maintain comprehensive documentation throughout the project lifecycle, ensuring transparency and clarity. Knowledge sharing sessions are conducted to disseminate insights gained from each project, fostering a culture of continuous learning and growth."
                  }
                  animation={"fade-up-left"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
