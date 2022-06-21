import axios from "axios";

export const getApi = async (urlApi) => {
  const response = await axios.get(urlApi);
  return response;
};
