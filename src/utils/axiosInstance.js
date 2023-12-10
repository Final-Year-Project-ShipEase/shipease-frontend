import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:12345',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
