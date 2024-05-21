import React, { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import PoolRequestDetailsModal from './poolrequestDetailModal';
import { formatTimestampWithoutTime } from '../../../../utils/timestamp';
import Spinner from '../../../../utils/spinner';

const PoolRequestCard = ({ poolRequest, handleOnClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          poolRequest.status === 'completed'
            ? 'transparent'
            : theme.palette.primary.color1,
        width: '30%',
        height: '40%',
        borderRadius: '10px',
        marginBottom: '2%',
        marginRight: '2%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)',
        padding: '1%',
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
            marginBottom: '4px',
          }}
          p={1}
        >
          Request
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.black,
          }}
        >
          Vehicle Type: {poolRequest.types}
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
            color: theme.palette.primary.black,
            marginBottom: '4px',
            fontVariant: 'small-caps',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        >
          {poolRequest.city} - {poolRequest.destination}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.black,
          }}
        >
          Rs. {poolRequest.bookingDetails.total_bill} PKR
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.primary.black,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {poolRequest.description || 'No description provided'}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: theme.palette.primary.black,
          marginTop: '8px',
        }}
      >
        Departure Date: {formatTimestampWithoutTime(poolRequest.startDate)}
      </Typography>
    </Box>
  );
};

const PoolRequestInformation = ({ poolRequests, error, loading }) => {
  const [openModal, setModal] = useState(false);
  const [poolRequestId, setPoolRequestId] = useState('');
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [buttonText, setButtonText] = useState('');

  const handlePoolRequestClick = (id) => {
    setPoolRequestId(id);
    setButtonText('Update');
    setModal(true);
  };

  const handlePoolRequestView = (id) => {
    setPoolRequestId(id);
    setButtonText('Book Now');
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
        button={buttonText}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'Column',
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          My Active Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
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
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          Other Pool Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
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
