import CreateAxiosInstance from '../../utils/axiosInstance';

export function useDriverService() {
  const axiosInstance = CreateAxiosInstance();

  const getDriverList = async () => {
    const response = await axiosInstance.get('/drivers');
    return response.data;
  };

  const getDriver = async (id) => {
    const response = await axiosInstance.get(`/driver/${id}`);
    return response.data;
  };

  const updateDriver = async (id, data) => {
    const response = await axiosInstance.put(`/driver/${id}`, data);
    return response.data;
  };

  const deleteDriver = async (id) => {
    const response = await axiosInstance.delete(`/driver/${id}`);
    return response.data;
  };

  const createDriver = async (data) => {
    const response = await axiosInstance.post('/driver', data);
    return response.data;
  };

  const getDriverByTenantId = async (id) => {
    const response = await axiosInstance.get(`/drivers/tenant/${id}/index`);
    return response.data;
  };

  const getDriverDetailsById = async (id) => {
    const response = await axiosInstance.get(`/driverdetail/${id}`);
    return response.data;
  };

  return {
    getDriverList,
    getDriver,
    updateDriver,
    deleteDriver,
    createDriver,
    getDriverByTenantId,
    getDriverDetailsById,
  };
}

export default useDriverService;
