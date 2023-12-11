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
  Grid,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../../commons/buttons/headerButton';
import AddModalButton from '../../../commons/buttons/addModal';
import AddPermissionModal from './components/modal/addPermission';

const PageHeader = () => {
  const [Driver, setDriver] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setDriver(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickPermit = () => {
    navigate('/approval/drivers');
  };

  const onAddPermission = () => {
    setOpen(true);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <AddPermissionModal
        text={'Add Permission'}
        open={open}
        handleClose={handleClose}
      />
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { md: 'row', xs: 'column' },
          flexShrink: 0,
        }}
      >
        <FormControl>
          <InputLabel id="Driver-select-label">Driver</InputLabel>
          <Select
            id="Driver-select"
            value={Driver}
            label="Driver"
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
              label: 'Driver',
              disableUnderline: true,
            }}
          >
            <MenuItem value={10}>ID</MenuItem>
            <MenuItem value={20}>Tenant ID</MenuItem>
            <MenuItem value={30}>Username</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="search"
          placeholder="Search Driver"
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
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          flexShrink: 0,
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        <HeaderButton text={'Export'} onClick={onClickPermit} />
        <HeaderButton text={'Reset'} onClick={onClickPermit} />
        <AddModalButton text={'Add Permission'} onClick={onAddPermission} />
      </Grid>
    </Grid>
  );
};

export default PageHeader;
