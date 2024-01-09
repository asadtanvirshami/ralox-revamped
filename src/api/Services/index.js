export const getServices = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GET_SERVICES}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
  };
