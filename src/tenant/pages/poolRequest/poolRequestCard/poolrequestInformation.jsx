import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PoolRequestDetailsModal from './poolrequestDetailModal';
import { usePoolRequestService } from '../../../../services/poolRequestServices';
import { useBookingService } from '../../../../services/bookingServices';
import { formatTimestamp } from '../../../../utils/timestamp';

// Sub-component for individual PoolRequest card
const PoolRequestCard = ({ poolRequest, handleOnClick }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: '30%',
        height: 'auto', // Adjusted for content
        borderRadius: '10px',
        marginBottom: '2%',
        marginRight: '2%',
        padding: '10px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      }}
      onClick={() => handleOnClick(poolRequest.id)}
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
              fontSize: '15px',
              fontWeight: 'bold',
              color: theme.palette.primary.text,
              padding: '10px',
              marginTop: '10px',
            }}
          >
            <Box
              sx={{
                backgroundColor:
                  theme.palette.background.bookingCompletedStatus,
                borderRadius: '5px',
              }}
              p={1}
            >
              Request
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
            {poolRequest.city} - {poolRequest.destination}
          </Box>

          <Box
            sx={{
              fontSize: '15px',
              color: theme.palette.primary.text,
              paddingRight: '10px',
            }}
          >
            {poolRequest.bookingDetails.total_bill} PKR
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
              marginRight: '50px',
            }}
          >
            Est aspernatur nostrum et molestias perspiciatis eum vitae quia non
            quod iste ex cumque doloribus aut repellat
          </Box>
          <Box
            sx={{
              fontSize: '15px',
              color: theme.palette.primary.text,
              padding: '10px',
            }}
          >
            Date: {formatTimestamp(poolRequest.startDate)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Main component for PoolRequest information
const PoolRequestInformation = () => {
  const [poolRequests, setPoolRequests] = useState([]);
  const { getPoolRequestList } = usePoolRequestService();
  const { getBooking } = useBookingService();
  const [openModal, setModal] = useState(false);
  const [poolRequestId, setPoolRequestId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const poolRequestResponse = await getPoolRequestList();
        const enhancedPoolRequests = await Promise.all(
          poolRequestResponse.map(async (request) => {
            try {
              const bookingDetails = await getBooking(request.booking_id);
              return { ...request, bookingDetails };
            } catch (bookingError) {
              console.error('Booking fetch error:', bookingError);
              return request; // Return request without booking details on error
            }
          })
        );
        setPoolRequests(enhancedPoolRequests);
      } catch (fetchError) {
        console.error('Failed to fetch data:', fetchError);
        setError('Failed to load pool requests. Please try again later.');
      }
    };
    fetchData();
  }, [getPoolRequestList, getBooking]);

  const handlePoolRequestClick = (id) => {
    setPoolRequestId(id);
    setModal(true);
  };

  if (error) {
    return (
      <Typography color="error" sx={{ ml: 4 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 4 }}>
      <PoolRequestDetailsModal
        open={openModal}
        handleClose={() => setModal(false)}
        poolRequest_id={poolRequestId}
      />
      {poolRequests.map((request) => (
        <PoolRequestCard
          key={request.id}
          poolRequest={request}
          handleOnClick={handlePoolRequestClick}
        />
      ))}
    </Box>
  );
};

export default PoolRequestInformation;
