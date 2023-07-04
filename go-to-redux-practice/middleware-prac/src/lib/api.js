import axios from "axios";

export const getPostById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getUsers = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};
