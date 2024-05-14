import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CampaignIcon from '@mui/icons-material/Campaign';

const Active = ({ active }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        border: '1px solid #00668C',
        height: '100%',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            fontSize: '20px',
            color: theme.palette.primary.black,
          }}
        >
          Active Bookings
        </Box>
        <Box
          sx={{
            display: 'flex',
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '10px',
            color: theme.palette.primary.black,
          }}
        >
          {active}
        </Box>
      </Box>

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
            backgroundColor: theme.palette.primary.green,
            padding: '5px',
            width: '60%',
            height: '60%',
          }}
        >
          <CampaignIcon
            sx={{
              color: theme.palette.primary.text,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Active;            