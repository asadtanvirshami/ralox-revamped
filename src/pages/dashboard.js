import Cookies from "cookies";
import React from "react";

import Dashboard from "@/components/layout/Dashboard";
import verifyToken from "@/api/Auth/verifyToken";
import { useRouter } from "next/router";

const dashboard = ({ sessionData }) => {
  const router = useRouter();
  if (!sessionData.isAuthorized) {
    router.push("/");
  }
  return (
    <div className="container">
      <Dashboard />
    </div>
  );
};

export default dashboard;

export async function getServerSideProps({ req, res }) {
  const sessionRequest = await verifyToken(Cookies, req, res);

  try {
    return {
      props: {
        sessionData: sessionRequest,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { sessionData: { isAuthorized: false } },
    };
  }
}
