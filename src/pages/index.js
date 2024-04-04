import React from "react";
import Head from "next/head";

import Home from "@/components/layout/Home/index";
import FloatingButtons from "@/components/shared/FloatingButton";

export default function Landing() {
  return (
    <>
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            ALGORIM | Develops Robust Applications & Provides Digital Marketing
            Services
          </title>
          <meta
            name="description"
            content="ALGORIM specializes in developing robust applications and providing digital marketing services to businesses worldwide. Our expert team delivers innovative solutions tailored to your needs. Contact us to elevate your digital presence."
          />
          <meta
            name="keywords"
            content="ALGORIM, development, applications, digital marketing, services, business solutions, innovation, software, saas, paas, iaas, need, want, website, looking"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <React.Fragment>
          <Home />
          <FloatingButtons />
        </React.Fragment>
      </div>
    </>
  );
}
