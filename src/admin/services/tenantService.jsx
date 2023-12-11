import CreateAxiosInstance from '../../utils/axiosInstance';

export function useTenantService() {
  const axiosInstance = CreateAxiosInstance();

  const getTenants = async () => {
    try {
      const response = await axiosInstance.get('/tenants');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getTenantById = async (id) => {
    try {
      const response = await axiosInstance.get(`/tenants/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const createTenant = async (tenant) => {
    try {
      const response = await axiosInstance.post('/tenants', tenant);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateTenant = async (tenant) => {
    try {
      const response = await axiosInstance.put(`/tenants/${tenant.id}`, tenant);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteTenant = async (id) => {
    try {
      const response = await axiosInstance.delete(`/tenants/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getTenants,
    getTenantById,
    createTenant,
    updateTenant,
    deleteTenant,
  };
}

export default useTenantService;
