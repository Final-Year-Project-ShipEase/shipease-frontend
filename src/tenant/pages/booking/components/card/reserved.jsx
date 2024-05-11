import React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useBookingService } from '../../../../../services/bookingServices';

const Reserved = () => {
  const theme = useTheme();
  const [reserved, setReserved] = useState(0);
  const { getBookingList } = useBookingService();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await getBookingList();
        const reservedBookings = response.filter(
          (booking) => booking.status === 'reserved'
        );
        setReserved(reservedBookings.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.backgroundColor,
        width: '11%',
        height: '10%',
        borderRadius: '10px',
        marginLeft: '3%',
        marginBottom: '3%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.primary.color1,
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.purple,
            width: '40px',
            height: '40px',
            padding: '5px',
          }}
        >
          <CampaignIcon
            sx={{
              color: theme.palette.primary.text,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            fontSize: '20px',
            fontWeight: 'bold',
            color: theme.palette.primary.text,
          }}
        >
          {reserved}
        </Box>
        <Box
          sx={{
            display: 'flex',
            fontSize: '12px',
            color: theme.palette.primary.text,
          }}
        >
          Reserved
        </Box>
      </Box>
    </Box>
  );
};

export default Reserved;            