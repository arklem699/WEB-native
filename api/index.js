import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.165.79:8000' });