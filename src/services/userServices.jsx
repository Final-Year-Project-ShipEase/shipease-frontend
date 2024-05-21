import CreateAxiosInstance from '../utils/axiosInstance';

export function useUserService() {
  const axiosInstance = CreateAxiosInstance();

  const getUserList = async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
  };

  const getUser = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data;
  };

  const updateUser = async (id, data) => {
    const response = await axiosInstance.put(`/user/${id}`, data);
    return response.data;
  };

  const deleteUser = async (id) => {
    const response = await axiosInstance.delete(`/user/${id}`);
    return response.data;
  };

  const createUser = async (data) => {
    const response = await axiosInstance.post('/user', data);
    return response.data;
  };

  return {
    getUserList,
    getUser,
    updateUser,
    updateUser,
    deleteUser,
    createUser,
  };
}
