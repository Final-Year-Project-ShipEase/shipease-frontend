import CreateAxiosInstance from '../utils/axiosInstance';

export function useVehicleService() {
  const axiosInstance = CreateAxiosInstance();

  const getVehicleList = async () => {
    const response = await axiosInstance.get('/vehicles');
    return response.data;
  };

  const getVehicle = async (id) => {
    const response = await axiosInstance.get(`/vehicle/${id}`);
    return response.data;
  };

  const updateVehicle = async (id, data) => {
    const response = await axiosInstance.put(`/vehicle/${id}`, data);
    return response.data;
  };

  const deleteVehicle = async (id) => {
    const response = await axiosInstance.delete(`/vehicle/${id}`);
    return response.data;
  };

  const createVehicle = async (data) => {
    const response = await axiosInstance.post('/vehicle', data);
    return response.data;
  };

  const getVehicleByTenantId = async (id) => {
    const response = await axiosInstance.get(`/vehicles/tenant/${id}/index`);
    return response.data;
  };

  const approveVehicle = async (id) => {
    const response = await axiosInstance.put(`/vehicle/${id}/approve`);
    return response.data;
  };

  return {
    approveVehicle,
    getVehicleList,
    getVehicle,
    updateVehicle,
    deleteVehicle,
    createVehicle,
    getVehicleByTenantId,
  };
}
