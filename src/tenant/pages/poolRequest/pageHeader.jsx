import React from 'react';
import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HeaderButton from '../../../commons/buttons/headerButton';
import BlueModalButton from '../../../commons/buttons/blueModalButton';
import PoolRequestModal from './modal/poolReq';

const PageHeader = () => {
  const [Client, setClient] = React.useState('');
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const currentTenantId = localStorage.getItem('tenantData')?.data?.id || 2;
  const handleChange = (event) => {
    setClient(event.target.value);
  };

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
        <FormControl>
          <InputLabel id="Client-select-label">Client</InputLabel>
          <Select
            id="Client-select"
            value={Client}
            label="Client"
            onChange={handleChange}
            sx={{
              display: 'flex',
              width: 125,
              height: 50,
              alignItems: 'flex-start',
              flexShrink: 0,
              backgroundColor: theme.palette.buttons.main,
              color: theme.palette.buttons.text,
              borderRadius: 4,
            }}
            inputProps={{
              label: 'Client',
              disableUnderline: true,
            }}
          >
            <MenuItem value={10}>Client</MenuItem>
            <MenuItem value={20}>Client1</MenuItem>
            <MenuItem value={30}>Client2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="search"
          placeholder="Search User"
          variant="standard"
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
        <HeaderButton text={'Export'} />
      </Box>
    </Box>
  );
};

export default PageHeader;