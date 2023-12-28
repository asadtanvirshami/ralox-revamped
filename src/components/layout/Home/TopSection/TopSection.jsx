import React from "react";

import Image from "next/image";
import logo from "../../../../../public/algo.png";

const TopSection = () => {
  return (
    <div className="relative w-full  overflow-hidden">
      <div className="relative  w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
        <div
          className=" bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500 object-cover w-full h-[58rem] md:h-[70rem] lg:h-[74rem]  opacity-90"
          alt="banner"
        />

        <div
          data-aos="fade-down-right"
          className="absolute inset-0 w-full overflow-hidden flex flex-col items-center justify-center text-center text-white"
        >
          <div data-aos="fade-down">
            <Image
              className=""
              style={{ width: "100%", height: "70%" }}
              src={logo}
              alt="logo"
            />
            {/* <h1 className="text-10xl  font-brand">ALGORIM</h1> */}
          </div>
          <div className="text-center mx-4" data-aos="fade-up">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <h1 className=" font-oswald font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl">
                WE BUILD ROBUST APPLICATIONS
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <article className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                We work relentlessly to provide and serve you the
                <strong className="text-gray-800">
                  {" "}
                  out class and optimized
                </strong>{" "}
                applications
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
