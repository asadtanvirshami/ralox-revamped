import React from "react";
import AOS from "aos";

import { FaHandshake } from "react-icons/fa";
import { HiChat } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
import { MdAddBusiness, MdBiotech, MdManageAccounts } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const IndustriesCard = ({ title, description, icon, aosDirection }) => (
  <div
    className=" text-white p-6 rounded-lg shadow-md mb-8 mx-4 transition transform hover:scale-105 duration-300 ease-in-out bg-opacity-5 bg-white"
    data-aos="fade-up"
  >
    <div className="items-center flex text-[40px] ">
      {icon}
      <h1 className="text-left font-semibold text-[1rem] xl:text-[1.8rem] mb-4 px-8 text-white">
        {title}
      </h1>
    </div>
    <ul className="text-[1.2rem] m-5 text-justify">
      <li>{description}</li>
    </ul>
  </div>
);

const Consultancy = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="flex pt-[60px] pb-[60px] justify-start container bg-black">
        <h1
          data-aos={"fade-down-right"}
          className=" text-white font-bold text-[1rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem]"
        >
          Conusltancy
        </h1>
      </div>
      <div
        data-aos={"fade-in"}
        className="flex pt-[40px] pb-[20px] justify-end  container bg-black"
      >
        <article className=" text-white text-justify text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]">
          At Algorim, we pride ourselves as the architects of success,
          diligently navigating businesses through the intricate terrain of
          today's fiercely competitive landscape. With an unwavering dedication
          to excellence ingrained in our ethos, our seasoned consultants bring
          forth a treasure trove of expertise honed through years of industry
          immersion. We are steadfast in our mission to catalyze transformative
          change, guiding strategic initiatives with precision, fortifying
          operational frameworks to achieve peak efficiency, and igniting the
          engines of growth to propel your organization towards a horizon of
          sustainable prosperity. At Algorim, we are not merely advisors; we are
          partners in your journey, committed to crafting bespoke solutions that
          resonate with your unique aspirations, challenges, and opportunities,
          thereby sculpting a path to enduring success.
        </article>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-36">
        <IndustriesCard
          title="Strategic Business Consulting"
          icon={<MdAddBusiness />}
          description="Envision, strategize, and execute. Our strategic business consulting services are crafted to empower your organization with a roadmap for success. From market analysis to strategic planning, we guide you through every step to ensure your business is not just surviving, but thriving."
          aosDirection="fade-up"
        />
        <IndustriesCard
          title="Financial Advisory and Optimization"
          icon={<GiTakeMyMoney />}
          description="Navigate the intricate world of finance with confidence. Our financial advisory team provides meticulous analysis, risk management strategies, and financial optimization solutions. Let us be your trusted partners in maximizing profitability and ensuring financial resilience."
          aosDirection="fade-up"
        />
        <IndustriesCard
          title="Technology and Digital Transformation"
          icon={<MdBiotech />}
          description="Embrace the future with our technology and digital transformation consulting. From implementing cutting-edge technologies to optimizing IT infrastructure, we empower your business to stay agile and capitalize on digital opportunities in today's fast-paced business environment."
          aosDirection="fade-up"
        />
        <IndustriesCard
          title="Human Capital Management"
          icon={<MdManageAccounts />}
          description="Attract, develop, and retain top talent. Our human capital management services focus on building a resilient and high-performing workforce. From talent acquisition to leadership development, we help you create a workplace culture that fosters innovation and success."
          aosDirection="fade-up"
        />
      </div>
    </div>
  );
};

export default Consultancy;
