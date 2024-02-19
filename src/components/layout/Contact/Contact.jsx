import ContactForm from "@/components/shared/ContactForm/ContactForm";
import { Divider } from "@nextui-org/react";
import React from "react";

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-white w-full h-screen">
      <h1 className=" bg-black text-white font-bold text-[5rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem] text-center pt-12 ">
        Contact Us
      </h1>
      <h1 className=" bg-black text-center pb-12 lg:text-[2rem]">
        We provide value to you.
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-5 mt-5">
        <div className=" float-right">
          <h1 className="text-[2rem] text-black m-5 text-center font-semibold">
            Online Inquiry
          </h1>
          <ContactForm text={""} />
        </div>
        <div className="justify-center xl:justify-end lg:justify-center md:justify-center flex text-theme-500 w-full">
          <ul className="m-5">
            <h1 className="text-[2rem] mb-5 text-center font-semibold">Contact Details</h1>
            <li className=" items-center flex xl:text-xl mb-2">
              <CiMail className="mr-2" fontSize={25} />
              algorimsoftware@outlook.com
            </li>
            <li className=" items-center flex xl:text-xl">
              <CiPhone className="mr-2" fontSize={25} />
              021-1012-342
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
