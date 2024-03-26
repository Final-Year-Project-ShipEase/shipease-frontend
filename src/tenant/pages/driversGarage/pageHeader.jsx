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
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../../commons/buttons/headerButton';
import AddModalButton from '../../../commons/buttons/addModal';

const PageHeader = () => {
  const [Driver, setDriver] = React.useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setDriver(event.target.value);
  };

  const onClickPermit = () => {
    navigate('/approval/drivers');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
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
            <MenuItem value={10}>Username</MenuItem>
            <MenuItem value={20}>Name</MenuItem>
            <MenuItem value={30}>Email</MenuItem>
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'flex-end',
        }}
      >
        <HeaderButton text={'Export'} onClick={onClickPermit} />
        <AddModalButton
          text={'Add Driver'}
          onClick={() => {
            navigate('/addDriver');
          }}
        />
      </Box>
    </Box>
  );
};

export default PageHeader;
