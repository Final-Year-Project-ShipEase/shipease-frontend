import axios from 'axios';

const CreateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:12345',
  });

  return instance;
};

export default CreateAxiosInstance;
