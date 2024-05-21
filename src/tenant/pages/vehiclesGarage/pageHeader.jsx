import React from 'react';
import { Box, TextField, InputAdornment, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import AddModalButton from '../../../commons/buttons/addModal';

const PageHeader = ({ onSearch }) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
        <TextField
          id="search"
          placeholder="Search Vehicle"
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
        <AddModalButton
          text={'Add Vehicle'}
          onClick={() => {
            navigate('/addVehicle');
          }}
        />
      </Box>
    </Box>
  );
};

export default PageHeader;
