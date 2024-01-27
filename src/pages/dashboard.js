import Cookies from "cookies";
import React from "react";

import DashboardPanel from "@/components/layout/Dashboard";
import verifyToken from "@/api/Auth/verifyToken";
import { useRouter } from "next/router";

const Dashboard = ({ sessionData }) => {
  const router = useRouter();
  if (!sessionData.isAuthorized) {
    router.push("/");
  }
  return (
    <React.Fragment>
      <div className="container">
        <DashboardPanel />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

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
