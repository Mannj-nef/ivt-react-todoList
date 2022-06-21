import axiosClient from "../untils/axiosClient";

export const getTaskApi = async () => {
  const { data } = await axiosClient.get("tasks", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
  return data;
};

export const deleteTaskById = async (id) => {
  await axiosClient.delete(`tasks/${id}`);
};

export const addTaskApi = async (body) => {
  await axiosClient.post("tasks", { ...body });
};
