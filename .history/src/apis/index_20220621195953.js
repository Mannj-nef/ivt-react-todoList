import axiosClient from "../untils/axiosClient";

export const getTaskApi = async () => {
  const respornse = axiosClient.get("tasks", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
  return respornse;
};
