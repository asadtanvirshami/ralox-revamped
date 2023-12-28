import React from 'react'

import logo from "../../public/algo.png";
import Image from "next/image";

const signup = () => {
  return (
    <div className=" grid items-center justify-center h-screen w-screen">
      <div className=" lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 md:grid grid-cols-2 w-screen">
        <div className="hidden sm:flex h-screen align-middle justify-center bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500 items-center xl:col-span-2">
          <div className="justify-center align-middle items-center m-4">
            <Image
              className=""
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="logo"
            />
            <div className="flex inline-block align-middle justify-center  mt-5">
              <div className="p-2 font-body text-2xl">
                ERP System by{" "}
                <a href={"https://raloxsoft.com/"} className="">
                  Raloxsoft.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signup