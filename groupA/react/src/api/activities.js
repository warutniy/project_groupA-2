import axios from "axios";
import Cookies from 'js-cookie';

const PORT = 3000;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;

const token = Cookies.get('TOKEN');
const headers = {
    'Authorization' : token
};

export const create_card = async (body) => await axios.post(`${SERVER}/activity/create_card`, body, { headers });
export const getCard = async () => await axios.get(`${SERVER}/activity/getCard`, { headers });
export const edit_card = async (activityID, body) => await axios.patch(`${SERVER}/activity/${activityID}`, body, { headers });