import axios from "axios";

export const getAllProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_ALL_PROJECTS}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const updateProject = async (data) => {
  const response = axios
    .post(process.env.NEXT_PUBLIC_UPDATE_PROJECTDETAIL, data)
    .then((res) => {
      if (res.data.message == "project-updated") {
        return res.data.payload;
      }
    });
  if (!response) {
    throw new Error("Failed to update projects");
  }
  return response;
};

export const getProjectsByCode = async (code) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_CODE}?code=${code}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
};

export const getProjectsByUserID = async (userId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_USER_ID}?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getProjectbyStatusById = async (id, status) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_STATUS_BY_ID}?status=${status}&&userId=${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getProjectbyStatus = async (status) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_STATUS}?status=${status}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getProjectById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_ID}${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const createProject = async (data) => {
  const response = await axios
    .post(`${process.env.NEXT_PUBLIC_CREATE_PROJECT}`, {
      data,
    })
    .then((res) => {
      if (res.data.message == "project-created") {
        return res.data.payload;
      }
    });
  if (!response) {
    throw new Error("Failed to fetch projects");
  }
  return response;
};

export const deleteProject = async (id) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_DELETE}?id=${id}`
  );
  if (!response) {
    throw new Error("Failed to fetch projects");
  }
  const responseData = await response.json();
  return responseData;
};
