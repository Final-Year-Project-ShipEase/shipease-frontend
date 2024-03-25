import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PoolRequestDetailsModal from './poolrequestDetailModal';
import { usePoolRequestService } from '../../../../services/poolRequestServices';
import { useBookingService } from '../../../../services/bookingServices';
import { formatTimestamp } from '../../../../utils/timestamp';
import Spinner from '../../../../utils/spinner';

const PoolRequestCard = ({ poolRequest, handleOnClick }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: '30%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '2%',
        marginRight: '2%',
        padding: '1%',
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
            {poolRequest?.bookingDetails?.description
              ? poolRequest?.bookingDetails?.description
              : 'No description provided'}
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

        console.log(enhancedPoolRequests);

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
        poolRequest_id={poolRequestId}
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
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
          My Active Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            flexDirection: 'row',
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
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
          Other Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            flexDirection: 'row',
          }}
        >
          {poolRequests.otherTenants.map((poolRequest) => (
            <PoolRequestCard
              key={poolRequest.id}
              poolRequest={poolRequest}
              handleOnClick={handlePoolRequestClick}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PoolRequestInformation;
