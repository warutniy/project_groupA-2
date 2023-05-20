import axios from "axios";

const PORT = 3000;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;

export const signup = async (body) => await axios.post(`${SERVER}/authen/register`, body);

export const login = async (body) => await axios.post(`${SERVER}/authen/login`, body,);
