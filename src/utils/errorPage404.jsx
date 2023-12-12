import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffb000',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ backgroundColor: '#ffb000', position: 'relative' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ zIndex: 1, position: 'relative' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '90px',
                  color: '#150035',
                  marginTop: '100px',
                  fontWeight: 900,
                  whiteSpace: 'pre-line',
                  lineHeight: 1,
                  letterSpacing: '3px',
                  textShadow: '1px 7px 1px #fff',
                }}
              >
                404 ERROR
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: '60px',
                  color: '#150035',
                  marginTop: '25px',
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: '3px',
                  textShadow: '1px 7px 1px #fff',
                }}
              >
                Going Somewhere?
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: '60px',
                  color: '#150035',
                  marginTop: '5px',
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: '3px',
                  textShadow: '1px 7px 1px #fff',
                }}
              >
                Page Not Found
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: '150px',
                  padding: '8px',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginTop: '90px',
                  backgroundColor: '#150035',
                  color: '#ffb000',
                }}
                onClick={handleClick}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ErrorPage;
