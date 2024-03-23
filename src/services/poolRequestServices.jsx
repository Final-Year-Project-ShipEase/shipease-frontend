import CreateAxiosInstance from '../utils/axiosInstance';

export function usePoolRequestService(){
    const axiosInstance = CreateAxiosInstance();

    const getPoolRequestList = async () => {
        const response = await axiosInstance.get('/poolRequests');
        return response.data;
    };

    const getPoolRequest = async (id) => {
        const response = await axiosInstance.get(`/poolRequest/${id}`);
        return response.data;
    };

    const updatePoolRequest = async (id, data) => {
        const response = await axiosInstance.put(`/poolRequest/${id}`, data);
        return response.data;
    };

    const deletePoolRequest = async (id) => {
        const response = await axiosInstance.delete(`/poolRequest/${id}`);
        return response.data;
    };

    const createPoolRequest = async (data) => {
        const response = await axiosInstance.post('/poolRequest', data);
        return response.data;
    };


    return {
        getPoolRequestList,
        getPoolRequest,
        updatePoolRequest,
        deletePoolRequest,
        createPoolRequest,
    };
}