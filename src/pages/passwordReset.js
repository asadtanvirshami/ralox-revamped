import { resetPassword } from "@/api/Auth/resetPassword";
import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import verifyToken from "@/api/Auth/verifyToken";
import verifyLinkToken from "@/api/Auth/verifyLinkToken";

const PasswordReset = () => {
  const router = useRouter();
  const { id, token } = router.query;
  const [formData, setFormData] = React.useState({
    password: "",
    cpassword: "",
    id: "",
    token: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const {
    mutate: resetPasswordMutation,
    isLoading,
    isError,
  } = useMutation(resetPassword, {
    onSuccess: (data) => {
      // Handle success response
      console.log("Password reset successful:", data);
    },
    onError: (error) => {
      // Handle error response
      console.error("Error resetting password:", error);
    },
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempObj = { ...formData };
    tempObj.id = id;

    const tokenVerification = await verifyLinkToken(token);
    console.log(tokenVerification);
    if (tokenVerification.verifiedLink) {
      try {
        // Execute the mutation function with the form data
        await resetPasswordMutation(tempObj);
      } catch (error) {
        // Handle any errors
        console.error("Error resetting password:", error);
      }
    }
  };

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="bg-white w-full  shadow-md rounded-md p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">Password Reset</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white border-blue-100 focus:outline-blue-200 border w-full mt-3 rounded-md p-[9px]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
              className="bg-white border-blue-100 focus:outline-blue-200 border w-full mt-3 rounded-md p-[9px]"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
