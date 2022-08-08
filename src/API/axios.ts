import axios from 'axios';
const baseURL = "http://10.0.4.26:10007/api"
export const api = axios.create({
    baseURL: baseURL
});
