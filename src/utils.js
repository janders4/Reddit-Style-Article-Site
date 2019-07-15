import axios from "axios";

const BASE_URL = "https://reddit-clone-john.herokuapp.com/api/";
export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data;
};

// const capitalise = word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };

export const fetchArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}articles`);
  return data;
};
