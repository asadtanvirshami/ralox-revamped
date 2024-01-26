/* eslint-disable react/no-unescaped-entities */

import React, { Fragment, memo, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import { Divider, Input } from "@nextui-org/react";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

import Button from "@/components/shared/Button/Button";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginSuccess,
} from "@/redux/actions/UserActions/userActions";

const Login = ({ setIsLogin }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    setIsLogin((state) => !state);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmitCreds = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(process.env.NEXT_PUBLIC_AUTH_ADMIN_LOGIN, credentials)
      .then((response) => {
        const res_status = response.data.status;
        const res_message = response.data.message;

        if (res_status === "success" && res_message === "authorized-user") {
          setIsError(false);
          setMessage("Logging In.");
          router.push("/dashboard");
          //Cache JWT Token & user details
          let token = jwt_decode(response.data.token);
          Cookies.set("token", response.data.token, { expires: 1 });
          Cookies.set("user", JSON.stringify(token), {
            expires: 1,
          });
          dispatch(loginSuccess(token));
        }
      })
      .catch((error) => {
        if (error) {
          if (error.response) {
            const err_status = error.response.data.status;
            const err_message = error.response.data.message;

            if (
              err_status === "failed" &&
              err_message === "account-not-exist"
            ) {
              setIsError(true);
              setMessage("Account doesn't exist.");
              dispatch(loginFailure(error));
            } else {
              console.error("Request failed:", error);
              setIsError(true);
              setMessage("An error occurred during the request.");
              dispatch(loginFailure(error));
            }
          } else {
            console.log(error);
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (name, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <h1 className="text-[3.5rem] items-center text-center text-slate-200 flex lg:mr-2 lg:text-6xl font-semibold mb-4">
        Login
        <MdOutlineAdminPanelSettings className="text-[60px]" />
      </h1>
      <form
        onSubmit={onSubmitCreds}
        className=" w-full flex flex-col gap-4 mb-6 mt-2"
      >
        <Input
          data-cy={"email-input"}
          size="md"
          type="text"
          variant={"bordered"}
          label="Email"
          className="mr-4 text-white"
          name="email"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          data-cy={"password-input"}
          type={isVisible ? "text" : "password"}
          className=" text-white mt-2"
          size="md"
          variant={"bordered"}
          label="Password"
          name="password"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <HiOutlineEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <div className="text-right text-white flex">
          <div className="flex w-full ">
            <small
              className={
                isError
                  ? "text-red-500 text-[14px]"
                  : "text-green-500 text-[14px]"
              }
            >
              {message}
            </small>
          </div>

          <div className="flex justify-end align-baseline w-full ">
            <small
              onClick={() => handleClick("forgetPassword")}
              className="cursor-pointer  text-[14px]"
            >
              forgot password?
            </small>
          </div>
        </div>

        <Button
          title={"Login"}
          type={"submit"}
          color={"warning"}
          variant={"flat"}
          loading={loading}
        />

        <div className="text-center text-white ">
          <small className="text-base">
            Don't have an account?
            <strong
              className=" cursor-pointer"
              onClick={() => handleClick("signup")}
            >
              {" "}
              Sign Up
            </strong>
          </small>
        </div>
        <Divider className="mt-3" />
        <div className="text-center text-white">
          <small className="text-sm">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            andTerms of Service apply.
          </small>
        </div>
      </form>
    </Fragment>
  );
};

const SignUp = ({ setIsLogin }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    setIsLogin((state) => !state);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmitCreds = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(process.env.NEXT_PUBLIC_AUTH_ADMIN_SIGNUP, credentials)
      .then((response) => {
        const res_status = response.data.status;
        const res_message = response.data.message;

        if (res_status === "success" && res_message === "account-created") {
          setIsError(false);
          setMessage("Account created successfully.");
        } else {
          console.error("Unexpected response:", response);
          setIsError(true);
          setMessage("Unexpected response from the server.");
        }
      })
      .catch((error) => {
        const err_status = error.response.data.status;
        const err_message = error.response.data.message;

        if (err_status === "failed" && err_message === "account-exists") {
          setIsError(true);
          setMessage("You already have an account.");
        } else {
          setIsError(true);
          console.error("Request failed:", error);
          setMessage("An error occurred during the request.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (name, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <h1 className="text-[3.5rem] items-center text-center text-slate-200 flex lg:mr-2 lg:text-6xl font-semibold mb-4">
        Sign Up
        <MdOutlineAdminPanelSettings className="text-[60px]" />
      </h1>
      <form
        onSubmit={onSubmitCreds}
        className=" w-full flex flex-col gap-4 mb-6 mt-2"
      >
        <Input
          data-cy={"fname-input"}
          size="md"
          type="text"
          variant={"bordered"}
          label="First Name"
          className="mr-4 text-white"
          name="fname"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          data-cy={"lname-input"}
          size="md"
          type="text"
          variant={"bordered"}
          label="Last Name"
          className="mr-4 text-white"
          name="lname"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          size="md"
          type="text"
          variant={"bordered"}
          label="Email"
          className="mr-4 text-white"
          name="email"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          data-cy={"password-input"}
          type={isVisible ? "text" : "password"}
          className=" text-white mt-2"
          size="md"
          variant={"bordered"}
          label="Password"
          name="password"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <HiOutlineEyeOff className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <p className={isError ? "text-red-500" : "text-green-500"}>{message}</p>
        <div className="mt-2" />
        <Button
          title={"Create Account"}
          type={"submit"}
          color={"warning"}
          variant={"flat"}
          loading={loading}
        />

        <div className="text-center text-white ">
          <small className="text-base">
            Already have an account?
            <strong
              className=" cursor-pointer"
              onClick={() => handleClick("login")}
            >
              {" "}
              Login
            </strong>
          </small>
        </div>
        <Divider className="mt-3" />
        <div className="text-center text-white">
          <small className="text-sm">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            andTerms of Service apply.
          </small>
        </div>
      </form>
    </Fragment>
  );
};

const ForgetPassword = ({ setIsLogin }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleClick = (type) => {
    setIsLogin((state) => !state);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmitCreds = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(process.env.NEXT_PUBLIC_AUTH_USER_LOGIN, credentials)
      .then((response) => {
        const res_status = response.data.status;
        const res_message = response.data.message;

        if (res_status === "success" && res_message === "authorized-user") {
          setIsError(false);
          setMessage("Logging In.");

          //Cache JWT Token & user details
          let token = jwt_decode(response.data.token);
          Cookies.set("token", response.data.token, { expires: 1 });
          Cookies.set("user", JSON.stringify(token), {
            expires: 1,
          });
          dispatch(loginSuccess(token));
        }
      })
      .catch((error) => {
        if (error) {
          if (error.response) {
            const err_status = error.response.data.status;
            const err_message = error.response.data.message;

            if (
              err_status === "failed" &&
              err_message === "account-not-exist"
            ) {
              setIsError(true);
              setMessage("Account doesn't exist.");
              dispatch(loginFailure(error));
            } else {
              console.error("Request failed:", error);
              setIsError(true);
              setMessage("An error occurred during the request.");
              dispatch(loginFailure(error));
            }
          } else {
            console.log(error);
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (name, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <h1 className="text-[3.5rem] text-center text-slate-200 flex lg:mr-2 lg:text-6xl font-semibold mb-4">
        Forget Password
      </h1>
      <form
        onSubmit={onSubmitCreds}
        className=" w-full flex flex-col gap-4 mb-6 mt-2"
      >
        <Input
          size="md"
          type="text"
          variant={"bordered"}
          label="Email"
          className="mr-4 text-white"
          name="email"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          type={isVisible ? "text" : "password"}
          className=" text-white mt-2"
          size="md"
          variant={"bordered"}
          label="Password"
          name="password"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <HiOutlineEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <div className="text-right text-white flex">
          <div className="flex w-full ">
            <small
              className={
                isError
                  ? "text-red-500 text-[14px]"
                  : "text-green-500 text-[14px]"
              }
            >
              {message}
            </small>
          </div>

          <div className="flex justify-end align-baseline w-full ">
            <small className="cursor-pointer  text-[14px]">
              forgot password?
            </small>
          </div>
        </div>

        <Button
          title={"Login"}
          type={"submit"}
          color={"warning"}
          variant={"flat"}
          loading={loading}
        />

        <div className="text-center text-white ">
          <small className="text-base">
            Don't have an account?
            <strong
              className=" cursor-pointer"
              onClick={() => handleClick("signup")}
            >
              {" "}
              Sign Up
            </strong>
          </small>
        </div>
        <Divider className="mt-3" />
        <div className="text-center text-white">
          <small className="text-sm">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            andTerms of Service apply.
          </small>
        </div>
      </form>
    </Fragment>
  );
};

const AccessAuth = ({ isLogin, setIsLogin }) => {
  return (
    <Fragment>
      <div className="container  w-full h-screen justify-center items-center align-middle flex">
        <div className="p-8 bg-black border rounded-3xl">
          {isLogin && <Login setIsLogin={setIsLogin} />}
          {!isLogin && <SignUp setIsLogin={setIsLogin} />}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(AccessAuth);
