import React from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

import Button from "@/components/shared/Button/Button";

import { useMutation } from "react-query";
import { editProfile } from "@/api/User";

import { countries } from "@/utils/Options/countryOptions";

import { updateSuccess } from "@/redux/actions/UserActions/userActions";
import { useDispatch } from "react-redux";

const Settings = ({ userData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const {
    mutate: editProfileMutation,
    isLoading,
    isError,
  } = useMutation(editProfile, {
    onSuccess: (data) => {
      if (data !== undefined) {
        const token = jwt_decode(data.token);
        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("user", JSON.stringify(token), { expires: 1 });
        dispatch(updateSuccess(token));
      }
    },
    onError: (error) => {
      console.error("Error editing profile:", error);
    },
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Execute the mutation function with the form data
      await editProfileMutation(formData);
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };

  React.useEffect(() => {
    setFormData(userData);
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-4xl mb-6">Settings</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="space-y-6">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-white">
              Profile
            </h2>
            <p className="mt-1 leading-6 text-white text-md">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            {/* <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div class="mt-2">
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      workcation.com/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div> */}

            {/* <div class="col-span-full">
                <label
                  for="about"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div> */}

            {/* <div class="col-span-full">
                <label
                  for="photo"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div class="mt-2 flex items-center gap-x-3">
                  <svg
                    class="h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <button
                    type="button"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div> */}

            {/* <div class="col-span-full">
                <label
                  for="cover-photo"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div class="text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> 
            </div> */}
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-white">
              Personal Information
            </h2>
            <p class="mt-1 text-md leading-6 text-white">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-md font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div class="mt-2">
                  <input
                    value={formData?.fname}
                    onChange={handleChange}
                    type="text"
                    name="fname"
                    id="first-name"
                    autocomplete="given-name"
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lname"
                    id="last-name"
                    autocomplete="family-name"
                    value={formData?.lname}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  for="city"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    value={formData?.email}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  for="region"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="address"
                    autocomplete="address"
                    value={formData?.address}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="region"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    autocomplete="password"
                    value={formData?.password}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="country"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    value={formData?.country}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  >
                    {countries.map((item, i) => {
                      return <option key={i}>{item?.name}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="country"
                  className="block text-md font-medium leading-6 text-white"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="city"
                    autocomplete="city"
                    value={formData?.city}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="phone"
                  className="block text-md font-medium leading-6 text-white"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autocomplete="phone"
                    value={formData?.phone}
                    onChange={handleChange}
                    className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <Button title={"Cancel"} variant={"flat"} color={"danger"} />
          <Button
            loading={isLoading}
            title={"Save"}
            type={"submit"}
            variant={"flat"}
            color={"warning"}
          />
        </div>
      </form>
    </div>
  );
};

export default React.memo(Settings);
