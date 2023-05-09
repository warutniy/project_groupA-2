import axios from "axios";

const PORT = 3001;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;

export const getUser = async () => {
  const response = await axios.get(`${SERVER}/users`);
  const body = response.data;
  return body;
};

export const loginUser = async (body) => {
  const response = await axios.post(`${SERVER}/users`, body);
  alert(response.data);
};