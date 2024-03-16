import axios from 'axios';

const CreateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });

  return instance;
};

export default CreateAxiosInstance;
