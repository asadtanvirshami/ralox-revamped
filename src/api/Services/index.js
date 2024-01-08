export const getService = async (id,status) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GET_PROJECT_BY_STATUS}?status=${status}&&userId=${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
  };
