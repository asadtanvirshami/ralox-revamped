import React, { memo } from "react";
import Image from "next/image";

import logo from "../../../../../public/variantGradient.png";
import hero from "../../../../../public/app.png";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-30 lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 flex flex-col justify-center">
   
        <div
          data-aos="fade-down-right"
          className="flex flex-col items-center justify-center text-center text-black"
        >
          <div data-aos="fade-down">
            {/* <Image
              className=""
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="logo"
            /> */}
            <h1 className="text-[9rem]  font-brand">ALGORIM</h1>
          </div>

        </div>
          <div className="text-center mx-4" data-aos="fade-up">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <h1 className=" font-oswald text-zinc-800 font-bold text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl">
              WE BUILD
              <span className="relative whitespace-nowrap text-orange-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-400/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative"> ROBUST APPLICATIONS</span>
            </span>{" "}
             
              </h1>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <article className=" text-zinc-800 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-2xl text-center">
              We work relentlessly to provide and serve you the
              <strong className="text-gray-800">
                {" "}
                out class and optimized
              </strong>{" "}
              applications
            </article>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={hero}
                alt="App screenshot"
                width={2500}
                height={1222}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative w-full   overflow-hidden">
    //   <div className="relative  w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
    //     <div
    //       className=" bg-gradient-to-r h-screen  from-slate-500 via-slate-100 to-slate-500 object-cover w-full  lg:h-[66rem]  opacity-90"
    //       alt="banner"
    //     />

    //     <div
    //       data-aos="fade-down-right"
    //       className="absolute inset-0 h-screen  w-full overflow-hidden flex flex-col items-center justify-center text-center text-white"
    //     >
    //       <div data-aos="fade-down">
    //         <Image
    //           className=""
    //           style={{ width: "100%", height: "70%" }}
    //           src={logo}
    //           alt="logo"
    //         />
    //         {/* <h1 className="text-10xl  font-brand">ALGORIM</h1> */}
    //       </div>
    //       <div className="text-center mx-4" data-aos="fade-up">
    //         <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
    //           <h1 className=" font-oswald font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl">
    //             WE BUILD ROBUST APPLICATIONS
    //           </h1>
    //         </div>
    //         <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
    //           <article className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
    //             We work relentlessly to provide and serve you the
    //             <strong className="text-gray-800">
    //               {" "}
    //               out class and optimized
    //             </strong>{" "}
    //             applications
    //           </article>
    //         </div>
    //       </div>
    //     </div>
       
    //   </div>
    // </div>
  );
};

export default memo(Hero);
