import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BookingDetailsModal from './bookingDetailModal';
import { formatTimestampWithoutTime } from '../../../../../utils/timestamp';

const BookingInformation = ({ booking, users }) => {
  const theme = useTheme();
  const [openModal, setModal] = useState(false);

  const handleBookingClick = (bookingid) => {
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
            backgroundColor:
              bookings.status === 'completed'
                ? 'transparent'
                : theme.palette.primary.color1,
            width: '30%',
            height: '40%',
            borderRadius: '10px',
            marginBottom: '2%',
            marginRight: '2%',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            border: '1px solid rgba(0,0,0,0.1)',
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
                      bookings.status === 'active'
                        ? theme.palette.primary.green
                        : bookings.status === 'reserved'
                          ? theme.palette.primary.purple
                          : bookings.status === 'completed'
                            ? theme.palette.primary.yellow
                            : 'transparent',
                    borderRadius: '3px',
                    padding: '3px',
                    fontVariant: 'small-caps',
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
                  fontSize: '20px',
                  color: theme.palette.primary.black,
                  paddingLeft: '10px',
                  fontWeight: 'bold',
                  fontVariant: 'small-caps',
                }}
              >
                {bookings.pickup} - {bookings.dropoff}
              </Box>

              <Box
                sx={{
                  fontSize: '15px',
                  color: theme.palette.primary.black,
                  paddingRight: '40px',
                }}
              >
                Rs. {bookings.total_bill} PKR
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
                  color: theme.palette.primary.black,
                  padding: '10px',
                }}
              >
                Est aspernatur nostrum et molestias perspiciatis eum vitae quia
                non quod iste ex cumque doloribus aut repellat
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
                  color: theme.palette.primary.black,
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
                  color: theme.palette.primary.black,
                  padding: '10px',
                }}
              >
                Date: {formatTimestampWithoutTime(bookings.date)}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BookingInformation;
