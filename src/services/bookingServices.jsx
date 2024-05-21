import CreateAxiosInstance from '../utils/axiosInstance';

export function useBookingService() {
  const axiosInstance = CreateAxiosInstance();

  const getBookingList = async () => {
    const response = await axiosInstance.get('/bookings');
    return response.data;
  };

  const getBookingListByTenantId = async (id) => {
    const response = await axiosInstance.get(`/bookings/tenant/${id}`);
    return response.data;
  };

  const getBooking = async (id) => {
    const response = await axiosInstance.get(`/booking/${id}`);
    return response.data;
  };

  const updateBooking = async (id, data) => {
    const response = await axiosInstance.put(`/booking/${id}`, data);
    return response.data;
  };

  const deleteBooking = async (id) => {
    const response = await axiosInstance.delete(`/booking/${id}`);
    return response.data;
  };

  const createBooking = async (data) => {
    const response = await axiosInstance.post('/booking', data);
    return response.data;
  };

  return {
    getBookingList,
    getBooking,
    updateBooking,
    deleteBooking,
    createBooking,
    getBookingListByTenantId,
  };
}
