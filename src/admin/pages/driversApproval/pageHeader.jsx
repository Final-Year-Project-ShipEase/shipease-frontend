import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const PageHeader = ({ onSearch }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: isSmallScreen ? '5%' : 0,
      }}
    >
      <TextField
        id="search"
        placeholder="Search Driver"
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          width: 500,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PageHeader;
