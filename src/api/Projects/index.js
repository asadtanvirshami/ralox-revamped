import axios from "axios";

export const getProjectsByUserID = async (userId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_USER_ID}?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getProjectByStatus = async (id,status) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_STATUS}?status=${status}&&userId=${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const createProject = async (data) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_CREATE_PROJECT}`, {
    data
  });
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};
