export const getProjectsByStatus = async (userId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_USER_ID}?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};
