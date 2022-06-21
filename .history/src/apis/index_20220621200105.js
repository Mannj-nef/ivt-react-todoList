import axiosClient from "../untils/axiosClient";

export const getTaskApi = async () => {
  const resporse = await axiosClient.get("tasks", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
  return resporse.data;
};
