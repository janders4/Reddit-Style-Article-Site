import axios from "axios";

const BASE_URL = "https://reddit-clone-john.herokuapp.com/api/";
export const getIds = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);

  // data.topics.forEach(item => {
  //   return capitalise(item.slug);
  // });
  return data;
};

// const capitalise = word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };
