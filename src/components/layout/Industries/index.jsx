import React from "react";
import AOS from "aos";

const Industires = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex pt-[60px] pb-[60px] justify-start container bg-black">
        <h1
          data-aos={"fade-up"}
          className=" text-white font-bold text-[5rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem]"
        >
          Industries
        </h1>
      </div>
      <div
        data-aos={"fade-up"}
        className="flex pt-[40px] pb-[20px] justify-end  container bg-black"
      >
        <article className=" text-white text-justify text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
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
    </>
  );
};

export default Industires;
