import React, { useEffect } from "react";
import AOS from "aos";
//Components
import ServiceCard from "@/components/shared/ServiceCard";
//Icons
import { CgWebsite } from "react-icons/cg";
import { CgHomeScreen } from "react-icons/cg";
import { CgListTree } from "react-icons/cg";
import { GiCyberEye } from "react-icons/gi";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { HiMiniMegaphone } from "react-icons/hi2";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex pt-[60px] pb-[60px] justify-start container bg-black">
        <h1
          data-aos={"fade-up"}
          className=" text-white font-bold text-[5rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem]"
        >
          Services
        </h1>
      </div>
      <div
        data-aos={"fade-up"}
        className="flex pt-[40px] pb-[20px] justify-end  container bg-black"
      >
        <article className=" text-white text-justify text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
          Algorim offers a comprehensive suite of cutting-edge services tailored
          to meet the diverse needs of businesses in the digital age. From
          advanced data analytics to bespoke software development, Algorim
          leverages the latest technologies and methodologies to drive
          innovation and efficiency for its clients. Whether it's harnessing the
          power of machine learning and artificial intelligence for predictive
          analytics or creating custom software solutions to streamline
          operations, Algorim is committed to delivering top-notch services that
          empower organizations to thrive in today's competitive landscape. With
          a team of experienced professionals dedicated to excellence, Algorim
          ensures that each client receives personalized attention and solutions
          that are both scalable and sustainable. Trust Algorim to be your
          partner in navigating the complexities of the digital realm and
          unlocking the full potential of your business.
        </article>
      </div>
      <div className=" bg-black pt-2 w-full h-screen">
        <h1
          data-aos={"fade-up"}
          className="text-3xl font-bold text-center text-white m-12  md:text-[4rem] lg:text-[4rem] xl:text-[4rem]"
        >
          Experience Our Offerings
        </h1>
        <div className="mt-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-end items-end">
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<CgWebsite fontSize={25} color="black" />}
              title={"Software Development"}
              content={
                "Providing comprehensive software solutions, ensuring seamless integration and robust functionality."
              }
            />
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<CgHomeScreen fontSize={25} color="black" />}
              title={"Mobile App Development"}
              content={
                "Crafting user-centric mobile solutions for iOS and Android with cutting-edge technology and seamless integration."
              }
            />
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<CgListTree fontSize={25} color="black" />}
              title={"Artificial Intelligence"}
              content={
                "In the realm of Artificial Intelligence, we harness innovative technologies to craft intelligent solutions."
              }
            />
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<GiCyberEye fontSize={25} color="black" />}
              title={"Cyber Security"}
              content={
                "In the ever-evolving landscape of cybersecurity, we specialize in safeguarding digital assets."
              }
            />
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<MdOutlineDisplaySettings fontSize={25} color="black" />}
              title={"Quality Assurance"}
              content={
                "We excel in upholding the highest standards throughout the software development lifecycle."
              }
            />
            <ServiceCard
              data-aos={"fade-down"}
              Icon={<HiMiniMegaphone fontSize={25} color="black" />}
              title={"Digital Marketing"}
              content={
                "Comprehensive digital marketing services, including PPC, SEO, content, social media, and Meta Business Suite."
              }
            />
          </div>
        </div>
        <div className="pt-[100px]">
          <h1
            data-aos={"fade-up"}
            className="text-3xl font-bold text-center text-white m-12  md:text-[4rem] lg:text-[4rem] xl:text-[4rem]"
          >
            Our Effective Streamline
          </h1>
        </div>
        <div className="mt-12 mx-auto  container w-full justify-center flex">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {processSteps.map((x, i) => {
                return (
                  <div data-aos={"fade-up"} className="p-5 w-fit">
                    <h1 className="text-3xl font-semibold text-center md:text-left lg:text-left xl:text-left text-white ">
                      {x.title}
                    </h1>
                    <article className="text-[16px] text-justify md:text-left lg:text-left xl:text-left">
                      {x.description}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

const processSteps = [
  {
    title: "Understanding Client Needs",
    description:
      "Before embarking on any project, we engage in thorough discussions with our clients to understand their unique needs, goals, and expectations. We prioritize active listening and open communication to gain insights into the specific requirements and desired outcomes.",
  },
  {
    title: "Strategic Planning",
    description:
      "Based on the information gathered, we develop a comprehensive and strategic plan that outlines the project scope, milestones, and deliverables. Our planning phase involves collaborative sessions with stakeholders to align project objectives with organizational goals.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "We foster a culture of collaboration among cross-functional teams. Our approach involves bringing together diverse expertise to ensure a holistic perspective on projects. Collaboration encourages creativity, innovation, and the generation of unique solutions to complex challenges.",
  },
  {
    title: "Agile Development",
    description:
      "We adopt agile methodologies to ensure flexibility and adaptability throughout the project lifecycle. Regular feedback loops, incremental development, and iterative improvements allow us to respond swiftly to changing requirements and market dynamics.",
  },
  {
    title: "Quality Assurance",
    description:
      "Our commitment to excellence is upheld through rigorous quality assurance processes. This includes thorough testing, code reviews, and continuous evaluation of project components. Quality assurance is embedded into every stage of development, ensuring that the final deliverables meet the highest standards.",
  },
  {
    title: "Client Involvement",
    description:
      "Clients are considered integral partners in the development process. We encourage active client involvement through regular updates, demos, and feedback sessions. Client input is valued, and adjustments are made promptly to align with evolving client expectations.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We believe in a culture of continuous improvement. Post-project evaluations, retrospectives, and lessons learned sessions contribute to refining our processes. Feedback from team members, clients, and stakeholders is analyzed to identify areas for enhancement and optimization.",
  },
  {
    title: "Client Satisfaction Surveys",
    description:
      "Upon project completion, we conduct client satisfaction surveys to gather valuable insights into the client's experience. Feedback obtained from clients is used to refine our processes, address areas for improvement, and enhance overall service delivery.",
  },
];
