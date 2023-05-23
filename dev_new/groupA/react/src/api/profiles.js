import axios from "axios";
import Cookies from 'js-cookie';

const PORT = 3000;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;

const token = Cookies.get('TOKEN');
const headers = {
    'Authorization' : token
};

export const create_profile = async (body) => await axios.post(`${SERVER}/profile/create_profile`, body, { headers });
export const getProfile = async () => await axios.get(`${SERVER}/profile/getProfile`, { headers });
export const getUser = async () => await axios.get(`${SERVER}/profile/getUser`, { headers });
