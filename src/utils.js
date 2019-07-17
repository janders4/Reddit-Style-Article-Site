import axios from "axios";

const BASE_URL = "https://reddit-clone-john.herokuapp.com/api";
export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

// const capitalise = word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };

export const fetchArticles = async topic => {
  if (topic === "All") {
    const { data } = await axios.get(`${BASE_URL}/articles`);
    return data;
  } else {
    const { data } = await axios.get(`${BASE_URL}/articles`, {
      params: { topic }
    });
    return data;
  }
};

export const fetchArticleById = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
  return data;
};

export const fetchComments = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}/comments`);
  return data;
};

export const postCommentVote = async (id, vote, section) => {
  const voteObject = { inc_votes: vote };
  const { data } = await axios.patch(
    `${BASE_URL}/${section}/${id}`,
    voteObject
  );
  return data;
};

export const deleteComment = async id => {
  const { data } = await axios.delete(`${BASE_URL}/comments/${id}`);
  return data;
};

export const postComment = async (id, comment, author) => {
  const commentObject = { username: author, body: comment };
  const { data } = await axios.post(
    `${BASE_URL}/articles/${id}/comments`,
    commentObject
  );
  return data;
};
