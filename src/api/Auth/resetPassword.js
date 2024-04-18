const resetPassword = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RESET_PASSWORD}?userId=${data.id}&password=${data.password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You can add any additional headers if needed
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to edit profile");
    }
    return response.json(); // Return the response data
  } catch (error) {
    throw new Error(`Error editing profile: ${error.message}`);
  }
};

export { resetPassword };
