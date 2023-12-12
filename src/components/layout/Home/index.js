import React, { useState, useEffect } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "@/store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../../config/motion";
import logo from "../../../../public/white.png";
import { Divider } from "@nextui-org/react";

const Home = () => {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.section className="p-10 ">
          <motion.section className=" bg-cover relative z-0 h-full w-full carousel-section"></motion.section>
          <motion.div className="p-5 " {...slideAnimation("left")}>
            <motion.header
              className=" flex m-auto justify-center align-middle"
              {...slideAnimation("down")}
            >
              <Image
                style={{ width: "100%", height: "90%" }}
                src={logo}
                alt="logo"
              />
            </motion.header>
            <motion.div className="text-center" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="text-white text-5xl">
                  WE BUILD ROBUST SOFTWARES.
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <p className="text-white text-2xl">
                  We work relentessly to provide and serve you the
                  <strong> out class and optimized</strong> applications.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div {...headContentAnimation}>
            <Divider className=" bg-gray-500 mt-16"></Divider>
          </motion.div>
        </motion.section>
        <div className="flex bg-slate-200 h-72 mt-5 w-full"></div>
        <div className=" mt-12 h-full w-full"></div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Home;
