import axios from "axios";

const BASE_URL = "https://reddit-clone-john.herokuapp.com/api/";
export const getIds = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data;
};
