import CreateAxiosInstance from '../../utils/axiosInstance';

export function useDriverApprovalService() {
  const axiosInstance = CreateAxiosInstance();

  const getDriverApprovalList = async () => {
    const response = await axiosInstance.get('/driverApprovals');
    return response.data;
  };

  const getDriverApproval = async (id) => {
    const response = await axiosInstance.get(`/driverApproval/${id}`);
    return response.data;
  };

  const updateDriverApproval = async (id, data) => {
    const response = await axiosInstance.put(`/driverApproval/${id}`, data);
    return response.data;
  };

  const deleteDriverApproval = async (id) => {
    const response = await axiosInstance.delete(`/driverApproval/${id}`);
    return response.data;
  };

  const createDriverApproval = async (data) => {
    const response = await axiosInstance.post('/driverApproval', data);
    return response.data;
  };

  const getDriverApprovalByTenantId = async (id) => {
    const response = await axiosInstance.get(`/driverApproval/tenant/${id}`);
    return response.data;
  };

  const approveDriver = async (id) => {
    const response = await axiosInstance.get(`/driverApproval/approve/${id}`);
    return response.data;
  };

  const rejectDriver = async (id) => {
    const response = await axiosInstance.get(`/driverApproval/reject/${id}`);
    return response.data;
  };

  const getRejectedApproval = async () => {
    const response = await axiosInstance.get('/driverApprovals/rejected');
    return response.data;
  };

  return {
    getDriverApprovalList,
    getDriverApproval,
    updateDriverApproval,
    deleteDriverApproval,
    createDriverApproval,
    getDriverApprovalByTenantId,
    approveDriver,
    rejectDriver,
    getRejectedApproval,
  };
}

export default useDriverApprovalService;
