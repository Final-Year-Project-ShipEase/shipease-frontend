import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useBookingService } from '../../../../../services/bookingServices';
import { useUserService } from '../../../../../services/userServices';
import BookingDetailsModal from './bookingDetailModal';
import { SettingsBackupRestoreOutlined } from '@mui/icons-material';



const BookingInformation = () => {
    const [booking, setBookings] = useState([]);
    const { getBookingList } = useBookingService();
    const {getUserList} = useUserService();
    const [users, setUser] = useState([]);
    const theme = useTheme();
    const [openModal, setModal] = useState(false);
    const [bookingId, setBookingId] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const bookingResponse = await getBookingList();
          const userResponse = await getUserList();

          // Sort booking based on booking status
          const sortedBooking = bookingResponse.sort((a, b) => {
            const order = { active: 1, reserved: 2, completed: 3 };
            return order[a.status] - order[b.status];
          });

          setBookings(sortedBooking);
          setUser(userResponse);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []);
    

    const handleBookingClick = (bookingid) => {
      setBookingId(bookingid);
      setModal(true);
    };

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }} ml={4}>
        <BookingDetailsModal
          open={openModal}
          handleClose={() => setModal(false)}
          booking={booking}
        />
        {booking.map((bookings) => (
          <Box
            sx={{
              backgroundColor: theme.palette.primary.backgroundColor,
              backgroundColor:
                bookings.status == 'completed'
                  ? theme.palette.primary.color1
                  : theme.palette.primary.backgroundColor,
              width: '30%',
              height: '40%',
              borderRadius: '10px',
              marginBottom: '2%',
              marginRight: '2%',
            }}
            onClick={() => handleBookingClick(booking.id)}
            style={{ cursor: 'pointer' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'space-between',
                }}
              >
                <Box
                  sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: theme.palette.primary.text,
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        bookings.status == 'active'
                          ? theme.palette.primary.green
                          : bookings.status == 'reserved'
                            ? theme.palette.primary.purple
                            : bookings.status == 'completed'
                              ? theme.palette.primary.yellow
                              : 'transparent',
                      borderRadius: '3px',
                      padding: '3px',
                    }}
                  >
                    {bookings.status}
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    fontSize: '15px',
                    color: theme.palette.primary.text,
                    paddingLeft: '10px',
                  }}
                >
                  {bookings.pickup} - {bookings.dropoff}
                </Box>

                <Box
                  sx={{
                    fontSize: '15px',
                    color: theme.palette.primary.text,
                    paddingRight: '40px',
                  }}
                >
                  {bookings.total_bill} PKR
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    fontSize: '12px',
                    color: theme.palette.primary.text,
                    padding: '10px',
                  }}
                >
                  Est aspernatur nostrum et molestias perspiciatis eum vitae
                  quia non quod iste ex cumque doloribus aut repellat
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: theme.palette.primary.text,
                    padding: '10px',
                  }}
                >
                  Client:{' '}
                  {users.find((user) => user.id === bookings.user_id)?.name}
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    fontSize: '15px',
                    color: theme.palette.primary.text,
                    padding: '10px',
                  }}
                >
                  Date: {bookings.date}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
};

export default BookingInformation;