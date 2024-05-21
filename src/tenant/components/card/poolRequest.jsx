import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { formatTimestamp } from '../../../utils/timestamp';
import { useNavigate } from 'react-router-dom';

const DriverDetail = ({ poolRequest }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
        borderRadius: '12px',
        backgroundColor: 'white',
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              color: theme.palette.buttons.secondary,
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {poolRequest.city} - {poolRequest.destination}
          </Typography>
          <Typography
            sx={{ color: theme.palette.buttons.secondary, fontSize: '13px' }}
          >
            Fair: {poolRequest.price}
          </Typography>
          <Typography
            sx={{ color: theme.palette.buttons.secondary, fontSize: '13px' }}
          >
            Vehicle Type: {poolRequest.types}
          </Typography>
        </Box>

        <Typography
          sx={{ color: theme.palette.buttons.secondary, fontSize: '13px' }}
        >
          Departure Time: {formatTimestamp(poolRequest.startDate)}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        style={{
          backgroundColor: theme.palette.buttons.primary,
          color: theme.palette.buttons.secondary,
          borderRadius: '12px',
          width: '100px',
          height: '40px',
          fontSize: '12px',
          marginTop: '10px',
        }}
        onClick={() => {
          navigate(`/poolrequest`);
        }}
      >
        Details
        <ArrowForwardIosIcon sx={{ fontSize: 'medium' }} />
      </Button>
    </Box>
  );
};

export default DriverDetail;
