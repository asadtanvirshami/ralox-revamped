/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AOS from "aos";
import { MdOutlineHealthAndSafety, MdCastForEducation, MdEnergySavingsLeaf} from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";

const IndustriesCard = ({ title, description, icon,  }) => (
  <div className=" text-white p-6 rounded-lg shadow-md mb-8 mx-4 transition transform hover:scale-105 duration-300 ease-in-out bg-opacity-5 bg-white"
    data-aos="fade-up">
    <div className="items-center flex text-[40px] ">{icon}
      <h1 className="text-left font-semibold text-[1rem] xl:text-[1.8rem] mb-4 px-8 text-white">{title}</h1>
    </div>
    <ul className="text-[1.2rem] m-5 text-justify">
      <li>{description}</li>
    </ul>
  </div>
);

const Industires = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex pt-[60px] pb-[60px] justify-start container bg-black">
        <h1
          data-aos={"fade-down-right"}
          className=" text-white font-bold text-[5rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem]"
        >
          Industries
        </h1>
      </div>
      <div
        data-aos={"fade-in"}
        className="flex pt-[60px] pb-[60px] justify-start container"
      >
        <article className=" text-white text-justify text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]">
          At Algorim, we pride ourselves on being at the forefront of the
          digital revolution, empowering businesses across diverse industries
          with innovative software solutions tailored to their unique needs.
          With a deep understanding of the ever-evolving technological landscape
          and a commitment to excellence, we serve as trusted partners to
          organizations seeking to thrive in today's dynamic business
          environment. Our journey began with a vision to revolutionize how
          businesses operate in the digital age. Over the years, we have honed
          our expertise and expanded our capabilities, becoming a leading
          provider of cutting-edge software solutions and services. Our team of
          seasoned professionals brings together a wealth of experience,
          technical proficiency, and industry-specific knowledge to deliver
          unparalleled value to our clients.
        </article>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-5" >
        <IndustriesCard
          title="Healthcare"
          icon={<MdOutlineHealthAndSafety />}
          description="In the healthcare industry, we develop custom software solutions that streamline patient management, electronic health records (EHR), telemedicine platforms, and healthcare analytics to improve patient care, optimize workflows, and ensure compliance with regulatory standards such as HIPAA."
        />
        <IndustriesCard
          title="Finance and Banking"
          icon={<RiBankLine />}
          description="For financial institutions, we offer robust software solutions for banking operations, risk management, payment processing, fraud detection, and customer relationship management (CRM). Our fintech solutions enable banks and financial organizations to enhance operational efficiency, security, and customer experience."
        />
        <IndustriesCard
          title="Retail and E-commerce"
          icon={<GrMoney />}
          description="In the retail sector, we provide e-commerce platforms, inventory management systems, point-of-sale (POS) solutions, and customer loyalty programs. Our software helps retailers optimize sales channels, personalize marketing efforts, and deliver seamless omnichannel experiences to customers."
        />
        <IndustriesCard
          title="Manufacturing and Engineering"
          icon={<MdOutlineEngineering />}
          description="For manufacturers and engineering firms, we offer software solutions for product lifecycle management (PLM), supply chain management, inventory optimization, and predictive maintenance. Our solutions enable companies to streamline production processes, reduce costs, and accelerate time-to-market for new products."
        />
        <IndustriesCard
          title="Education and E-learning"
          icon={<MdCastForEducation />}
          description="In the education sector, we develop learning management systems (LMS), virtual classrooms, educational apps, and online assessment tools. Our software solutions facilitate remote learning, personalized learning experiences, and academic administration for schools, universities, and training providers."
        />
        <IndustriesCard
          title="Telecommunications"
          icon={<IoChatbubblesOutline />}
          description="For telecommunications companies, we provide software solutions for network management, billing and invoicing, customer self-service portals, and mobile app development. Our telecom solutions help operators enhance network performance, automate billing processes, and deliver superior customer service."
        />
        <IndustriesCard
          title="Hospitality and Tourism"
          icon={<FaCarSide />}
          description="In the hospitality industry, we offer software solutions for property management systems (PMS), online booking platforms, guest experience management, and revenue management. Our hospitality solutions empower hotels, resorts, and travel agencies to streamline operations, maximize bookings, and enhance guest satisfaction.
        "
        />
        <IndustriesCard
          title="Energy and Utilities"
          icon={<MdEnergySavingsLeaf />}
          description="For energy companies and utilities, we develop software solutions for energy management, asset performance monitoring, smart grid systems, and renewable energy integration. Our solutions enable organizations to optimize energy usage, reduce costs, and meet sustainability goals."
        />
      </div>
    </>
  );
};

export default Industires;