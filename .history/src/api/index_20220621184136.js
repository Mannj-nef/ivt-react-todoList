import axios from "axios";

const getApi = async (urlApi) => {
  const response = await axios.get(urlApi);
  return response.data;
};
