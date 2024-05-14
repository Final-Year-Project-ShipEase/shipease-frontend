import React from 'react';
import { Box, TextField, InputAdornment, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HeaderButton from '../../../commons/buttons/headerButton';
import BlueModalButton from '../../../commons/buttons/blueModalButton';
import PoolRequestModal from './modal/poolReq';

const PageHeader = ({ onSearch }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const currentTenantId = localStorage.getItem('tenantData')?.data?.id || 2;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '20px',
      }}
    >
      <PoolRequestModal
        open={open}
        handleClose={handleClose}
        tenantId={currentTenantId}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <TextField
          id="search"
          placeholder="Search Pool Requests"
          variant="standard"
          onChange={(e) => onSearch(e.target.value)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10px 18px',
            gap: 8,
            width: 500,
            height: 50,
            color: theme.palette.buttons.text,
            backgroundColor: theme.palette.buttons.main,
            borderRadius: 4,
            boxShadow: theme.palette.shadows.customButton1,
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlinedIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'flex-end',
        }}
      >
        <BlueModalButton
          text={'Create Pool Request'}
          onClick={handleClickOpen}
        />
      </Box>
    </Box>
  );
};

export default PageHeader;