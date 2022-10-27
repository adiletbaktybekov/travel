import axios from "axios";

export const API_ADDRESS = 'https://webilim.herokuapp.com/';

const API = axios.create({
    baseURL: API_ADDRESS,
});

export default API