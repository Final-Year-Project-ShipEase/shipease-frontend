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
    // navigate('/approval/drivers');
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
          flexDirection: { md: 'row', xs: 'column' },
          flexShrink: 0,
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        {/* <HeaderButton text={'Reset'} onClick={onClickPermit} /> */}
        <AddModalButton text={'Add Permission'} onClick={onAddPermission} />
      </Grid>
    </Grid>
  );
};

export default PageHeader;
