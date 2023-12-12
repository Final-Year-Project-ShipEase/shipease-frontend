import CreateAxiosInstance from '../../utils/axiosInstance';

export function useVehicleApprovalService() {
  const axiosInstance = CreateAxiosInstance();

  const getVehiclesApproval = async () => {
    const response = await axiosInstance.get('/vehicleApprovals');
    return response.data;
  };

  const getVehicleApproval = async (id) => {
    const response = await axiosInstance.get(`/vehicleApproval/${id}`);
    return response.data;
  };

  const addVehicleApproval = async (data) => {
    const response = await axiosInstance.post('/vehicleApproval', data);
    return response.data;
  };

  const updateVehicleApproval = async (id, data) => {
    const response = await axiosInstance.put(`/vehicleApproval/${id}`, data);
    return response.data;
  };

  const deleteVehicleApproval = async (id) => {
    const response = await axiosInstance.delete(`/vehicleApproval/${id}`);
    return response.data;
  };

  return {
    getVehiclesApproval,
    getVehicleApproval,
    addVehicleApproval,
    updateVehicleApproval,
    deleteVehicleApproval,
  };
}

export default useVehicleApprovalService;
