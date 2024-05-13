import CreateAxiosInstance from '../../utils/axiosInstance';

export function useVehicleService() {
  const axiosInstance = CreateAxiosInstance();

  const getVehicles = async () => {
    const response = await axiosInstance.get('/vehicles');
    return response.data;
  };

  const getVehicle = async (id) => {
    const response = await axiosInstance.get(`/vehicle/${id}`);
    return response.data;
  };

  const addVehicle = async (data) => {
    const response = await axiosInstance.post('/vehicle', data);
    return response;
  };

  const updateVehicle = async (id, data) => {
    const response = await axiosInstance.put(`/vehicle/${id}`, data);
    return response.data;
  };

  const deleteVehicle = async (id) => {
    const response = await axiosInstance.delete(`/vehicle/${id}`);
    return response.data;
  };

  const approveVehicle = async (id) => {
    const response = await axiosInstance.put(`/vehicle/${id}/approve`);
    return response.data;
  };

  return {
    getVehicles,
    getVehicle,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    approveVehicle,
  };
}

export default useVehicleService;
