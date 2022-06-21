import axiosClient from "../untils/axiosClient";

export const getTaskApi = async () => {
  const { data } = axiosClient.get("tasks", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
  return data;
};
