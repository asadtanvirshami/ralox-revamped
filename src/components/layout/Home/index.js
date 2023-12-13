import React, { useState, useEffect } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import AOS from "aos"; // You can also use <link> for styles
import state from "@/store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../../config/motion";
import logo from "../../../../public/white.png";
import banner from "../../../../public/banner.jpg";
import { Divider } from "@nextui-org/react";
import FiveGridCard from "@/components/shared/CardsGroup/FiveGridCard";

const Home = () => {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div className="relative w-full overflow-hidden h-min">
          <motion.div className="relative w-full overflow-hidden">
            <motion.div className="relative w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
              <Image
                src={banner}
                className="object-cover w-full h-[62rem] md:h-[70rem] lg:h-[51rem]  opacity-60"
                alt="banner"
              />
              <motion.div
                {...slideAnimation("left")}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
              >
                <motion.header {...slideAnimation("down")}>
                  <Image
                    style={{ width: "100%", height: "90%" }}
                    src={logo}
                    alt="logo"
                  />
                </motion.header>
                <motion.div
                  className="text-center mx-4"
                  {...headContainerAnimation}
                >
                  <motion.div {...headTextAnimation}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                      WE BUILD ROBUST SOFTWARES.
                    </h1>
                  </motion.div>
                  <motion.div {...headContentAnimation}>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                      We work relentlessly to provide and serve you the
                      <strong> out class and optimized</strong> applications.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div
        data-aos={"fade-in"}
        className="w-full bg-slate-100  align-middle flex items-center justify-center mx-auto"
      >
        <FiveGridCard animation={"fade-right"} />
      </div>
      <div className="w-full align-middle flex items-center justify-center ">
        <FiveGridCard />
      </div>
    </React.Fragment>
  );
};

export default Home;
