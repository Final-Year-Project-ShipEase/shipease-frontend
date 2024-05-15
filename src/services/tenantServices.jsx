import CreateAxiosInstance from '../utils/axiosInstance';

export function useTenantServices(){
    const axiosInstance = CreateAxiosInstance();

    const getTenantList = async () => {
        const response = await axiosInstance.get('/tenants');
        return response.data;
    };

    const getTenant = async (id) => {
        const response = await axiosInstance.get(`/tenant/${id}`);
        return response.data;
    };

    const updateTenant = async (id, data) => {
        const response = await axiosInstance.put(`/tenant/${id}`, data);
        return response.data;
    };

    const deleteTenant = async (id) => {
        const response = await axiosInstance.delete(`/tenant/${id}`);
        return response.data;
    };

    const createTenant = async (data) => {
        const response = await axiosInstance.post('/tenant', data);
        return response.data;
    };

    return {
        getTenantList,
        getTenant,
        updateTenant,
        deleteTenant,
        createTenant,
    };

}