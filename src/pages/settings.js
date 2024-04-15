import Cookies from "cookies";
import React from "react";

import verifyToken from "@/api/Auth/verifyToken";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/UserActions/userActions";

import Settings from "@/components/layout/Settings";
import { getProfile } from "@/api/User";

const Setting = ({ sessionData, userData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (!sessionData.isAuthorized) {
    router.push("/");
    dispatch(logout);
  }

  if (!userData) {
    return <div>...Wait</div>;
  }

  return (
    <>
      <Settings userData={userData} />
    </>
  );
};

export default Setting;

export async function getServerSideProps({ req, res }) {
  const cookies = await Cookies(req, res);
  const sessionRequest = await verifyToken(Cookies, req, res);
  const user = await cookies.get("user");
  var loginId;
  let userProfile;
  if (user) {
    var decodedCookie = decodeURIComponent(user);
    // Parse the JSON string into an object
    var cookieObject = JSON.parse(decodedCookie);
    // Extract the loginId from the cookie object
    loginId = cookieObject.loginId;
  } else {
    loginId = "";
  }
  userProfile = await getProfile(loginId);

  try {
    return {
      props: {
        sessionData: sessionRequest,
        userData: userProfile.payload || null,
      },
    };
  } catch (error) {
    return {
      props: { sessionData: { isAuthorized: false } },
    };
  }
}
