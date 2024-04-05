import Cookies from "cookies";
import React from "react";

import DashboardPanel from "@/components/layout/Dashboard";
import verifyToken from "@/api/Auth/verifyToken";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/UserActions/userActions";

const Dashboard = ({ sessionData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (!sessionData.isAuthorized) {
    router.push("/");
    dispatch(logout);
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
    return {
      props: { sessionData: { isAuthorized: false } },
    };
  }
}
