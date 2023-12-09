import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import image from '../../resources/Background.png';
import arrow from '../../resources/Collapsable50.png';

const CardWithImage = ({ name }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 277,
        height: 264,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1)',
        }}
      />

      <CardContent
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'black', fontWeight: 'bold' }}
          >
            Welcome
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ color: 'black' }}
          >
            Nice to see you, {name}!
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'black', fontWeight: 'bold' }}
          >
            Back!
          </Typography>
        </div>

        <Link
          href="www.google.com"
          sx={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          Turn on your
          <br /> car
          <img
            src={arrow}
            alt="Arrow"
            sx={{ marginLeft: '4px', width: '15px', height: '15px' }}
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardWithImage;
