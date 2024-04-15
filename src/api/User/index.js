import axios from "axios";

export const getProfile = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROFILE}?userId=${id}`
  );
  if (!response) {
    throw new Error("Failed to fetch profile");
  }
  return response.json();
};

export const editProfile = async (formData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_UPDATE_PROFILE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add any additional headers if needed
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to edit profile");
    }
    return response.json(); // Return the response data
  } catch (error) {
    throw new Error(`Error editing profile: ${error.message}`);
  }
};
