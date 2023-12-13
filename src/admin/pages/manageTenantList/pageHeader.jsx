import React from 'react';
import {
  Box,
  Grid,
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

const PageHeader = () => {
  const [Driver, setDriver] = React.useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDriver(event.target.value);
  };

  const onClickPermit = () => {
    navigate('/');
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      {/* Grid 1 */}
      <Grid item xs={12} md={2}>
        <FormControl fullWidth>
          <InputLabel id="Driver-select-label">Driver</InputLabel>
          <Select
            id="Driver-select"
            value={Driver}
            label="Driver"
            onChange={handleChange}
            sx={{
              height: 50,
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
      </Grid>

      {/* Grid 2 */}
      <Grid item xs={12} md={4}>
        <TextField
          id="search"
          placeholder="Search Driver"
          variant="standard"
          sx={{
            padding: '10px 18px',
            height: 50,
            width: '100%',
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

      {/* Grid 3 - Empty grid, acting as spacer */}
      <Grid item xs={12} md={2} />

      {/* Grid 4 */}
      <Grid item container xs={12} md={4} justifyContent="flex-end" spacing={2}>
        <Grid item>
          <HeaderButton text={'Export'} onClick={onClickPermit} />
        </Grid>
        <Grid item>
          <HeaderButton text={'Reset'} onClick={onClickPermit} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
