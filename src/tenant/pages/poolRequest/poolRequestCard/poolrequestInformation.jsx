import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import PoolRequestDetailsModal from './poolrequestDetailModal';
import { usePoolRequestService } from '../../../../services/poolRequestServices';
import { useBookingService } from '../../../../services/bookingServices';
import { formatTimestamp } from '../../../../utils/timestamp';
import Spinner from '../../../../utils/spinner';

const PoolRequestCard = ({ poolRequest, handleOnClick }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const cardWidth = matchesSm ? '90%' : '450px';
  const cardHeight = 'auto';
  const cardMinHeight = '200px';

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        maxWidth: cardWidth,
        height: cardHeight,
        minHeight: cardMinHeight,
        borderRadius: '10px',
        margin: '1%',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onClick={() => handleOnClick(poolRequest.id)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'Row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            borderRadius: '5px',
            backgroundColor: theme.palette.background.bookingCompletedStatus,
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText,
          }}
          p={1}
        >
          Request
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText,
          }}
        >
          {poolRequest.types}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'Row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.contrastText,
            marginBottom: '4px',
          }}
        >
          {poolRequest.city} - {poolRequest.destination}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          {poolRequest.bookingDetails.total_bill} PKR
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.primary.contrastText,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {poolRequest?.bookingDetails?.description || 'No description provided'}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.primary.contrastText,
          marginTop: '8px', // Push the date to the bottom
        }}
      >
        Date: {formatTimestamp(poolRequest.startDate)}
      </Typography>
    </Box>
  );
};

const PoolRequestInformation = () => {
  const [poolRequests, setPoolRequests] = useState({
    currentTenant: [],
    otherTenants: [],
  });

  const currentTenantId = localStorage.getItem('tenantData')?.data?.id || 2;
  const { getPoolRequestList } = usePoolRequestService();
  const { getBooking } = useBookingService();
  const [openModal, setModal] = useState(false);
  const [poolRequestId, setPoolRequestId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const poolRequestResponse = await getPoolRequestList();
        const enhancedPoolRequests = await Promise.all(
          poolRequestResponse.map(async (request) => {
            try {
              const bookingDetails = await getBooking(request.booking_id);
              return { ...request, bookingDetails };
            } catch (bookingError) {
              console.error('Booking fetch error:', bookingError);
              return request;
            }
          })
        );

        const currentTenantRequests = enhancedPoolRequests
          .filter(
            (request) => request.bookingDetails.tenant_id === currentTenantId
          )
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        const otherTenantRequests = enhancedPoolRequests
          .filter(
            (request) => request.bookingDetails.tenant_id !== currentTenantId
          )
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

        setPoolRequests({
          currentTenant: currentTenantRequests,
          otherTenants: otherTenantRequests,
        });
        setLoading(false);
      } catch (fetchError) {
        console.error('Failed to fetch data:', fetchError);
        setError('Failed to load pool requests. Please try again later.');
      }
    };
    fetchData();
  }, []);

  const handlePoolRequestClick = (id) => {
    setPoolRequestId(id);
    setModal(true);
  };

  const handlePoolRequestView = (id) => {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, m: 4 }}>
      {loading && <Spinner />}
      <PoolRequestDetailsModal
        open={openModal}
        handleClose={() => setModal(false)}
        prID={poolRequestId}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'Column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          My Active Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            padding: matchesSm ? '8px' : '16px',
            '&::-webkit-scrollbar': {
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '10px',
            },
          }}
        >
          {poolRequests.currentTenant.map((poolRequest) => (
            <PoolRequestCard
              key={poolRequest.id}
              poolRequest={poolRequest}
              handleOnClick={handlePoolRequestClick}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'Column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          Other Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            padding: matchesSm ? '8px' : '16px',
            '&::-webkit-scrollbar': {
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '10px',
            },
          }}
        >
          {poolRequests.otherTenants.map((poolRequest) => (
            <PoolRequestCard
              key={poolRequest.id}
              poolRequest={poolRequest}
              handleOnClick={handlePoolRequestView}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PoolRequestInformation;
