import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import image from '../../../icons/image.png';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const DriverDetail = ({ content }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: '100%',
        height: 210,
        borderRadius: 3,
        backgroundColor: theme.palette.primary.backgroundColor,
        marginTop: '5px',
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            marginbottom: '10px',
          }}
        >
          Driver Approval Pending
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '7px',
          }}
        >
          <button
            style={{
              width: '147px',
              height: '36px',
              color: theme.palette.buttons.color,
              backgroundColor: theme.palette.buttons.main,
              borderRadius: '10px',
              fontSize: '14px',
              border: 'none ',
            }}
          >
            {content?.date || '19-nov-2022'}
          </button>
          <button
            style={{
              width: '107px',
              height: '36px',
              color: theme.palette.buttons.color,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: '20px',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
            onClick={() => {
              navigate('/admin/driversapproval');
              //content?.id; // Pass this to modal
            }}
          >
            Report
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            Driver Details
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            Contact Detail
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={image}
              style={{ width: '20px', height: '20px', borderRadius: '200px' }}
              alt="Driver"
            />
            <Typography
              sx={{
                color: theme.palette.buttons.main,
                fontSize: '14px',
                marginLeft: '5px',
              }}
            >
              {content?.name || 'Abdullah Minhas'}
            </Typography>
          </div>
          <Typography
            sx={{ color: theme.palette.buttons.main, fontSize: '14px' }}
          >
            {content?.phoneNo || '0306 7566528'}
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            Vehicle Details
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.buttons.main,
              fontSize: '14px',
            }}
          >
            Registration Number
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <Typography
            sx={{ color: theme.palette.buttons.main, fontSize: '14px' }}
          >
            ThunderBlaze
          </Typography>
          <Typography
            sx={{ color: theme.palette.buttons.main, fontSize: '14px' }}
          >
            ZAB-1234
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetail;
