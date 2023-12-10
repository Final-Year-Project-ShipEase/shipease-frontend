import axiosInstance from '../../utils/axiosInstance';

export const getTenants = async () => {
  try {
    const response = await axiosInstance.get('/tenants');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTenant = async (id) => {
  try {
    const response = await axiosInstance.get(`/tenants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTenant = async (tenant) => {
  try {
    const response = await axiosInstance.post('/tenants', tenant);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTenant = async (tenant) => {
  try {
    const response = await axiosInstance.put(`/tenants/${tenant.id}`, tenant);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTenant = async (id) => {
  try {
    await axiosInstance.delete(`/tenants/${id}`);
  } catch (error) {
    throw error;
  }
};
